import { useState, useEffect } from 'react';
import Router from 'next/router';
import dynamic from 'next/dynamic';
import { withRouter } from 'next/router';
import { getCookie, isAuth } from '../../actions/auth';
import { getCategories } from '../../actions/category';
import { getTags } from '../../actions/tag';
import { singleBlog, updateBlog } from '../../actions/blog';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import { QuillModules, QuillFormats } from '../../helpers/quill';
import { API } from '../../config';
import Checkbox from '@material-ui/core/Checkbox';


const BlogUpdate=({router})=>{
    const [body, setBody] = useState('');

    
    const [categories, setCategories] = useState([]);
    const [tags, setTags] = useState([]);

    const [checked, setChecked] = useState([]); 
    const [checkedTag, setCheckedTag] = useState([]); 


    const [values, setValues] = useState({
        title: '',
        error: '',
        success: '',
        formData:'',
        title: '',
        body: ''
    });

    const { error, success, formData, title } = values;
    const token = getCookie('token');

    useEffect(() => {
        setValues({ ...values, formData: new FormData() });
        initBlog();
        initCategories();
        initTags();
    }, [router]);

  
    const initBlog = () => {
        if (router.query.slug) {
            singleBlog(router.query.slug).then(data => {
                if (data.error) {
                    console.log(data.error);
                } else {
                    setValues({ ...values, title: data.title });
                    setBody(data.body);
                    setCategoriesArray(data.categories);
                    setTagsArray(data.tags);
                }
            });
        }
    };

    const setCategoriesArray = blogCategories => {
        let ca = [];
        blogCategories.map((c, i) => {
            ca.push(c._id);
        });
        setChecked(ca);
    };

    const setTagsArray = blogTags => {
        let ta = [];
        blogTags.map((t, i) => {
            ta.push(t._id);
        });
        setCheckedTag(ta);
    };

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
        const clickedTag = checkedTag.indexOf(t);
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

    const findOutCategory = c => {
        const result = checked.indexOf(c);
        if (result !== -1) {
            return true;
        } else {
            return false;
        }
    };

    const findOutTag = t => {
        const result = checkedTag.indexOf(t);
        if (result !== -1) {
            return true;
        } else {
            return false;
        }
    };

    const showCategories = () => {
        return (
            categories &&
            categories.map((c, i) => (
                <li key={i}>
                    <Checkbox
                        onChange={handleToggle(c._id)}
                        checked={findOutCategory(c._id)}
                        
                    />
                    <label >{c.name}</label>
                </li>
            ))
        );
    };

    const showTags = () => {
        return (
            tags &&
            tags.map((t, i) => (
                <li key={i}>
                    <Checkbox
                        onChange={handleTagsToggle(t._id)}
                        checked={findOutTag(t._id)}
                        
                    />
                    <label>{t.name}</label>
                </li>
            ))
        );
    };

 

    const handleChange = name => e => {
        const value = name === 'photo' ? e.target.files[0] : e.target.value;
        formData.set(name, value);
        setValues({ ...values, [name]: value, formData, error: '' });
    };

    const handleBody = e => {
        setBody(e);
        formData.set('body', e);
    };

    const editBlog = (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append("title", values.title);
        formData.append("body", body);
       
        updateBlog(formData, token, router.query.slug).then(data => {
            if (data.error) {
                setValues({ ...values, error: "Blog could not be updated" });
            } else {
                setValues({ ...values, title: '', success: `Blog titled "${data.title}" is successfully updated` });
                if (isAuth() && isAuth().role === 1) {
                   
                    Router.replace(`/admin`);
                } else if (isAuth() && isAuth().role === 0) {
                    
                    Router.replace(`/user`);
                }
            }
        });
    };
    const showError = () => (
       
        <div className="badge badge-danger p-1" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    );

    const showSuccess = () => (
        <div className="badge badge-success p-1" style={{ display: success ? '' : 'none' }}>
            {success}
        </div>
    );


    const updateBlogForm=()=>{
        return(
            <form className="form" onSubmit={editBlog}>
            <div className="form-group">
                <label className="text-primary">Title</label>
                <br/>
                <input className="form-group" type="text"  value={title} onChange={handleChange('title')} />
            </div>

            <div className="form-group textinput">
            <ReactQuill
                     modules={QuillModules}
                    formats={QuillFormats}
                    value={body}
                    placeholder="Write something amazing..."
                    onChange={handleBody}
                />
            </div>

            <div>
                <button type="submit" className="btn nbtn btn-dark">
                    Update
                </button>
            </div>
        </form>
        )
    }

    return(
        <section className="blogCreate">
        
       
        <div className="createMain">
    
        <div className="blogDiv">
        
            <h1 className="large text-primary">Update Blog</h1>
           {showError()}
            {showSuccess()}
            <div className="line"></div>
            <div className="createForm">
               {updateBlogForm()}
             <div className="line"></div>
             {body && (
                        <img src={`${API}/blog/photo/${router.query.slug}`} alt={title} style={{ width: '100%' }} />
                    )}
            
            </div>
        
        </div>
        <div className="catagoriesTags">
            
            <div>
                <h3 className="text-primary">Featured Image</h3>
                
                <small className="text-light-gray">Max size: 1mb</small>
                <br />
                <label className=" btn btn-dark nbtn">
                    Upload Featured Image
                    <input onChange={handleChange('photo')} type="file" accept="image/*" hidden />
                </label>
                <div className="line"></div>
            </div>
         <div className="checkList">
           
            <ul style={{ maxHeight: '200px' }}>
            <h3 className="text-primary">Tags</h3>
            <small className="text-light-gray">Select the tags related to your blog</small>
             {showCategories()}
            </ul>
            <ul style={{ maxHeight: '200px'}}>
            <h3 className="text-primary">Categories</h3>
            <small className="text-light-gray">Select the category of your blog</small>
            {showTags()}
          </ul>
        </div>
        </div>
        </div>
    </section>
    
    )

}
export default withRouter(BlogUpdate);