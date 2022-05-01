import React, { useState, useEffect } from 'react';
import { getCookie } from '../../actions/auth';
import { create, getJobCategories,removeJobCategory } from '../../actions/jobCategory';


const JobCategory=()=>{

    const [values, setValues] = useState({
        name: '',
        error: false,
        success: false,
        jobCategories: [],
        removed: false,
        reload:false
    });

    const { name, error, success, jobCategories, removed,reload } = values;
    const token = getCookie('token');

    useEffect(() => {
        loadJobCategories();
    }, [reload]);

    const loadJobCategories = () => {
        getJobCategories().then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setValues({ ...values, jobCategories: data });
            }
        });
    };

    const showJobCategories=()=>{
        return jobCategories.map((c,i)=>{
            return(
                <button  onDoubleClick={() => deleteConfirm(c.slug)} title="Double click to delete" key={i} className="p-2 m-2 font-bold bg-green-400 rounded-md "><p>{c.name}</p></button>
                )    
            })
    };
    const deleteJobCategory = slug => {
        // console.log('delete', slug);
        removeJobCategory(slug, token).then(data => {
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
            deleteJobCategory(slug);
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

    const newJobCategoryFom = () => (
       
        <form className="flex justify-between px-10 my-4 " onSubmit={clickSubmit}>
         <input type="text" className='w-full p-2 mx-4 rounded-md ring-2 ring-teal-600' onChange={handleChange} placeholder="Catagory" value={name} required />
            <button type="submit" className='p-2 font-bold text-white bg-teal-400 rounded-md'>
                    Create
                </button>
           
        </form>
        
    );
    
    const showSuccess = () => {
        if (success) {
            return <div className="p-2 bg-green-400 " style={{ display: success ? '' : 'none' }}>Category is created</div>;
        }
    };

    const showError = () => {
        if (error) {
            return <div className="p-2 bg-red-400 " style={{ display: error ? '' : 'none' }}>Category already exist</div>;
        }
    };

    const showRemoved = () => {
        if (removed) {
            return <div className="p-2 bg-red-400" style={{ display: removed ? '' : 'none' }}>Category is removed</div>;
        }
    };

return (
 <>
      {showSuccess()}
      {showError()}
      {showRemoved()}
    <div onMouseMove={mouseMoveHandler}></div>
    {newJobCategoryFom()}
    <div className='flex flex-wrap'>
    {showJobCategories()}
    </div>
   
 </>
)
}
export default JobCategory;