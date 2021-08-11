import Admin from '../../../../components/auth/Admin';
import JobUpdate from '../../../../components/jobcrud/JobUpdate';
import Head from 'next/head';
import {APP_NAME} from '../../../../config'

const Job = () => {
  const head = () => (
    <Head>
        <title>
            Update Job | The {APP_NAME}
        </title>
        <meta name="robots" content="noindex nofollow" />
    </Head>
)

    return (
      <>
      {head()}
        <Admin>
          <JobUpdate  />
        </Admin>
      </>
    );
};

export default Job;