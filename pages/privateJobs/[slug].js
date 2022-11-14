import dynamic from 'next/dynamic';
import { listRelatedPvt,listPvtJobsWithCategoriesAndTags } from '../../actions/privateJob';
import { API, DOMAIN, APP_NAME } from '../../config';
import renderHTML from 'react-render-html';
import {format} from 'date-fns';
const SmallCard = dynamic(() => import('../../components/reusables/SmallCard'), { loading: () => <i>...</i> });
// const Article=dynamic(async()=>import('../../components/ads/Article'),{loading:()=><p>...</p>,ssr:false}) ;
import { useRouter } from 'next/router';
import {isAuth} from '../../actions/auth';
import UpdateButton from '../../components/reusables/UpdateButton';
import { BreadcrumbJsonLd,NextSeo,JobPostingJsonLd,NewsArticleJsonLd } from 'next-seo';
const ShortSearch = dynamic(() => import('../../components/reusables/ShortSearch'), { loading: () => "Loading..." });
import { redirect } from '../../next.config';
const Faq = dynamic(async () => import('../../components/reusables/ShowFaq'))
const NewsLetter = dynamic(async () => import('../../components/NewsLetterSubscribe'), { ssr: false })



export const getStaticPaths = async () => {
    const data = await listPvtJobsWithCategoriesAndTags();
    const pathData = data.map(privateJob => {
        return {
            params: { slug: privateJob.slug }
        }
    })
    return {
        paths:pathData,
        fallback: 'blocking'
    }
}

export const getStaticProps = async (ctx) => {
    const slug = ctx.params.slug;
    const [privateJob, photo] = await Promise.all([
        fetch(`${API}/privateJobs/` + slug).then(r => r.json()),
        `${API}/privateJobs/photo/` + slug,
    ]);
    if (!privateJob) {
        return {
            notFound: true
        }
    }
    return {

        props: {
            privateJob,
            photo,
        },
        revalidate: 60


    }

}

