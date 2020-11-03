import Private from '../../../components/auth/Private';
import BlogCreate from '../../../components/crud/BlogCreate';
import Link from 'next/link';

const CreateBlog = () => {
    return (
       
            <Private>
                 <BlogCreate />
               </Private>
        
    );
};

export default CreateBlog;