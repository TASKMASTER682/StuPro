import React,{ useState, useEffect } from 'react';
import Router from 'next/router';
import dynamic from 'next/dynamic';
import { withRouter } from 'next/router';
import { getCookie, isAuth } from '../../actions/auth';
import { getJobCategories } from '../../actions/jobCategory';
import { getJobTags } from '../../actions/jobTag';
import { singleJob, updateJob } from '../../actions/job';
import { API } from '../../config';
import Checkbox from '@material-ui/core/Checkbox';
const SlatePlugins = dynamic(() => import('../slate-plugins/index'), { loading: () => "",ssr: false  })
import {serializeHTMLFromNodes,createEditorPlugins} from '@udecode/slate-plugins';
import {pluginsBasic,initialValueBasicElements} from '../slate-plugins/utils'




const JobUpdate=({router})=>{
    const [body, setBody] = useState('');
   
    const [jobCategories, setJobCategories] = useState([]);
    const [jobTags, setJobTags] = useState([]);
    const [checked, setChecked] = useState([]); // categories
    const [checkedTag, setCheckedTag] = useState([]); // tags


    const [values, setValues] = useState({
        title: '',
        error: '',
        success: '',
        formData: '',
        agency:'',
        title: '',
        subtitle:'',
        desc:'',
        city:'',
        street:'',
        postal:'',
        officialLink:'',
        language:'',
        applyLink:'',
        body: '',
        salary:'',
        language:'',
        lastDate:'',
        type:'',
        location:'',
        status:'',
        qualification:''
    });

    const { error, success, formData,agency,status,applyLink,subtitle,desc,city,street,postal,officialLink,language, title,qualification,lastDate,location,type, salary } = values;
    const token = getCookie('token');

    useEffect(() => {
        setValues({ ...values, formData: new FormData() });
        initJob();
        initJobCategories();
        initJobTags();
    }, [router]);

  
    const initJob = () => {
        if (router.query.slug) {
            singleJob(router.query.slug).then(data => {
                if (data.error) {
                    console.log(data.error);
                } else {
                    setValues({ ...values,status:data.status || '', title: data.title,subtitle:data.subtitle || "" ,desc:data.desc || "",city:data.city || "" ,street:data.street || "" ,postal:data.postal || "" ,officialLink:data.officialLink || "" ,language:data.language || "",applyLink:data.applyLink,lastDate:data.lastDate,agency:data.agency,salary:data.salary,qualification:data.qualification,location:data.location,type:data.type });
                    setBody(data.body);
                    setCategoriesArray(data.jobCategories);
                    setTagsArray(data.jobTags);
                }
            });
        }
    };

    const setCategoriesArray = jobCategories => {
        let ca = [];
        jobCategories.map((c, i) => {
            ca.push(c._id);
        });
        setChecked(ca);
    };

    const setTagsArray = jobTags => {
        let ta = [];
        jobTags.map((t, i) => {
            ta.push(t._id);
        });
        setCheckedTag(ta);
    };

    const initJobCategories = () => {
        getJobCategories().then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                setJobCategories(data);
            }
        });
    };

    const initJobTags = () => {
        getJobTags().then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                setJobTags(data);
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
        formData.set('jobCategories', all);
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
        formData.set('jobTags', all);
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

    const showJobTags = () => {
        return (
            jobTags &&
            jobTags.map((t, i) => (
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

    const handleBody =(e)=> {

        setBody(e);
        // const nodal=e ? e:initialValueBasicElements;
        const nodes=[...e];
        const editor=createEditorPlugins();
        const html=serializeHTMLFromNodes(editor,{
            plugins:pluginsBasic,
            nodes
          });
        formData.set('body', e);
        if (typeof window !== 'undefined') {
            localStorage.setItem('job', JSON.stringify(html));
        }
    };

    const editJob = (e) => {
        e.preventDefault();
        updateJob(formData, token, router.query.slug).then(data => {
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

    const updateJobForm=()=>{
        return(
        <form className="form" onSubmit={editJob}>
            <div className="form-group">
            <select name="Language" value={language} onChange={handleChange('language')} required>
                <option value="0">Select Language</option>
                <option value="en">en</option>
                <option value="hi">hi</option>
            </select>               
        </div>
            <div className="form-group">
                <label className="text-primary">Title</label>
                <br/>
                <input className="form-group" type="text"  value={title} onChange={handleChange('title')} />
            </div>
            <div className="form-group">
                <label className="text-primary">Sub-Title</label>
                <br/>
                <input className="form-group" type="text"  value={subtitle} onChange={handleChange('subtitle')} />
            </div>
            <div className="form-group">
            <select  value={status} onChange={handleChange('status')} required>
                <option value="0">Status</option>
                <option value="jobs">jobs</option>
                <option value="result">result</option>
                <option value="admit-card">admit-card</option>

            </select>               
        </div>
            <div className="form-group">
            <label className="text-primary">Description</label>
                <br/>
              <textarea className="blog textinput"placeholder="Job Description" maxLength='160' value={desc} onChange={handleChange('desc')}></textarea>
              <h2 className="text-primary">{160-desc.length}/160</h2>
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
            <input type="text" placeholder="Street"  value={street} onChange={handleChange('street')}  />
            </div>
            <div className="form-group">
            <input type="text" placeholder="City"  value={city} onChange={handleChange('city')}  />
            </div>
            <div className="form-group">
            <input type="text" placeholder="Postal Code"  value={postal} onChange={handleChange('postal')} />
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
            <input type="text" placeholder="Link"  value={applyLink} onChange={handleChange('applyLink')} required />
            </div>
            <div className="form-group">
            <input type="text" placeholder="Official Website Link"  value={officialLink} onChange={handleChange('officialLink')}  />
            </div>

 
                <SlatePlugins handleChange={handleBody} />

               
            <div>
                <button type="submit" className="btn nbtn btn-dark my-1">
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
                        <img src={`${API}/job/photo/${router.query.slug}`} alt={title} style={{ width: '100%' }} />
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
             {showJobCategories()}
            </ul>
            <ul style={{ maxHeight: '200px'}}>
            <h3 className="text-primary">Categories</h3>
            <small className="text-light-gray">Tags</small>
            {showJobTags()}
          </ul>
        </div>
        </div>
        </div>
    </section>
    
    )

}
export default withRouter(JobUpdate);