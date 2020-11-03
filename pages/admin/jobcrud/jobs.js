import Layout from '../../../components/Layout';
import Admin from '../../../components/auth/Admin';
import JobRead from '../../../components/jobcrud/JobRead';
import Link from 'next/link';

const Jobs = () => {
    return (
        
            <Admin>
                <JobRead />
            </Admin>
       
    );
};

export default Jobs;