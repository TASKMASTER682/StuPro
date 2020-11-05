import Link from 'next/link';
import { useState } from 'react';
import {signup,preSignup,isAuth} from '../../actions/auth';
import LoginGoogle from './LoginGoogle';



const SignupComponent=()=>{

 const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        error: '',
        loading: false,
        message: '',
        showForm: true
    });

    const { name, email, password, error, loading, message, showForm } = values;

    const handleSubmit = e => {
        e.preventDefault();
        // console.table({ name, email, password, error, loading, message, showForm });
        setValues({ ...values, loading: true, error: false });
        const user = { name, email, password };

        preSignup(user).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error, loading: false });
            } else {
                setValues({
                    ...values,
                    name: '',
                    email: '',
                    password: '',
                    error: '',
                    loading: false,
                    message: data.message,
                    showForm: false
                });
            }
        });
    };

    const handleChange = name => e => {
        setValues({ ...values, error: false, [name]: e.target.value });
    };

   const signupForm=()=>{
        return(
        <>
            <section className="container">
        <div className="account">
            <div>

        <h1 className="large text-primary py-1">
            Sign up
        </h1>
        <form  className="form" onSubmit={handleSubmit}>
        <div className="form-group">
                <input  value={name} onChange={handleChange('name')} type="text" type="text"  placeholder="name" />
            </div>
           
            <div className="form-group">
                <input value={email} onChange={handleChange('email')} type="email"  placeholder="Email Address" />
            </div>
            <div className="form-group">
                <input   value={password} onChange={handleChange('password')} type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Sign up" className="btn nbtn btn-primary" />
        </form>
      <p className="my-1 text-light-gray "></p> 
      <div style={{textAlign:'center',margin:'auto',justifyContent:'center'}}>
        
      <span><h1 className="lead text-primary my-1">Sign up using Google</h1><p className="extra-small text-light-gray">Recommended</p></span>
       <LoginGoogle />
      </div>
      
    </div>
    <div className="second p-2 hide-sm">
        <div className="fst">
            <h2 className="text-dark">Register to help educated youth of India</h2>
           <img src="img/stupro2.png" alt="" />
        </div>
       
        <div>
            <p className="my-1 ">Already have an account?</p>
                <Link href="/signin"><a className="btn btn-dark" >Sign In</a></Link>
        
    </div>
    </div>
 
    </div>
    </section>
        </>
    )
   }

   return <React.Fragment>
   
   {signupForm()}
   </React.Fragment>;
}
export default SignupComponent;