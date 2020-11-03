import Head from 'next/head';
import Link from 'next/link';
import { userPublicProfile } from '../../actions/user';
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../config';
import moment from 'moment';
import ContactForm from '../../components/form/ContactForm';

const UserProfile = ({ user, blogs, query }) => {

    const head = () => (
        <Head>
            <title>
                {user.username} | {APP_NAME}
            </title>
            <meta name="description" content={`Blogs by ${user.username}`} />
            <link rel="canonical" href={`${DOMAIN}/profile/${query.username}`} />
            <meta property="og:title" content={`${user.username}| ${APP_NAME}`} />
            <meta property="og:description" content={`Blogs by ${user.username}`} />
            <meta property="og:type" content="webiste" />
            <meta property="og:url" content={`${DOMAIN}/profile/${query.username}`} />
            <meta property="og:site_name" content={`${APP_NAME}`} />

            <meta property="og:image" content={`${DOMAIN}/static/images/seoblog.jpg`} />
            <meta property="og:image:secure_url" content={`${DOMAIN}/static/images/seoblog.jpg`} />
            <meta property="og:image:type" content="image/jpg" />
            <meta property="fb:app_id" content={`${FB_APP_ID}`} />
        </Head>
    );

    const showUserBlogs = () => {
        return blogs.map((blog, i) => {
            return (
                <div  key={i}>
                    <Link href={`/blogs/${blog.slug}`}>
                        <a className="lead text-dark">{blog.title}</a>
                    </Link>
                </div>
            );
        });
    };

    return (
        <React.Fragment>
        {head()}
           <section className="container">
               <h2 className="large text-primary ">User Profile</h2>
               <div className="line"></div>
               <div className="blog p-1 ">
                   <div className="blog-top">
                   <div className="small text-success">
                   <img src={user.photo} alt={user.name} className="round-image"/>
                       {user.name}
                   </div>
                      <div>
                        <div className="icons p-1">
                               <Link href={`${user.profile}`}>
                                   <button className="btn nbtn btn-primary">View Profile</button>
                               </Link>
                           </div>
                           <p  className="extra-small text-light-gray">Joined {moment(user.createdAt).fromNow()}</p>
                      </div>
                   </div>
                   <div className="blog-body">
                       <h2 className="small text-primary my-1">Recent Blogs by {user.name}</h2>
                       {showUserBlogs()}
                   </div>
                   
                    <h3 className="text-primary small ">Message to {user.name}</h3>
                    
                    <ContactForm authorEmail={user.email} />
               </div>
                
           </section>
        </React.Fragment>
    );
};

UserProfile.getInitialProps = ({ query }) => {
    // console.log(query);
    return userPublicProfile(query.username).then(data => {
        if (data.error) {
            console.log(data.error);
        } else {
            // console.log(data);
            return { user: data.user, blogs: data.blogs, query };
        }
    });
};

export default UserProfile;


