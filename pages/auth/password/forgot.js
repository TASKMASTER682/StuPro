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
            <div className="badge-danger">{error}</div>
        )
    }  
        
        
    const showMessage = (message) => {
        return(
            <div className="badge-primary">{message}</div>
        )
    }
         
        

    const passwordForgotForm = () => (
        <form onSubmit={handleSubmit} className="form">
            <div className="form-group py-1">
                <input
                    type="email"
                    onChange={handleChange('email')}
                  
                    value={email}
                    placeholder="Type your email"
                    required
                />
            </div>
            <div>
                <button className="btn nbtn btn-primary">Send password reset link</button>
            </div>
        </form>
    );

    return (
        <>
        {head()}
            <div className="container">
                <h2>Forgot password</h2>
                <div className="line"></div>
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