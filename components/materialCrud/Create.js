import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { withRouter } from 'next/router';
import { getCookie} from '../../actions/auth';
import { getMaterialCategories } from '../../actions/materialCategory';
import { createMaterial } from '../../actions/material';
import Checkbox from '@material-ui/core/Checkbox';
const SlatePlugins = dynamic(() => import('../slate-plugins/index'), { loading: () => "",ssr: false  })
import {  createEditorPlugins,serializeHTMLFromNodes} from '@udecode/slate-plugins';
import { pluginsBasic,initialValueBasicElements } from '../slate-plugins/utils';





const CreateMaterial=({router})=>{
    const materialFromLS = () => {
        if (typeof window === 'undefined') {
            return false;
        }

        if (localStorage.getItem('material')) {
            return JSON.parse(localStorage.getItem('material'));
        } else {
            return false;
        }
    };


    const [materialCategories, setMaterialCategories] = useState([]);



    const [checked, setChecked] = useState([]); // categories

    const [body, setBody] = useState(materialFromLS());
    const [values, setValues] = useState({
        error: '',
        sizeError: '',
        success: '',
        formData: '',
        title: '',
        subtitle:'',
        forSlug:'',
        desc:'',
        forSlug:'',
        subCat:'',
        mainCat:'',
        standard:'',
        materialType:'',
        hidePublishButton: false
    });

    const { error, sizeError, success, formData,title,desc,subtitle,forSlug,mainCat,language,subCat,standard,materialType, hidePublishButton } = values;
    const token = getCookie('token');

    useEffect(() => {
        setValues({ ...values, formData: new FormData() });
        initMaterialCategories();
    }, [router]);

    const initMaterialCategories = () => {
        getMaterialCategories().then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                setMaterialCategories(data);
            }
        });
    };


    const publish = e => {
        e.preventDefault();
        // console.log('ready to publishBlog');
        createMaterial(formData, token).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                setValues({ ...values, title: '',subtitle:'',desc:'',forSlug:'',mainCat:'',subCat:'',standard:'',language:'',materialType:'',downloadLink:'', error: '', success: `Fresh Study Material titled "${data.title}" is created` });
                setBody('');
                setMaterialCategories([]);
            }
        });
    };

    const handleChange = name => e => {
        // console.log(e.target.value);
        const value = name === 'photo' ? e.target.files[0] : e.target.value;
        formData.set(name, value);
        setValues({ ...values, [name]: value, formData, error: '' });
    };





    const handleBody = (e) => {
            setBody(e)

      const nodes=[...e];
      const editor=createEditorPlugins(e);
      const html=serializeHTMLFromNodes(editor,{
          plugins:pluginsBasic,
          nodes
        });

    formData.set('body', html);
    if (typeof window !== 'undefined') {
        localStorage.setItem('material', JSON.stringify(html));
    };
}

    const handleToggle = c => () => {
        setValues({ ...values, error: '' });
        // return the first index or -1
        const clickedCategory = checked.indexOf(c);
        const all = [...checked];

        if (clickedCategory === -1) {
            all.push(c);
        } else {
            all.splice(clickedCategory, 1);
        }
        console.log(all);
        setChecked(all);
        formData.set('materialCategories', all);
    };


    const showMaterialCategories = () => {
        return (
            materialCategories &&
            materialCategories.map((c, i) => (
                <li key={i} >
                    <Checkbox onChange={handleToggle(c._id)} />
                    <label>{c.name}</label>
                </li>
            ))
        );
    };
 

    const showError = () => (
        <div className="badge badge-danger p-1" style={{ display: error ? '' : 'none' }}>{error}</div>
    );

    const showSuccess = () => (
        <div className="badge badge-success p-1" style={{ display: success ? '' : 'none' }}>{success}</div>
    );

