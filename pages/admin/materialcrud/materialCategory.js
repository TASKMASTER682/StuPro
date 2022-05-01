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
             <section className="lg:pt-20 lg:px-20 pt-14 px-3 mb-40">
             <h1 className="text-2xl font-bold text-teal-500">Manage Material Categories</h1>
             <hr />
               <h3 className="text-lg font-bold my-2">Create a material category</h3>
               <MaterialCategory />
             </section>
            </Admin>
        </>

        
    );
};

export default MaterialCatCreate;