import {useState} from 'react';
import ShortSearch from '../../components/reusables/ShortSearch';
import { BreadcrumbJsonLd,NextSeo } from 'next-seo';
import dynamic from 'next/dynamic'
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../config';
import { withRouter } from 'next/router';
import { listPvtJobsWithCategoriesAndTags } from '../../actions/privateJob';
import Card from '../../components/privateJobs/Card';
const AutoComplete =dynamic(async ()=>import('../../components/reusables/AutoComplete'),{ssr:false});

// const Infeed =dynamic(async ()=>import('../../components/ads/Infeed'),{ssr:false}) ;
// const DisplayAd =dynamic(async ()=>import('../../components/ads/DisplayAd'),{ssr:false}) ;

export async function getStaticProps(){

    return listPvtJobsWithCategoriesAndTags().then(data => {
        if (data.error) {
            console.log(data.error);
        } else {
            return {
                props:{
                    privateJobs: data,
                },
                revalidate:60
            };
        }
    });
}

const PvtJobs = ({ privateJobs, router })=>{
  const [visible,setVisible]=useState(10);
    const showAllJobs = () => {
        return privateJobs.slice(0,visible).map((privateJob, i) => {
            // ()
            return (
                <article className="m-1 mb-5 rounded-md shadow-md shadow-green-400 hover:ring-slate-900 hover:ring-1" key={i} >
                 <Card privateJob={privateJob}/>
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
      title={`100+ Best Latest Private Sector Jobs in India to Apply | The ${APP_NAME} `}
      description="100+ active private jobs in India to apply.Apply today and get employed.See the employment news and the crux of each private sector job notification and easily apply on The ProGrad."
      canonical="https://www.theprograd.com/privateJobs"
      
      openGraph={{
        url: 'https://www.theprograd.com/privateJobs',
        title:`100+ Best Latest Private Sector Jobs in India to Apply | The ${APP_NAME} `,
        description:"100+ active private jobs in India to apply.Apply today and get employed.See the employment news and the crux of each private sector job notification and easily apply on The ProGrad.",
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
      
      ]}
    />
        <section className='flex flex-col-reverse p-4 pt-20 lg:grid lg:grid-cols-2 lg:px-60'>
        <div>
        <h1 className='p-1 mx-2 text-lg font-bold bg-teal-100 rounded-md'>Private Jobs in India</h1>
        <div>
        {showAllJobs()}
        </div>
        <div>
        <button className='p-2 font-bold bg-red-400' onClick={showMoreItem} >Load More</button>
        </div>
        </div>
        <div>
        <AutoComplete newRoute='privateJobs' jobs={privateJobs} />        
        <ShortSearch filterRoute='privateJobs' />
        </div>
        </section>
        </>
    )
};


export default withRouter(PvtJobs);
