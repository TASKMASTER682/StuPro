import React, { useState, useEffect } from 'react';
import Router from 'next/router';
import dynamic from 'next/dynamic';
import { withRouter } from 'next/router';
import { getCookie, isAuth } from '../../actions/auth';
import { getCategories } from '../../actions/category';
import { getTags } from '../../actions/tag';
import { singleBlog, updateBlog } from '../../actions/blog';
import { API } from '../../config';
import Checkbox from '@material-ui/core/Checkbox';
const SlatePlugins = dynamic(() => import('../slate-plugins/index'), { loading: () => "",ssr: false  })
import {serializeHTMLFromNodes,createEditorPlugins} from '@udecode/slate-plugins';
import {pluginsBasic,initialValueBasicElements} from '../slate-plugins/utils'


const AdminBlogUpdate=({router})=>{
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
        body: '',
        subtitle:'',
        language:'',
        desc:'',
    });

    const { error, success, formData, title,subtitle,desc,language } = values;
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
                    setValues({ ...values,subtitle:data.subtitle || "",desc:data.desc || "",language:data.language, title: data.title });
                    setBody(data.body);
                    setCategoriesArray(data.categories);
                    setTagsArray(data.tags);
                }
            });
        }
    };

    const setCategoriesArray = categories => {
        let ca = [];
        categories.map((c, i) => {
            ca.push(c._id);
        });
        setChecked(ca);
    };

    const setTagsArray = tags => {
        let ta = [];
        tags.map((t, i) => {
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
        // console.log(all);
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
        // console.log(all);
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


    const handleBody =(e)=> {

        setBody(e);
        const nodes=[...e];
        const editor=createEditorPlugins(e);
        const html=serializeHTMLFromNodes(editor,{
            plugins:pluginsBasic,
            nodes
          });
        formData.set('body', html);
        if (typeof window !== 'undefined') {
            localStorage.setItem('blog', JSON.stringify(html));
        }
    };

    const editBlog = (e) => {
        e.preventDefault();
        // let formData = new FormData();
        formData.append("title", values.title);
        formData.append("subtitle", values.subtitle);
        formData.append("desc", values.desc);
        formData.append("language", values.language);
        formData.append("body", body);
       
        updateBlog(formData, token, router.query.slug).then(data => {
            if (data.error) {
                setValues({ ...values, error: "Blog could not be updated" });
            } else {
                setValues({ ...values, title: '',subtitle:'',desc:'',language:'', success: `Blog titled "${data.title}" is successfully updated` });
                if (isAuth() && isAuth().role === 1) {
                   
                    Router.replace(`/admin`);
                } else if (isAuth() && isAuth().role === 0) {
                    
                    Router.replace(`/user`);
                }
            }
        });
    };
    const showError = () => (
       
        <div className="p-2 bg-red-400 " style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    );

    const showSuccess = () => (
        <div className="bg-green-300 " style={{ display: success ? '' : 'none' }}>
            {success}
        </div>
    );


    const updateBlogForm=()=>{
        return(
            <form onSubmit={editBlog}>
            <div >
                <label className="text-teal-400">Title</label>
                <br/>
                <input  type="text" className="w-full p-2 my-2 rounded-md ring-2 ring-teal-500" value={title} onChange={handleChange('title')} />
            </div>
                   
            <select name="Language" className="w-full p-2 my-2 rounded-md ring-2 ring-teal-500" value={language} onChange={handleChange('language')} required>
                <option value="0">Select Language</option>
                <option value="en">en</option>
                <option value="hi">hi</option>
            </select>               
       
            <div>
                    <label className="text-teal-400">Sub-Title</label>
                    <br/>
                    <input className="w-full p-2 my-2 rounded-md ring-2 ring-teal-500" type="text"  value={subtitle} onChange={handleChange('subtitle')} />
                </div>
            <div >
            <label className="text-teal-400 ">Description</label>
                <br/>
              <textarea className="w-full p-2 my-2 rounded-md ring-2 ring-teal-500" rows='10' placeholder="Blog Description" maxLength='160' value={desc} onChange={handleChange('desc')}></textarea>
              <h2 className="font-bold text-teal-400 ">{160-desc.length}/160</h2>
            </div>
            
 
                <SlatePlugins handleChange={handleBody} />
           

            <div>
                <button type="submit" className="p-2 font-bold text-white bg-teal-600 rounded-md">
                    Update
                </button>
            </div>
        </form>
        )
    }

    return(
        <section className="shadow-md shadow-green-400">
        
       
        <div className="grid grid-cols-3 gap-3 px-14 lg:pt-24">
    
        <div className="col-span-2">
        
            <h1 className="text-4xl font-bold text-teal-500 ">Update Blog</h1>
           {showError()}
            {showSuccess()}
            
               {updateBlogForm()}
             {body && (
                        <img src={`${API}/blogs/photo/${router.query.slug}`} alt={title}  />
                    )}
            
          
        
        </div>
        <div >
            
            <div className='flex flex-col'>
                <h3 className="text-teal-500">Featured Image</h3>
                
                <p className="text-sm text-gray-400">Max size: 1mb</p>
                <br />
                <label className="bg-black rounded-md p-2 text-white font-bold w-[50%]">
                    Upload Featured Image
                    <input onChange={handleChange('photo')} type="file" accept="image/*" hidden />
                </label>
            </div>
         <div className="flex flex-row justify-between">
           
            <ul  className='w-full max-h-screen overflow-scroll'  >
            <h3 className="text-teal-500">Categories</h3>
             {showCategories()}
            </ul>
            <ul  className='w-full max-h-screen overflow-scroll' >
            <h3 className="text-teal-500">Tags</h3>
            {showTags()}
          </ul>
        </div>
        </div>
        </div>
    </section>
    
    )

}
export default withRouter(AdminBlogUpdate);