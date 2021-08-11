import Private from '../../components/auth/Private';
import Link from 'next/link';
import Image from 'next/image';
import {isAuth} from '../../actions/auth'
import {DOMAIN,APP_NAME} from '../../config';
import dynamic from 'next/dynamic';
const AddCircleOutlineIcon =dynamic(()=>import('@material-ui/icons/AddCircleOutline'),{ssr:false}) ;
const UpdateIcon =dynamic(()=>import('@material-ui/icons/Update'),{ssr:false}) ;
const AssignmentIndIcon =dynamic(()=>import('@material-ui/icons/AssignmentInd'),{ssr:false}) ;
import Head from 'next/head';

const UserIndex=()=>{
    const myLoader = ({ src }) => {
        return `${DOMAIN}/img/stupro10.png`
      }
      const head = () => (
        <Head>
            <title>
               User Dashboard |The {APP_NAME}
            </title>
            <meta name="robots" content="noindex nofollow"></meta>
        </Head>
    );

    return(
    <>
    {head()}
 <Private>
            <section className="container">
        <div className='mobileDb'>
        <h1 className="large text-primary">
          User  Dashboard
        </h1>
          <div className="line"></div>
       <div className="dash-buttons">
    <Link href="/user/crud/blog">
        <a className="btn btn-primary my-1 nbtn"><AddCircleOutlineIcon style={{fontSize:15}}/><span></span> Create Blog</a>
    </Link>
    <Link href="/user/crud/blogs">
        <a className="btn  nbtn my-1"><strong className="text-primary"><UpdateIcon  style={{fontSize:15}}/></strong><span></span> Update/Delete Blog</a>
    </Link>
  
    <Link href="/user/update">
        <a className="btn  nbtn my-1"><strong className="text-primary"><AssignmentIndIcon  style={{fontSize:15}}/></strong><span></span> Update Profile</a>
    </Link>
    <Link href="/user/addEducation">
        <a className="btn  nbtn my-1"><strong className="text-primary"><AssignmentIndIcon  style={{fontSize:15}}/></strong><span></span>Add Education</a>
    </Link>
    <Link href="/user/addExperience">
        <a className="btn  nbtn my-1"><strong className="text-primary"><AssignmentIndIcon  style={{fontSize:15}}/></strong><span></span>Add Experience</a>
    </Link>
    {isAuth() &&   <Link href={`/profile/${isAuth().username}`}> 
        <a className="btn btn-dark  nbtn my-1"><strong className="text-primary"><EditIcon style={{fontSize:15}}/></strong><span></span> Show My Profile</a>
    </Link>}
    {isAuth() &&   <Link href={`/profile/${isAuth().username}/cv`}> 
        <a className="btn btn-danger  nbtn my-1"><strong className="text-primary"><EditIcon style={{fontSize:15}}/></strong><span></span> Download CV</a>
    </Link>}
 
    <Image loader={myLoader} className="nbtn my-1" height={1000} width={2000} src={`${DOMAIN}/img/stupro10.png`} blurDataURL="/img/blurr-min.jpg" placeholder='blur'  priority alt="support others" />
</div>
      
    </div>
    </section>
       </Private>
    </>
      
    )
}
export default UserIndex;