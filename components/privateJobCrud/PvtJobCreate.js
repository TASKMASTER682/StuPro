import React,{ useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { withRouter } from 'next/router';
import { getCookie } from '../../actions/auth';
import { createPvtJob } from '../../actions/privateJob';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import { QuillModules, QuillFormats } from '../../helpers/quill';



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
        qualification:'',
        location:'',
       lastDate:'',
       forSlug:'',
       desc:'',
       officialLink:'',
        hidePublishButton: false,
    });

    const { error, sizeError, success,desc,forSlug,officialLink, formData,applyLink,lastDate, keySkills,position,agency,title,salary,qualification,location, hidePublishButton } = values;
    const token = getCookie('token');

    useEffect(() => {
        setValues({ ...values, formData: new FormData() });
   
    }, [router]);



    const publishJob = e => {
        e.preventDefault();
        // console.log('ready to publishBlog');
        createPvtJob(formData, token).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error});
            } else {
                setValues({ ...values, title: '',agency:'',loading:false,desc:'',forSlug:'',officialLink:'',applyLink:'',lastDate:'',position:'',keySkills:'', error: '',salary:'',qualification:'',location:'', success: `A new blog titled "${data.title}" is created` });
                setBody('');
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
            localStorage.setItem('privateJob', JSON.stringify(e));
        }
    };


    const showError = () => (
        <div className="p-1 badge badge-danger" style={{ display: error ? '' : 'none' }}>{error}</div>
    );

    const showSuccess = () => (
        <div className="p-1 badge badge-success" style={{ display: success ? '' : 'none' }}>{success}</div>
    );



const createJobForm = () => {
    return (
    <form className="form" onSubmit={publishJob}>

            <div>
                <label className="text-primary">Title</label>
                <br/>
                <input  className="w-full p-2 my-2 rounded-md ring-2 ring-teal-500"  type="text"  value={title} onChange={handleChange('title')} />
            </div>
            <div>
                <label className="text-teal-500 ">Slug</label>
                <br/>
                <input className="w-full p-2 my-2 rounded-md ring-2 ring-teal-500"  type="text"  value={forSlug} onChange={handleChange('forSlug')} />
            </div>
            <div >
            <label className="text-teal-400">Description</label>
                <br/>
              <textarea className="w-full p-2 my-2 rounded-md ring-2 ring-teal-500" rows='10' placeholder="Job Description" maxLength='160' value={desc} onChange={handleChange('desc')}></textarea>
              <h2 className="font-bold text-teal-400">{160-desc.length}/160</h2>
            </div>
               <input type="text" className="w-full p-2 my-2 rounded-md ring-2 ring-teal-500"  placeholder="Main category"  value={agency} onChange={handleChange('agency')} />
               <input type="text" placeholder="Salary"  value={salary} onChange={handleChange('salary')} />
            
            <input type="text" className="w-full p-2 my-2 rounded-md ring-2 ring-teal-500"  placeholder="Location"  value={location} onChange={handleChange('location')} />
            <input type="date" className="w-full p-2 my-2 rounded-md ring-2 ring-teal-500"  value={lastDate} onChange={handleChange('lastDate')}/>
              <input type="text" className="w-full p-2 my-2 rounded-md ring-2 ring-teal-500"  placeholder="Qualification or skills needed"  value={qualification} onChange={handleChange('qualification')} />
            <input type="text" className="w-full p-2 my-2 rounded-md ring-2 ring-teal-500"  placeholder="Position"  value={position} onChange={handleChange('position')} /> 
            <input type="text" className="w-full p-2 my-2 rounded-md ring-2 ring-teal-500"  placeholder="Key Skills"  value={keySkills} onChange={handleChange('keySkills')} />
            <input type="text" className="w-full p-2 my-2 rounded-md ring-2 ring-teal-500"  placeholder="Link"  value={applyLink} onChange={handleChange('applyLink')} />
            <input type="text" placeholder="Official Website Link" className="w-full p-2 my-2 rounded-md ring-2 ring-teal-500"   value={officialLink} onChange={handleChange('officialLink')} />
         
    
            <ReactQuill
                    modules={QuillModules}
                    formats={QuillFormats}
                    value={body}
                    placeholder="Write something amazing..."
                    onChange={handleBody} />
            
             <button type="submit" className="p-2 my-4 font-bold text-white bg-teal-600 rounded-md ">Publish</button>
         </form>
    );
};
return (
    <section className="shadow-md shadow-green-400">
  
    <div className="grid grid-cols-3 gap-3 px-14 lg:pt-24">
    <div className="col-span-2">
       <h1 className="text-4xl font-bold text-teal-500">Create Job</h1>
        <div >
           {createJobForm()}
         
         {showError()}
        {showSuccess()}
        
        </div>
    </div>
   
        <div className='flex flex-col'>
            <h3 className="text-2xl text-teal-500 ">Featured Image</h3>
             <small className="text-light-gray">Max size: 1mb</small>
            <br />
            <label className=" bg-black rounded-md text-white font-bold w-[50%] p-2 cursor-pointer">
                Upload Featured Image
                <input type="file" accept="image/*" onChange={handleChange('photo')}  hidden />
            </label>
           
        </div>

   
  </div>
</section>
)
}
export default withRouter(CreatePvtJob);