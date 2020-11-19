import Link from 'next/link';
import {APP_NAME} from '../config';
import NProgress from 'nprogress';
import {signout,isAuth} from '../actions/auth';
import Router from "next/router"
import Image from "next/image"
import Search from './blogs/Search';


 Router.onRouteChangeStart=url=>NProgress.start()
 Router.onRouteChangeComplete=url=>NProgress.done()
 Router.onRouteChangeError=url=>NProgress.done()

const Navbar=()=>{
    return(
    <>
       <nav className='navbar bg-success'style={{height:'4rem'}}>
       <div className="py-1" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
         <a  href ="/">
          <Image src='/img/prograd.png' height={50} width={190}  priority style={{marginTop:'0.5rem'}}/>
          </a>
       
        <div className='hide-sm'>
        <Search />
        </div>
        </div>
        <ul >
            <li><h3><Link href="/jobs"><a>Jobs</a></Link></h3></li>
            <li><h3><Link href="/blogs"><a>Blogs</a></Link></h3></li>
            <li><h3><Link  href="/user/crud/blog"><a>Write a blog</a></Link></h3></li>
             <li><h3><Link href="/contact"><a>Contact</a></Link></h3></li>
            
         </ul>
         <ul>
              {isAuth() && isAuth().role === 0 && (
                   <>
                  <li><Link href="/user" ><a className="btn nbtn btn-dark "><i className="fas fa-user"></i> <span>{`${isAuth().name}'s Dashboard`}</span></a></Link></li>
                   </>
               )}
               {isAuth() && isAuth().role === 1 && (
                   <li><Link href="/admin" ><a  className="btn nbtn btn-dark "><i className="fas fa-user"></i> <span>{`${isAuth().name}'s Dashboard`}</span></a></Link></li>              )}
               {!isAuth() && ( 
              <>
                <li><a href="/signin"  className =" btn nbtn btn-dark">Sign in<span> </span><i className="fas fa-sign-in-alt"></i></a></li>
                <li><Link href="/signup"><a className ="btn nbtn btn-dark ">Sign up<span> </span><i className="fas fa-user-plus"></i></a></Link></li>
              </>
               )}
               
               {isAuth() && (
                 <>
                <li><button className ="btn nbtn btn-dark " style={{ cursor: 'pointer' }} onClick={() => signout(() => Router.replace(`/signin`))} >Signout <span> <i className="fas fa-sign-out-alt"></i> </span></button></li>
              </>
              )}
        </ul>
     </nav>
         <ul className="bottom-nav ">
         <li>
            <Link href="/blogs"><i className="fab fa-readme fa-2x text-dark "></i></Link>
         </li>
         <li>
           <Link  href="/jobs"><i className="fas fa-briefcase fa-2x text-dark "></i></Link>  
         </li>
         {!isAuth() && ( 
              <>
                <li><Link href="/signup"><a><i className="fas fa-user-plus fa-2x text-dark"></i></a></Link></li>
              </>
               )}
         <li>
             <Link href="/user/crud/blog"><i className="fas fa-plus-circle  fa-2x text-dark"></i></Link>
         </li>
         {isAuth() && isAuth().role === 0 && (
                   <>
                  <li><Link href="/user" ><a><i className="fas fa-columns text-dark fa-2x"></i></a></Link></li>
                   </>
               )}
               {isAuth() && isAuth().role === 1 && (
                   <li><Link href="/admin" ><a ><i className="fas fa-columns fa-2x text-dark"></i></a></Link></li>
            )}
         
         </ul>
   </>
    )
}
export default Navbar;