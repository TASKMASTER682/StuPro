import React,{ useState, useEffect } from 'react';
import Router from 'next/router';
import { getCookie, isAuth, updateUser } from '../../actions/auth';
import { getProfile, update } from '../../actions/user';
import { API } from '../../config';

 
const ProfileUpdate = () => {
    const [values, setValues] = useState({
        username: '',
        username_for_photo: '',
        name: '',
        email: '',
        about: '',
        password: '',
        skills:'',
        website:'',
        insta:'',
        facebook:'',
        twitter:'',
        linkedin:'',
        error: false,
        success: false,
        loading: false,
        photo: '',
        userData: process.browser && new FormData()
    });
 
    const token = getCookie('token');
    const {
        username,
        username_for_photo,
        name,
        email,
        status,
        about,
        password,
        error,
        skills,
        success,
        insta,
        facebook,
        website,
        twitter,
        linkedin,
        loading,
        photo,
        userData
    } = values;
 
    const init = () => {
        getProfile(token).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                setValues({
                    ...values,
                    username: data.username,
                    username_for_photo: data.username,
                    name: data.name,
                    email: data.email,
                    about: data.about,
                    status:data.status,
                    insta:data.insta,
                    website:data.website,
                    skills:data.skills,
                    facebook:data.facebook,
                    twitter:data.twitter,
                    linkedin:data.linkedin
                });
            }
        });
    };
 
    useEffect(() => {
        init();
        setValues({ ...values, userData: new FormData() });
    }, []);
 
    const handleChange = name => e => {
        const value = name === 'photo' ? e.target.files[0] : e.target.value;
        userData.set(name, value);
        console.log(...userData); 
        setValues({ ...values, [name]: value, userData, error: false, success: false });
    };
 
    const handleSubmit = e => {
        e.preventDefault();
 
        setValues({ ...values, loading: true });
        update(token, userData).then(data => {
            if (data.error) {
                console.log('data.error', data.error);
                setValues({ ...values, error: data.error, loading: false });
            } else {
                updateUser(data, () => {
                    setValues({
                        ...values,
                        username: data.username,
                        name: data.name,
                        email: data.email,
                        status:data.status,
                        about: data.about,
                        password: '',
                        website:data.website,
                        skills:data.skills,
                        insta:data.insta,
                        facebook:data.facebook,
                        twitter:data.twitter,
                        linkedin:data.linkedin,
                        success: true,
                        loading: false
                    });
                    if (isAuth() && isAuth().role === 1) {
                        Router.push(`/admin`);
                    } else {
                        Router.push(`/user`);
                    }
                });
            }
        });
    };

    const profileUpdateForm=()=>(
        <form onSubmit={handleSubmit} className='form'>
        
        <p className="my-4 text-red-500">* = required field</p>

       <div>
        <label className="p-2 my-2 text-white bg-black rounded-md ">
            Update Profile photo
          <input onChange={handleChange('photo')} className='my-2' type="file" accept="image/*" hidden />
        </label>
        </div>
        <div className='my-2'>
              <input type="text" className="w-full p-2 my-2 rounded-md ring-2 ring-teal-500" placeholder="Username" value={username} onChange={handleChange('username')} />
              <small className="text-red-500 ">username must be unique</small>
            </div>
            
              <input type="text" className="w-full p-2 my-2 rounded-md ring-2 ring-teal-500" placeholder="Name" value={name}  onChange={handleChange('name')} />
            
           
              <input type="text" className="w-full p-2 my-2 rounded-md ring-2 ring-teal-500" placeholder="Your current Occupation or Status" value={status}  onChange={handleChange('status')} />
             
         
             <div>
              <textarea className="w-full p-2 my-2 rounded-md ring-2 ring-teal-500" placeholder="A short bio of yourself" value={about} onChange={handleChange('about')}></textarea>
              <small className="text-red-500 ">Tell us a little about yourself</small>
            </div>
            
              <input type="text" className="w-full p-2 my-2 rounded-md ring-2 ring-teal-500" placeholder="Password" value={password}  onChange={handleChange('password')} />
             
             <div>
             <small className="text-red-500 ">Please use comma separated Skills (eg.HTML,CSS,JavaScript,PHP)</small>

          <input type="text" className="w-full p-2 my-2 rounded-md ring-2 ring-teal-500" placeholder="* Skills"  value={skills} onChange={handleChange('skills')} />          
        </div>
           <div  >           
              <input type="text" className="w-full p-2 my-2 rounded-md ring-2 ring-teal-500" placeholder="URL of your website" value={website}  onChange={handleChange('website')} />
              <small className="text-red-500 ">Paste URL of your website or any brand you have</small>
            </div>
             <h2 className="my-1 font-bold text-teal-400">Add Social Accounts</h2>
             <div >
              <input type="text" className="w-full p-2 my-2 rounded-md ring-2 ring-teal-500" placeholder="Full URL of your insta profile" value={insta}  onChange={handleChange('insta')} />
             </div>

           
              <input type="text" className="w-full p-2 my-2 rounded-md ring-2 ring-teal-500" placeholder="Full URL of your facebook profile" value={facebook}  onChange={handleChange('facebook')} />
             

         
              <input type="text" className="w-full p-2 my-2 rounded-md ring-2 ring-teal-500" placeholder="Paste URL of your twitter profile" value={twitter}  onChange={handleChange('twitter')} />
         
            
              <input type="text" className="w-full p-2 my-2 rounded-md ring-2 ring-teal-500" placeholder="Full URL of your linkedin profile" value={linkedin}  onChange={handleChange('linkedin')} />
             

             <button type="submit" className="p-2 my-1 font-bold text-white bg-teal-500 rounded-md ">Submit</button>
        </form>
    );

    const showError = () => (
        <div className="p-2 bg-red-400 " style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    );

    const showSuccess = () => (
        <div className="p-2 bg-green-300 " style={{ display: success ? '' : 'none' }}>
            Profile updated
        </div>
    );

    const showLoading = () => (
        <div className="p-2 bg-teal-200 " style={{ display: loading ? '' : 'none' }}>
            Loading...
        </div>
    );

    return (
        <React.Fragment>

            <div className="px-4 pt-10 lg:px-24 lg:pt-24">
        

            <h1 className="my-1 text-4xl font-bold text-teal-400 ">Mess up with your profile</h1>
            <p className="text-lg">Create or edit your profile</p>
            <div>
             {showSuccess()}
             {showError()}
             {showLoading()}
             
            </div>
            
              <img className="w-40 h-40 p-2 m-auto rounded-full shadow-md shadow-teal-400" src={`${API}/user/photo/${username}`}  alt="" />
           
            {profileUpdateForm()}
            </div>
        </React.Fragment>
    );
}

export default ProfileUpdate;