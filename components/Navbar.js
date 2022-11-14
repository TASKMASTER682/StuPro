import Link from 'next/link';
import React,{useState} from 'react';
import {signout,isAuth} from '../actions/auth';
import Router from "next/router";
import Image from "next/legacy/image";
import {DOMAIN} from '../config';


const Navbar=()=>{
  // const myLoader = (src) => {
  //   return `${DOMAIN}/img/${src}` 
  // }
  const [show,setShow]=useState(false);
  const [smallShow,setSmallShow]=useState(false);

    return(
    <>
    <nav className='fixed z-10 flex justify-between w-full bg-transparent shadow-md backdrop-blur-md '>
     <div className='flex justify-start '>
      <Link className='p-1' href ="/">
      
       <Image  src='/img/progradLogo.svg' height={40} width={120} placeholder='blur'  blurDataURL='/img/blurr-min.jpg' priority alt='prograd landing'/>
      
      </Link>
     </div>
<div>
<button  className='p-1 lg:hidden' onClick={()=>{setSmallShow(!smallShow)}} >
<svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 fill-black" viewBox="0 0 20 20" >
  <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd" />
</svg>
  </button>
  <ul className={` justify-end lg:flex-row left-0 flex flex-col-reverse  ${smallShow && 'hidden'}`  }>

<li className='py-2 m-2'>
<Link className="font-bold hover:text-green-700"  href="/about">
About
</Link>
</li>
<li className='py-2 m-2'>
<button className="font-bold hover:text-green-700" onClick={()=>{setShow(!show)}} >Our Services</button>
<div className={show ? 'p-2 mt-4 bg-teal-100 rounded-md lg:absolute':'hidden' }  >
   <ul className='space-y-2' >
     <li>
     <Link className='p-2 font-bold text-teal-700 rounded-md hover:bg-gray-100 hover:text-gray-800'   href="/jobs">
  Government Jobs
     </Link>
     </li>
     <li>
     <Link className='p-2 font-bold text-teal-700 rounded-md hover:bg-gray-100 hover:text-gray-800'  href="/privateJobs" >
     Private Jobs
       </Link>
     </li>
     <li>
     <Link className='p-2 font-bold text-teal-700 rounded-md hover:bg-gray-100 hover:text-gray-800' href="/free-study-material">
     Study Material
       </Link>
     </li>
     <li>
     <Link className='p-2 font-bold text-teal-700 rounded-md hover:bg-gray-100 hover:text-gray-800' href="/blogs">
     Blogs
       </Link>
     </li>
     <li>
     <a  href="/jobs/webstories" target="_blank"  className='p-2 font-bold text-teal-700 rounded-md hover:bg-gray-100 hover:text-gray-800' >Top WebStories</a>
     </li>
   </ul>

 </div>
</li>
<li className='py-2 m-2'>
<Link className="font-bold hover:text-green-700"  href="/free-cv-builder">
Create Cv
</Link>
</li>
<li className='py-2 m-2'>
<Link className="mx-2 font-bold hover:text-green-700" href="/contact">
Contact
</Link>
</li>


{isAuth() &&
<>
<li className='px-4 py-2 m-2 font-bold transition ease-in-out delay-150 bg-teal-300 rounded-sm hover:-translate-y-1 hover:scale-110'  ><Link href={isAuth().role===1 ? '/admin' :'/user'} >{`${isAuth().name} Dashboard`}</Link></li>
<li className ='px-4 py-2 m-2 transition ease-in-out delay-150 bg-teal-300 rounded-sm hover:-translate-y-1 hover:scale-110 '  ><button className='font-bold '  onClick={() => signout(() => Router.push('/signin'))} >Signout</button></li>
</> }   

</ul>

</div>
 
    </nav>
 
   </>
    )
}
export default Navbar;

