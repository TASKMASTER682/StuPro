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
        <form onSubmit={handleSubmit} className="form">
            <div className="form-group py-5">
                <input
                    type="password"
                    onChange={e => setValues({ ...values, newPassword: e.target.value })}
                   
                    value={newPassword}
                    placeholder="Type new password"
                    required
                />
            </div>
            <div>
                <button className="btn nbtn btn-primary">Change password</button>
            </div>
        </form>
    );

    const showError=()=>(
        error ? <div className="badge badge-danger p-1 nbtn ">{error}</div> : ''
    )

    const showMessage = () => (message ? <div className="badge badge-primary p-1 nbtn">{message}</div> : '');
    return (
      <>
      {head()}
          <div className="container">
                <h2 className="large text-primary">Reset password</h2>
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