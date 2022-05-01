import React, { useState, useEffect } from 'react';
import { getCookie } from '../../actions/auth';
import { create, getMaterialCategories,removeMatCat} from '../../actions/materialCategory';


const MaterialCategory=()=>{

    const [values, setValues] = useState({
        name: '',
        error: false,
        success: false,
        materialCategories: [],
        removed: false,
        reload:false
    });

    const { name, error, success, materialCategories, removed,reload } = values;
    const token = getCookie('token');

    useEffect(() => {
        loadMaterialCategories();
    }, [reload]);

    const loadMaterialCategories = () => {
        getMaterialCategories().then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setValues({ ...values, materialCategories: data });
            }
        });
    };

    const showMaterialCategories=()=>{
        return materialCategories.map((c,i)=>{
            return(
                <button onDoubleClick={() => deleteConfirm(c.slug)} title="Double click to delete" key={i} className="px-3 py-1 m-2 text-sm font-bold rounded-md bg-slate-400"><p>{c.name}</p></button>
                )    
            })
    };

    const deleteMaterialCategory = slug => {
        // console.log('delete', slug);
        removeMatCat(slug, token).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setValues({ ...values, error: false, success: false, name: '', removed: !removed, reload: !reload });
            }
        });
    };

    const deleteConfirm = slug => {
        let answer = window.confirm('Are you sure you want to delete this category?');
        if (answer) {
            deleteMaterialCategory(slug);
        }
    };

   

    const clickSubmit = e => {
        e.preventDefault();
        // console.log('create category', name);
        create({ name }, token).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error, success: false });
            } else {
                setValues({ ...values, error: false, success: false, name: '', removed: !removed, reload: !reload  });
            }
        });
    };

    const handleChange = e => {
        setValues({ ...values, name: e.target.value, error: false, success: false, removed: '' });
    };



    const mouseMoveHandler = e => {
        setValues({ ...values, error: false, success: false, removed: '' });
    };

    const newMaterialCategoryFom = () => (
       
        <form className="form" onSubmit={clickSubmit}>
            <div className="form-group">
                
                <input type="text" className=" p-2 ring-2 ring-teal-400 w-[70%] rounded-md" onChange={handleChange} placeholder="Catagory" value={name} required />
            </div>
            <div>
                <button type="submit" className="px-3 py-2 my-2 font-bold text-white bg-teal-400 rounded-md ">
                    Create
                </button>
            </div>
        </form>
        
    );
    
    const showSuccess = () => {
        if (success) {
            return <div className="p-2 bg-green-200 " style={{ display: success ? '' : 'none' }}>Category is created</div>;
        }
    };

    const showError = () => {
        if (error) {
            return <div className="p-2 bg-red-400 " style={{ display: error ? '' : 'none' }}>Category already exist</div>;
        }
    };

    const showRemoved = () => {
        if (removed) {
            return <div className="p-2 bg-red-400 " style={{ display: removed ? '' : 'none' }}>Category is removed</div>;
        }
    };

return (
 <>
      {showSuccess()}
      {showError()}
      {showRemoved()}
    <div onMouseMove={mouseMoveHandler}></div>
    {newMaterialCategoryFom()}
    <div className="catagoriesAndTags">
    {showMaterialCategories()}
    </div>
   
 </>
)
}
export default MaterialCategory;

