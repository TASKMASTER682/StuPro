import Link from 'next/link';
import { useState, useEffect } from 'react';
import Router from 'next/router';
import dynamic from 'next/dynamic';
import { withRouter } from 'next/router';
import { getCookie, isAuth } from '../../actions/auth';
import { getPvtJobCategories } from '../../actions/privateJobCategory';
import { getPvtJobTags } from '../../actions/privateJobTag';
import { createPvtJob } from '../../actions/privateJob';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import { QuillModules, QuillFormats } from '../../helpers/quill';
import Checkbox from '@material-ui/core/Checkbox';





const CreatePvtJob=({router})=>{
    const jobFromLS = () => {
        if (typeof window === 'undefined') {
            return false;
        }

        if (localStorage.getItem('privateJob')) {
            return JSON.parse(localStorage.getItem('privateJob'));
        } else {
            return false;
        }
    };

    const [privateJobCategories, setPrivateJobCategories] = useState([]);
    const [privateJobTags, setPrivateJobTags] = useState([]);


    const [checked, setChecked] = useState([]); // categories
    const [checkedTag, setCheckedTag] = useState([]); // tags

    const [body, setBody] = useState(jobFromLS());
    const [values, setValues] = useState({
        error: '',
        sizeError: '',
        success: '',
        formData: '',
        title: '',
        agency:'',
        applyLink:'',
        position:'',
        keySkills:'',
        salary:'',
        type:'',
        qualification:'',
        location:'',
       lastDate:'',
        hidePublishButton: false,
    });

    const { error, sizeError, success, formData,applyLink,lastDate, keySkills,position,agency,title,salary,qualification,location,type, hidePublishButton } = values;
    const token = getCookie('token');

    useEffect(() => {
        setValues({ ...values, formData: new FormData() });
        initJobCategories();
        initJobTags();
    }, [router]);

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

    const publishJob = e => {
        e.preventDefault();
        // console.log('ready to publishBlog');
        createPvtJob(formData, token).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error});
            } else {
                setValues({ ...values, title: '',agency:'',loading:false,applyLink:'',lastDate:'',position:'',keySkills:'', error: '',salary:'',qualification:'',type:'',location:'', success: `A new blog titled "${data.title}" is created` });
                setBody('');
                setPrivateJobCategories([]);
                setPrivateJobTags([]);
            }
        });
    };

    const handleChange = name => e => {
        // console.log(e.target.value);
        const value = name === 'photo' ? e.target.files[0] : e.target.value;
        formData.set(name, value);
        setValues({ ...values, [name]: value, formData, error: '' });
    };

    const handleBody = e => {
        // console.log(e);
        setBody(e);
        formData.set('body', e);
        if (typeof window !== 'undefined') {
            localStorage.setItem('privateJob', JSON.stringify(e));
        }
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

    const handleJobTagsToggle = t => () => {
        setValues({ ...values, error: '' });
        // return the first index or -1
        const clickedTag = checked.indexOf(t);
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

    const showJobCategories = () => {
        return (
            privateJobCategories &&
            privateJobCategories.map((c, i) => (
                <li key={i} >
                    <Checkbox onChange={handleToggle(c._id)} />
                    <label>{c.name}</label>
                </li>
            ))
        );
    };

    const showJobTags = () => {
        return (
            privateJobTags &&
            privateJobTags.map((t, i) => (
                <li key={i} >
                    <Checkbox onChange={handleJobTagsToggle(t._id)} />
                    <label >{t.name}</label>
                </li>
            ))
        );
    };


 

    const showError = () => (
        <div className="badge badge-danger p-1" style={{ display: error ? '' : 'none' }}>{error}</div>
    );

    const showSuccess = () => (
        <div className="badge badge-success p-1" style={{ display: success ? '' : 'none' }}>{success}</div>
    );



const createJobForm = () => {
    return (
        <form className="form" onSubmit={publishJob}>
            <div className="form-group">
                <label className="text-primary">Title</label>
                <br/>
                <input className="form-group" type="text"  value={title} onChange={handleChange('title')} />
            </div>
           
            
            <div className="form-group">
               <input type="text" placeholder="Main category"  value={agency} onChange={handleChange('agency')} required />
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
              <input type="text" placeholder="Qualification or skills needed"  value={qualification} onChange={handleChange('qualification')} required />
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
                    onChange={handleBody} />
            
             <button type="submit" className="btn nbtn btn-dark my-1">Publish</button>
         </form>
    );
};
return (
    <section className="blogCreate">
  
    <div className="createMain">
    <div className="blogDiv">
       <h1 className="large text-primary">Create Job</h1>
        <div className="line"></div>
        <div className="createForm">
           {createJobForm()}
         
         {showError()}
        {showSuccess()}
        
        </div>
    </div>
    <div className="catagoriesTags">
        <div>
            <h3 className="text-primary">Featured Image</h3>
             <small className="text-light-gray">Max size: 1mb</small>
            <br />
            <label className=" btn btn-dark nbtn">
                Upload Featured Image
                <input type="file" accept="image/*" onChange={handleChange('photo')}  hidden />
            </label>
           
            <div className="line"></div>
        </div>
     <div className="checkList">
       <ul >
        <h3 className="text-primary">Tags</h3>
        <small className="text-light-gray">Select the tags related to your Job</small>
         {showJobTags()}
         
        </ul>
        <ul >
        <h3 className="text-primary">Categories</h3>
        <small className="text-light-gray">Select the category of your Job</small>
        {showJobCategories()}
      </ul>
     </div>
    </div>
  </div>
</section>
)
}
export default withRouter(CreatePvtJob);