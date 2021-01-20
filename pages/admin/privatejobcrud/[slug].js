import Layout from '../../../components/Layout';
import Admin from '../../../components/auth/Admin';
import PrivateJobUpdate from '../../../components/privateJobCrud/PvtJobUpdate';
import Link from 'next/link';

const PvtJob = () => {
    return (
        
            <Admin>
              <PrivateJobUpdate />
            </Admin>
        
    );
};

export default PvtJob;