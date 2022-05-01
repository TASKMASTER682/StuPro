import React,{ useState, useEffect ,useMemo} from 'react';
import Router from 'next/router';
import dynamic from 'next/dynamic';
import { withRouter } from 'next/router';
import renderHTML from 'react-render-html';
import { getCookie, isAuth } from '../../actions/auth';
import { getMaterialCategories } from '../../actions/materialCategory';
import { singleMaterial, updateMaterial } from '../../actions/material';
// const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
// import { QuillModules, QuillFormats } from '../../helpers/quill';
import Checkbox from '@material-ui/core/Checkbox';
const SlatePlugins = dynamic(() => import('../slate-plugins/index'), { loading: () => "",ssr: false  })
import {serializeHTMLFromNodes,createEditorPlugins} from '@udecode/slate-plugins';
import {pluginsBasic,initialValueBasicElements} from '../slate-plugins/utils'
import {API} from '../../config'


const MaterialUpdate=({router})=>{
    const [body, setBody] = useState('');
   
    const [jobCategories, setJobCategories] = useState([]);
    const [checked, setChecked] = useState([]); // categories

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
    });

    const {  error, sizeError, success, formData,title,desc,subtitle,forSlug,mainCat,language,subCat,standard,materialType } = values;
    const token = getCookie('token');

    useEffect(() => {
        setValues({ ...values, formData: new FormData() });
        initMaterial();
        initMaterialCategories();
    }, [router]);

  
    const initMaterial = () => {
        if (router.query.slug) {
            singleMaterial(router.query.slug).then(data => {
                if (data.error) {
                    console.log(data.error);
                } else {
                    setValues({ ...values, title: data.title,subtitle:data.subtitle,desc:data.desc,mainCat:data.mainCat,subCat:data.subCat,standard:data.standard,language:data.language,materialType:data.materialType, error: '' });
                    setCategoriesArray(data.materialCategories);
                    setBody(data.body)
                }
            });
        }
    };



    const setCategoriesArray = materialCategories => {
        let ca = [];
        materialCategories.map((c, i) => {
            ca.push(c._id);
        });
        setChecked(ca);
    };



    const initMaterialCategories = () => {
        getMaterialCategories().then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                setJobCategories(data);
            }
        });
    };


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



    const findOutCategory = c => {
        const result = checked.indexOf(c);
        if (result !== -1) {
            return true;
        } else {
            return false;
        }
    };



    const showMaterialCategories = () => {
        return (
            jobCategories &&
            jobCategories.map((c, i) => (
                <li key={i} className="list-unstyled">
                    <Checkbox
                        onChange={handleToggle(c._id)}
                        checked={findOutCategory(c._id)}
                        
                    />
                    <label className="form-check-label">{c.name}</label>
                </li>
            ))
        );
    };


 

    const handleChange = name => e => {
        // console.log(e.target.value);
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

    const editMat = (e) => {
        e.preventDefault();
        updateMaterial(formData, token, router.query.slug).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                setValues({ ...values, title: '', success: `Job titled "${data.title}" is successfully updated` });
                if (isAuth() && isAuth().role === 1) {
                    // Router.replace(`/admin/crud/${router.query.slug}`);
                    Router.replace(`/admin`);
                } else if (isAuth() && isAuth().role === 0) {
                    // Router.replace(`/user/crud/${router.query.slug}`);
                    Router.replace(`/user`);
                }
            }
        });
    };

    const showError = () => (
        <div className="p-1 badge badge-danger" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    );

    const showSuccess = () => (
        <div className="p-1 badge badge-success" style={{ display: success ? '' : 'none' }}>
            {success}
        </div>
    );

    const updateForm=()=>{
        return(
            <form  onSubmit={editMat}>
            <div >
                <label className="text-teal-400">Title</label>
                <br/>
                <input className='w-full p-2 my-2 rounded-sm ring-2 ring-teal-500' type="text"  value={title} onChange={handleChange('title')} />
            </div>
  
        
            <select name="Language" className='w-full p-2 my-2 rounded-sm ring-2 ring-teal-500' value={language} onChange={handleChange('language')} required>
                <option value="0">Select Language</option>
                <option value="en">en</option>
                <option value="hi">hi</option>
            </select>               
      
            
            <input type="text"  className='w-full p-2 my-2 rounded-sm ring-2 ring-teal-500' placeholder="Sub-Title"  value={subtitle} onChange={handleChange('subtitle')} required />
          
            
            <input type="text"  className='w-full p-2 my-2 rounded-sm ring-2 ring-teal-500' placeholder='Description' value={desc} onChange={handleChange('desc')}/>
           
            
            <select name="Language" value={mainCat}  className='w-full p-2 my-2 rounded-sm ring-2 ring-teal-500' onChange={handleChange('mainCat')}>
                <option value="0">Select Main Category</option>
                <option value="schooling">Schooling</option>
                <option value="underGraduate">Under Graduate</option>
                <option value="jobSeekers">JobSeeker</option>
            </select> 
                  
            
            <select name="subCat" value={subCat}  className='w-full p-2 my-2 rounded-sm ring-2 ring-teal-500' onChange={handleChange('subCat')}>
                <option value="0">Select Sub-Category</option>
                <option value="cbse">CBSE</option>
                <option value="underGraduate">State Boards</option>
                <option value="jobSeekers">JobSeekers</option>
            </select> 
           
           
            <select name="standard" value={standard}  className='w-full p-2 my-2 rounded-sm ring-2 ring-teal-500' onChange={handleChange('standard')}>
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
            
           
            <select name="materialType"  className='w-full p-2 my-2 rounded-sm ring-2 ring-teal-500' value={materialType} onChange={handleChange('materialType')} >
                <option value="0">Select the type of material you want</option>
                <option value="Syllabus">Syllabus</option>
                <option value="Previous Years">Previous Years</option>
                <option value="Books pdf">Books pdf</option>
                <option value="Tips and Tricks">Tips and Tricks</option>
                <option value="Solutions">Solutions</option>
                <option value="Solutions">Handwritten Notes Pdf</option>

            </select>
                     
            <SlatePlugins  handleChange={handleBody} />
            <button type="submit" className="p-2 my-1 font-bold text-white bg-teal-600 rounded-md ">Update</button>
       
         </form>
        )
    }

    return(
       
        <section className="shadow-md shadow-green-400">
        {showError()}
        {showSuccess()}
        <div className="grid grid-cols-3 gap-3 px-14 lg:pt-24">
    
        <div className="col-span-2">
        
            <h1 className="text-4xl font-bold text-teal-500">Update Job</h1>
            
               {updateForm()}
             {body && (
                        <img src={`${API}/materials/photo/${router.query.slug}`} alt={title}  />
                    )}
 
            
        
        </div>
        <div >
            
            <div className="flex flex-col">
                <h3 className="text-teal-500">Featured Image</h3>
                
                <small className="text-sm text-gray-400 ">Max size: 1mb</small>
                <br />
                <label className="bg-black p-2 rounded-md text-white w-[40%]">
                    Upload Featured Image
                    <input onChange={handleChange('photo')} type="file" accept="image/*" hidden />
                </label>
            </div>
         <div className="flex flex-row justify-between">
           
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
export default withRouter(MaterialUpdate);