import React ,{ useState, useEffect } from 'react';
import Router from 'next/router';
import dynamic from 'next/dynamic';
import { withRouter } from 'next/router';
import { getCookie, isAuth } from '../../actions/auth';
import { getPvtJobCategories } from '../../actions/privateJobCategory';
import { getPvtJobTags } from '../../actions/privateJobTag';
import { singlePvtJob, updatePvtJob } from '../../actions/privateJob';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import { QuillModules, QuillFormats } from '../../helpers/quill';
import { API } from '../../config';
import Checkbox from '@material-ui/core/Checkbox';




const PvtJobUpdate=({router})=>{
    const [body, setBody] = useState('');
   
    const [privateJobCategories, setPrivateJobCategories] = useState([]);
    const [privateJobTags, setPrivateJobTags] = useState([]);
    const [checked, setChecked] = useState([]); // categories
    const [checkedTag, setCheckedTag] = useState([]); // tags


    const [values, setValues] = useState({
        title: '',
        error: '',
        success: '',
        formData: '',
        agency:'',
        title: '',
        applyLink:'',
        body: '',
        salary:'',
        position:'',
        keySkills:'',
        lastDate:'',
        type:'',
        location:'',
        qualification:'',
    });

    const { error, success, formData,agency,applyLink,position,keySkills, title,qualification,lastDate,location,type, salary } = values;
    const token = getCookie('token');

    useEffect(() => {
        setValues({ ...values, formData: new FormData() });
        initJob();
        initJobCategories();
        initJobTags();
    }, [router]);

  
    const initJob = () => {
        if (router.query.slug) {
            singlePvtJob(router.query.slug).then(data => {
                if (data.error) {
                    console.log(data.error);
                } else {
                    setValues({ ...values, title: data.title,applyLink:data.applyLink,position:data.position,keySkills:data.keySkills,lastDate:data.lastDate,agency:data.agency,salary:data.salary,qualification:data.qualification,location:data.location,type:data.type });
                    setBody(data.body);
                    setCategoriesArray(data.privateJobCategories);
                    setTagsArray(data.privateJobTags);
                }
            });
        }
    };

    const setCategoriesArray = privateJobCategories => {
        let ca = [];
        privateJobCategories.map((c, i) => {
            ca.push(c._id);
        });
        setChecked(ca);
    };

    const setTagsArray = privateJobTags => {
        let ta = [];
        privateJobTags.map((t, i) => {
            ta.push(t._id);
        });
        setCheckedTag(ta);
    };

    const initJobCategories = () => {
        getPvtJobCategories().then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                setPrivateJobCategories(data);
            }
        });
    };

    const initJobTags = () => {
        getPvtJobTags().then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                setPrivateJobTags(data);
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
        formData.set('privateJobCategories', all);
    };

    const handleTagsToggle = t => () => {
        setValues({ ...values, error: '' });
        // return the first index or -1
        const clickedTag = checkedTag.indexOf(t);
        const all = [...checkedTag];

        if (clickedTag === -1) {
            all.push(t);
        } else {
            all.splice(clickedTag, 1);
        }
        console.log(all);
        setCheckedTag(all);
        formData.set('privateJobTags', all);
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

    const showJobCategories = () => {
        return (
            privateJobCategories &&
            privateJobCategories.map((c, i) => (
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

    const showJobTags = () => {
        return (
            privateJobTags &&
            privateJobTags.map((t, i) => (
                <li key={i} className="list-unstyled">
                    <Checkbox
                        onChange={handleTagsToggle(t._id)}
                        checked={findOutTag(t._id)}
                        
                        
                    />
                    <label className="form-check-label">{t.name}</label>
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

    const handleBody = e => {
        setBody(e);
        formData.set('body', e);
    };

    const editJob = (e) => {
        e.preventDefault();
        updatePvtJob(formData, token, router.query.slug).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error});
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

    const updateJobForm=()=>{
        return(
            <form className="form" onSubmit={editJob}>
            <div className="form-group">
                <label className="text-primary">Title</label>
                <br/>
                <input className="form-group" type="text"  value={title} onChange={handleChange('title')} />
            </div>
            <div className="form-group">
               <input type="text" placeholder="Agency"  value={agency} onChange={handleChange('agency')} required />
            </div>
            <div className="form-group">
               <input type="text" placeholder="Salary"  value={salary} onChange={handleChange('salary')} required />
            </div>
            <div className="form-group">
            <input type="text" placeholder="Location"  value={location} onChange={handleChange('location')} required />
            </div>
            <div className="form-group">
            <input type="date" value={lastDate} onChange={handleChange('lastDate')}/>
            </div>
            <div className="form-group">
              <input type="text" placeholder="Qualification needed"  value={qualification} onChange={handleChange('qualification')} required />
            </div>
            <div className="form-group">
            <input type="text" placeholder="Type of Job"  value={type} onChange={handleChange('type')} required />
            </div>
            <div className="form-group">
            <input type="text" placeholder="Position"  value={position} onChange={handleChange('position')} required />
            </div>
            <div className="form-group">
            <input type="text" placeholder="Key Skills"  value={keySkills} onChange={handleChange('keySkills')} required />
            </div>
            <div className="form-group">
            <input type="text" placeholder="Link"  value={applyLink} onChange={handleChange('applyLink')} required />
            </div>

            <ReactQuill
                     modules={QuillModules}
                    formats={QuillFormats}
                    value={body}
                    placeholder="Write something amazing..."
                    onChange={handleBody}
                />
            

            <div>
                <button type="submit" className="btn nbtn btn-dark">
                   Update
                </button>
            </div>
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
               {updateJobForm()}
             <div className="line"></div>
             {body && (
                        <img src={`${API}/privateJob/photo/${router.query.slug}`} alt={title} style={{ width: '100%' }} />
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
            <h3 className="text-primary">Categories</h3>
            <small className="text-light-gray">Select the Categories </small>
             {showJobCategories()}
            </ul>
            <ul style={{ maxHeight: '200px'}}>
            <h3 className="text-primary">Tags</h3>
            <small className="text-light-gray">Select the  Tag</small>
            {showJobTags()}
          </ul>
        </div>
        </div>
        </div>
    </section>
    
    )

}
export default withRouter(PvtJobUpdate);