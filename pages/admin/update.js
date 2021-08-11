import Admin from '../../components/auth/Admin';
import ProfileUpdate from '../../components/auth/ProfileUpdate';
import Head from 'next/head';
import {APP_NAME} from '../../config'


const UserProfileUpdate = () => {
    const head = () => (
        <Head>
            <title>
                Update Profile | The {APP_NAME}
            </title>
            <meta name="robots" content="noindex nofollow" />
        </Head>
    )
    return (
        <>
        {head()}
            <Admin>
                <div>
                 <ProfileUpdate />
                </div>
            </Admin>
        </>

        
    );
};

export default UserProfileUpdate;