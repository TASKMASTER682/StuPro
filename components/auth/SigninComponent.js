import Router from 'next/router';
import Link from 'next/link';
import { useState ,useEffect} from 'react';
import { signin,authenticate,isAuth } from '../../actions/auth';
import LoginGoogle from './LoginGoogle';
import React from 'react';



const SigninComponent=()=>{

 const [values, setValues] = useState({
        email: '',
        password: '',
        error: '',
        loading: false,
        message: '',
        showForm: true
    });

    const { email, password, error, loading, message, showForm } = values;

    useEffect(()=>{
       isAuth() && Router.push('/');
    },[])

    const handleSubmit = e => {
        e.preventDefault();
        setValues({ ...values, loading: true, error: '' });
        const user = { email, password };

        signin(user).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error, loading: false });
            } else {
              
                authenticate(data,()=>{
                    if (isAuth() && isAuth().role === 1) {
                        Router.push(`/admin`);
                    } else {
                        Router.push(`/user`);
                    }
                })
                
            }
        });
    };

    const handleChange = name => e => {
        setValues({ ...values, error: false, [name]: e.target.value });
    };
const signinButton=loading ?'Please wait...':'Sign in'
    const signinForm=()=>{
         return(
    <div className='className=" lg:pt-36 pt-16 mb-16 px-2 lg:px-60 w-auto '>
    <div className='lg:grid lg:grid-cols-2 flex flex-col shadow-xl rounded-lg shadow-green-500'>
    <div className='rounded-md  p-2 bg-teal-200'>
    <h2 className='text-2xl font-bold text-center text-gray-600'>Hello mate! It seems you already registered on The ProGrad</h2>
    <img src="/img/login.svg" alt="" />
    <p className='font-bold text-lg text-gray-600'>Go on ! Fill your details and Sign in your account </p>

    </div>
    <div>
    <h2 className='text-2xl font-bold text-teal-600 text-center m-2'>Sign In Here</h2>
        <form onSubmit={handleSubmit} className='flex flex-col p-4'>
        <input value={email} onChange={handleChange('email')} type="email"  placeholder="Your Registerd Email Address" className='p-2 ring-2 ring-teal-500 rounded-md my-3 ' />
        <input   value={password} onChange={handleChange('password')} type="password" placeholder="Type Your Password" className='p-2 ring-2 ring-teal-500 rounded-md my-3 ' />
        <input type="submit" value={signinButton} className=" bg-teal-500 font-bold rounded-md p-2 my-3 " />
        </form>
        <ul className='flex justify-between '>
        <li className='text-sm font-bold text-teal-400 p-2'>Login using Google</li>
        <li className='text-teal-400 pl-4'><LoginGoogle /></li>
        </ul>
        <ul className='flex justify-between mt-4' >
        <li className="text-sm font-bold text-teal-400 p-2">Forgot Password?</li>
        <li className=' bg-teal-300 px-2 h-6 mr-4 rounded-md text-sm font-bold'><Link href="/auth/password/forgot"><a>Click to recover</a></Link></li>
        </ul>
        <p className='mt-4 pl-3 pb-2'>Don't have and Account yet? <span className='bg-red-400 p-1 px-2  rounded-md font-bold'><Link  href="/signup"><a >Sign Up</a></Link></span></p>

    </div>

    </div>

    </div>  
    )
  }
  const showError =() => {
    if (error) {
        return <div className='bg-red-400 p-2' style={{ display: error ? '' : 'none' }}>{error}</div>;
    }
};
   return (
        <React.Fragment>
            {showForm && signinForm()}
            {showError()}
        </React.Fragment>
    );
}

export default SigninComponent;
