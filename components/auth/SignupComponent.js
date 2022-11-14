import Link from 'next/link';
import { useState } from 'react';
import React from 'react';
import {signup,preSignup,isAuth} from '../../actions/auth';
import LoginGoogle from './LoginGoogle';
import Router from 'next/router';

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
                Router.push(`/activate`)
            }
        });
    };

    const handleChange = name => e => {
        setValues({ ...values, error: false, [name]: e.target.value });
    };

   const signupForm=()=>{
        return(
        
    
    <div className='className=" lg:pt-36 pt-16 mb-16 px-2 lg:px-60 w-auto '>
    <div className='lg:grid lg:grid-cols-2 flex flex-col shadow-xl rounded-lg shadow-green-500'>
    <div className='rounded-md  p-2 bg-teal-200'>
    <h2 className='text-2xl font-bold text-center text-gray-600'>Hello mate! Fill up your details and Signup</h2>
    <img src="/img/login.svg" alt="" />
    <p className='font-bold text-lg text-gray-600'>Register to be the part of our community</p>

    </div>
    <div>
    <h2 className='text-2xl font-bold text-teal-600 text-center m-2'>Sign Up Here</h2>
        <form onSubmit={handleSubmit} className='flex flex-col p-4'>
        <input  value={name} onChange={handleChange('name')} type="text"   placeholder="Your Good Name" className='p-2 ring-2 ring-teal-500 rounded-md my-3 ' />
        <input value={email} onChange={handleChange('email')} type="email"  placeholder="Your Email Address" className='p-2 ring-2 ring-teal-500 rounded-md my-3 ' />
        <input   value={password} onChange={handleChange('password')} type="password" placeholder="Set Your Password" className='p-2 ring-2 ring-teal-500 rounded-md my-3 ' />
        <input type="submit" value={loading ?'Signing up...':'Sign Up'} className=" bg-teal-500 font-bold rounded-md p-2 my-3 " />
        </form>
        <ul className='flex justify-between '>
        <li className='text-sm font-bold text-teal-400 p-2'>Sign Up using Google</li>
        <li className='text-teal-400 pl-4'><LoginGoogle /></li>
        </ul>
        <ul className='flex justify-between mt-4' >
        <li className="text-sm font-bold text-teal-400 p-2">Already have an account?</li>
        <Link className='bg-red-400 rounded-md p-1 px-3 m-2 font-bold'  href="/signin">Sign In</Link>
        </ul>
    </div>

    </div>

    </div>
      
  
        
    )
   }
   const showError = () => {
    if (error) {
        return <div className='bg-red-400 p-2 ' style={{ display: error ? '' : 'none' }}>{error}</div>;
    }
};
   return <React.Fragment>
   
   {signupForm()}
   {showError()}
   </React.Fragment>;
}
export default SignupComponent;


