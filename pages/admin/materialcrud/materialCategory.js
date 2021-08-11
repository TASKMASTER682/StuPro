import Admin from '../../../components/auth/Admin';
import MaterialCategory from '../../../components/materialCrud/MaterialCategory';
import Head from 'next/head';
import {APP_NAME} from '../../../config'


const MaterialCatCreate = () => {
  const head = () => (
    <Head>
        <title>
            Manage Material Category | The {APP_NAME}
        </title>
        <meta name="robots" content="noindex nofollow" />
    </Head>
)
    return (
        <>
        {head()}
            <Admin>
             <section className="container">
             <h1 className="large text-primary">Manage Job Tags and Categories</h1>
             <div className="line"></div>
               <h3 className="text-dark">Create a job category</h3>
               <MaterialCategory />
             </section>
            </Admin>
        </>

        
    );
};

export default MaterialCatCreate;