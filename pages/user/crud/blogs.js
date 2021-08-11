import Private from '../../../components/auth/Private';
import BlogRead from '../../../components/crud/BlogRead';
import Head from 'next/head';
import { isAuth } from '../../../actions/auth';
import {APP_NAME} from '../../../config'


const Blogs = () => {
const username = isAuth() && isAuth().username;
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
                <BlogRead  username={username} />
            </Private>
        </>

       
    );
};

export default Blogs;