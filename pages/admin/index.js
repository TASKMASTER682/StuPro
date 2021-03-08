import Admin from '../../components/auth/Admin';
import Link from 'next/link';
import Image from "next/image";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import UpdateIcon from '@material-ui/icons/Update';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import EditIcon from '@material-ui/icons/Edit';


const AdminDashboard=()=>{
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
    <Link href="/admin/update">
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

   
    <Image  className="nbtn my-1" height={1000} width={2000} priority src="/img/stupro10.png" alt="The ProGrad" />
    
</div>
       
            
        
    </div>
    </section>
       </Admin>
    )
}

export default AdminDashboard;