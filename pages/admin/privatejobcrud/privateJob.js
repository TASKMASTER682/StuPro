import Admin from '../../../components/auth/Admin';
import PvtJobCreate from '../../../components/privateJobCrud/PvtJobCreate';
import Link from 'next/link';

const PrivateJob = () => {
    return (
            <Admin>
               <PvtJobCreate />
             </Admin>
       
    );
};

export default PrivateJob;