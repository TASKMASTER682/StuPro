import Head from 'next/head';
import {useState} from 'react';
import Link from 'next/link';
import { BreadcrumbJsonLd,NextSeo } from 'next-seo';
import dynamic from 'next/dynamic';
import { withRouter } from 'next/router';
import Card from '../../components/jobs/Card';
const AutoComplete =dynamic(async ()=>import('../../components/reusables/AutoComplete'),{ssr:false});
import { listJobsWithCategoriesAndTags,list } from '../../actions/job';
// const Infeed=dynamic(async()=>import('../../components/ads/Infeed'),{ssr:false});
// const DisplayAd=dynamic(async()=>import('../../components/ads/DisplayAd'),{ssr:false});
import { DOMAIN, APP_NAME,API } from '../../config';
import ShortSearch from '../../components/reusables/ShortSearch'

export async function getStaticProps(){

    return listJobsWithCategoriesAndTags().then(data => {
        if (data.error) {
            console.log(data.error);
        } else {
            return {
                props:{
                    jobs: data,
                },
                revalidate:60
             
            };
        }
    });
}
const Jobs = ({jobs})=>{

  const [visible,setVisible]=useState(10);
    const showAllJobs = () => {
        return jobs.slice(0,visible).map((job, i) => {
            // ()
            return (
                <article className="m-1 mb-5 rounded-md shadow-md shadow-green-400 hover:ring-slate-900 hover:ring-1" key={i} >
                 <Card job={job}/>
               </article>
            );
        });
    };
 const showMoreItem=()=>{
   setVisible((prevValue)=>prevValue+10)
 }

    return(
    <>
    <NextSeo
      title='50+ Best Latest Government Jobs in India to Apply '
      description='50+ active government jobs in India to apply.See the employment news and the crux of each govt job notification and easily apply on The ProGrad.'
      canonical={`https://www.theprograd.com/jobs`}
      
      openGraph={{
        url: `https://www.theprograd.com/jobs`,
        title:'50+ Best Latest Government Jobs in India to Apply ',
        description:'50+ active government jobs in India to apply.See the employment news and the crux of each govt job notification and easily apply on The ProGrad.',
        images:[
        {
           url: 'https://www.theprograd.com/img/hire.svg',
            width: 800,
            height: 600,
            alt: 'The ProGrad Home Page',
            type: 'image/svg',
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
      
      ]}
    />
    <section className='flex flex-col-reverse p-4 pt-20 lg:grid lg:grid-cols-2 lg:px-60'>
    <div>
    <h1 className='p-1 mx-2 text-lg font-bold bg-teal-100 rounded-md'>Government Jobs in India</h1>
    <div>
    {showAllJobs()}
    </div>
    <div>
    <button className='p-2 font-bold bg-red-400' onClick={showMoreItem} >Load More</button>
    </div>
   </div>
   <div>
   <AutoComplete newRoute='jobs' jobs={jobs} />  
   <ShortSearch filterRoute='jobs' />

   </div>
    </section>
    </>
    )
};
export default withRouter(Jobs);



