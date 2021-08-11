import Head from 'next/head';
import dynamic from 'next/dynamic';
import { userPublicProfile } from '../../../actions/user';
import { API, DOMAIN, APP_NAME} from '../../../config';
import moment from 'moment';
const TwitterIcon =dynamic(async ()=>import('@material-ui/icons/Twitter'),{ssr:false});
const FacebookIcon =dynamic(async ()=>import('@material-ui/icons/Facebook'),{ssr:false});
const LinkedInIcon =dynamic(async ()=>import('@material-ui/icons/LinkedIn'),{ssr:false});
import LanguageIcon from '@material-ui/icons/Language';
import Private from '../../../components/auth/Private';


const UserProfile = ({ user, query}) => {



    const head = () => (
        <Head>
            <title>
                {user.username} | {APP_NAME}
            </title>
            <meta name="robots" content="noindex nofollow"></meta>
            <meta name="description" content={`Blogs by ${user.username}`} />
            <link rel="canonical" href={`${DOMAIN}/profile/${query.username}`} />
            <meta property="og:title" content={`${user.username}| ${APP_NAME}`} />
            <meta property="og:description" content={`Blogs by ${user.username}`} />
            <meta property="og:type" content="webiste" />
            <meta property="og:url" content={`${DOMAIN}/profile/${query.username}`} />
            <meta property="og:site_name" content={`The ${APP_NAME}`} />

            <meta property="og:image" content={`${DOMAIN}/img/stupro2.png`} />
            <meta property="og:image:secure_url" content={`${DOMAIN}/img/stupro2.png`} />
            <meta property="og:image:type" content="image/png" />
        </Head>
    );

const showEducation=()=>{
    return user.education.map((edu)=>{
        return(
            <div className='input-box p-1 my-1' style={{display:'block'}} key={edu._id}>
            <h2 className="text-success my-1">{edu.school}</h2>
            <strong><span  className="text-danger">Degree:</span> {edu.degree}</strong>
            <div  className="my-1">
            <strong  className="text-danger">Short Description</strong>
            </div>
            <p className="my-1">{edu.description}</p>
            <div className="bg-success">
        <strong  >From: {moment(edu.from).format('Do MMMM YYYY')} - 
            {!edu.to ? 'Currently Doing':moment(edu.to).format('Do MMMM YYYY')}
        </strong>
            </div>

            </div>
        )
    })
}
const showExperience=()=>{
    return user.experience.map((exp)=>{
        return(
            <div className='input-box p-1 my-1' style={{display:'block'}} key={exp._id}>
            <h2 className="text-success my-1">{exp.title}</h2>
            <strong><span  className="text-danger">Company:</span> {exp.company} , {exp.location}</strong>
            <div className="my-1">
            <strong  className="text-danger">Short Description</strong>
            </div>
            <p className="my-1">{exp.description}</p>
            <div className="bg-success">
        <strong  >From: {moment(exp.from).format('Do MMMM YYYY')} - 
            {!exp.to ? 'Currently Doing':moment(exp.to).format('Do MMMM YYYY')}
        </strong>
            </div>
            </div>
        )
    })
}
    return (
        <Private>
        {head()}
        <section className="container">

        <div className="profile py-1">

        <div className="profile-top p-1 input-box">
        <div className='position-top'>
          <div className="avatar-upload" style={{margin:'auto'}}>
            <div className="avatar-preview">
                <img loading='lazy' src={`${API}/user/photo/${user.username}`} alt={user.username} />
            </div>
          </div>
          <div className="p-1 profile-grad" >
          <div className="my-1 new-flex" style={{justifyContent:'space-between'}}>
          <h1 className="text-dark large">{user.name}</h1>
          <p ><span><strong>Current Status:</strong></span>{user.status} </p>

          </div>

          <p className="my-2" style={{color:'white'}}>{user.about}</p>
          </div>
        </div>
                <div className="input-box  my-1" >
                <div className="p-1 new-flex">
                <h3 className="text-primary small m-1">My Expertise |</h3>
               {user.skills.map((skill,i)=>(
               <div key={i} style={{marginTop:'1.4rem'}}>
                  <h3 >{skill} </h3>
               </div>
           ))}
                </div>

        </div>
        <div className="p-1 my-1 skills" >
        <h3 className="text-dark small my-2">My Social Links |</h3>
                <div className="new-flex my-1">
                 <a href={user.twitter} ><TwitterIcon style={{fontSize:'40',color:'white'}} className="m-1 " /></a>
                <a href={user.facebook}><FacebookIcon style={{fontSize:'40',color:'white'}} className="m-1" /></a>
                <a href={user.linkedin}><LinkedInIcon style={{fontSize:'40',color:'white'}} className="m-1" /></a>
                <a href={user.website}><LanguageIcon style={{fontSize:'40',color:'white'}} className="m-1" /></a>

                 </div>
        </div>
        <div className="edu-exp" >
        <div className='input-box p-1' style={{display:'block'}}>
                <h1 className="text-danger bg-primary small my-1">Educational Details</h1>

                {showEducation()}
        
        </div>

        <div className='input-box p-1' style={{display:'block'}}>
            <h1 className="text-danger small bg-dark my-1">Experience Details</h1>
                {showExperience()}
                

        </div>

        </div>
                <div className="p-1 my-1 skills" >
        <h3 className="text-dark small my-2">Hobbies |</h3>
                {user.hobbies.map((h,i)=>(
                  <div key={i} style={{marginTop:'1.4rem'}}>
                  <h3 >{h} </h3>
               </div>
           ))}
        </div>
        </div>
        


        </div>

        </section>
        </Private>
    );
};

export const getServerSideProps = ({ query }) => {
    
    return userPublicProfile(query.username).then(data => {
        if (data.error) {
            console.log(data.error);
        } else {
           
            return { 
                props:{
                    user: data.user, 
                    blogs: data.blogs, 
                    query 
                }
                
            };
        }
    });
};

export default UserProfile;


 

