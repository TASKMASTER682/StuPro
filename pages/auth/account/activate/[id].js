import { useState, useEffect } from 'react';
import jwt from 'jsonwebtoken';
import { withRouter } from 'next/router';
import { signup } from '../../../../actions/auth';

const ActivateAccount = ({ router }) => {
    const [values, setValues] = useState({
        name: '',
        token: '',
        error: '',
        loading: false,
        success: false,
        showButton: true
    });

    const { name, token, error, loading, success, showButton } = values;

    useEffect(() => {
        let token = router.query.id;
        if (token) {
            const { name } = jwt.decode(token);
            setValues({ ...values, name, token });
        }
    }, [router]);

    const clickSubmit = e => {
        e.preventDefault();
        setValues({ ...values, loading: true, error: false });
        signup({ token }).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error, loading: false, showButton: false });
            } else {
                setValues({ ...values, loading: false, success: true, showButton: false });
            }
        });
    };


    const showLoading = () => (loading ? <div className='bg-teal-400 p-2'>Loading...</div> : '');

    return (
        
            <div className="container">
                <h3 className='text-lg font-bold m-2'>Hey {name}, Ready to activate your account?</h3>
                <div>
                {showLoading()}
                {error && error}
                {success && <div className='bg-teal-400 rounded-md p-2 my-2'>
                You have successfully activated your account.<a href="/signin" className='bg-teal-300 rounded-md p-2 my-2'>Please signin</a>
                </div>
                }             
                </div>
                {showButton && (
                    <button className='bg-teal-500 rounded-md p-1 my-2' onClick={clickSubmit}>
                        Activate Account
                    </button>
                )}
            </div>
        
    );
};

export default withRouter(ActivateAccount);
