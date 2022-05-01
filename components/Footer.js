import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import {DOMAIN} from '../config';

const Footer=()=>{
    const currentDate=new Date();
    const year=currentDate.getFullYear();
    // const myLoader = ( src ) => {
    //     return `${DOMAIN}/img/StuproLogo.png` 
    //   }
    return(
        <section className='grid gap-4 p-2 text-center bg-primary lg:grid-cols-4' >
        <div className='block' >
        <Image src='/img/StuproLogo.png' width={220} height={220}  alt="The ProGrad Logo" placeholder="blur" blurDataURL='/img/blurr-min.jpg' />
       
        <p className='text-xs text-gray-600' >
            © Copyright 2020 - {year}.The ProGrad - India <br /> All rights reserved 
        </p>
        </div>

        
            <div  >
            <h2 className='text-xl font-bold text-black'>Learn and Get hired</h2>
            <hr className='my-2 text-gray-900 ' />
           <p className="text-white">A platform bringing aspiring grads and excelling professionals togather. A perfect Indian platform to find govt Jobs, private Jobs, Work from home and instatnt Jobs.It is community that has a perfect ecosystem for every niche of education system.Get free pdf notes and much more study materials for your coming exams</p>
            </div>

            <div >
            <h2 className="text-xl font-bold text-black">Share what you have learnt</h2>
            <hr className='my-2 text-gray-900 ' />
           <p className="text-white">If you have knowlege to share ,a story to tell,or a perspective to offer - welcome to ProGrad.Share your knowledge as well as get study materials ,jobs, private jobs and you can also download your cv free of cost</p>
            </div>
            <div className='block'>
            <h2 className='text-xl font-bold text-black'>Quick Links</h2>
            <hr className='my-2 text-gray-900 ' />
            <ul>
                <li>
                <Link href="/about"><a className='font-bold' >About Us</a></Link>
                </li>
                <li>
                <Link href="/disclaimer" ><a className='font-bold'> Disclaimer</a></Link>
                </li>
                <li>
                <Link href="/contact" ><a className='font-bold'> Contact us</a></Link>
                </li>
                <li>
                <Link href="/privacy" ><a className='font-bold'>Terms of use | Privacy Policy </a></Link>
                </li>
                <li>
                <Link href="/sitemap.xml" ><a className='font-bold'>Sitemap</a></Link>  
                </li>
            </ul>
            <hr className='my-2 text-gray-900 ' />
            <ul className='flex p-2 pb-10 justify-evenly' >
            <li className='mx-2' ><a href="https://www.instagram.com/theprograd/"  target="_blank">
            <svg className='w-10 h-10 fill-zinc-900 hover:fill-gray-50' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>
            </a></li>
            <li className='mx-2'><a href="https://www.facebook.com/sayed.anwarulhaq.923" target="_blank" >
            <svg className='w-10 h-10 fill-zinc-900 hover:fill-gray-50' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a></li>
            <li className='mx-2'><a  href="https://t.me/theprograd" target="_blank" >
            <svg className='w-10 h-10 fill-zinc-900 hover:fill-gray-50' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Telegram</title><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
            </a></li>
            <li className='mx-2'><a href="http://feeds.feedburner.com/theprograd/feeds" target="_blank" >
            <svg className='w-10 h-10 fill-zinc-900 hover:fill-gray-50' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19.199 24C19.199 13.467 10.533 4.8 0 4.8V0c13.165 0 24 10.835 24 24h-4.801zM3.291 17.415c1.814 0 3.293 1.479 3.293 3.295 0 1.813-1.485 3.29-3.301 3.29C1.47 24 0 22.526 0 20.71s1.475-3.294 3.291-3.295zM15.909 24h-4.665c0-6.169-5.075-11.245-11.244-11.245V8.09c8.727 0 15.909 7.184 15.909 15.91z"/></svg>
            </a></li>
            <li className='mx-2'><a href="https://youtube.com/channel/UCFGm2Nfoqs0G29E38B1GZxw" target="_blank" >
            <svg className='w-10 h-10 fill-zinc-900 hover:fill-gray-50' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a></li>
            </ul>


                
            </div>
       

        </section>

    )
  
    
}
export default Footer;
