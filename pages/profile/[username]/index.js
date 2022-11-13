import Head from 'next/head';
import dynamic from 'next/dynamic';
import { userPublicProfile } from '../../../actions/user';
import { API, DOMAIN, APP_NAME} from '../../../config';
import {format} from 'date-fns';
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
            <div className='p-1 my-1 input-box' style={{display:'block'}} key={edu._id}>
            <h2 className="my-1 text-success">{edu.school}</h2>
            <strong><span  className="text-danger">Degree:</span> {edu.degree}</strong>
            <div  className="my-1">
            <strong  className="text-danger">Short Description</strong>
            </div>
            <p className="my-1">{edu.description}</p>
            <div className="bg-success">
        <strong  >From: {format(new Date(edu.from),'dd MMM yyyy')} - 
            {!edu.to ? 'Currently Doing':format(new Date(edu.to),'dd MMM yyyy')}
        </strong>
            </div>

            </div>
        )
    })
}
const showExperience=()=>{
    return user.experience.map((exp)=>{
        return(
            <div className='p-1 my-1 input-box' style={{display:'block'}} key={exp._id}>
            <h2 className="my-1 text-success">{exp.title}</h2>
            <strong><span  className="text-danger">Company:</span> {exp.company} , {exp.location}</strong>
            <div className="my-1">
            <strong  className="text-danger">Short Description</strong>
            </div>
            <p className="my-1">{exp.description}</p>
            <div className="bg-success">
        <strong  >From: {format(new Date(exp.from),'dd MMM yyyy')} - 
            {!exp.to ? 'Currently Doing':format(new Date(exp.to),'dd MMM yyyy')}
        </strong>
            </div>
            </div>
        )
    })
}
    return (
        <Private>
        {head()}
        <section className=" lg:px-32 lg:pt-24">
        <img loading='lazy' className='w-40 h-40 p-2 m-auto rounded-full shadow-md shadow-green-400' src={`${API}/user/photo/${user.username}`} alt={user.username} />
  
          <h1 className="my-1 text-3xl font-bold text-teal-400 hover:underline ">{user.name}</h1>
          <p ><span className='text-lg font-bold'>Current Status:</span>{user.status} </p>


          <p className="p-2 my-2 text-gray-600 rounded-md ring-2 ring-teal-400">{user.about}</p>
     
        
                <h3 className="m-1 text-lg font-bold text-teal-500 ">My Expertise |</h3>
               {user.skills.map((skill,i)=>(
               <div key={i} className='my-2' >
                  <p className='p-1 font-mono font-semibold'  >{skill} </p>
               </div>
           ))}

        <h3 className="m-1 text-lg font-bold text-teal-500">My Social Links |</h3>
             <div className="flex flex-row justify-around ">
                 <a href={user.twitter} >Twitter</a>
                <a href={user.facebook}>Facebook</a>
                <a href={user.linkedin}>Linked In</a>
                <a href={user.website}>Website</a>
              </div>
        <div className='grid grid-cols-2 gap-2'  >
        <div className='p-2 m-1 rounded-md ring-2 ring-teal-400'>
          <h1 className="text-lg font-bold text-teal-400 ">Educational Details</h1>
           {showEducation()}
        </div>

       <div className='p-2 m-1 rounded-md ring-2 ring-teal-400' >
        <h1 className="text-lg font-bold text-teal-400 ">Experience Details</h1>
          {showExperience()}
        </div>

       <div className="p-2 m-1 rounded-md ring-2 ring-teal-400" >
        <h3 className="text-lg font-bold text-teal-400 ">Hobbies |</h3>
                {user.hobbies.map((h,i)=>(
                  <div key={i} className='my-2' >
                  <h3 >{h} </h3>
               </div>
           ))}
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


 

