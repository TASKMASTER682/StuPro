import Layout from '../../../components/Layout';
import Admin from '../../../components/auth/Admin';
import BlogRead from '../../../components/crud/BlogRead';


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