import NewJobs from '../../../components/reusables/SearchedJobs';
import Head from 'next/head';
import {useRouter} from 'next/router';
import { BreadcrumbJsonLd,NextSeo } from 'next-seo';




const DynamicSearch=()=>{
    const router =useRouter()

    return(
        <>
    <NextSeo
      title={`Private Sector Jobs Related to ${router.query.title}`}
      description={`All Private Job Results related to ${router.query.title}`}
      canonical={`https://www.theprograd.com/privateJobs/job-search/related-jobs`}
      
      openGraph={{
        url: `https://www.theprograd.com/privateJobs/job-search/related-jobs`,
        title:`Private Sector Jobs Related to ${router.query.title}`,
        description:`All Private Job Results related to ${router.query.title}`,
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
          name: 'Private Sector Jobs',
          item: 'https://www.theprograd.com/privateJobs',
        },
        {
          position: 3,
          name: 'Search Private Sector Jobs',
          item: `https://www.theprograd.com/privateJobs/job-search`,
        },
        {
          position: 4,
          name: `Private Jobs Related to ${router.query.title}`,
          item: `https://www.theprograd.com/privateJobs/job-search/related-jobs?title=${router.query.title}`,
        },
      
      ]}
    />
       <NewJobs xRoute='privateJobs' />
        </>

      
    )
}

export default DynamicSearch;
