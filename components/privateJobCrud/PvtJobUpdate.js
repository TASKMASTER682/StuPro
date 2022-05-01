import React ,{ useState, useEffect } from 'react';
import Router from 'next/router';
import dynamic from 'next/dynamic';
import { withRouter } from 'next/router';
import { getCookie, isAuth } from '../../actions/auth';
import { singlePvtJob, updatePvtJob } from '../../actions/privateJob';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import { QuillModules, QuillFormats } from '../../helpers/quill';
import { API } from '../../config';




const PvtJobUpdate=({router})=>{
    const [body, setBody] = useState('');


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
        location:'',
        qualification:'',
        desc:'',
        officialLink:'',
    });

    const { error, success, formData,agency,applyLink,position,keySkills,desc,officialLink, title,qualification,lastDate,location, salary } = values;
    const token = getCookie('token');

    useEffect(() => {
        setValues({ ...values, formData: new FormData() });
        initJob();
 
    }, [router]);

  
    const initJob = () => {
        if (router.query.slug) {
            singlePvtJob(router.query.slug).then(data => {
                if (data.error) {
                    console.log(data.error);
                } else {
                    setValues({ ...values,subtitle:data.subtitle || "",desc:data.desc || "",officialLink:data.officialLink || "", title: data.title,applyLink:data.applyLink,position:data.position,keySkills:data.keySkills,lastDate:data.lastDate,agency:data.agency,salary:data.salary,qualification:data.qualification,location:data.location });
                    setBody(data.body);
     
                }
            });
        }
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
        if (typeof window !=='undefined') {
            localStorage.setItem('privateJob', JSON.stringify(e));
        }
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
            <form className="form" onSubmit={editJob}>

            <div >
                <label className="text-teal-600 ">Title</label>
                <br/>
                <input className="w-full p-2 my-2 rounded-md ring-2 ring-teal-500"  type="text"  value={title} onChange={handleChange('title')} />
            </div>

            <div >
            <label  className="text-teal-600 ">Description</label>
                <br/>
              <textarea className="w-full p-2 my-2 rounded-md ring-2 ring-teal-500" rows='10' placeholder="Job Description" maxLength='160' value={desc} onChange={handleChange('desc')}></textarea>
              <h2 className="text-primary">{160-desc.length}/160</h2>
            </div>
               <input type="text" className="w-full p-2 my-2 rounded-md ring-2 ring-teal-500"  placeholder="Agency"  value={agency} onChange={handleChange('agency')} />
               <input type="text" className="w-full p-2 my-2 rounded-md ring-2 ring-teal-500"  placeholder="Salary"  value={salary} onChange={handleChange('salary')} />
            <input type="text" className="w-full p-2 my-2 rounded-md ring-2 ring-teal-500"  placeholder="Location"  value={location} onChange={handleChange('location')} />
            <input type="date" className="w-full p-2 my-2 rounded-md ring-2 ring-teal-500"  value={lastDate} onChange={handleChange('lastDate')}/>
              <input type="text" className="w-full p-2 my-2 rounded-md ring-2 ring-teal-500"  placeholder="Qualification needed"  value={qualification} onChange={handleChange('qualification')} />
            <input type="text" className="w-full p-2 my-2 rounded-md ring-2 ring-teal-500"  placeholder="Position"  value={position} onChange={handleChange('position')} />
            <input type="text" className="w-full p-2 my-2 rounded-md ring-2 ring-teal-500"  placeholder="Key Skills"  value={keySkills} onChange={handleChange('keySkills')} />
            <input type="text" className="w-full p-2 my-2 rounded-md ring-2 ring-teal-500"  placeholder="Link"  value={applyLink} onChange={handleChange('applyLink')} />
            <input type="text" className="w-full p-2 my-2 rounded-md ring-2 ring-teal-500"  placeholder="Official Website Link"  value={officialLink} onChange={handleChange('officialLink')} />
          
            <div>
            <ReactQuill
                    modules={QuillModules}
                    formats={QuillFormats}
                    value={body}
                    placeholder="Write something amazing..."
                    onChange={handleBody} />
                <button type="submit" className="p-2 my-2 my-4 font-bold text-white bg-teal-600 rounded-md ">
                   Update
                </button>
            </div>
        </form>
        )
    }

    return(
       
        <section className="shadow-md shadow-green-400">
        {showError()}
        {showSuccess()}
        <div className="grid grid-cols-3 gap-3 px-14 lg:pt-24">
    
        <div className="col-span-2 ">
        
            <h1 className="text-4xl font-bold text-teal-400 ">Update Job</h1>
            <div >
               {updateJobForm()}
             {body && (
                        <img src={`${API}/privateJobs/photo/${router.query.slug}`} alt={title}  />
                    )}
            
            </div>
        
        </div>
       
            
            <div className='flex flex-col'>
                <h3 className="text-lg text-teal-500 ">Featured Image</h3>
                
                <small className="text-gray-400 ">Max size: 1mb</small>
                <br />
                <label className=" bg-black text-white font-bold p-2 w-[50%] cursor-pointer rounded-md">
                    Upload Featured Image
                    <input onChange={handleChange('photo')} type="file" accept="image/*" hidden />
                </label>
            </div>

        
        </div>
    </section>
    
    )

}
export default withRouter(PvtJobUpdate);