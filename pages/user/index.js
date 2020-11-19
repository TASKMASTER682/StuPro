import Private from '../../components/auth/Private';
import Link from 'next/link';
import Image from 'next/image';


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
 
    <Image  className="nbtn my-1" height={1000} width={2000} src="/img/stupro10.png"  sizes='40vw' priority alt="support others" />
</div>
      
    </div>
    </section>
       </Private>
    )
}
export default UserIndex;