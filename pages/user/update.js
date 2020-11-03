import Layout from '../../components/Layout';
import Private from '../../components/auth/Private';
import ProfileUpdate from '../../components/auth/ProfileUpdate';


const UserProfileUpdate = () => {
    return (
        <Layout>
            <Private>
                <div>
                 <ProfileUpdate />
                </div>
            </Private>
        </Layout>
    );
};

export default UserProfileUpdate;