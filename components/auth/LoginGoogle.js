import Router from 'next/router';
import React from 'react';
import GoogleLogin from 'react-google-login';
import { loginWithGoogle, authenticate, isAuth } from '../../actions/auth';
import { GOOGLE_CLIENT_ID } from '../../config';

const LoginGoogle = () => {
    const responseGoogle = response => {
        // console.log(response);
        const tokenId = response.tokenId;
        const user = { tokenId };

        loginWithGoogle(user).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                authenticate(data, () => {
                    if (isAuth() && isAuth().role === 1) {
                        Router.push(`/admin`);
                    } else {
                        Router.push(`/user`);
                    }
                });
            }
        });
    };

    return (
        <div>
            <GoogleLogin
                clientId={`${GOOGLE_CLIENT_ID}`}
                buttonText="Continue with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
               
            />
        </div>
    );
};

export default LoginGoogle;