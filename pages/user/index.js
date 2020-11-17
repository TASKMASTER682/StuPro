import Private from '../../components/auth/Private';
import Link from 'next/link';

const UserIndex=()=>{
    return(
    
       <Private>
            <section className="container">
        <div className='mobileDb'>
        <h1 className="large text-primary">
          User  Dashboard
        </h1>
          <div className="line"></div>
       <div className="dash-buttons">
    <Link href="/user/crud/blog">
        <a className="btn btn-primary  nbtn"><i class="fas fa-edit"></i><span></span> Create Blog</a>
    </Link>
    <Link href="/user/crud/blogs">
        <a className="btn  nbtn"><i class="fas fa-upload text-primary"></i><span></span> Update/Delete Blog</a>
    </Link>
  
    <Link href="/user/update">
        <a className="btn  nbtn"><i className="fas fa-user-edit text-primary"></i><span></span> Update Profile</a>
    </Link>
 
    <img  className="nbtn my-1" style={{maxHeight: '550px',width:'100%'}} src="img/stupro10.png" alt="" />
</div>
      
    </div>
    </section>
       </Private>
    )
}
export default UserIndex;