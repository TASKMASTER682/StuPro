import Layout from '../../components/Layout';
import Admin from '../../components/auth/Admin';
import ProfileUpdate from '../../components/auth/ProfileUpdate';
import Link from 'next/link';

const UserProfileUpdate = () => {
    return (
        
            <Admin>
                <div>
                 <ProfileUpdate />
                </div>
            </Admin>
        
    );
};

export default UserProfileUpdate;