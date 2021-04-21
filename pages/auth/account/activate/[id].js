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


    const showLoading = () => (loading ? <div className="badge badge-primary p-1 nbtn">Loading...</div> : '');

    return (
        
            <div className="container">
                <h3 className=" lead py-2">Hey {name}, Ready to activate your account?</h3>
                <div>
                {showLoading()}
                {error && error}
                {success && <div className="badge badge-primary p-1 nbtn">
                You have successfully activated your account.<a href="/signin" className="btn btn-primary m-1 nbtn">Please signin</a>
                </div>
                }
                
                </div>
                
                
               
                {showButton && (
                    <button className="btn nbtn btn-primary" onClick={clickSubmit}>
                        Activate Account
                    </button>
                )}
            </div>
        
    );
};

export default withRouter(ActivateAccount);
