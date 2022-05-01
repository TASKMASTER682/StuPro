import { useState } from 'react';
import { forgotPassword } from '../../../actions/auth';
import Head from 'next/head';
import {APP_NAME} from '../../../config'

const ForgotPassword = () => {

    const head = () => (
        <Head>
            <title>
                Forgot Password | The {APP_NAME}
            </title>
            <meta name="robots" content="noindex nofollow" />
        </Head>
    )
    const [values, setValues] = useState({
        email: '',
        message: '',
        error: '',
        showForm: true
    });

    const { email, message, error, showForm } = values;

    const handleChange = name => e => {
        setValues({ ...values, message: '', error: '', [name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        setValues({ ...values, message: '', error: '' });
        forgotPassword({ email }).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                setValues({ ...values, message: data.message, email: '', showForm: false });
            }
        });
    };

    const showError = (error) => {
        return (
            <div className={` bg-red-400 p-2 ${!message ? 'hidden' : ''}`}>{error}</div>
        )
    }  
        
        
    const showMessage = (message) => {
        return(
            <div className={`bg-teal-300 p-2 ${!message ? 'hidden' : ''}`} >{message}</div>
        )
    }
         
        

    const passwordForgotForm = () => (
        <form onSubmit={handleSubmit} className='flex lg:flex-row flex-col justify-center' >
            
                <input
                    type="email"
                    onChange={handleChange('email')}
                    value={email}
                    placeholder="Type your registered email"
                    className='rounded-md ring-2 ring-teal-400 p-2 mx-2 lg:w-[70%]'
                    required
                />
         
            
                <button className='bg-green-400 p-2 rounded-md mx-2 font-bold text-white my-3 lg:my-0'>Send password reset link</button>
          
        </form>
    );

    return (
        <>
        {head()}
            <div className='lg:pt-20 pt-14 p-4 lg:px-40 mb-5'>
                <h2 className='text-lg font-bold my-3 text-red-500'>Forgot password</h2>
                <hr />
                <div>
                {showError()}
                {showMessage()}
               
                </div>

               
                {showForm && passwordForgotForm()}
            </div>
        </>

        
    );
};

export default ForgotPassword;