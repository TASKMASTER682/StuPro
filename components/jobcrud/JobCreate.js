import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { withRouter } from 'next/router';
import { getCookie} from '../../actions/auth';
import { getJobCategories } from '../../actions/jobCategory';
import { getJobTags } from '../../actions/jobTag';
import { createJob } from '../../actions/job';
import Checkbox from '@material-ui/core/Checkbox';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import { QuillModules, QuillFormats } from '../../helpers/quill';


const CreateJob=({router})=>{
    const jobFromLS = () => {
        if (typeof window === 'undefined') {
            return false;
        }

        if (localStorage.getItem('job')) {
            return JSON.parse(localStorage.getItem('job'));
        } else {
            return false;
        }
    };

    const [jobCategories, setJobCategories] = useState([]);
    const [jobTags, setJobTags] = useState([]);


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
        salary:'',
        forSlug:'',
        desc:'',
        qualification:'',
        location:'',
       lastDate:'',
       mode:'',
       officialLink:'',
        hidePublishButton: false
    });

    const { error, sizeError, success,mode,officialLink,formData,desc,forSlug,applyLink,lastDate, agency,title,salary,qualification,location, hidePublishButton } = values;
    const token = getCookie('token');

    useEffect(() => {
        setValues({ ...values, formData: new FormData() });
        initJobCategories();
        initJobTags();
    }, [router]);

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

    const publishJob = e => {
        e.preventDefault();
        // console.log('ready to publishBlog');
        createJob(formData, token).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                setValues({ ...values, title: '',agency:'',officialLink:'',mode:'', applyLink:'',forSlug:'', subtitle:'',desc:'',lastDate:'', error: '',salary:'',qualification:'',location:'', success: `A new blog titled "${data.title}" is created` });
                setBody('');
                setJobCategories([]);
                setJobTags([]);
            }
        });
    };

    const handleChange = name => e => {
        // console.log(e.target.value);
        const value = name === 'photo' ? e.target.files[0] : e.target.value;
        formData.set(name, value);
        setValues({ ...values, [name]: value, formData, error: '' });
    };

    const handleBody =(e)=> {

        setBody(e);

        formData.set('body', e);
        if (typeof window !== 'undefined') {
            localStorage.setItem('job', JSON.stringify(e));
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
        formData.set('jobCategories', all);
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
        formData.set('jobTags', all);
    };

    const showJobCategories = () => {
        return (
            jobCategories &&
            jobCategories.map((c, i) => (
                <li key={i} >
                    <Checkbox onChange={handleToggle(c._id)} />
                    <label>{c.name}</label>
                </li>
            ))
        );
    };

    const showJobTags = () => {
        return (
            jobTags &&
            jobTags.map((t, i) => (
                <li key={i} >
                    <Checkbox onChange={handleJobTagsToggle(t._id)} />
                    <label >{t.name}</label>
                </li>
            ))
        );
    };


 

    const showError = () => (
        <div className="p-1 badge badge-danger" style={{ display: error ? '' : 'none' }}>{error}</div>
    );

    const showSuccess = () => (
        <div className="p-1 badge badge-success" style={{ display: success ? '' : 'none' }}>{success}</div>
    );

  

const createJobForm = () => {
    return (
        <form className="w-full" onSubmit={publishJob}>

            <div>
                <label className="text-teal-600 ">Title</label>
                <br/>
                <input className='w-full p-2 my-2 rounded-md ring-2 ring-teal-500'  placeholder="Title" type="text"  value={title} onChange={handleChange('title')} />
            </div>
            <div>
                <label className='text-teal-500'>Slug</label>
                <br/>
                <input className="w-full p-2 my-2 rounded-md ring-2 ring-teal-500" placeholder="slug" type="text"  value={forSlug} onChange={handleChange('forSlug')} />
           </div>
           <div>
           <label className="text-teal-400 ">Description</label>
                <br/>
              <textarea className="w-full p-2 my-2 rounded-md ring-2 ring-teal-500" rows='10' placeholder="Job Description" maxLength='160' value={desc} onChange={handleChange('desc')}></textarea>
              <h2 className="font-bold text-red-400 ">{160-desc.length}/160</h2>
           </div>
               <input type="text" className="w-full p-2 my-2 rounded-md ring-2 ring-teal-500" placeholder="Agency"  value={agency} onChange={handleChange('agency')} required />
               <input type="text" className="w-full p-2 my-2 rounded-md ring-2 ring-teal-500" placeholder="Salary"  value={salary} onChange={handleChange('salary')} required />
            <input type="text" className="w-full p-2 my-2 rounded-md ring-2 ring-teal-500" placeholder="Location"  value={location} onChange={handleChange('location')} required />           
            <input type="date" className="w-full p-2 my-2 rounded-md ring-2 ring-teal-500" value={lastDate} onChange={handleChange('lastDate')}/>
              <input type="text" className="w-full p-2 my-2 rounded-md ring-2 ring-teal-500" placeholder="Qualification or skills needed"  value={qualification} onChange={handleChange('qualification')} required />
            <input type="text" className="w-full p-2 my-2 rounded-md ring-2 ring-teal-500" placeholder="Link"  value={applyLink} onChange={handleChange('applyLink')} />
            <input type="text" className="w-full p-2 my-2 rounded-md ring-2 ring-teal-500"  placeholder="Official Website Link"  value={officialLink} onChange={handleChange('officialLink')} />
            <ReactQuill
                     modules={QuillModules}
                    formats={QuillFormats}
                    value={body}
                    placeholder="Write something amazing..."
                    onChange={handleBody}
                />             
                <button type="submit" className="p-2 px-3 my-1 font-bold text-white bg-teal-600 rounded-md ">Publish</button>
         </form>
    );
};
return (
    <section  className='shadow-md shadow-green-400'>
    <div className="grid grid-cols-3 gap-3 px-14 lg:pt-24">
    <div className="col-span-2">
       <h1 className='text-4xl font-bold text-teal-500'>Create Job</h1>
           {createJobForm()}
           {showError()}
           {showSuccess()}
    </div>
    <div >
        <div className='flex flex-col'>
            <h3 className="text-teal-500 ">Featured Image</h3>
             <p className="text-sm text-gray-400 ">Max size: 1mb</p>
            <br />
            <label className='bg-black p-2 rounded-md text-white w-[40%]'>
                Upload Featured Image
                <input type="file" accept="image/*" onChange={handleChange('photo')}  hidden />
            </label>
        </div>
     <div className='flex flex-row justify-between'>
       <ul className='w-full max-h-screen overflow-scroll' >
        <h3 className="text-teal-500">Categories</h3>
         {showJobCategories()}
         
        </ul>
        <ul className='w-full max-h-screen overflow-scroll' >
        <h3 className="text-teal-500">Tags</h3>
        {showJobTags()}
      </ul>
     </div>
    </div>
  </div>
</section>
)
}
export default withRouter(CreateJob);

