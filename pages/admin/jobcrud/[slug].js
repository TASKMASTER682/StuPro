import Layout from '../../../components/Layout';
import Admin from '../../../components/auth/Admin';
import JobUpdate from '../../../components/jobcrud/JobUpdate';
import Link from 'next/link';

const Job = () => {
    return (
        
            <Admin>
              <JobUpdate />
            </Admin>
        
    );
};

export default Job;