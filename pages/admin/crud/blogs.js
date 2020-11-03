import Layout from '../../../components/Layout';
import Admin from '../../../components/auth/Admin';
import BlogRead from '../../../components/crud/BlogRead';
import Link from 'next/link';

const Blogs = () => {
    return (
        <Layout>
            <Admin>
                <BlogRead />
            </Admin>
        </Layout>
    );
};

export default Blogs;