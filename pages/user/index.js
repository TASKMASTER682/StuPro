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
   
 <Private>
 <div className=' lg:pt-20 lg:px-24 p-2'>
 <ul className='flex justify-around'>
 <li>
 <Link href="/user/crud/blog">
   <a className=" bg-teal-600 font-bold p-2 rounded-md"><AddCircleOutlineIcon style={{fontSize:15}}/><span></span> Create Blog</a>
</Link>
 </li>
 <li>
 <Link href="/user/crud/blogs">
        <a className=" bg-teal-600 font-bold p-2 rounded-md"><UpdateIcon  style={{fontSize:15}}/><span></span> Update/Delete Blog</a>
    </Link>
 </li>
 <li>
 <Link href="/user/update">
        <a className=" bg-teal-600 font-bold p-2 rounded-md"><AssignmentIndIcon  style={{fontSize:15}}/><span></span> Update Profile</a>
    </Link>
 </li>
 <li>
 <Link href="/user/addEducation">
        <a className=" bg-teal-600 font-bold p-2 rounded-md"><AssignmentIndIcon  style={{fontSize:15}}/><span></span>Add Education</a>
    </Link>
 </li>
 <li>
 <Link href="/user/addExperience">
        <a className=" bg-teal-600 font-bold p-2 rounded-md"><AssignmentIndIcon  style={{fontSize:15}}/><span></span>Add Experience</a>
    </Link>
 </li>

 <li>
 {isAuth() &&   <Link href={`/profile/${isAuth().username}`}> 
        <a className=" bg-teal-600 font-bold p-2 rounded-md"><EditIcon style={{fontSize:15}}/><span></span> Show My Profile</a>
    </Link>}
 </li>
 <li>
 {isAuth() &&   <Link href={`/profile/${isAuth().username}/cv`}> 
        <a className=" bg-teal-600 font-bold p-2 rounded-md"><EditIcon style={{fontSize:15}}/><span></span> Download CV</a>
    </Link>}
 </li>
 </ul>
 <Image loader={myLoader} className=" rounded-md p-2" height={1000} width={2000} src={`${DOMAIN}/img/stupro10.png`} blurDataURL="/img/blurr-min.jpg" placeholder='blur'  priority alt="support others" />
 </div>
</Private>

      
    )
}
export default UserIndex;
