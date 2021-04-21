import Private from '../../components/auth/Private';
import Link from 'next/link';
import Image from 'next/image';
import {DOMAIN} from '../../config';
import dynamic from 'next/dynamic';
const AddCircleOutlineIcon =dynamic(()=>import('@material-ui/icons/AddCircleOutline'),{ssr:false}) ;
const UpdateIcon =dynamic(()=>import('@material-ui/icons/Update'),{ssr:false}) ;
const AssignmentIndIcon =dynamic(()=>import('@material-ui/icons/AssignmentInd'),{ssr:false}) ;


const UserIndex=()=>{
    const myLoader = ({ src }) => {
        return `${DOMAIN}/img/stupro10.png`
      }

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
        <a className="btn btn-primary my-1 nbtn"><AddCircleOutlineIcon style={{fontSize:15}}/><span></span> Create Blog</a>
    </Link>
    <Link href="/user/crud/blogs">
        <a className="btn  nbtn my-1"><strong className="text-primary"><UpdateIcon  style={{fontSize:15}}/></strong><span></span> Update/Delete Blog</a>
    </Link>
  
    <Link href="/user/update">
        <a className="btn  nbtn my-1"><strong className="text-primary"><AssignmentIndIcon  style={{fontSize:15}}/></strong><span></span> Update Profile</a>
    </Link>
 
    <Image loader={myLoader} className="nbtn my-1" height={1000} width={2000} src={`${DOMAIN}/img/stupro10.png`}  priority alt="support others" />
</div>
      
    </div>
    </section>
       </Private>
    )
}
export default UserIndex;