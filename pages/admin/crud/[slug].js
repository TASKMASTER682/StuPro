import Layout from '../../../components/Layout';
import Admin from '../../../components/auth/Admin';
import BlogUpdate from '../../../components/crud/BlogUpdate';
import Link from 'next/link';

const Blog = () => {
    return (
        <Layout>
            <Admin>
              <BlogUpdate />
            </Admin>
        </Layout>
    );
};

export default Blog;