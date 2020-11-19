import Link from 'next/link';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { withRouter } from 'next/router';
import { getCookie, isAuth } from '../../actions/auth';
import { getCategories } from '../../actions/category';
import { getTags } from '../../actions/tag';
import { createBlog } from '../../actions/blog';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import { QuillModules, QuillFormats } from '../../helpers/quill';
import Checkbox from '@material-ui/core/Checkbox';



const CreateBlog=({router})=>{
        const blogFromLS = () => {
            if (typeof window === 'undefined') {
                return false;
            }
    
            if (localStorage.getItem('blog')) {
                return JSON.parse(localStorage.getItem('blog'));
            } else {
                return false;
            }
        };
    
        const [categories, setCategories] = useState([]);
        const [tags, setTags] = useState([]);
    
        const [checked, setChecked] = useState([]); // categories
        const [checkedTag, setCheckedTag] = useState([]); // tags
    
        const [body, setBody] = useState(blogFromLS());
        const [values, setValues] = useState({
            error: '',
            sizeError: '',
            success: '',
            formData: '',
            title: '',
            hidePublishButton: false
        });
    
        const { error, sizeError, success, formData, title, hidePublishButton,loading } = values;
        const token = getCookie('token');
    
        useEffect(() => {
            setValues({ ...values, formData: new FormData() });
            initCategories();
            initTags();
        }, [router]);
    
        const initCategories = () => {
            getCategories().then(data => {
                if (data.error) {
                    setValues({ ...values, error: data.error });
                } else {
                    setCategories(data);
                }
            });
        };
    
        const initTags = () => {
            getTags().then(data => {
                if (data.error) {
                    setValues({ ...values, error: data.error });
                } else {
                    setTags(data);
                }
            });
        };
    
        const publishBlog = e => {
            e.preventDefault();
           
            createBlog(formData, token).then(data => {
                if (data.error) {
                    setValues({ ...values, error: data.error });
                } else {
                    setValues({ ...values, title: '', error: '', success: `A new blog titled "${data.title}" is created` });
                    setBody('');
                    setCategories([]);
                    setTags([]);
                }
            });
        };
    
        const handleChange = name => e => {
            
            const value = name === 'photo' ? e.target.files[0] : e.target.value;
            formData.set(name, value);
            setValues({ ...values, [name]: value, formData, error: '' });
        };
    
        const handleBody = e => {
            
            setBody(e);
            formData.set('body', e);
            if (typeof window !== 'undefined') {
                localStorage.setItem('blog', JSON.stringify(e));
            }
        };
    
        const handleToggle = c => () => {
            setValues({ ...values, error: '' });
           
            const clickedCategory = checked.indexOf(c);
            const all = [...checked];
    
            if (clickedCategory === -1) {
                all.push(c);
            } else {
                all.splice(clickedCategory, 1);
            }
            console.log(all);
            setChecked(all);
            formData.set('categories', all);
        };
    
        const handleTagsToggle = t => () => {
            setValues({ ...values, error: '' });
           
            const clickedTag = checked.indexOf(t);
            const all = [...checkedTag];
    
            if (clickedTag === -1) {
                all.push(t);
            } else {
                all.splice(clickedTag, 1);
            }
            console.log(all);
            setCheckedTag(all);
            formData.set('tags', all);
        };
    
        const showCategories = () => {
            return (
                categories &&
                categories.map((c, i) => (
                    <li key={i} >
                        <Checkbox onChange={handleToggle(c._id)} />
                        <label>{c.name}</label>
                    </li>
                ))
            );
        };
    
        const showTags = () => {
            return (
                tags &&
                tags.map((t, i) => (
                    <li key={i} >
                        <Checkbox onChange={handleTagsToggle(t._id)}   />
                        <label >{t.name}</label>
                    </li>
                ))
            );
        };
    
     const showLoading=()=>(
         <div className=" badge badge-primary" style={{display:loading ?'':'none'}}>
             Loading...
         </div>
     )
    
     const showError = () => (
        <div className="badge badge-danger" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    );

    const showSuccess = () => (
        <div className="badge badge-success" style={{ display: success ? '' : 'none' }}>
            {success}
        </div>
    );


    const createBlogForm = () => {
        return (
            <form className="form" onSubmit={publishBlog}>
                <div className="form-group">
                    <label className="text-primary">Title</label>
                    <br/>
                    <input className="form-group" type="text"  value={title} onChange={handleChange('title')} />
                </div>

                
                <ReactQuill
                         modules={QuillModules}
                        formats={QuillFormats}
                        value={body}
                        placeholder="Write something amazing..."
                        onChange={handleBody} />
                
                 <button type="submit" className="btn nbtn btn-dark my-1">Publish</button>
             </form>
        );
    };

return(
    <section className="blogCreate">
   
    <div className="createMain">
    <div className="blogDiv">
       <h1 className="large text-primary">Create Blog</h1>
        <div className="line"></div>
        <div className="createForm">
           {createBlogForm()}
        <div className="line"></div>
        {showLoading()}
    <div className="py-3">
        {showError()}
        {showSuccess()}
    </div>
        </div>
    </div>
    <div className="catagoriesTags">
        <div>
            <h3 className="text-primary">Featured Image</h3>
             <small className="text-light-gray">Max size: 1mb</small>
            <br />
            <label className=" btn btn-dark nbtn">
                Upload Featured Image
                <input type="file" accept="image/*" onChange={handleChange('photo')}  hidden />
            </label>
           
            <div className="line"></div>
        </div>
     <div className="checkList">
       <ul >
        <h3 className="text-primary">Tags</h3>
        <small className="text-light-gray">Select the tags related to your blog</small>
         {showTags()}
         
        </ul>
        <ul >
        <h3 className="text-primary">Categories</h3>
        <small className="text-light-gray">Select the category of your blog</small>
        {showCategories()}
      </ul>
     </div>
    </div>
  </div>
</section>

)
   
}
export default withRouter(CreateBlog);