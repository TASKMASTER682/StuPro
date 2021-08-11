import Head from 'next/head';
import { userPublicProfile } from '../../../actions/user';
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../../config';
import moment from 'moment';
import PdfConverter from '../../../components/reusables/PdfConverter';
import Private from '../../../components/auth/Private';

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
    const newUser=user.role===0 ? "user" : "admin" 

    return (
        <>
 <Private>
 {head()}
        <section className="container" style={{height:'3508px'}}>
        <div className="input-box p-1 my-1" style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly'}}>
        <a href="#pdfconverter" className="btn btn-danger my-1">Download your Cv</a>
        <a href={`/${newUser}/update`}  className="btn btn-danger my-1">Edit my CV</a>
        <a href={`/${newUser}/education`}  className="btn btn-danger my-1">Add Education</a>
        <a href={`/${newUser}/experience`} className="btn btn-danger my-1">Add Experience</a>


        </div>
        <p className="extra-small">Or scroll down and click <span><strong>Download now</strong></span>  button</p>
        <PdfConverter>
        <div className="p-1 input-box" style={{display:'grid',gridTemplateColumns:'2fr 6fr'}}>
        <div className="avatar-upload" style={{margin:'auto'}}>
            <div className="avatar-preview">
                <img loading='lazy' src={`${API}/user/photo/${user.username}`} alt={user.username} />
            </div>
          </div>
          <div className="p-1" style={{borderRadius:'0.7rem',background:'linear-gradient(#00cdbb, #00a79a)'}}>
          <div className="my-1" style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
          <h1 className="text-dark large">{user.name}</h1>
          <p ><span><strong>Current Status:</strong></span>{user.status} </p>

          </div>
          <p style={{color:'white'}}>{user.about}</p></div>
        </div>

        <div className="input-box p-1 my-1" style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly'}}>
        <h3 className="text-primary small m-1">My Expertise |</h3>
        {user.skills.map((skill,i)=>(
               <div key={i} style={{marginTop:'1.4rem'}}>
                  <h3 >{skill} </h3>
               </div>
           ))}

        </div>
        <div className="input-box p-1 my-1 bg-primary" style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly'}}>
        <h3 className="text-dark small m-1">My Hobbies |</h3>
        {user.hobbies.map((h,i)=>(
               <div key={i} style={{marginTop:'1.4rem'}}>
                  <h3 >{h} </h3>
               </div>
           ))}

        </div>
        <div className="p-1" style={{display:'grid',gridTemplateColumns:'1fr 1fr' ,gridGap:'1rem'}}>

        <div className='input-box p-1' style={{display:'block'}}>
                <h1 className="text-danger bg-primary small my-1">Educational Details</h1>

                {showEducation()}
        
        </div>
        
        <div className='input-box p-1' style={{display:'block'}}>
                <h1 className=" bg-dark small my-1">Experience Details</h1>

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