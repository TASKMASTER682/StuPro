import Private from '../../../components/auth/Private';
import BlogUpdate from '../../../components/crud/BlogUpdate';
import Head from 'next/head';
import {APP_NAME} from '../../../config'


const Blog = () => {
  const head = () => (
    <Head>
        <title>
           Update Blog |The {APP_NAME}
        </title>
        <meta name="robots" content="noindex nofollow"></meta>
    </Head>
);
    return (
        <>
        {head()}
            <Private>
              <BlogUpdate />
            </Private>
        </>

      
    );
};

export default Blog;