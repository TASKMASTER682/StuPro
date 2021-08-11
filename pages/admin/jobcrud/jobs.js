import Layout from '../../../components/Layout';
import Admin from '../../../components/auth/Admin';
import JobRead from '../../../components/jobcrud/JobRead';
import Head from 'next/head';
import {APP_NAME} from '../../../config'

const Jobs = () => {
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
            <JobRead />
        </Admin>
        </>

       
    );
};

export default Jobs;