import Admin from '../../../components/auth/Admin';
import JobCreate from '../../../components/jobcrud/JobCreate';
import Link from 'next/link';

const Job = () => {
    return (
            <Admin>
               <JobCreate />
             </Admin>
       
    );
};

export default Job;