import React ,{ useState, useEffect } from 'react';
import {  getCookie } from '../../actions/auth';
import { create, getCategories, removeCategory } from '../../actions/category';


const Category=()=>{

    const [values, setValues] = useState({
        name: '',
        error: false,
        success: false,
        categories: [],
        removed: false,
        reload:false
    });

    const { name, error, success, categories, removed,reload } = values;
    const token = getCookie('token');

    useEffect(() => {
        loadCategories();
    }, [reload]);

    const loadCategories = () => {
        getCategories().then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setValues({ ...values, categories: data });
            }
        });
    };

    const showCategories=()=>{
        return categories.map((c,i)=>{
            return(
                <button  onDoubleClick={() => deleteConfirm(c.slug)} title="Double click to delete" key={i} className='px-3 py-1 m-1 text-sm font-bold bg-red-300 rounded-md' ><h4>{c.name}</h4></button>
                )    
            })
    };
    const deleteCategory = slug => {
        // console.log('delete', slug);
        removeCategory(slug, token).then(data => {
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
            deleteCategory(slug);
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

    const newCategoryFom = () => (
       
        <form className="form" onSubmit={clickSubmit}>
            <div className="form-group">
                
                <input type="text" className="p-2 rounded-md ring-2 ring-red-400 w-[70%]" onChange={handleChange} placeholder="Catagory" value={name} required />
            </div>
            <div>
                <button type="submit" className="px-4 py-2 my-2 font-bold text-white bg-teal-400 rounded-md ">
                    Create
                </button>
            </div>
        </form>
        
    );
    const showSuccess = () => {
        if (success) {
            return <div className="p-2 bg-green-300 " style={{ display: success ? '' : 'none' }}>Category is created</div>;
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
 <React.Fragment>

     {showSuccess()}
      {showError()}
      {showRemoved()}
  
    <div onMouseMove={mouseMoveHandler}></div>
    {newCategoryFom()}
    <div  className="catagoriesAndTags">
    {showCategories()}
    </div>
 </React.Fragment>
)
}
export default Category;