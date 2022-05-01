import Head from 'next/head';
import { userPublicProfile } from '../../../actions/user';
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../../config';
import PdfConverter from '../../../components/reusables/PdfConverter';
import Private from '../../../components/auth/Private';
import {format} from 'date-fns';

const Cv = ({ user, blogs, query}) => {

    const head = () => (
        <Head>
            <title>
                Download Your CV | The {APP_NAME}
            </title>
            <meta name="robots" content="noindex nofollow" />
        </Head>
    )
    const showExperience=()=>{
        return user.experience.map((exp)=>{
            return(
                <div className='p-2 my-2 rounded-md shadow-md shadow-green-400'  key={exp._id}>
                <h2 className="font-bold text-red-500 ">{exp.title}</h2>
                <strong><span  className="font-bold text-teal-600 ">Company:</span> {exp.company} , {exp.location}</strong>
                <div className="my-1">
                <p  className="font-bold text-teal-600 ">Short Description</p>
                </div>
                <p className="my-1">{exp.description}</p>
                <div className="">
            <p className='font-bold text-teal-600 '  >From: {format(new Date(exp.from),'dd MMM yyyy')} - 
                {!exp.to ? 'Currently Doing':format(new Date(exp.to),'dd MMM yyyy')}
            </p>
                </div>
                </div>
            )
        })
    }

    const showEducation=()=>{
        return user.education.map((edu)=>{
            return(
                <div className='p-2 my-2 rounded-md shadow-md shadow-green-400'  key={edu._id}>
                <h2 className="font-bold text-red-500 ">{edu.school}</h2>
                <strong><span  className="font-bold text-teal-600 ">Degree:</span> {edu.degree}</strong>
                <div  className="my-1">
                <strong  className="font-bold text-teal-600 ">Short Description</strong>
                </div>
                <p className="my-1">{edu.description}</p>
                <div className="">
            <p className='font-bold text-teal-600 '  >From:{format(new Date(edu.from),'dd MMM yyyy')} - 
                {!edu.to ? 'Currently Doing':format(new Date(edu.to),'dd MMM yyyy')}
            </p>
                </div>
    
                </div>
            )
        })
    }
    const newUser=user.role===0 ? "user" : "admin" 

    return (
        <>
 <Private>
 {head()}
        <section className="p-4 lg:px-32 lg:pt-24" >
        <div className="flex flex-row justify-around p-4 my-1 rounded-md ring-1 ring-teal-500" >
        <a href="#pdfconverter" className="p-2 my-1 font-bold bg-red-400 ">Download your Cv</a>
        <a href={`/${newUser}/update`}  className="p-2 my-1 font-bold bg-red-400">Edit my CV</a>
        <a href={`/${newUser}/education`}  className="p-2 my-1 font-bold bg-red-400">Add Education</a>
        <a href={`/${newUser}/experience`} className="p-2 my-1 font-bold bg-red-400">Add Experience</a>
        </div>
        <p className="my-2">Or scroll down and click <span><strong>Download now</strong></span>  button</p>
        <PdfConverter>
        <div className="grid grid-cols-3 p-4 my-1 rounded-md ring-1 ring-teal-500" >
          <img loading='lazy' className='w-48 h-48 p-2 rounded-full shadow-md shadow-green-400' src={`${API}/user/photo/${user.username}`} alt={user.username} />
          <div className="col-span-2 p-1 rounded-md bg-gradient-to-r from-teal-400 to-green-300">
          <div className="flex flex-row justify-between p-2">
          <h1 className="text-3xl font-bold">{user.name}</h1>
          <p ><span><strong>Current Status:</strong></span>{user.status} </p>
          </div>
          <p >{user.about}</p></div>
        </div>

        <div className="flex flex-row flex-wrap justify-around p-4 my-4 rounded-md ring-1 ring-teal-500" >
        <h3 className="p-2 text-2xl font-bold text-teal-400">My Expertise |</h3>
        {user.skills.map((skill,i)=>(
               <div key={i} className='p-2 text-lg' >
                  <h3 >{skill} </h3>
               </div>
           ))}

        </div>
        <div className="flex flex-row flex-wrap justify-around p-4 my-4 rounded-md bg-gradient-to-r from-teal-400 to-green-300" >
        <h3 className="p-2 text-2xl font-bold">My Hobbies |</h3>
        {user.hobbies.map((h,i)=>(
               <div key={i} >
                  <h3 >{h} </h3>
               </div>
           ))}

        </div>
        <div className="grid grid-cols-2 gap-4 ">

        <div className='p-2 rounded-md ring-1 ring-teal-400' >
                <h1 className="p-1 text-xl font-bold bg-teal-200 ">Educational Details</h1>

                {showEducation()}
        
        </div>
        
        <div className='p-2 rounded-md ring-1 ring-teal-400'>
                <h1 className="p-1 text-xl font-bold bg-teal-200 ">Experience Details</h1>

                {showExperience()}
        
        </div>
        </div>
        </PdfConverter>
        </section>


        </Private>
        </>
       
    );
};

  
export const getServerSideProps = ({ query }) => {
    return userPublicProfile(query.username).then(data => {
        if (data.error) {
            console.log(data.error);
        } else {
           
            return {
                props:{user: data.user,
                     blogs: data.blogs, 
                     query } 
                    
            };
        }
    });
};

export default Cv;
