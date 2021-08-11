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
        <Layout>
            <Admin>
             <section className="container">
             <h1 className="large text-primary">Manage Tags and Categories</h1>
             <div className="line"></div>
               <h3 className="text-dark">Create a Category</h3>
                 <Category />
                 <div className="line my-2"></div>
                 <h3 className="text-dark">Create a Tag</h3>
                 <Tag />
             </section>
            </Admin>
        </Layout>
        </>

    );
};

export default CategoryTag;