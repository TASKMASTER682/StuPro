import Admin from '../../components/auth/Admin';
import {isAuth} from '../../actions/auth';
import Link from 'next/link';
import Router from "next/router"


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
        <a className="btn btn-primary  nbtn"><i class="fas fa-edit"></i><span></span> Create Job</a>
    </Link>
    <Link href="/admin/crud/blog">
        <a className="btn btn-primary  nbtn"><i class="fas fa-edit"></i><span></span> Create Blog</a>
    </Link>
   <Link  href="/admin/crud/blogs">
        <a className="btn  nbtn"><i class="fas fa-upload text-primary"></i><span></span> Update/Delete Blog</a>
    </Link>
    <Link href="/admin/jobcrud/jobs">
        <a className="btn  nbtn"><i class="fas fa-upload text-primary"></i><span></span> Update/Delete Job</a>
    </Link>
    <Link href="/admin/update">
        <a className="btn  nbtn"><i className="fas fa-user-edit text-primary"></i><span></span> Update Profile</a>
    </Link>
   
    <Link href="/admin/crud/category-tag"> 
        <a className="btn  nbtn my-1"><i class="fas fa-pencil-alt text-primary"></i><span></span> Edit Tag/Catagories</a>
    </Link>  
    <Link href="/admin/jobcrud/jobs-category-tag"> 
        <a className="btn  nbtn my-1"><i class="fas fa-pencil-alt text-primary"></i><span></span> Edit job Tag/Catagories</a>
    </Link> 

   
    <img  className="nbtn my-1" style={{maxHeight: '550px',width:'100%'}} src="img/stupro10.png" alt="" />
    
</div>
       
            
        
    </div>
    </section>
       </Admin>
    )
}

export default AdminDashboard;