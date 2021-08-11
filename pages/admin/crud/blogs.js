import Layout from '../../../components/Layout';
import Admin from '../../../components/auth/Admin';
import BlogRead from '../../../components/crud/BlogRead';
import Head from 'next/head';
import {APP_NAME} from '../../../config'



const Blogs = () => {
    const head = () => (
        <Head>
            <title>
                Read Blogs | The {APP_NAME}
            </title>
            <meta name="robots" content="noindex nofollow" />
        </Head>
    )
    return (
        <>
    {head()}
      <Layout>
            <Admin>
                <BlogRead />
            </Admin>
        </Layout>
        </>
  
    );
};

export default Blogs;