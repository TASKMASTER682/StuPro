import Admin from '../../../components/auth/Admin';
import JobCategory from '../../../components/jobcrud/JobCategory';
import JobTag from '../../../components/jobcrud/JobTag';
import Head from 'next/head';
import {APP_NAME} from '../../../config'


const JobCategoryTag = () => {
  const head = () => (
    <Head>
        <title>
            Create Job | The {APP_NAME}
        </title>
        <meta name="robots" content="noindex nofollow" />
    </Head>
)
    return (
        <>
        {head()}
            <Admin>
             <section className="pt-20 px-11">
             <h1 className="text-2xl font-bold text-teal-500">Manage Job Tags and Categories</h1>
             <hr />
               <h3 className=" text-lg font-bold ">Create a job category</h3>
               <JobCategory />
                 <h3 className="text-lg font-bold mt-6">Create a job tag</h3>
                 <JobTag />
             </section>
            </Admin>
        </>

    );
};

export default JobCategoryTag;