import NewJobs from '../../../components/reusables/SearchedJobs';
import Head from 'next/head';
import {useRouter} from 'next/router'
import { BreadcrumbJsonLd,NextSeo } from 'next-seo';



const DynamicSearch=()=>{
    const router =useRouter()

    return(
        <>
    <NextSeo
      title={`All Government Jobs Related to ${router.query.title} `}
      description={`Apply now for all the government jobs related to ${router.query.title} `}
      canonical='https://www.theprograd.com/jobs/job-search/related-jobs'
      
      openGraph={{
        url: 'https://www.theprograd.com/jobs/job-search/related-jobs',
        title:`All Government Jobs Related to ${router.query.title} `,
        description:`Apply now for all the government jobs related to ${router.query.title} `,
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
          name: `Search your sarkari job and get Fastjob search experience`,
          item: `https://www.theprograd.com/jobs/job-search`,
        },
        {
          position: 4,
          name: `All Government Jobs Related to ${router.query.title} `,
          item: `https://www.theprograd.com/jobs/job-search/related-jobs?title=${router.query.title}`,
        },
      
      ]}
    />
       <NewJobs xRoute='jobs' />
        </>

      
    )
}

export default DynamicSearch;
