import Private from '../../../components/auth/Private';
import BlogCreate from '../../../components/crud/BlogCreate';
import Head from 'next/head';
import {APP_NAME} from '../../../config'


const CreateBlog = () => {
  const head = () => (
    <Head>
        <title>
            Create Blog |The {APP_NAME}
        </title>
        <meta name="robots" content="noindex nofollow"></meta>
    </Head>
);
    return (
       <>
       {head()}
            <Private>
                 <BlogCreate />
               </Private>
       </>

        
    );
};

export default CreateBlog;