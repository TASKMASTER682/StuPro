import { useState } from 'react';
import { withRouter } from 'next/router';
import { resetPassword } from '../../../../actions/auth';
import Head from 'next/head';
import {APP_NAME} from '../../../../config'

const ResetPassword = ({ router }) => {
    const head = () => (
        <Head>
            <title>
                Reset Password | The {APP_NAME}
            </title>
            <meta name="robots" content="noindex nofollow" />
        </Head>
    )
    const [values, setValues] = useState({
        name: '',
        newPassword: '',
        error: '',
        message: '',
        showForm: true
    });

    const { showForm, name, newPassword, error, message } = values;

    const handleSubmit = e => {
        e.preventDefault();
        resetPassword({
            newPassword,
            resetPasswordLink: router.query.id
        }).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error, showForm: false, newPassword: '' });
            } else {
                setValues({ ...values, message: data.message, showForm: false, newPassword: '', error: false });
            }
        });
    };

    const passwordResetForm = () => (
        <form onSubmit={handleSubmit} >
            
                <input
                    type="password"
                    onChange={e => setValues({ ...values, newPassword: e.target.value })}
                   
                    value={newPassword}
                    placeholder="Type new password"
                    required
                />
                <button className='bg-teal-500 p-2 rounded-md'>Change password</button>
            
        </form>
    );

    const showError=()=>(
        error ? <div className="bg-teal-500 p-2 rounded-md">{error}</div> : ''
    )

    const showMessage = () => (message ? <div className="bg-teal-500 p-2 rounded-md">{message}</div> : '');
    return (
      <>
      {head()}
          <div className="container">
                <h2 className='text-teal-700 font-bold my-2'>Reset password</h2>
                <div className="line"></div>
                <div>
                {showError()}
                {showMessage()}
               
                </div>
                {passwordResetForm()}
            </div>
      </>
  
       
    );
};

export default withRouter(ResetPassword);