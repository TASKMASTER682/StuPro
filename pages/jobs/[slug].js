import {useRouter} from 'next/router';
import dynamic from "next/dynamic";
import { API, DOMAIN, APP_NAME } from '../../config';
import renderHTML from 'react-render-html';
import UpdateButton from '../../components/reusables/UpdateButton';
const Share= dynamic(async ()=> import('../../components/Share'));
import {listRelated,listJobsWithCategoriesAndTags} from '../../actions/job';
import { BreadcrumbJsonLd,NextSeo ,JobPostingJsonLd,NewsArticleJsonLd} from 'next-seo';
import {Link} from 'react-scroll';
import {isAuth} from '../../actions/auth';
import {useState} from 'react';
import format from 'date-fns/format';
const SmallCard = dynamic(() => import('../../components/reusables/SmallCard'), { loading: () => "Loading..." });
const ShortSearch = dynamic(() => import('../../components/reusables/ShortSearch'), { loading: () => "Loading..." });
const TagInSlug =  dynamic(async ()=> import('../../components/reusables/TagInSlug'));
const CategoryInSlug= dynamic(async ()=> import('../../components/reusables/SlugCat'));
// const IFrame = dynamic(async ()=> import('../../components/reusables/IFrame'))
const Faq =  dynamic(async ()=> import('../../components/reusables/ShowFaq'))
const NewsLetter =dynamic(async ()=> import('../../components/NewsLetterSubscribe'), { ssr: false });






