import Admin from '../../../components/auth/Admin';
import BlogCreate from '../../../components/crud/BlogCreate';
import Head from 'next/head';
import {APP_NAME} from '../../../config'

const Blog = () => {
  const head = () => (
    <Head>
        <title>
            Create Blog | The {APP_NAME}
        </title>
        <meta name="robots" content="noindex nofollow" />
    </Head>
)
    return (
      <>
      {head()}
   <Admin>
      <BlogCreate />
   </Admin>
      </>
         
       
    );
};

export default Blog;