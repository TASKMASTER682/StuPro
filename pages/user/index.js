import Private from '../../components/auth/Private';
import Link from 'next/link';
import Image from 'next/image';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import UpdateIcon from '@material-ui/icons/Update';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';


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
        <a className="btn btn-primary my-1 nbtn"><BorderColorIcon style={{fontSize:15}}/><span></span> Create Blog</a>
    </Link>
    <Link href="/user/crud/blogs">
        <a className="btn  nbtn my-1"><strong className="text-primary"><UpdateIcon  style={{fontSize:15}}/></strong><span></span> Update/Delete Blog</a>
    </Link>
  
    <Link href="/user/update">
        <a className="btn  nbtn my-1"><strong className="text-primary"><UpdateIcon  style={{fontSize:15}}/></strong><span></span> Update Profile</a>
    </Link>
 
    <Image  className="nbtn my-1" height={1000} width={2000} src="/img/stupro10.png"  priority alt="support others" />
</div>
      
    </div>
    </section>
       </Private>
    )
}
export default UserIndex;