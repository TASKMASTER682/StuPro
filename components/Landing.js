import Link from 'next/link';
import Image from 'next/image';
import { DOMAIN } from '../config';
import dynamic from 'next/dynamic';
const JobHome = dynamic(async () => import('./jobs/JobHome'));

// const DisplayAd =dynamic(async ()=>import('./ads/DisplayAd'),{ssr:false}) ;
const Landing = ({ jobs }) => {
    // const myLoader = (src) => {
    //     return `${DOMAIN}/img/${src}`
    // }
    // , privateJobs,result,admitCard
    return (
       <section className='block '>
       <div className='p-4 bg-gradient-to-l from-green-400 to-orange-200'>
       <div className='flex flex-col-reverse rounded-lg lg:grid lg:grid-cols-2 lg:shadow-2xl lg:shadow-gray-900'>
       <div className='p-4 lg:pt-32 lg:pl-6'>
       <ul className='mb-9'>
       <li  className='mb-6 text-4xl subpixel-antialiased font-extrabold text-teal-700 lg:text-8xl'>The ProGrad</li>
       <li className='pl-4 mb-1 text-lg font-semibold text-gray-600 lg:text-xl lg:font-bold'> A Platform Bringing Aspiring Grads And Excelling Professionals Togather.</li>
        <li className='pl-4 mb-1 text-lg font-semibold text-gray-600 lg:text-xl lg:font-bold '> A Community That Has A Perfect Ecosystem For Every Niche Of <span>Education System.</span></li>
        <li className='pl-4 mb-1 text-lg font-semibold text-gray-600 lg:text-xl lg:font-bold '> A Perfect Indian platform to find <span >Govt Jobs ,Private Jobs , Work from home and instatnt Jobs</span></li>
       
       </ul>
       <ul className='flex flex-initial'>
         <li className='p-3 ml-2 mr-4 font-bold rounded-sm bg-gradient-to-r from-green-500 to-teal-400 ring-1 ring-black hover:bg-slate-600 hover:text-slate-100'><Link prefetch={false} href="/signup"><a>Signup Here</a></Link></li>
         <li className='p-3 ml-2 font-bold rounded-sm bg-slate-900 ring-1 ring-black hover:bg-slate-600 hover:text-slate-100'><Link prefetch={false}   href="/signin"><a className="px-4 py-2 font-bold text-green-300 " >Login</a></Link></li>
       </ul>

<h3 className='pt-3 pl-2 mt-3 text-lg font-bold'>Top Job Categories</h3>
<div className="relative flex overflow-x-hidden w-72">
<div className="flex py-12 animate-marquee whitespace-nowrap">
<a className='mx-4' href='/jobs/job-search/related-jobs?title=graduation'>
<span className="mx-2 text-xl"><svg xmlns="http://www.w3.org/2000/svg" className='fill-gray-800 w-14 h-14' viewBox="0 0 20 20">
  <path fillRule="evenodd" d="M10.496 2.132a1 1 0 00-.992 0l-7 4A1 1 0 003 8v7a1 1 0 100 2h14a1 1 0 100-2V8a1 1 0 00.496-1.868l-7-4zM6 9a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1zm3 1a1 1 0 012 0v3a1 1 0 11-2 0v-3zm5-1a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1z" clipRule="evenodd" />
</svg></span>
</a>
<a className='mx-4' href='/jobs/job-search/related-jobs?title=upsc'>
<span className="mx-2 text-xl"><svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 fill-gray-800" viewBox="0 0 20 20">
  <path fillRule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z" clipRule="evenodd" />
</svg></span>
</a>
<a className='mx-4' href='/jobs/job-search/related-jobs?title=12th%pass'>
<span className="mx-2 text-xl"><svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 fill-gray-800" viewBox="0 0 20 20">
  <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
</svg></span>
</a>
<a className='mx-4' href='/jobs/job-search/related-jobs?title=10th%pass'>
<span className="mx-2 text-xl"><svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 fill-gray-800" viewBox="0 0 20 20">
<path d="M2 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V4zM8 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H9a1 1 0 01-1-1V4zM15 3a1 1 0 00-1 1v12a1 1 0 001 1h2a1 1 0 001-1V4a1 1 0 00-1-1h-2z" />
</svg></span>
</a>
</div>


</div>
       </div>
       <div className='flex pt-12'>
       <Image src='/img/top-landing.svg' width={700} height={400}  alt="The ProGrad" placeholder='blur' blurDataURL='/img/blurr-min.jpg' />
       <ul className='flex flex-col justify-around lg:p-2' >
            <li className='mx-2' ><a href="https://www.instagram.com/theprograd/"  target="_blank">
            <svg className='w-8 h-8 fill-teal-800 hover:fill-slate-50' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>
            </a></li>
            <li className='mx-2'><a href="https://www.facebook.com/sayed.anwarulhaq.923" target="_blank" >
            <svg className='w-8 h-8 fill-teal-800 hover:fill-slate-50' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a></li>
            <li className='mx-2'><a  href="https://t.me/theprograd" target="_blank" >
            <svg className='w-8 h-8 fill-teal-800 hover:fill-slate-50' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Telegram</title><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
            </a></li>
            <li className='mx-2'><a href="http://feeds.feedburner.com/theprograd/feeds" target="_blank" >
            <svg className='w-8 h-8 fill-teal-800 hover:fill-slate-50' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19.199 24C19.199 13.467 10.533 4.8 0 4.8V0c13.165 0 24 10.835 24 24h-4.801zM3.291 17.415c1.814 0 3.293 1.479 3.293 3.295 0 1.813-1.485 3.29-3.301 3.29C1.47 24 0 22.526 0 20.71s1.475-3.294 3.291-3.295zM15.909 24h-4.665c0-6.169-5.075-11.245-11.244-11.245V8.09c8.727 0 15.909 7.184 15.909 15.91z"/></svg>
            </a></li>
            <li className='mx-2'><a href="https://youtube.com/channel/UCFGm2Nfoqs0G29E38B1GZxw" target="_blank" >
            <svg className='w-8 h-8 fill-teal-800 hover:fill-slate-50' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a></li>
            </ul>

       </div>
       </div>
       </div>
<h2 className='p-3 text-5xl font-bold text-center'>Latest Updates</h2>

<JobHome newRoute='job'  jobs={jobs} />

<h2 className='p-3 text-5xl font-bold text-center'>Our Services</h2>
<div className='flex flex-col px-4 my-3 lg:px-32'>
<div className='my-2 rounded-md shadow-md shadow-green-600'>
<h3 className='p-2 text-lg font-bold text-center text-green-400'>Stay Updated with Latest Job notifications</h3>
<div className='flex flex-col-reverse p-8 lg:grid lg:grid-cols-2 justify-evenly'>
<p className="p-2 lg:p-10"> Here you will get daily government Job updates as well as private job updates and instant job suggestions.If you will subscribe to our newsletter then it will be more easy for you to reach us directly from your gmail,As we will send you job updates on daily basis...Happy</p>
<Image className='float-right ' src='/img/notif.svg'  width={300} height={300}  alt="The ProGrad" blurDataURL="/img/blurr-min.jpg" placeholder='blur' />
</div>


</div>
<div className='my-2 rounded-md shadow-md shadow-green-600 '>
<h3 className='p-2 text-lg font-bold text-center text-green-400'>Resources Study Material</h3>
<div className='flex flex-col p-8 lg:grid lg:grid-cols-2 justify-evenly'>
<Image className='float-right w-12 h-12 ' src='/img/study.svg'  width={300} height={300}  alt="The ProGrad" blurDataURL="/img/blurr-min.jpg" placeholder='blur' />
<p className="p-2 lg:p-10">The study material ranges from elementary studies (6th 7th 8th 9th 10th class study material) to study material for job seekers.For elementary studies, we have our special edition of material for concept clarity.Whereas for the jobseekers and various competitive examinations such as UPSC examinations, state PSC (PCS), SSC, railways, engineering services, defense services exams we provide the study materials from various credible resources such as resonance study material Akash study material for NEET. Soon the study material in Hindi will also be provided.</p>
</div>
</div>
<div className='my-2 rounded-md shadow-md shadow-green-600 '>
<h3 className='p-2 text-lg font-bold text-center text-green-400'>Books</h3>
<div className='flex flex-col-reverse p-8 lg:grid lg:grid-cols-2 justify-evenly'>
<p className="p-2 lg:p-10">Books and other reference materials can be availed and downloaded for free e.g. the NCERT PDFs, the state board books pdf as well as other competitive exam books pdf along with the notes.</p>
<Image className='float-right ' src='/img/book.svg'  width={300} height={300}  alt="The ProGrad" blurDataURL="/img/blurr-min.jpg" placeholder='blur' />
</div>
</div>
<div className='my-2 rounded-md shadow-md shadow-green-600 '>
<h3 className='p-2 text-lg font-bold text-center text-green-400'>Videos</h3>
<div className='flex flex-col p-8 lg:grid lg:grid-cols-2 justify-evenly'>
<Image className='float-right w-12 h-12 ' src='/img/video.svg'  width={300} height={300}  alt="The ProGrad" blurDataURL="/img/blurr-min.jpg" placeholder='blur' />
<p className="p-2 lg:p-10">The ProGrad is the YouTube of education where motivated educational content creators are provided the platform for free which can be availed by the learners at their fingertips to have a heavenly learning experience.</p>
</div>
</div>
<div className='my-2 rounded-md shadow-md shadow-green-600 '>
<h3 className='p-2 text-lg font-bold text-center text-green-400'>Online Courses</h3>
<div className='flex flex-col-reverse p-8 lg:grid lg:grid-cols-2 justify-evenly'>
<p className="p-2 lg:p-10">For sufficiently qualified professionals the ProGrad provides an option to create specifically designed courses and study materials and conducted classes.</p>
<Image className='float-right ' src='/img/course.svg'  width={300} height={300}  alt="The ProGrad" blurDataURL="/img/blurr-min.jpg" placeholder='blur' />
</div>
</div>
<div className='my-2 rounded-md shadow-md shadow-green-600 '>
<h3 className='p-2 text-lg font-bold text-center text-green-400'>Tests</h3>
<div className='flex flex-col p-8 lg:grid lg:grid-cols-2 justify-evenly'>
<Image className='float-right w-12 h-12 ' src='/img/test.svg'  width={300} height={300}  alt="The ProGrad" blurDataURL="/img/blurr-min.jpg" placeholder='blur' />
<p className="p-2 lg:p-10">To assess whether you are on the right course of Your preparation the ProGrad provides tailor-made tests for specific exams. Take the online tests and be prepared. </p>
</div>
</div>
<div className='my-2 rounded-md shadow-md shadow-green-600 '>
<h3 className='p-2 text-lg font-bold text-center text-green-400'>Create Your CV</h3>
<div className='flex flex-col-reverse p-8 lg:grid lg:grid-cols-2 justify-evenly'>
<p className="p-2 lg:p-10">with the help of our free CV building tool, ProGrads can build a fabulous CV or free and get hired for the job of your dreams from our network.</p>
<Image className='float-right ' src='/img/cv.svg'  width={300} height={300}  alt="The ProGrad" blurDataURL="/img/blurr-min.jpg" placeholder='blur' />
</div>
</div>
<div className='my-2 rounded-md shadow-md shadow-green-600 '>
<h3 className='p-2 text-lg font-bold text-center text-green-400'>Get Hired</h3>
<div className='flex flex-col p-8 lg:grid lg:grid-cols-2 justify-evenly'>
<Image className='float-right w-12 h-12 ' src='/img/hire.svg'  width={300} height={300}  alt="The ProGrad" blurDataURL="/img/blurr-min.jpg" placeholder='blur' />
<p className="p-2 lg:p-10">The platform provides you a unique opportunity to grow your profile with The ProGrad and feature on the top priority list of the hiring parties for job openings of your choice and Get Hired</p>
</div>
</div>

</div>
      

</section>
    )
}


export default Landing;