const SinglePvtJob = ({privateJob,photo}) => {



    // const myLoader = ({ src, width, quality }) => {
    //     return `http://${API}/${src}?w=${width}&q=${quality || 75}`
    //   }



    return (
        <>
    <NextSeo
      title={`${privateJob.title}`}
      description={`${privateJob.desc}`}
      canonical={`https://www.theprograd.com/privateJobs/${privateJob.slug}`}
      
      openGraph={{
        url: `https://www.theprograd.com/privateJobs/${privateJob.slug}`,
        title:`${privateJob.title} `,
        description:`${privateJob.desc}`,
        site_name: 'The ProGrad',
        images:[
        {
           url: photo ? `${photo}` : '/img/pvt-job.jpg',
            width: 800,
            height: 600,
            alt: `${privateJob.title}`,
            type: 'image/jpeg',
          }
          ],
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
          name: 'Private Sector Jobs',
          item: 'https://www.theprograd.com/privateJobs',
        },
        {
          position: 3,
          name: `${privateJob.title}`,
          item: `https://www.theprograd.com/privateJobs/${privateJob.slug}`,
        },
      
      ]}
    />
    <JobPostingJsonLd
      datePosted={privateJob.createdAt}
      description={privateJob.desc}
      hiringOrganization={{
        name: privateJob.agency,
        sameAs: "",
      }}
      jobLocation={{
        streetAddress: '',
        addressLocality: '',
        addressRegion: privateJob.location,
        postalCode: '+91',
        addressCountry: 'India',
      }}
      title={privateJob.title}
      baseSalary={{
        currency: 'INR',
        value: privateJob.salary,
        unitText: 'Month',
      }}
      employmentType="FULL_TIME"
      jobLocationType="TELECOMMUTE"
      validThrough={privateJob.expireAt}
      applicantLocationRequirements="IN"
    />
    <NewsArticleJsonLd
      url={`${API}/privateJobs/${privateJob.slug}`}
      title={privateJob.title}
      images={[
        `${API}/privateJobs/photo/${privateJob.slug}`,
        `${DOMAIN}/img/pvt-job.jpg`,
      ]}
      section="Private sector jobs"
      keywords={`${privateJob.agency} jobs,latest private sector jobs,Work from home jobs`}
      datePublished={privateJob.createdAt}
      dateModified={privateJob.updatedAt}
      authorName={privateJob.agency}
      publisherName='The ProGrad'
      publisherLogo={`${DOMAIN}/img/StuproLogo.png`}
      description={privateJob.desc}
      body={privateJob.desc}
    />
    <div className='flex flex-col lg:grid lg:grid-cols-3 pt-14 lg:pt-24 lg:px-14 '>
     <div className='col-span-2 rounded-md lg:shadow-md lg:shadow-green-600 lg:m-3'>

     <img className='float-left w-16 h-16 p-1 mx-2 mt-3 rounded-full shadow-md lg:w-24 lg:h-24 shadow-green-500 lg:mt-4' src='/img/pvt-job.jpg'  alt='Logo' />
     <h1 className='p-1 text-2xl font-bold cursor-pointer lg:text-4xl lg:p-3 hover:underline'>{privateJob.title}</h1>
     <ul className="sticky flex justify-between top-16">
     <li className='mx-4 text-lg font-bold underline text-success'>{privateJob.agency}</li>
     <li className='hidden p-1 py-3 mx-4 font-bold text-white bg-teal-600 rounded-md lg:block hover:bg-teal-300 hover:text-black'><a className='p-2' target='_blank' rel='noreferrer' href={privateJob.applyLink}>Apply Now</a></li>
     </ul>
        <ul className='flex flex-col justify-between p-2 m-2 mt-4 rounded-sm lg:flex-row lg:p-3 lg:px-2 bg-slate-300'>
        <li className='text-sm font-semibold text-slate-900'>{`Posted on: ${format(new Date(`${privateJob.updatedAt}`),'dd MMM yyyy')}`}</li>
        <li className='flex font-bold text-slate-900'>
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mx-2 fill-green-500" viewBox="0 0 20 20" >
        <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
        <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
        </svg>{privateJob.qualification}</li>
        <li className='flex text-sm font-bold text-slate-900'>
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mx-2 stroke-green-500 fill-transparent "  viewBox="0 0 24 24" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>{privateJob.salary ? privateJob.salary : 'Best in Industry'} </li>
        <li className='flex font-bold text-slate-900'>
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mx-2 fill-green-500" viewBox="0 0 20 20" >
        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
        </svg>{privateJob.location} </li>
        </ul>
        <ul className='flex flex-col justify-between p-2 mx-2 bg-green-100 rounded-sm lg:flex-row'>
        <li className='text-sm'><span className='font-bold'>Skills required: </span>{privateJob.keySkills}</li>
        <li className='text-sm'><span className='font-bold'>Position:</span> {privateJob.position}</li>

        </ul>
        <div className='flex flex-col justify-center p-1 mt-4 body-style lg:p-3'>
            {renderHTML(privateJob.body)}
        </div>
     </div>
     <div className="col-span-1 lg:m-3">
      <div className='p-2'>
      <h3 className='text-lg font-bold text-success bg-slate-200'>Related Jobs</h3>
        <SmallCard listRelated={listRelatedPvt} job={privateJob} newRoute='privateJobs' />
      </div>
      <ShortSearch filterRoute='privateJobs' />
      {isAuth() && isAuth().role===1 && <div>
   <h2 className="p-1 text-lg font-bold bg-red-300 rounded-md">Admin Bar</h2>
    <ul className="flex justify-between my-3">
      <li><UpdateButton url={`/admin/privatejobcrud/${privateJob.slug}`} name='Update'/></li>
    </ul>
</div>}

     </div>
    </div>
    <a href={privateJob.applyLink} className='sticky z-30 p-2 px-4 mx-32 text-lg font-bold text-white bg-teal-500 rounded-lg lg:hidden bottom-12 top-60'>Apply Now</a>
     <NewsLetter />

</>
  
    )
}




export default SinglePvtJob;








