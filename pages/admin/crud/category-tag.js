import Layout from '../../../components/Layout';
import Admin from '../../../components/auth/Admin';
import Category from '../../../components/crud/Category';
import Tag from '../../../components/crud/Tag';
import Link from 'next/link';

const CategoryTag = () => {
    return (
        <Layout>
            <Admin>
             <section className="container">
             <h1 className="large text-primary">Manage Tags and Categories</h1>
             <div className="line"></div>
               <h3 className="text-dark">Create a Category</h3>
                 <Category />
                 <div className="line my-2"></div>
                 <h3 className="text-dark">Create a Tag</h3>
                 <Tag />
             </section>
            </Admin>
        </Layout>
    );
};

export default CategoryTag;