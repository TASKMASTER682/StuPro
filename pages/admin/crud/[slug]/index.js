import Layout from '../../../../components/Layout';
import Admin from '../../../../components/auth/Admin';
import AdminBlogUpdate from '../../../../components/crud/AdminBlogUpdate';
import Head from 'next/head';
import {APP_NAME} from '../../../../config'

const Blog = () => {
    const head = () => (
        <Head>
            <title>
                Update Blog | The {APP_NAME}
            </title>
            <meta name="robots" content="noindex nofollow" />
        </Head>
    )
    return (
        <>
        {head()}
        <Layout>
            <Admin>
              <AdminBlogUpdate />
            </Admin>
        </Layout>
        </>

    );
};

export default Blog;