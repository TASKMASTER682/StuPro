import Admin from '../../components/auth/Admin';
import Link from 'next/link';
import Image from "next/image";
import {DOMAIN,APP_NAME} from '../../config'
import dynamic from 'next/dynamic';
import {allUsers} from '../../actions/user'
import {isAuth} from '../../actions/auth';


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
        {isAuth &&  <h1 className='gap-2 p-2 text-4xl font-bold text-success'>Admin's Dashboard</h1>}
        <div className='grid grid-cols-3'>
          <ul className='flex-col col-span-1 bg-teal-100'>
          <li className='p-2 text-xl font-bold text-teal-700'>Create</li>
          <li className='px-2 my-2' ><Link href='admin/materialcrud/create'><a className='p-2 font-bold text-white bg-black rounded-md'>Create Study Material</a></Link></li>
          <li className='px-2 my-4'><Link href='/admin/jobcrud/job' ><a className='p-2 font-bold text-white bg-black rounded-md'>Create Job</a></Link></li>
          <li className='px-2 my-4'><Link href='/admin/privatejobcrud/privateJob' ><a className='p-2 font-bold text-white bg-black rounded-md'>Create Private Job</a></Link></li>
          <li className='px-2 my-2'><Link href='/admin/crud/blog' ><a className='p-2 font-bold text-white bg-black rounded-md'>Create Blog</a></Link></li>
          <li className='p-2 text-xl font-bold text-teal-700'>Update</li>
          <li className='px-2 my-2' ><a href='/admin/crud/blogs' className='p-2 font-bold text-white bg-black rounded-md'>Update/Delete Blogs</a></li>
          <li className='px-2 my-4'><a href='/admin/jobcrud/jobs' className='p-2 font-bold text-white bg-black rounded-md'>Update/Delete Jobs</a></li>
          <li className='px-2 my-4'><a href='/admin/privatejobcrud/privateJobs' className='p-2 font-bold text-white bg-black rounded-md'>Update/Delete Pvt Job</a></li>
          <li className='px-2 my-2'>   <a  href='/admin/materialcrud/materials' className='p-2 font-bold text-white bg-black rounded-md'>Update/Delete Study Material</a></li>
          <li className='p-2 text-xl font-bold text-teal-700'>Categories</li>
          <li className='px-2 my-2' > <Link href='/admin/crud/category-tag'><a className='p-2 font-bold text-white bg-black rounded-md'>Edit Blog Category</a></Link></li>
          <li className='px-2 my-4'>   <Link href='/admin/jobcrud/jobs-category-tag' ><a className='p-2 font-bold text-white bg-black rounded-md'>Edit Job Category</a></Link></li>
          <li className='px-2 my-4'>   <Link href='/admin/materialcrud/materialCategory' ><a className='p-2 font-bold text-white bg-black rounded-md'>Edit Material Category</a></Link></li>
          </ul>
          <div className='col-span-2 p-2 bg-teal-50'>
            <ul className='flex flex-wrap justify-around p-4'>
            <li>
            <Link href="/admin/update">
            <a className="p-2 my-1 font-bold text-white rounded-md bg-success"><span></span> Update Profile</a>
            </Link>  
            </li>
            <li>
            <Link href="/admin/education">
            <a className="p-2 my-1 font-bold text-white rounded-md bg-success"><span></span> Add Education</a>
            </Link>
            </li>
            <li>
            <Link href="/admin/experience">
            <a className="p-2 my-1 font-bold text-white rounded-md bg-success"><span></span> Add Experience</a>
            </Link> 
            </li>
            <li>{isAuth() &&   <Link href={`/profile/${isAuth().username}`}> 
            <a className="p-2 my-1 font-bold text-white rounded-md bg-success"><span></span> Show My Profile</a>
            </Link>}</li>
            <li>{isAuth() &&   <Link href={`/profile/${isAuth().username}/cv`}> 
            <a className="p-2 my-1 font-bold text-white rounded-md bg-success"><span></span> Download CV</a>
            </Link>}</li>
            </ul>
           
            <ul className='h-screen my-8 overflow-scroll '>
            <li className='p-2 text-lg font-bold text-teal-700'>Our Users</li>
              {users.map((u,i)=>{
                return(
                  <li className='flex flex-row justify-between px-3 my-1 text-lg font-bold text-teal-500' key={i}>{u.name} <span className='font-bold text-red-500'>{u.email}</span></li>
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
