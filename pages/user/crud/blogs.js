import Private from '../../../components/auth/Private';
import BlogRead from '../../../components/crud/BlogRead';
import Link from 'next/link';
import { isAuth } from '../../../actions/auth';

const Blogs = () => {
const username = isAuth() && isAuth().username;
    return (
           <Private>
                <BlogRead  username={username} />
            </Private>
       
    );
};

export default Blogs;