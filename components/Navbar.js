import Link from 'next/link';
import React,{useState} from 'react';
import dynamic from 'next/dynamic';                                     
// import NProgress from 'nprogress';
import {signout,isAuth} from '../actions/auth';
import Router from "next/router";
import Image from "next/image";
import {DOMAIN} from '../config';
const LibraryBooksIcon=dynamic(()=>import('@material-ui/icons/LibraryBooks'),{ssr:false}) ;
const WorkIcon=dynamic(async ()=>import('@material-ui/icons/Work'),{ssr:false}) ;
const PersonAddIcon=dynamic(async ()=>import('@material-ui/icons/PersonAdd'),{ssr:false}) ;
const BusinessIcon=dynamic(async ()=>import( '@material-ui/icons/Business'),{ssr:false});
const DashboardIcon=dynamic(async ()=>import('@material-ui/icons/Dashboard'),{ssr:false}) ;
const ExitToAppIcon=dynamic(async ()=>import('@material-ui/icons/ExitToApp'),{ssr:false}) ;
const AccountCircleIcon=dynamic(async ()=>import( '@material-ui/icons/AccountCircle'),{ssr:false});
//  Router.onRouteChangeStart=url=>NProgress.start()
//  Router.onRouteChangeComplete=url=>NProgress.done()
//  Router.onRouteChangeError=url=>NProgress.done()
 import MenuIcon from '@material-ui/icons/Menu';

const Navbar=()=>{
  // const myLoader = (src) => {
  //   return `${DOMAIN}/img/${src}` 
  // }
  const [show,setShow]=useState(false)

    return(
    <>
 <nav className='navbar bg-success'>
    <div className="py-1" >
      <Link  href ="/">
      <a style={{marginTop:'0.5rem'}}>
       <Image  src='/img/prograd.png' height={50} width={190} placeholder='blur'  blurDataURL='/img/blurr-min.jpg' priority alt='prograd landing'/>
       </a>
       </Link>
    
     </div>
     <div className={show ? "mobile-menu":'desktop-menu'}>
     <ul >
         <li><h3 className='btn input-box btn-primary'><Link href="/about"><a>About us</a></Link></h3></li>
         <li className="dropdown">
         <h3 className='dropbtn btn  input-box btn-primary'>Our Services</h3>
         <div className="dropdown-content">
           <Link href='/jobs'><a>Government Jobs</a></Link>
           <Link href='/privateJobs' ><a>Private Jobs</a></Link>
           <Link href='/instant-jobs' ><a>Instant Jobs</a></Link>
           <Link href='/free-study-material' ><a>Free Study Material</a></Link>
           <Link href='/user/crud/blog' ><a>Share Ideas</a></Link>
           <Link href='/blogs' ><a>Educational Blogs</a></Link>

         </div>
         </li>
        <li><h3 className='btn  input-box btn-primary '><Link href="/contact"><a>Contact us</a></Link></h3></li> 
        <li><h3 className='btn  input-box btn-primary '><Link href="/free-cv-builder"><a>Create CV</a></Link></h3></li> 
      </ul>
     </div>
<div className="auth-links">
<ul >
           {isAuth() && isAuth().role === 0 && (
                <>
               <li><Link href="/user" ><a className="btn input-box btn-dark my-1"><AccountCircleIcon style={{fontSize:15}}/> <span className="text-light">{`${isAuth().name}'s Dashboard`}</span></a></Link></li>
                </>
            )}
            {isAuth() && isAuth().role === 1 && (
                <li><Link href="/admin" ><a  className=" input-box btn btn-dark my-1"><span> {`${isAuth().name}'s Dashboard`}</span></a></Link></li>              )}
            {!isAuth() && ( 
           <>
             <li><a href="/signin"  className =" btn input-box btn-dark"><ExitToAppIcon style={{fontSize:15}}/>Sign in<span> </span></a></li>
             <li><Link href="/signup"><a className ="btn input-box btn-dark "> Sign up <span> </span><PersonAddIcon style={{fontSize:16}}/></a></Link></li>
           </>
            )}
            
            {isAuth() && (
             <li><button className ="btn btn-dark p-1" style={{ cursor: 'pointer' }} onClick={() => signout(() => Router.replace(`/signin`))} >Signout <ExitToAppIcon style={{fontSize:15}}/><span> <i className="fas fa-sign-out-alt"></i> </span></button></li>
           )}
     </ul>
</div>

     <div className="hamburger p-1"><MenuIcon onClick={()=>setShow(!show)} className="text-dark" style={{fontSize:40}} /></div>
  </nav>
         <ul className="bottom-nav " style={{zIndex:'1'}}>    
         {!isAuth() && (<li><strong><a href='/signin' className='text-dark'><PersonAddIcon style={{fontSize:35}}/></a></strong></li>)}
         {isAuth() && (<li><Link href={isAuth().role===1 ? '/admin' :'/user'} ><a className='text-dark'><DashboardIcon style={{fontSize:35}}/></a></Link></li>)}
         <li>
           <Link  href="/jobs"><a className='text-dark'><WorkIcon  style={{fontSize:35}}/></a></Link>  
         </li>
         <li>
           <Link  href="/privateJobs"><a className='text-dark'><BusinessIcon style={{fontSize:35}}/></a></Link>  
         </li>
         <li>
            <Link href="/blogs"><a className='text-dark'><LibraryBooksIcon style={{fontSize:35}}/></a></Link>
         </li>
         </ul>

   </>
    )
}
export default Navbar;
 // "prop-types": "^15.7.2",
// "fs": "0.0.1-security",
