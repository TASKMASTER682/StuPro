import React ,{ useState, useEffect } from 'react';
import { getCookie } from '../../actions/auth';
import { create, getTags, removeTag } from '../../actions/tag'


const Tag=()=>{
    const [values, setValues] = useState({
        name: '',
        error: false,
        success: false,
        tags: [],
        removed: false,
        reload: false
    });

    const { name, error, success, tags, removed, reload } = values;
    const token = getCookie('token');

    useEffect(() => {
        loadTags();
    }, [reload]);

    const loadTags = () => {
        getTags().then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setValues({ ...values, tags: data });
            }
        });
    };
    const showTags=()=>{
        return tags.map((t,i)=>{
            return(
                <>
                  <button  style={{ padding:'0rem 0.8rem'}} onDoubleClick={() => deleteConfirm(t.slug)} title="Double click to delete" key={i} className="btn btn-dark nbtn my-1 "><h4>{t.name}</h4></button>
                </>
            )
        })
    };
    
    const deleteConfirm = slug => {
        let answer = window.confirm('Are you sure you want to delete this tag?');
        if (answer) {
            deleteTag(slug);
        }
    };

    const deleteTag = slug => {
        // console.log('delete', slug);
        removeTag(slug, token).then(data => {
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
            return <div className=" p-1 nbtn badge badge-success" style={{ display: success ? '' : 'none' }}>Tag is created</div>;
        }
    };

    const showError = () => {
        if (error) {
            return <div className="badge p-1 nbtn badge-danger" style={{ display: error ? '' : 'none' }}>Tag already exist</div>;
        }
    };

    const showRemoved = () => {
        if (removed) {
            return <div className="badge p-1 nbtn badge-danger" style={{ display: removed ? '' : 'none' }}>Tag is removed</div>;
        }
    };
  

    const mouseMoveHandler = e => {
        setValues({ ...values, error: false, success: false, removed: '' });
    };

    const newTagFom = () => (
       
        <form className="form" onSubmit={clickSubmit}>
            <div className="form-group">
                
                <input type="text" className="form-text" onChange={handleChange} placeholder="Tag" value={name} required />
            </div>
            <div>
                <button type="submit" className="btn btn-primary nbtn">
                    Create
                </button>
            </div>
        </form>
        
    );


    return (
        <React.Fragment>
         {showSuccess()}
         {showError()}
         {showRemoved()}
          <div onMouseMove={mouseMoveHandler}>
                {newTagFom()}
                <div className="catagoriesAndTags">
                {showTags()}
                </div>
            </div>
            
        </React.Fragment>
    );
}
export default Tag;