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
    
        // const nodal=e ? e:initialValueBasicElements;
        const nodes=[...e];
        const editor=createEditorPlugins();
        const html=serializeHTMLFromNodes(editor,{
            plugins:pluginsBasic,
            nodes
          });
        formData.set('body', html);
        if (typeof window !== 'undefined') {
            localStorage.setItem('material', JSON.stringify(e));
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
        <div className="badge badge-danger p-1" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    );

    const showSuccess = () => (
        <div className="badge badge-success p-1" style={{ display: success ? '' : 'none' }}>
            {success}
        </div>
    );

    const updateForm=()=>{
        return(
            <form className="form" onSubmit={editMat}>
            <div className="form-group">
                <label className="text-primary">Title</label>
                <br/>
                <input className="form-group" type="text"  value={title} onChange={handleChange('title')} />
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
            <SlatePlugins  handleChange={handleBody} />
            <button type="submit" className="btn nbtn btn-dark my-1">Update</button>
       
         </form>
        )
    }

    return(
       
        <section className="blogCreate">
        {showError()}
        {showSuccess()}
        <div className="createMain">
    
        <div className="blogDiv">
        
            <h1 className="large text-primary">Update Job</h1>
            <div className="line"></div>
            <div className="createForm">
               {updateForm()}
  
      
             <div className="line"></div>

             {body && (
                        <img src={`${API}/materials/photo/${router.query.slug}`} alt={title} style={{ width: '100%' }} />
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
            <small className="text-light-gray">Category</small>
             {showMaterialCategories()}
            </ul>
        </div>
        </div>
        </div>
    </section>
    
    )

}
export default withRouter(MaterialUpdate);