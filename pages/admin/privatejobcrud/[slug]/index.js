import Admin from '../../../../components/auth/Admin';
import PrivateJobUpdate from '../../../../components/privateJobCrud/PvtJobUpdate';
import Head from 'next/head';
import {APP_NAME} from '../../../../config'

const PvtJob = () => {
  const head = () => (
    <Head>
        <title>
            Update Private Job | The {APP_NAME}
        </title>
        <meta name="robots" content="noindex nofollow" />
    </Head>
)
    return (
        <>
        {head()}
          <Admin>
            <PrivateJobUpdate />
          </Admin>
        </>

        
    );
};

export default PvtJob;