import Admin from '../../../components/auth/Admin';
import BlogCreate from '../../../components/crud/BlogCreate';
import Link from 'next/link';

const Blog = () => {
    return (
            <Admin>
               <BlogCreate />
             </Admin>
       
    );
};

export default Blog;