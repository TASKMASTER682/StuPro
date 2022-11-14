import Head from 'next/head';
import Link from 'next/link';
import { userPublicProfile } from '../../../actions/user';
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../../config';
import ContactForm from '../../../components/form/ContactForm';
import {format} from 'date-fns';

const PublicProfile = ({ user, blogs, query}) => {


    const head = () => (
        <Head>
            <title>
                {user.username} | The {APP_NAME}
            </title>
            <meta name="robots" content="noindex nofollow"></meta>
            <meta name="description" content={`Blogs by ${user.username}`} />
            <link rel="canonical" href={`${DOMAIN}/profile/${query.username}`} />
            <meta property="og:title" content={`${user.username}| ${APP_NAME}`} />
            <meta property="og:description" content={`Blogs by ${user.username}`} />
            <meta property="og:type" content="webiste" />
            <meta property="og:url" content={`${DOMAIN}/profile/${query.username}`} />
            <meta property="og:site_name" content={`${APP_NAME}`} />
            <meta property="og:image" content={`${DOMAIN}/img/stupro2.png`} />
            <meta property="og:image:secure_url" content={`${DOMAIN}/img/stupro2.png`} />
            <meta property="og:image:type" content="image/png" />
        </Head>
    );

    const showUserBlogs = () => {
        return blogs.map((blog, i) => {
            return (
        <div  key={i}>
        <div className='p-2 my-4 rounded-md shadow-md'>
                <Link href={`/jobs/${blog.slug}`}>
                 
                  <h3 className="text-lg font-bold text-gray-700 hover:underline">{blog.title}</h3>
                 
                </Link>
               
              
          </div>
          <div className="line"></div>
                </div>

            );
        });
    };

    return (
        <>
        {head()}
           <section className="lg:px-32 lg:pt-24">
           <img loading='lazy' src={`${API}/user/photo/${user.username}`} alt={user.username} className="w-40 h-40 p-2 m-auto my-1 rounded-full shadow-md shadow-green-400" />
            <div className='flex flex-col items-center'>
            <h1 className="my-1 text-4xl font-bold ">{user.name}</h1>
                <p  className="text-gray-500 ">Joined {format(new Date(user.createdAt),'dd MMM yyyy')}</p>
           
                <div className="flex flex-row flex-wrap justify-between">
                <a href={user.twitter}><i className="m-1 fab fa-twitter lead"></i></a>
                <a href={user.facebook}><i className="m-1 fab fa-facebook lead"></i></a>
                <a href={user.linkedin}><i className="m-1 fab fa-linkedin-in lead"></i></a>
                <a href={user.insta}><i className="m-1 fab fa-instagram lead"></i></a>
                </div>
            </div>


          
                <h2 className="my-1 text-xl font-bold text-teal-400">About {user.name}</h2>
                <p className='font-semibold'>{user.about}</p>
                <h2 className="my-1 text-xl font-bold text-teal-400 ">Recent Blogs by {user.name}</h2>
                <div className="flex flex-col p-2 ">
                    {showUserBlogs()}
                </div>
              
            
            
       
        <h3 className="my-2 text-red-500">Message to {user.name}</h3>
            <ContactForm authorEmail={user.email} />                
           </section>
        </>
    );
};

export const getServerSideProps = ({ query }) => {
    
    return userPublicProfile(query.username).then(data => {
        if (data.error) {
            console.log(data.error);
        } else {
           
            return {
               props: { 
                    user: data.user, 
                    blogs: data.blogs,
                     query
                 }

                };
        }
    });
};

export default PublicProfile;