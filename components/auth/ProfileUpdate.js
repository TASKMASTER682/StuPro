import { useState, useEffect } from 'react';
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
        about,
        password,
        error,
        success,
        insta,
        facebook,
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
                    insta:data.insta,
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
        // console.log(e.target.value);
        const value = name === 'photo' ? e.target.files[0] : e.target.value;
        // let userData = new FormData();
        userData.set(name, value);
        console.log(...userData); // SEE THE FORMDATA IN CONSOLE
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
                        about: data.about,
                        password: '',
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
        
        <small className="text-primary lead">* = required field</small>
      
       <div className="form-group nbtn">
        <label className="btn btn-dark nbtn my-1">
            Update Profile photo
          <input onChange={handleChange('photo')} type="file" accept="image/*" hidden />
        </label>
        </div>
        <div className="form-group">
              <input type="text" placeholder="Username" value={username} onChange={handleChange('username')} />
              <small className="form-text">username must be unique</small>
            </div>
            <div className="form-group">
              <input type="text" placeholder="Name" value={name}  onChange={handleChange('name')} />
             </div>
         
             <div className="form-group">
              <textarea className="blog textinput"placeholder="A short bio of yourself" value={about} onChange={handleChange('about')}></textarea>
              <small className="form-text">Tell us a little about yourself</small>
            </div>
            <div className="form-group">
              <input type="text" placeholder="Password" value={password}  onChange={handleChange('password')} />
             </div>
             <h2 className="lead text-primary my-1">Add Social Accounts</h2>
             <div className="form-group">
              <input type="text" placeholder="Full URL of your insta profile" value={insta}  onChange={handleChange('insta')} />
             </div>

             <div className="form-group">
              <input type="text" placeholder="Full URL of your facebook profile" value={facebook}  onChange={handleChange('facebook')} />
             </div>

             <div className="form-group">
              <input type="text" placeholder="Paste URL of your twitter profile" value={twitter}  onChange={handleChange('twitter')} />
             </div>
             <div className="form-group">
              <input type="text" placeholder="Full URL of your linkedin profile" value={linkedin}  onChange={handleChange('linkedin')} />
             </div>

             <button type="submit" className="btn btn-primary nbtn my-1">Submit</button>
        </form>
    );

    const showError = () => (
        <div className="alert p-1 nbtn bg-danger" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    );

    const showSuccess = () => (
        <div className="alert  p-1 nbtn bg-success" style={{ display: success ? '' : 'none' }}>
            Profile updated
        </div>
    );

    const showLoading = () => (
        <div className="alert p-1 nbtn bg-primary" style={{ display: loading ? '' : 'none' }}>
            Loading...
        </div>
    );

    return (
        <React.Fragment>

            <div className="container">
        

            <h1 className="text-primary large">Mess up with your profile</h1>
            <p className="lead">Create or edit your profile</p>
            <div>
             {showSuccess()}
             {showError()}
             {showLoading()}
             
            </div>
            <div className="line"></div>
            <div className="avatar-upload" style={{margin:'auto'}}>
              <div className="avatar-preview"><img src={`${API}/user/photo/${username}`}  alt="" /></div>
            </div>
            {profileUpdateForm()}
            </div>
        </React.Fragment>
    );
}

export default ProfileUpdate;