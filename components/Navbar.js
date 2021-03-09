import Link from 'next/link';
import {APP_NAME} from '../config';
import NProgress from 'nprogress';
import {signout,isAuth} from '../actions/auth';
import Router from "next/router";
import Image from "next/image";
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import WorkIcon from '@material-ui/icons/Work';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import BusinessIcon from '@material-ui/icons/Business';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
 Router.onRouteChangeStart=url=>NProgress.start()
 Router.onRouteChangeComplete=url=>NProgress.done()
 Router.onRouteChangeError=url=>NProgress.done()

const Navbar=()=>{
    return(
    <>
       <nav className='navbar bg-success'style={{height:'4rem'}}>
       <div className="py-1" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
         <Link  href ="/">
         <a>
          <Image src='/img/prograd.png' height={50} width={190}  priority style={{marginTop:'0.5rem'}}/>
          </a>
          </Link>
       
        </div>
        <ul >
            <li><h3><Link href="/jobs"><a>Jobs</a></Link></h3></li>
            <li><h3><Link href="/privateJobs"><a>Private Jobs</a></Link></h3></li>
            <li><h3><Link href="/blogs"><a>Educational Blogs</a></Link></h3></li>
            <li><h3><Link  href="/user/crud/blog"><a>Explain a Concept</a></Link></h3></li>
             <li><h3><Link href="/contact"><a>Contact</a></Link></h3></li>
            
         </ul>
         <ul>
              {isAuth() && isAuth().role === 0 && (
                   <>
                  <li><Link href="/user" ><a className="btn nbtn btn-dark my-1"><AccountCircleIcon style={{fontSize:15}}/> <span>{`${isAuth().name}'s Dashboard`}</span></a></Link></li>
                   </>
               )}
               {isAuth() && isAuth().role === 1 && (
                   <li><Link href="/admin" ><a  className="btn nbtn btn-dark p-1"><span> {`${isAuth().name}'s Dashboard`}</span></a></Link></li>              )}
               {!isAuth() && ( 
              <>
                <li><a href="/signin"  className =" btn nbtn btn-dark my-1"><ExitToAppIcon style={{fontSize:15}}/>Sign in<span> </span></a></li>
                <li><Link href="/signup"><a className ="btn nbtn btn-dark my-1"> Sign up <span> </span><PersonAddIcon style={{fontSize:16}}/></a></Link></li>
              </>
               )}
               
               {isAuth() && (
                 <>
                <li><button className ="btn nbtn btn-dark p-1" style={{ cursor: 'pointer' }} onClick={() => signout(() => Router.replace(`/signin`))} >Signout <ExitToAppIcon style={{fontSize:15}}/><span> <i className="fas fa-sign-out-alt"></i> </span></button></li>
              </>
              )}
        </ul>
     </nav>
         <ul className="bottom-nav " style={{zIndex:'1'}}>    
         {!isAuth() && (<li><strong><a href='/signin' className='text-dark'><PersonAddIcon style={{fontSize:42}}/></a></strong></li>)}
         {isAuth() && (<li><Link href={isAuth().role===1 ? '/admin' :'/user'} ><a className='text-dark'><DashboardIcon style={{fontSize:42}}/></a></Link></li>)}
         <li>
           <Link  href="/jobs"><a className='text-dark'><WorkIcon  style={{fontSize:42}}/></a></Link>  
         </li>
         <li>
           <Link  href="/privateJobs"><a className='text-dark'><BusinessIcon style={{fontSize:42}}/></a></Link>  
         </li>
         <li>
            <Link href="/blogs"><a className='text-dark'><LibraryBooksIcon style={{fontSize:42}}/></a></Link>
         </li>
         </ul>
   </>
    )
}
export default Navbar;
 