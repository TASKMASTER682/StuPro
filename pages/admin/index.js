import Admin from '../../components/auth/Admin';
import Link from 'next/link';
import Image from "next/image";
import {DOMAIN,APP_NAME} from '../../config'
import dynamic from 'next/dynamic';
import {isAuth} from '../../actions/auth'
const AddCircleOutlineIcon =dynamic(()=>import('@material-ui/icons/AddCircleOutline'),{ssr:false}) ;
const UpdateIcon =dynamic(()=>import('@material-ui/icons/Update'),{ssr:false}) ;
const AssignmentIndIcon =dynamic(()=>import('@material-ui/icons/AssignmentInd'),{ssr:false}) ;
const EditIcon =dynamic(()=>import('@material-ui/icons/Edit'),{ssr:false}) ;
import Head from 'next/head';



const AdminDashboard=()=>{
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
        {head()}
<Admin>
     <section className="container">
        <div className='mobileDb'>
        <h1 className="large text-primary">
            Dashboard
        </h1>
 <div className="line"></div>
<div className="dash-buttons m-1">
<div className="dropdown my-1">
         <h3 className='dropbtn btn btn-primary nbtn'><AddCircleOutlineIcon style={{fontSize:15}}/><span></span> Create</h3>
         <div className="dropdown-content">
           <Link href='admin/materialcrud/create'><a>Create Study Material</a></Link>
           <Link href='/admin/jobcrud/job' ><a>Create Job</a></Link>
           <Link href='/admin/privatejobcrud/privateJob' ><a>Create Private Job</a></Link>
           <Link href='/admin/crud/blog' ><a>Create Blog</a></Link>
         </div>
</div>
<div className="dropdown my-1">
         <h3 className='dropbtn btn btn-primary nbtn'><UpdateIcon  style={{fontSize:15}}/><span></span> Update</h3>
         <div className="dropdown-content">
           <Link href='/admin/crud/blogs'><a>Update/Delete Blogs</a></Link>
           <Link href='/admin/jobcrud/jobs' ><a>Update/Delete Jobs</a></Link>
           <Link href='/admin/privatejobcrud/privateJobs' ><a>Update/Delete Pvt Job</a></Link>
           <Link href='/admin/materialcrud/materials' ><a>Update/Delete Study Material</a></Link>
         </div>
    </div>
    <div className="dropdown my-1">
         <h3 className='dropbtn btn btn-primary nbtn'><EditIcon style={{fontSize:15}}/><span></span>Categories</h3>
         <div className="dropdown-content">
           <Link href='"/admin/crud/category-tag'><a>Edit Blog Category</a></Link>
           <Link href='/admin/jobcrud/jobs-category-tag' ><a>Edit Job Category</a></Link>
           <Link href='/admin/privatejobcrud/privateJob-category-tag' ><a>Edit Pvt Job Category</a></Link>
           <Link href='/admin/materialcrud/materialCategory' ><a>Edit Material Category</a></Link>
         </div>
    </div>
    <Link href="/admin/update">
        <a className="btn btn-dark my-1 nbtn"><strong className="text-primary"><AssignmentIndIcon style={{fontSize:15}}/></strong><span></span> Update Profile</a>
    </Link>  
    <Link href="/admin/education">
        <a className="btn btn-dark my-1 nbtn"><strong className="text-primary"><AssignmentIndIcon style={{fontSize:15}}/></strong><span></span> Add Education</a>
    </Link>    
    <Link href="/admin/experience">
        <a className="btn btn-dark my-1 nbtn"><strong className="text-primary"><AssignmentIndIcon style={{fontSize:15}}/></strong><span></span> Add Experience</a>
    </Link> 

    {isAuth() &&   <Link href={`/profile/${isAuth().username}`}> 
        <a className="btn btn-dark  nbtn my-1"><strong className="text-primary"><EditIcon style={{fontSize:15}}/></strong><span></span> Show My Profile</a>
    </Link>}
    {isAuth() &&   <Link href={`/profile/${isAuth().username}/cv`}> 
        <a className="btn btn-danger  nbtn my-1"><strong className="text-primary"><EditIcon style={{fontSize:15}}/></strong><span></span> Download CV</a>
    </Link>}
    
    </div>

   
    <Image loader={myLoader} className="nbtn my-1" height={1000} width={2000} priority src={`${DOMAIN}/img/stupro10.png`} blurDataURL="/img/blurr-min.jpg" placeholder='blur' alt="The ProGrad" />
    
</div>
       
            
        
    </section>
       </Admin>
        </>

    )
}

export default AdminDashboard;
