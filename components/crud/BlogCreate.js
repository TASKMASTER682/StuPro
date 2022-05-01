import Link from 'next/link';
import React, { useState, useEffect } from 'react';
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
            subtitle:'',
            language:'',
            title: '',
            forSlug:'',
            desc:'',
            hidePublishButton: false,
        });
    
        const { error, sizeError, success, formData, title,subtitle,language,desc,forSlug, hidePublishButton } = values;
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
                    setValues({ ...values, error: data.error,});
                } else {
                    setValues({ ...values, title: '',desc:'',language:'',forSlug:'', error: '', success: `A new blog titled "${data.title}" is created` });
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


        const handleBody =(e)=> {

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
        <div>
            <select className="w-full p-2 my-2 rounded-md ring-2 ring-teal-500" name="Language" value={language} onChange={handleChange('language')} required>
                <option value="0">Select Language</option>
                <option value="en">en</option>
                <option value="hi">hi</option>
            </select>               
        </div>
                <div >
                    <label className="text-teal-600">Title</label>
                    <br/>
                    <input  className="w-full p-2 my-2 rounded-md ring-2 ring-teal-500" type="text"  value={title} onChange={handleChange('title')} />
                </div>
                <div >
                    <label className="text-teal-600">Sub-Title</label>
                    <br/>
                    <input  className="w-full p-2 my-2 rounded-md ring-2 ring-teal-500" type="text"  value={subtitle} onChange={handleChange('subtitle')} />
                </div>
            <div >
                <label className="text-teal-600">Slug</label>
                <br/>
                <input  className="w-full p-2 my-2 rounded-md ring-2 ring-teal-500" type="text"  value={forSlug} onChange={handleChange('forSlug')} />
            </div>
            <div >
            <label className="text-teal-600">Description</label>
                <br/>
              <textarea className="w-full p-2 my-2 rounded-md ring-2 ring-teal-500" rows='10' placeholder="Blog Description" maxLength='160' value={desc} onChange={handleChange('desc')}></textarea>
              <h2 className="font-bold text-teal-600">{160-desc.length}/160</h2>
            </div>
                
                <ReactQuill
                         modules={QuillModules}
                        formats={QuillFormats}
                        value={body}
                        placeholder="Write something amazing..."
                        theme="snow"
                        onChange={handleBody} />
                 <button type="submit" className="p-2 my-2 font-bold text-white bg-teal-600 bg-teal-700 rounded-md ">Publish</button>
             </form>
        );
    };

return(
    <section className="shadow-md shadow-green-400">
   
    <div className="grid grid-cols-3 gap-3 px-14 lg:pt-24">
    <div className="col-span-2">
       <h1 className="text-4xl font-bold text-teal-500 ">Create Blog</h1>
        <div >
           {createBlogForm()}
    <div className="py-3">
        {showError()}
        {showSuccess()}
    </div>
        </div>
    </div>
    <div>
        <div  className="flex flex-col">
            <h3 className="text-2xl font-bold text-teal-600 ">Featured Image</h3>
             <small className="text-gray-400 ">Max size: 1mb</small>
            <br />
            <label className=" bg-black rounded-md p-2 text-white font-bold w-[50%]">
                Upload Featured Image
                <input type="file" accept="image/*" onChange={handleChange('photo')}  hidden />
            </label>
           
        </div>
     <div className="flex flex-row justify-between ">
       <ul className='w-full max-h-screen overflow-scroll' >
        <h3 className="text-teal-600 ">Tags</h3>
         {showTags()}
         
        </ul>
        <ul  className='w-full max-h-screen overflow-scroll'>
        <h3 className="text-teal-500 ">Categories</h3>
        {showCategories()}
      </ul>
     </div>
    </div>
  </div>
</section>

)
   
}
export default withRouter(CreateBlog);