import Admin from '../../../components/auth/Admin';
import PrivateJobRead from '../../../components/privateJobCrud/PvtJobRead';
import Head from 'next/head';
import {APP_NAME} from '../../../config'


const PrivateJobs = () => {
    const head = () => (
        <Head>
            <title>
                Read Private Job | The {APP_NAME}
            </title>
            <meta name="robots" content="noindex nofollow" />
        </Head>
    )
    return (
        <>
        {head()}
        <Admin>
            <PrivateJobRead />
        </Admin>
        </>
    );
};

export default PrivateJobs;