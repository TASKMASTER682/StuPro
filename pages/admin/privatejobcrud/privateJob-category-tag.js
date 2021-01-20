import Layout from '../../../components/Layout';
import Admin from '../../../components/auth/Admin';
import PvtJobCategory from '../../../components/privateJobCrud/PvtJobCategory';
import PvtJobTag from '../../../components/privateJobcrud/PvtJobTag';
import Link from 'next/link';

const PrivateJobCategoryTag = () => {
    return (
        
            <Admin>
             <section className="container">
             <h1 className="large text-primary">Manage Private Job Tags and Categories</h1>
             <div className="line"></div>
               <h3 className="text-dark">Create a job category</h3>
               <PvtJobCategory />
                 <div className="line my-2"></div>
                 <h3 className="text-dark">Create a job tag</h3>
                 <PvtJobTag />
             </section>
            </Admin>
        
    );
};

export default PrivateJobCategoryTag;