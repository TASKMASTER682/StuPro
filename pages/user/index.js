import Private from '../../components/auth/Private';
import Link from 'next/link';
import Image from 'next/legacy/image';
import {isAuth} from '../../actions/auth'
import {DOMAIN,APP_NAME} from '../../config';
import dynamic from 'next/dynamic';
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
 <Link className=" bg-teal-600 font-bold p-2 rounded-md" href="/user/crud/blog">
  <span></span> Create Blog
</Link>
 </li>
 <li>
 <Link className=" bg-teal-600 font-bold p-2 rounded-md" href="/user/crud/blogs">
        <span></span> Update/Delete Blog
    </Link>
 </li>
 <li>
 <Link className=" bg-teal-600 font-bold p-2 rounded-md" href="/user/update">
        <span></span> Update Profile
    </Link>
 </li>
 <li>
 <Link  className=" bg-teal-600 font-bold p-2 rounded-md" href="/user/addEducation">
        <span></span>Add Education
    </Link>
 </li>
 <li>
 <Link className=" bg-teal-600 font-bold p-2 rounded-md" href="/user/addExperience">
        <span></span>Add Experience
    </Link>
 </li>

 <li>
 {isAuth() &&   <Link href={`/profile/${isAuth().username}`}> 
        <a className=" bg-teal-600 font-bold p-2 rounded-md"><span></span> Show My Profile</a>
    </Link>}
 </li>
 <li>
 {isAuth() &&   <Link className=" bg-teal-600 font-bold p-2 rounded-md" href={`/profile/${isAuth().username}/cv`}> 
        <span></span> Download CV
    </Link>}
 </li>
 </ul>
 <Image loader={myLoader} className=" rounded-md p-2" height={1000} width={2000} src={`${DOMAIN}/img/stupro10.png`} blurDataURL="/img/blurr-min.jpg" placeholder='blur'  priority alt="support others" />
 </div>
</Private>

      
    )
}
export default UserIndex;
