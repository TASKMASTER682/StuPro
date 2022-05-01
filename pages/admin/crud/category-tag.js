import Layout from '../../../components/Layout';
import Admin from '../../../components/auth/Admin';
import Category from '../../../components/crud/Category';
import Tag from '../../../components/crud/Tag';
import Head from 'next/head';
import {APP_NAME} from '../../../config'


const CategoryTag = () => {
    const head = () => (
        <Head>
            <title>
                Manage Categories | The {APP_NAME}
            </title>
            <meta name="robots" content="noindex nofollow" />
        </Head>
    )
    return (
        <>
        {head()}
       
            <Admin>
             <section className='lg:pt-20 lg:px-20 pt-14 px-3 mb-40'>
             <h1 className="text-2xl font-bold text-teal-500">Manage Tags and Categories</h1>
             <hr />
               <h3 className="text-lg font-bold my-2">Create a Category</h3>
                 <Category />
                 <hr />
                    <h3 className="text-lg font-bold my-2">Create a Tag</h3>
                 <Tag />
             </section>
            </Admin>
       
        </>

    );
};

export default CategoryTag;