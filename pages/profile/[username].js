import Head from 'next/head';
import Link from 'next/link';
import { userPublicProfile,follow,unfollow } from '../../actions/user';
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../config';
import moment from 'moment';
import ContactForm from '../../components/form/ContactForm';

const UserProfile = ({ user, blogs, query}) => {


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

            <meta property="og:image" content={`${DOMAIN}/img/stupro2.png`} />
            <meta property="og:image:secure_url" content={`${DOMAIN}/img/stupro2.png`} />
            <meta property="og:image:type" content="image/png" />
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
           <div className="user">
            <div className="user-top">
                <img src={`${API}/user/photo/${user.username}`} alt="" className="round-image my-1" />
                <h1 className="large">{user.name}</h1>
                <p  className="extra-small text-light-gray">Joined {moment(user.createdAt).fromNow()}</p>
                <button className="btn btn-dark my-1" onClick={()=>followUser()}>Follow</button>
                <button className="btn btn-dark"onClick={()=>unfollowUser()}>Unfollow</button>

                <div className="icons my-1">
                <a href={user.twitter}><i className="fab fa-twitter lead m-1"></i></a>
                <a href={user.facebook}><i className="fab fa-facebook lead m-1"></i></a>
                <a href={user.linkedin}><i className="fab fa-linkedin-in lead m-1"></i></a>
                <a href={user.insta}><i className="fab fa-instagram lead m-1"></i></a>
                </div>

            </div>
            <div className="user-about p-2 ">
                <h2 className="text-primary">About {user.name}</h2>
                <p>{user.about}</p>
                <div className="line"></div>
                <h2 className="text-dark my-1">Recent Blogs by {user.name}</h2>
                <div className="user-blog">
                    <p className="small text-dark my-1 p-2">{showUserBlogs()}</p>
                </div>
              
            </div>
            
        </div>
        <h3 className="text-primary small ">Message to {user.name}</h3>
            <ContactForm authorEmail={user.email} />                
           </section>
        </React.Fragment>
    );
};

UserProfile.getInitialProps = ({ query }) => {
    
    return userPublicProfile(query.username).then(data => {
        if (data.error) {
            console.log(data.error);
        } else {
           
            return { user: data.user, blogs: data.blogs, query };
        }
    });
};

export default withRouter(UserProfile);
