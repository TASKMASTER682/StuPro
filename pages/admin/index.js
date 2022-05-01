import Admin from '../../components/auth/Admin';
import Link from 'next/link';
import Image from "next/image";
import {DOMAIN,APP_NAME} from '../../config'
import dynamic from 'next/dynamic';
import {allUsers} from '../../actions/user'
import {isAuth} from '../../actions/auth';

const AddCircleOutlineIcon =dynamic(()=>import('@material-ui/icons/AddCircleOutline'),{ssr:false}) ;
const UpdateIcon =dynamic(()=>import('@material-ui/icons/Update'),{ssr:false}) ;
const AssignmentIndIcon =dynamic(()=>import('@material-ui/icons/AssignmentInd'),{ssr:false}) ;
const EditIcon =dynamic(()=>import('@material-ui/icons/Edit'),{ssr:false}) ;
import Head from 'next/head';

export async function getStaticProps(){

  return allUsers().then(data => {
      if (data.error) {
          console.log(data.error);
      } else {
          return {
              props:{
                  users: data
              },
              revalidate:60
          };
      }
  });
}


const AdminDashboard=({users})=>{
    const myLoader = ({ src }) => {
        return `${DOMAIN}/img/stupro10.png`
      }
      const head = () => (
        <Head>
            <title>
                {isAuth() && isAuth().name}'s Dashboard | The {APP_NAME}
            </title>
            <meta name="robots" content="noindex nofollow" />
        </Head>
    )
    return(
        <>
        <Admin>
        <div className='lg:px-20 lg:pt-24'>
        {isAuth &&  <h1 className='text-4xl text-success font-bold p-2 gap-2'>Admin's Dashboard</h1>}
        <div className='grid grid-cols-3'>
          <ul className='col-span-1 flex-col bg-teal-100'>
          <li className='text-xl font-bold p-2 text-teal-700'>Create</li>
          <li className='my-2 px-2' ><Link href='admin/materialcrud/create'><a className='bg-black rounded-md p-2 text-white font-bold'>Create Study Material</a></Link></li>
          <li className='my-4 px-2'><Link href='/admin/jobcrud/job' ><a className='bg-black rounded-md p-2 text-white font-bold'>Create Job</a></Link></li>
          <li className='my-4 px-2'><Link href='/admin/privatejobcrud/privateJob' ><a className='bg-black rounded-md p-2 text-white font-bold'>Create Private Job</a></Link></li>
          <li className='my-2 px-2'><Link href='/admin/crud/blog' ><a className='bg-black rounded-md p-2 text-white font-bold'>Create Blog</a></Link></li>
          <li className='text-xl font-bold p-2 text-teal-700'>Update</li>
          <li className='my-2 px-2' ><Link href='/admin/crud/blogs'><a className='bg-black rounded-md p-2 text-white font-bold'>Update/Delete Blogs</a></Link></li>
          <li className='my-4 px-2'><Link href='/admin/jobcrud/jobs' ><a className='bg-black rounded-md p-2 text-white font-bold'>Update/Delete Jobs</a></Link></li>
          <li className='my-4 px-2'><Link href='/admin/privatejobcrud/privateJobs' ><a className='bg-black rounded-md p-2 text-white font-bold'>Update/Delete Pvt Job</a></Link></li>
          <li className='my-2 px-2'>   <Link href='/admin/materialcrud/materials' ><a className='bg-black rounded-md p-2 text-white font-bold'>Update/Delete Study Material</a></Link></li>
          <li className='text-xl font-bold p-2 text-teal-700'>Categories</li>
          <li className='my-2 px-2' > <Link href='/admin/crud/category-tag'><a className='bg-black rounded-md p-2 text-white font-bold'>Edit Blog Category</a></Link></li>
          <li className='my-4 px-2'>   <Link href='/admin/jobcrud/jobs-category-tag' ><a className='bg-black rounded-md p-2 text-white font-bold'>Edit Job Category</a></Link></li>
          <li className='my-4 px-2'>   <Link href='/admin/materialcrud/materialCategory' ><a className='bg-black rounded-md p-2 text-white font-bold'>Edit Material Category</a></Link></li>
          </ul>
          <div className='col-span-2 bg-teal-50 p-2'>
            <ul className='flex flex-wrap justify-around p-4'>
            <li>
            <Link href="/admin/update">
            <a className="my-1  bg-success rounded-md p-2 text-white font-bold"><AssignmentIndIcon style={{fontSize:15}}/><span></span> Update Profile</a>
            </Link>  
            </li>
            <li>
            <Link href="/admin/education">
            <a className="my-1  bg-success rounded-md p-2 text-white font-bold"><AssignmentIndIcon style={{fontSize:15}}/><span></span> Add Education</a>
            </Link>
            </li>
            <li>
            <Link href="/admin/experience">
            <a className="my-1  bg-success rounded-md p-2 text-white font-bold"><AssignmentIndIcon style={{fontSize:15}}/><span></span> Add Experience</a>
            </Link> 
            </li>
            <li>{isAuth() &&   <Link href={`/profile/${isAuth().username}`}> 
            <a className="my-1  bg-success rounded-md p-2 text-white font-bold"><EditIcon style={{fontSize:15}}/><span></span> Show My Profile</a>
            </Link>}</li>
            <li>{isAuth() &&   <Link href={`/profile/${isAuth().username}/cv`}> 
            <a className="my-1  bg-success rounded-md p-2 text-white font-bold"><EditIcon style={{fontSize:15}}/><span></span> Download CV</a>
            </Link>}</li>
            </ul>
           
            <ul className='overflow-scroll h-screen my-8 '>
            <li className='text-teal-700 font-bold text-lg p-2'>Our Users</li>
              {users.map((u,i)=>{
                return(
                  <li className='px-3 my-1 flex flex-row text-lg justify-between font-bold text-teal-500' key={i}>{u.name} <span className='text-red-500 font-bold'>{u.email}</span></li>
                )

              })}
            </ul>
            
          </div>
        </div>

        </div>

       </Admin>
        </>

    )
}

export default AdminDashboard;