const SingleJob = ({job,photo}) => {


 const [toc,setToc]=useState(false);

   

    return (
     <>
    <NextSeo
      title={`${job.title}`}
      description={`${job.desc}`}
      canonical={`https://www.theprograd.com/jobs/${job.slug}`}
      
      openGraph={{
        url: `https://www.theprograd.com/jobs/${job.slug}`,
        title:`${job.title}`,
        description:`${job.desc}`,
        images:[
        {
           url:photo ?  `${photo}` : `${DOMAIN}/img/pvt-job.jpg` ,
            width: 800,
            height: 600,
            alt: "abc",
            type: 'image/jpeg',
          }
          ],
        site_name: 'The ProGrad',
      }}
      facebook={{
        handle: '@handle',
        site: '@site',
        cardType: 'summary_large_image',
        appId: '721482821740858'
      }}
    />
    <BreadcrumbJsonLd
      itemListElements={[
        {
          position: 1,
          name: 'Home',
          item: 'https://www.theprograd.com/',
        },
        {
          position: 2,
          name: 'Government Jobs',
          item: 'https://www.theprograd.com/jobs',
        },
        {
          position: 3,
          name: `${job.title}`,
          item: `https://www.theprograd.com/jobs/${job.slug}`,
        },
      
      ]}
    />
     <JobPostingJsonLd
      datePosted={job.createdAt}
      description={job.desc}
      hiringOrganization={{
        name: job.agency,
        sameAs: job.officialLink,
      }}
      jobLocation={{
        streetAddress: '',
        addressLocality: '',
        addressRegion: job.location,
        postalCode: '+91',
        addressCountry: 'India',
      }}
      title={job.title}
      baseSalary={{
        currency: 'INR',
        value: job.salary,
        unitText: 'Month',
      }}
      employmentType="FULL_TIME"
      jobLocationType="TELECOMMUTE"
      validThrough={job.expireAt}
      applicantLocationRequirements="IN"
    />
    <NewsArticleJsonLd
      url={`https://www.theprograd.com/jobs/${job.slug}`}
      title={job.title}
      images={[
        `${API}/jobs/photo/${job.slug}`,
        `${DOMAIN}/img/pvt-job.jpg`,
      ]}
      section="govt jobs"
      keywords={`${job.agency} jobs,latest sarkari naukri ,govt jobs,government jobs`}
      datePublished={job.createdAt}
      dateModified={job.updatedAt}
      authorName="The ProGrad Admin"
      publisherName='The ProGrad'
      publisherLogo={`${DOMAIN}/img/StuproLogo.png`}
      description={job.desc}
      body={job.desc}
    />

<div className='flex flex-col lg:grid lg:grid-cols-3 pt-14 lg:pt-24 lg:px-14 '>
<div className='col-span-2 p-1 rounded-md lg:shadow-md lg:shadow-green-600 lg:m-3'>
<img className='float-left w-16 h-16 p-1 mx-2 mt-3 rounded-full shadow-md lg:w-24 lg:h-24 shadow-green-500 lg:mt-4' src={ job.photo ? `${job.photo}` : '/img/pvt-job.jpg'}  alt='Logo' />
<h1 className='p-1 text-2xl font-bold cursor-pointer lg:text-4xl lg:p-3 hover:underline'>{job.title}</h1>
<ul className="sticky flex justify-between top-16">
<li className='mx-4 text-lg font-bold underline text-success'>{job.agency}</li>
<li className='hidden p-1 py-3 mx-4 font-bold text-white bg-teal-600 rounded-md lg:block hover:bg-teal-300 hover:text-black'><a className='p-2' target='_blank' rel='noreferrer' href={job.applyLink}>{`Apply ${job.mode} Now`}</a></li>
</ul>

   <ul className='flex flex-col justify-between p-2 m-2 mt-4 rounded-md lg:flex-row lg:p-3 lg:px-2 bg-slate-300'>
   <li className='text-sm font-semibold text-slate-900'>{`Posted on:${job.updatedAt}`}</li>

{job.salary ?    <li className='flex text-sm font-semibold text-slate-900'>
   <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mx-2 stroke-teal-500 fill-transparent "  viewBox="0 0 24 24" strokeWidth="2">
   <path strokeLinecap="round" strokeLinejoin="round" d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
   </svg>{job.salary} /month</li> : null}
   <li className='flex text-sm font-semibold text-slate-900'>
   <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mx-2 fill-teal-500" viewBox="0 0 20 20" >
   <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
   </svg>{job.location} </li>
   </ul>
   <ul className='flex flex-col justify-between p-2 mx-2 bg-green-100 rounded-md lg:flex-row'>
   <li className='text-sm'><span className='font-bold'>Qualification: </span>{job.qualification}</li>
   <li className='flex flex-initial text-sm'><span className='flex mr-3 font-bold'>
   <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mx-2 fill-teal-500" viewBox="0 0 20 20" >
  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
</svg>Last Date: -</span> {job.lastDate}</li>
<li><Share newRoute='jobs' blog={job} /></li>
   </ul>
   <div className='p-2'>
   <ul className='flex flex-row justify-between p-1 bg-teal-100 rounded-md'>
   <li className='text-lg font-bold text-teal-700 '>Table of Content</li>
   <li className='p-1 text-lg font-bold bg-teal-600 cursor-pointer' onClick={()=>setToc(!toc)}><svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17 13l-5 5m0 0l-5-5m5 5V6" />
</svg></li>
   </ul>
   <ul  className={toc===true ? ' p-2 my-3 bg-teal-200 rounded-md' :'hidden ' } >
  <li><Link to="salary" smooth={true} offset={-70} className='ml-4 text-lg font-bold text-teal-800 hover:underline'>Salary Details</Link></li>
  <li><Link to="age-limit" smooth={true} offset={-70} className='ml-4 text-lg font-bold text-teal-800 hover:underline'>Age Limit Criteria</Link></li>
  <li><Link to="app-fee"  smooth={true} offset={-70} className='ml-4 text-lg font-bold text-teal-800 hover:underline'>Application Fee Required</Link></li>
  <li><Link to="imp-date" smooth={true} offset={-70} className='ml-4 text-lg font-bold text-teal-800 hover:underline '>Important Dates</Link></li>
  <li><Link to="qual" smooth={true} offset={-70} className='ml-4 text-lg font-bold text-teal-800 hover:underline'>Detailed Qualification</Link></li>
  <li><Link to="apply" smooth={true} offset={-70} className='ml-4 text-lg font-bold text-teal-800 hover:underline'>Download Notification</Link></li>
  <li><Link to="selection" smooth={true} offset={-70} className='ml-4 text-lg font-bold text-teal-800 hover:underline'>Selection Process</Link></li>
</ul>
</div>
   <div className='flex flex-col justify-center p-1 mt-4 lg:p-3 '>
       {renderHTML(job.body)}
   </div>
</div>
<div className="col-span-1 lg:m-3">

 <div className='p-2'>
 <h3 className='text-lg font-bold text-teal-700 bg-slate-200'>Related Jobs</h3>
  <SmallCard listRelated={listRelated} job={job}  newRoute='jobs' />
 </div>
 <div className='p-2'>
 <h3 className='mb-2 text-lg font-bold text-teal-700 bg-slate-200'>Related Tags and Categories</h3>
 <CategoryInSlug catRoute='jobs' newCat='jobCategories' cats={job.jobCategories} />
   <TagInSlug tagRoute='jobs' newTagRoute='jobTags' tags={job.jobTags} />
 </div>
 {/* {  job.downloadLink.length ?<div >
            <h3 className="mb-2 text-lg font-bold text-green-500 bg-slate-200">Free Previous Years and others Pdfs </h3>
            <ol className="p-2 rounded-md ring-1 ring-teal-500">
            <IFrame material={job} />
            </ol>
            </div> : null}
 {job.faq.length ? <div><h3 className='m-2 text-lg font-bold text-green-500 bg-slate-200'>Frequently Asked Questions</h3>
<Faq material={job} /></div> : null } */}

<ShortSearch filterRoute='jobs' />
{isAuth() && isAuth().role===1 && <div>
   <h2 className="p-1 text-lg font-bold bg-red-300 rounded-md">Admin Bar</h2>
    <ul className="flex justify-between my-3">
      <li><UpdateButton url={`/admin/jobcrud/${job.slug}`} name='Update'/></li>
      <li><UpdateButton url={`/admin/jobcrud/${job.slug}/addFaq`} name='Add Faq' /></li>
      <li><UpdateButton url={`/admin/jobcrud/${job.slug}/add-link`} name='Add Pdf Link' /></li>
    </ul>
</div>}
</div>
</div> 
 <NewsLetter />
 <a href={job.applyLink} className='sticky z-30 p-2 ml-32 text-lg font-bold text-white bg-red-400 rounded-md px-7 lg:hidden bottom-12 top-60'>Apply Now</a>

     </>
 
     
    )
}

export default SingleJob;

export const getStaticPaths = async () => {
  const post = await listJobsWithCategoriesAndTags();
  // const post = await res.json();
  const pathData =await post.map((job) => {
      return {
          params: { slug: job.slug }

      }
  })

  return {

      paths:pathData,
      fallback:"blocking"
      
  }
}

export const getStaticProps = async (ctx) => {
  const slug = ctx.params.slug;

  const [job,photo] = await Promise.all([
    fetch(`${API}/jobs/` + slug).then(r => r.json()),
    `${API}/jobs/photo/` + slug
  ]);
  // if (!job) {
  //     return {
  //   notFound:true
  //     }
  //   }
  return {
      props: {
          job,
          photo

      },
      revalidate:60
  }

}