import {APP_NAME} from '../../config'
import Private from '../../components/auth/Private';
import ProfileUpdate from '../../components/auth/ProfileUpdate';
import Head from 'next/head';

const UserProfileUpdate = () => {

      const head = () => (
        <Head>
            <title>
               Update Profile |The {APP_NAME}
            </title>
            <meta name="robots" content="noindex nofollow"></meta>
        </Head>
    );
    return (
        <>
        {head()}
            <Private>
                <div>
                 <ProfileUpdate />
                </div>
            </Private>
        </>

        
    );
};

export default UserProfileUpdate;