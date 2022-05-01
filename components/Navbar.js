import Link from 'next/link';
import React,{useState} from 'react';
import {signout,isAuth} from '../actions/auth';
import Router from "next/router";
import Image from "next/image";
import {DOMAIN} from '../config';


const Navbar=()=>{
  // const myLoader = (src) => {
  //   return `${DOMAIN}/img/${src}` 
  // }
  const [show,setShow]=useState(false);
  const [smallShow,setSmallShow]=useState(false);

  // <?xml version="1.0" standalone="no"?>
  // <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
  //  "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">

    return(
    <>
    <nav className='fixed z-10 flex justify-between w-full bg-transparent shadow-md backdrop-blur-md '>
     <div className='flex justify-start '>
      <Link  href ="/">
       <a className='p-1'>
       <Image  src='/img/progradLogo.svg' height={40} width={120} placeholder='blur'  blurDataURL='/img/blurr-min.jpg' priority alt='prograd landing'/>
       </a>
      </Link>
     </div>
<div>
<button  className='p-1 lg:hidden' onClick={()=>{setSmallShow(!smallShow)}} >
<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 fill-black" viewBox="0 0 20 20" >
  <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd" />
</svg>
  </button>
  <ul className={` justify-end lg:flex-row left-0 flex flex-col-reverse  ${smallShow && 'hidden'}`  }>

<li className='py-2 m-2'>
<Link href="/about">
<a className="font-bold hover:text-green-700"  >About</a>
</Link>
</li>
<li className='py-2 m-2'>
<button className="font-bold hover:text-green-700" onClick={()=>{setShow(!show)}} >Our Services</button>
<div className={show ? 'p-2 mt-4 bg-teal-100 rounded-md lg:absolute':'hidden' }  >
   <ul className='space-y-2' >
     <li>
     <Link href="/jobs">
     <a className='p-2 text-teal-700 font-bold rounded-md hover:bg-gray-100 hover:text-gray-800'  >Government Jobs</a>
     </Link>
     </li>
     <li>
     <Link href="/privateJobs" >
     <a className='p-2 text-teal-700 font-bold rounded-md hover:bg-gray-100 hover:text-gray-800' >Private Jobs</a>
       </Link>
     </li>
     <li>
     <Link href="/free-study-material">
     <a  className='p-2 text-teal-700 font-bold rounded-md hover:bg-gray-100 hover:text-gray-800' >Study Material</a>
       </Link>
     </li>
     <li>
     <Link href="/blogs">
     <a  className='p-2 text-teal-700 font-bold rounded-md hover:bg-gray-100 hover:text-gray-800' >Blogs</a>
       </Link>
     </li>
   </ul>

 </div>
</li>
<li className='py-2 m-2'>
<Link href="/free-cv-builder">
<a className="font-bold hover:text-green-700" >Create Cv</a>
</Link>
</li>
<li className='py-2 m-2'>
<Link href="/contact">
<a className="mx-2 font-bold hover:text-green-700" >Contact</a>
</Link>
</li>

{/* drop down by me */}



{isAuth() &&
<>
<li className=' px-4 py-2 m-2 font-bold transition ease-in-out delay-150 bg-teal-300 rounded-sm hover:-translate-y-1 hover:scale-110'  ><Link href={isAuth().role===1 ? '/admin' :'/user'} ><a >{`${isAuth().name} Dashboard`}</a></Link></li>
<li className ='px-4 py-2 m-2 transition ease-in-out delay-150 bg-teal-300 rounded-sm hover:-translate-y-1 hover:scale-110 '  ><button className='font-bold '  onClick={() => signout(() => Router.push('/signin'))} >Signout</button></li>
</> }   

</ul>

</div>
 
    </nav>
 
   </>
    )
}
export default Navbar;

{/* <nav className=''>
    <div className="" >
 
    
     </div>
     <div className={show ? 'v' : 'm'}>
     <ul >
         <li><h3 className=''><Link href="/about"><a>About us</a></Link></h3></li>
         <li className="">
         <h3 className=''>Our Services</h3>
         <div className="">
           <Link href='/jobs'><a>Government Jobs</a></Link>
           <Link href='/privateJobs' ><a>Private Jobs</a></Link>
           <Link href='/instant-jobs' ><a>Instant Jobs</a></Link>
           <Link href='/free-study-material' ><a>Free Study Material</a></Link>
           <Link href='/user/crud/blog' ><a>Share Ideas</a></Link>
           <Link href='/blogs' ><a>Educational Blogs</a></Link>

         </div>
         </li>
        <li><h3 className=''><Link href="/contact"><a>Contact us</a></Link></h3></li> 
        <li><h3 className=''><Link href="/free-cv-builder"><a>Create CV</a></Link></h3></li> 
      </ul>
     </div>
<div className="auth-links">
<ul >
           {isAuth() && isAuth().role === 0 && (
                <>
               <li><Link href="/user" ><a className=""><AccountCircleIcon style={{fontSize:15}}/> <span className="text-light">{`${isAuth().name}'s Dashboard`}</span></a></Link></li>
                </>
            )}
            {isAuth() && isAuth().role === 1 && (
                <li><Link href="/admin" ><a  className=""><span> {`${isAuth().name}'s Dashboard`}</span></a></Link></li>              )}
            {!isAuth() && ( 
           <>
             <li><a href="/signin"  className =""><ExitToAppIcon style={{fontSize:15}}/>Sign in<span> </span></a></li>
             <li><Link href="/signup"><a className =""> Sign up <span> </span><PersonAddIcon style={{fontSize:16}}/></a></Link></li>
           </>
            )}
            
           
     </ul>
</div>

     <div className="p-1 hamburger"><MenuIcon onClick={()=>setShow(!show)} className="text-dark" style={{fontSize:40}} /></div>
  </nav>
         <ul className="bottom-nav " style={{zIndex:'1'}}>    
         {!isAuth() && (<li><strong><a href='/signin' className='text-dark'><PersonAddIcon style={{fontSize:35}}/></a></strong></li>)}
         {isAuth() && (<li><Link href={isAuth().role===1 ? '/admin' :'/user'} ><a className=''><DashboardIcon style={{fontSize:35}}/></a></Link></li>)}
         <li>
           <Link  href="/jobs"><a className=''><WorkIcon  style={{fontSize:35}}/></a></Link>  
         </li>
         <li>
           <Link  href="/privateJobs"><a className=''><BusinessIcon style={{fontSize:35}}/></a></Link>  
         </li>
         <li>
            <Link href="/blogs"><a className=''><LibraryBooksIcon style={{fontSize:35}}/></a></Link>
         </li>
         </ul> */}



         