//   const addLink=()=>{
//       setDownloadLinks([...downloadLinks,linksTemplate])
//   }
//   const changeHandler=(e,index)=>{
//       const updatedLink=downloadLinks.map((newLink,i)=>index===i ? Object.assign(newLink,{[e.target.name]:e.target.value}):newLink)
//   setDownloadLinks(updatedLink);

//   formData.set('downloadLinks', updatedLink);
//   if (typeof window !== 'undefined') {
//       localStorage.setItem('material', JSON.stringify(updatedLink));
//   };
//   }

//   const removeLink=(i)=>{
//       const filteredLinks=[...downloadLinks]
//       filteredLinks.splice(i,1);
//       setDownloadLinks(filteredLinks)

//   }

const createMaterialForm = () => {
    return (
        <form className="form" onSubmit={publish}>
            <div className="form-group">
                <label className="text-primary">Title</label>
                <br/>
                <input className="form-group" type="text"  value={title} onChange={handleChange('title')} />
            </div>
            <div className="form-group">
                <label className="text-primary">For Slug</label>
                <br/>
                <input className="form-group" type="text"  value={forSlug} onChange={handleChange('forSlug')} />
            </div>

        <div className="form-group">
            <select name="Language" value={language} onChange={handleChange('language')} required>
                <option value="0">Select Language</option>
                <option value="en">en</option>
                <option value="hi">hi</option>
            </select>               
        </div>
            <div className="form-group">
            <input type="text" placeholder="Sub-Title"  value={subtitle} onChange={handleChange('subtitle')} required />
            </div>
            <div className="form-group">
            <input type="text" placeholder='Description' value={desc} onChange={handleChange('desc')}/>
            </div> 
            <div className="form-group">
            <select name="Language" value={mainCat} onChange={handleChange('mainCat')}>
                <option value="0">Select Main Category</option>
                <option value="schooling">Schooling</option>
                <option value="underGraduate">Under Graduate</option>
                <option value="jobSeekers">JobSeeker</option>
            </select> 
            </div>          
            <div className="form-group">
            <select name="subCat" value={subCat} onChange={handleChange('subCat')}>
                <option value="0">Select Sub-Category</option>
                <option value="cbse">CBSE</option>
                <option value="underGraduate">State Boards</option>
                <option value="jobSeekers">JobSeekers</option>
            </select> 
            </div>
            <div className="form-group">
            <select name="standard" value={standard} onChange={handleChange('standard')}>
                <option value="0">Select the Standard</option>
                <option value="5th">5th</option>
                <option value="6th">6th</option>
                <option value="7th">7th</option>
                <option value="8th">8th</option>
                <option value="9th">9th</option>
                <option value="10th">10th</option>
                <option value="11th">11th</option>
                <option value="12th">12th</option>
            </select>
            </div>
            <div className="form-group">
            <select name="materialType" value={materialType} onChange={handleChange('materialType')} >
                <option value="0">Select the type of material you want</option>
                <option value="Syllabus">Syllabus</option>
                <option value="Previous Years">Previous Years</option>
                <option value="Books pdf">Books pdf</option>
                <option value="Tips and Tricks">Tips and Tricks</option>
                <option value="Solutions">Solutions</option>
                <option value="Solutions">Handwritten Notes Pdf</option>

            </select>
            </div>       
            <div suppressContentEditableWarning>
            <SlatePlugins  handleChange={handleBody}  />
            </div>    
            <button type="submit" className="btn nbtn btn-dark my-1">Publish</button>
         </form>
    );
};
return (
    <section className="blogCreate">
  
    <div className="createMain">
    <div className="blogDiv">
       <h1 className="large text-primary">Create Material</h1>
        <div className="line"></div>
        <div className="createForm">
         {createMaterialForm()}
         {showError()}
         {showSuccess()}
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
     <div className='p-1'>
       <ul >
        <h3 className="text-primary">Categories</h3>
        <small className="text-light-gray">Select the Categories</small>
         {showMaterialCategories()}
         
        </ul>
     </div>
    </div>
  </div>
</section>
)
}
export default withRouter(CreateMaterial);

// className="checkList"