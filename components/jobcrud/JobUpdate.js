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
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import { QuillModules, QuillFormats } from '../../helpers/quill';




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
    
        desc:'',
        officialLink:'',
       
        applyLink:'',
        body: '',
        salary:'',
        mode:'',
        lastDate:'',
       
        location:'',
        
        qualification:'',

        imgLink:''
    });

    const { error, success, formData,agency,applyLink,desc,officialLink, title,qualification,lastDate,location,imgLink, salary } = values;
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
                    setValues({ ...values , title: data.title ,desc:data.desc || "",officialLink:data.officialLink || "",imgLink:data.imgLink || "",applyLink:data.applyLink,lastDate:data.lastDate,agency:data.agency,salary:data.salary,qualification:data.qualification,location:data.location });
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

    // const handleBody =(e)=> {
    //     setBody(e);
    //     formData.set('body', e);
    // };

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
        <div className="p-1 badge badge-danger" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    );

    const showSuccess = () => (
        <div className="p-1 badge badge-success" style={{ display: success ? '' : 'none' }}>
            {success}
        </div>
    );

    const updateJobForm=()=>{
        return(
        <form className='px-6' onSubmit={editJob}>

            <div>
                <label className='my-2 text-teal-400'>Title</label>
                <br/>
                <input className='w-full p-2 rounded-sm ring-2 ring-teal-500 ' type="text"  value={title} onChange={handleChange('title')} />
            </div>
            <div >
            <label className='my-2 text-teal-400'>Description</label>
                <br/>
              <textarea className="w-full p-2 rounded-sm ring-2 ring-teal-500 "placeholder="Job Description" maxLength='160' rows='7' value={desc} onChange={handleChange('desc')}></textarea>
              <h2 className="text-lg font-bold text-red-500">{160-desc.length}/160</h2>
            </div>
               <input className='w-full p-2 my-2 rounded-sm ring-2 ring-teal-500' type="text" placeholder="Agency"  value={agency} onChange={handleChange('agency')} required />
               <input className='w-full p-2 my-2 rounded-sm ring-2 ring-teal-500 ' type="text" placeholder="Salary"  value={salary} onChange={handleChange('salary')} required />
            <input type="text" className='w-full p-2 my-2 rounded-sm ring-2 ring-teal-500' placeholder="Location"  value={location} onChange={handleChange('location')} required />
            <input className='w-full p-2 my-2 rounded-sm ring-2 ring-teal-500' type="date" value={lastDate} onChange={handleChange('lastDate')}/>
              <input className='w-full p-2 my-2 rounded-sm ring-2 ring-teal-500' type="text" placeholder="Qualification needed"  value={qualification} onChange={handleChange('qualification')} required />
            <input type="text" className='w-full p-2 my-2 rounded-sm ring-2 ring-teal-500' placeholder="Link"  value={applyLink} onChange={handleChange('applyLink')} required />
            <input className='w-full p-2 my-2 rounded-sm ring-2 ring-teal-500' type="text" placeholder="Official Website Link"  value={officialLink} onChange={handleChange('officialLink')}  />
            <input className='w-full p-2 my-2 rounded-sm ring-2 ring-teal-500' type="text" placeholder="Image Link"  value={imgLink} onChange={handleChange('imgLink')}  />


               
            <div>
            {/* <ReactQuill
                     modules={QuillModules}
                    formats={QuillFormats}
                    value={body}
                    placeholder="Write something amazing..."
                    onChange={handleBody}
                />   */}
                <button type="submit" className='p-2 my-2 font-bold text-white bg-teal-600 rounded-md'>
                    Update
                </button>
            </div>
        </form>
        )
    }

    return(
       
        <section className='shadow-md shadow-green-400'>
        {showError()}
        {showSuccess()}
        <div className='grid grid-cols-3 gap-3 lg:pt-24'>
    
        <div className='col-span-2'>
            <h1 className='p-2 text-2xl font-bold text-teal-500'>Update Job</h1>
            <hr />
            <div >
               {updateJobForm()}
               <hr />
             {body && (
                        <img src={`${API}/jobs/photo/${router.query.slug}`} alt={title} className='p-4' />
                    )}
            
            </div>
        </div>
        <div >
            <div >
                <h3 className='text-lg font-bold text-teal-500'>Featured Image</h3>
                <p className='text-sm text-gray-500'>Max size: 1mb</p>
                <br />
                <label className='p-2 text-white bg-black rounded-md cursor-pointer'>
                    Upload Featured Image
                    <input onChange={handleChange('photo')} type="file" accept="image/*" hidden />
                </label>
            </div>
          
         <div className='flex justify-around my-4'>
           
            <ul className='max-h-screen overflow-scroll ' >
            <h3 className="text-teal-400 ">Category</h3>
             {showJobCategories()}
            </ul>

            <ul className='max-h-screen overflow-scroll' >
            <h3 className="text-teal-400">Tags</h3>
            {showJobTags()}
          </ul>
        </div>
        </div>
        </div>
    </section>
    
    )

}
export default withRouter(JobUpdate);