import Admin from '../../components/auth/Admin';
import Link from 'next/link';
import Image from "next/image";
import {DOMAIN} from '../../config'
import dynamic from 'next/dynamic';
const AddCircleOutlineIcon =dynamic(()=>import('@material-ui/icons/AddCircleOutline'),{ssr:false}) ;
const UpdateIcon =dynamic(()=>import('@material-ui/icons/Update'),{ssr:false}) ;
const AssignmentIndIcon =dynamic(()=>import('@material-ui/icons/AssignmentInd'),{ssr:false}) ;
const EditIcon =dynamic(()=>import('@material-ui/icons/Edit'),{ssr:false}) ;


const AdminDashboard=()=>{
    const myLoader = ({ src }) => {
        return `${DOMAIN}/img/stupro10.png`
      }

    return(
<Admin>
     <section className="container">
        <div className='mobileDb'>
        <h1 className="large text-primary">
            Dashboard
        </h1>
 <div className="line"></div>
<div className="dash-buttons">
    <Link href="/admin/jobcrud/job">
        <a className="btn btn-primary  nbtn"><AddCircleOutlineIcon style={{fontSize:15}}/><span></span> Create Job</a>
    </Link>
    <Link href="/admin/privatejobcrud/privateJob">
        <a className="btn btn-primary  nbtn"><AddCircleOutlineIcon style={{fontSize:15}}/><span></span> Create Private Job</a>
    </Link>
    <Link href="/admin/crud/blog">
        <a className="btn btn-primary  nbtn"><AddCircleOutlineIcon style={{fontSize:15}}/><span></span> Create Blog</a>
    </Link>
   <Link  href="/admin/crud/blogs">
        <a className="btn  nbtn"><strong className="text-primary"><UpdateIcon  style={{fontSize:15}}/></strong><span></span> Update/Delete Blog</a>
    </Link>
    <Link href="/admin/jobcrud/jobs">
        <a className="btn  nbtn"><strong className="text-primary"><UpdateIcon  style={{fontSize:15}}/></strong><span></span> Update/Delete Job</a>
    </Link>
    <Link href="/admin/privatejobcrud/privateJobs">
        <a className="btn  nbtn"><strong className="text-primary"><UpdateIcon  style={{fontSize:15}}/></strong><span></span> Update/Delete Pvt. Job</a>
    </Link>
    <Link href="/user/update">
        <a className="btn  nbtn"><strong className="text-primary"><AssignmentIndIcon style={{fontSize:15}}/></strong><span></span> Update Profile</a>
    </Link>      
    <Link href="/admin/crud/category-tag"> 
        <a className="btn  nbtn my-1"><strong className="text-primary"><EditIcon style={{fontSize:15}}/></strong><span></span> Edit Tag/Catagories</a>
    </Link>  
    <Link href="/admin/jobcrud/jobs-category-tag"> 
        <a className="btn  nbtn my-1"><strong className="text-primary"><EditIcon style={{fontSize:15}}/></strong><span></span> Edit job Tag/Catagories</a>
    </Link> 
    
    <Link href="/admin/privatejobcrud/privateJob-category-tag"> 
        <a className="btn  nbtn my-1"><strong className="text-primary"><EditIcon style={{fontSize:15}}/></strong><span></span> Edit Private job Tag/Catagories</a>
    </Link> 

   
    <Image loader={myLoader} className="nbtn my-1" height={1000} width={2000} priority src={`${DOMAIN}/img/stupro10.png`} alt="The ProGrad" />
    
</div>
       
            
        
    </div>
    </section>
       </Admin>
    )
}

export default AdminDashboard;