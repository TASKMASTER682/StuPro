import Admin from '../../../components/auth/Admin';
import PvtJobCreate from '../../../components/privateJobCrud/PvtJobCreate';
import Head from 'next/head';
import {APP_NAME} from '../../../config'

const PrivateJob = () => {
  const head = () => (
    <Head>
        <title>
            Create Private Job | The {APP_NAME}
        </title>
        <meta name="robots" content="noindex nofollow" />
    </Head>
)
    return (
      <>
      {head()}
        <Admin>
            <PvtJobCreate />
          </Admin>
      </>

       
    );
};

export default PrivateJob;