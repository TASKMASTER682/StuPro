import Admin from '../../../components/auth/Admin';
import Create from '../../../components/materialCrud/Create';
import Head from 'next/head';
import {APP_NAME} from '../../../config'


const MaterialCreate = () => {
  const head = () => (
    <Head>
        <title>
            Create Material | The {APP_NAME}
        </title>
        <meta name="robots" content="noindex nofollow" />
    </Head>
)
    return (
      <>
      {head()}
        <Admin>
          <Create />
        </Admin>
      </>

       
    );
};

export default MaterialCreate;