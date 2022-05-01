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
        <div className="p-1 badge badge-danger" style={{ display: error ? '' : 'none' }}>{error}</div>
    );

    const showSuccess = () => (
        <div className="p-1 badge badge-success" style={{ display: success ? '' : 'none' }}>{success}</div>
    );



const createMaterialForm = () => {
    return (
        <form className="form" onSubmit={publish}>
            <div>
                <label className="text-teal-600 ">Title</label>
                <br/>
                <input className="w-full p-2 my-2 rounded-md ring-2 ring-teal-500" type="text"  value={title} onChange={handleChange('title')} />
            </div>
            <div >
                <label className="text-teal-600 ">For Slug</label>
                <br/>
                <input className="w-full p-2 my-2 rounded-md ring-2 ring-teal-500" type="text"  value={forSlug} onChange={handleChange('forSlug')} />
            </div>

            <select className="w-full p-2 my-2 rounded-md ring-2 ring-teal-500" name="Language" value={language} onChange={handleChange('language')} required>
                <option value="0">Select Language</option>
                <option value="en">en</option>
                <option value="hi">hi</option>
            </select>               
            
            <input type="text" className="w-full p-2 my-2 rounded-md ring-2 ring-teal-500" placeholder="Sub-Title"  value={subtitle} onChange={handleChange('subtitle')} required />
            
          
            <input type="text" className="w-full p-2 my-2 rounded-md ring-2 ring-teal-500" placeholder='Description' value={desc} onChange={handleChange('desc')}/>
        
            
            <select name="Language" className="w-full p-2 my-2 rounded-md ring-2 ring-teal-500" value={mainCat} onChange={handleChange('mainCat')}>
                <option value="0">Select Main Category</option>
                <option value="schooling">Schooling</option>
                <option value="underGraduate">Under Graduate</option>
                <option value="jobSeekers">JobSeeker</option>
            </select> 
                     
           
            <select name="subCat" className="w-full p-2 my-2 rounded-md ring-2 ring-teal-500" value={subCat} onChange={handleChange('subCat')}>
                <option value="0">Select Sub-Category</option>
                <option value="cbse">CBSE</option>
                <option value="underGraduate">State Boards</option>
                <option value="jobSeekers">JobSeekers</option>
            </select> 
           
           
            <select name="standard" className="w-full p-2 my-2 rounded-md ring-2 ring-teal-500" value={standard} onChange={handleChange('standard')}>
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
            <select name="materialType" className="w-full p-2 my-2 rounded-md ring-2 ring-teal-500" value={materialType} onChange={handleChange('materialType')} >
                <option value="0">Select the type of material you want</option>
                <option value="Syllabus">Syllabus</option>
                <option value="Previous Years">Previous Years</option>
                <option value="Books pdf">Books pdf</option>
                <option value="Tips and Tricks">Tips and Tricks</option>
                <option value="Solutions">Solutions</option>
                <option value="Solutions">Handwritten Notes Pdf</option>

            </select>
            <SlatePlugins  handleChange={handleBody} newValue={body} />
            <button type="submit" className="p-2 px-3 my-1 font-bold text-white bg-teal-600 rounded-md ">Publish</button>
         </form>
    );
};
return (
    <section className="shadow-md shadow-green-400">
  
    <div className="grid grid-cols-3 gap-3 px-14 lg:pt-24">
    <div className="col-span-2">
       <h1 className="text-4xl font-bold text-teal-500">Create Material</h1>
       {createMaterialForm()}
         {showError()}
         {showSuccess()}
        
    </div>
    <div >
        <div className='flex flex-col'>
            <h3 className="text-teal-500">Featured Image</h3>
             <p className="text-sm text-gray-400 ">Max size: 1mb</p>
            <br />
            <label className="bg-black p-2 rounded-md text-white w-[40%]">
                Upload Featured Image
                <input type="file" accept="image/*" onChange={handleChange('photo')}  hidden />
            </label>
           
        </div>
     <div className='flex flex-row justify-between'>
       <ul className='w-full max-h-screen overflow-scroll'>
        <h3 className="text-teal-500">Categories</h3>
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