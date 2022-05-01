import React, { useState, useEffect } from 'react';
import { getCookie } from '../../actions/auth';
import { create, getJobTags, removeJobTag } from '../../actions/jobTag'


const JobTag=()=>{
    const [values, setValues] = useState({
        name: '',
        error: false,
        success: false,
        jobTags: [],
        removed: false,
        reload: false
    });

    const { name, error, success, jobTags, removed, reload } = values;
    const token = getCookie('token');

    useEffect(() => {
        loadJobTags();
    }, [reload]);

    const loadJobTags = () => {
        getJobTags().then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setValues({ ...values, jobTags: data });
            }
        });
    };
    const showJobTags=()=>{
        return jobTags.map((t,i)=>{
            return(
                <>
               
                  <button onDoubleClick={() => deleteConfirm(t.slug)} title="Double click to delete" key={i} className=" bg-teal-300 p-2  font-bold m-2 rounded-md "><p>{t.name}</p></button>
                </>
            )
        })
    };
    
    const deleteConfirm = slug => {
        let answer = window.confirm('Are you sure you want to delete this tag?');
        if (answer) {
            deleteJobTag(slug);
        }
    };

    const deleteJobTag = slug => {
        // console.log('delete', slug);
        removeJobTag(slug, token).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setValues({ ...values, error: false, success: false, name: '', removed: !removed, reload: !reload });
            }
        });
    };

    const clickSubmit = e => {
        e.preventDefault();
        // console.log('create category', name);
        create({ name }, token).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error, success: false });
            } else {
                setValues({ ...values, error: false, success: false, name: '', removed: !removed, reload: !reload });
            }
        });
    };

    const handleChange = e => {
        setValues({ ...values, name: e.target.value, error: false, success: false, removed: '' });
    };

    const showSuccess = () => {
        if (success) {
            return <div className="badge badge-success p-1 nbtn" style={{ display: success ? '' : 'none' }}>Tag is created</div>;
        }
    };

    const showError = () => {
        if (error) {
            return <div className="badge badge-danger p-1 nbtn" style={{ display: error ? '' : 'none' }}>Tag already exist</div>;
        }
    };

    const showRemoved = () => {
        if (removed) {
            return <div className="badge badge-primary p-1 nbtn" style={{ display: removed ? '' : 'none' }}>Tag is removed</div>;
        }
    };

    const mouseMoveHandler = e => {
        setValues({ ...values, error: false, success: false, removed: '' });
    };

    const newJobTagFom = () => (
       
        <form className="flex justify-between px-10 my-4 " onSubmit={clickSubmit}>
            
                
                <input type="text" className=" w-full mx-4 rounded-md ring-2 ring-teal-500 p-2" onChange={handleChange} placeholder="Tag" value={name} required />
            
            
                <button type="submit" className=" bg-red-400 rounded-md text-white font-bold p-2">
                    Create
                </button>
            
        </form>
        
    );

    return (
        <React.Fragment>
        
          
            {showSuccess()}
            {showError()}
            {showRemoved()} 
           
           
            <div onMouseMove={mouseMoveHandler}>
                {newJobTagFom()}
                <div className=" flex flex-wrap">
                {showJobTags()}
                </div>
            </div>
            
        </React.Fragment>
    );
}
export default JobTag;