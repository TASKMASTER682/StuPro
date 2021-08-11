import Layout from '../../../components/Layout';
import Admin from '../../../components/auth/Admin';
import PvtJobCategory from '../../../components/privateJobCrud/PvtJobCategory';
import PvtJobTag from '../../../components/privateJobCrud/PvtJobTag';
import Head from 'next/head';
import {APP_NAME} from '../../../config'


const PrivateJobCategoryTag = () => {
  const head = () => (
    <Head>
        <title>
            Manage Private Job Categories | The {APP_NAME}
        </title>
        <meta name="robots" content="noindex nofollow" />
    </Head>
)
    return (
        <>
        {head()}
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
        </>

        
    );
};

export default PrivateJobCategoryTag;