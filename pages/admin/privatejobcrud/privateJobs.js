import Layout from '../../../components/Layout';
import Admin from '../../../components/auth/Admin';
import PrivateJobRead from '../../../components/privateJobCrud/PvtJobRead';
import Link from 'next/link';

const PrivateJobs = () => {
    return (
        
            <Admin>
                <PrivateJobRead />
            </Admin>
       
    );
};

export default PrivateJobs;