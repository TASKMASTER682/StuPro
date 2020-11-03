import Layout from '../../../components/Layout';
import Admin from '../../../components/auth/Admin';
import JobCategory from '../../../components/jobcrud/JobCategory';
import JobTag from '../../../components/jobcrud/JobTag';
import Link from 'next/link';

const JobCategoryTag = () => {
    return (
        
            <Admin>
             <section className="container">
             <h1 className="large text-primary">Manage Job Tags and Categories</h1>
             <div className="line"></div>
               <h3 className="text-dark">Create a job category</h3>
               <JobCategory />
                 <div className="line my-2"></div>
                 <h3 className="text-dark">Create a job tag</h3>
                 <JobTag />
             </section>
            </Admin>
        
    );
};

export default JobCategoryTag;