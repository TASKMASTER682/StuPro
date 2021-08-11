import Admin from '../../../components/auth/Admin';
import JobCreate from '../../../components/jobcrud/JobCreate';
import Head from 'next/head';
import {APP_NAME} from '../../../config'

const Job = () => {
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
          <JobCreate />
        </Admin>
      </>

       
    );
};

export default Job;