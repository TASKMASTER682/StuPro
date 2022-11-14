import dynamic from 'next/dynamic';
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../../config';
import Card from '../../../components/jobs/Card';
import { BreadcrumbJsonLd,NextSeo } from 'next-seo';
const ShortSearch =dynamic(async ()=>import('../../../components/reusables/ShortSearch'),{ssr:false});
import fetch from 'isomorphic-fetch';


// import Infeed from '../../components/ads/Infeed';
// import DisplayAd from '../../components/ads/DisplayAd';
// import Vertical from '../../components/ads/Vertical';

const JobTag=({ jobTag, jobs})=>{
  
    return(
        <>
    <NextSeo
      title={`Jobs Related to tag name - ${jobTag.name}`}
      description={`Jobs Related to tag name - ${jobTag.name}`}
      canonical={`https://www.theprograd.com/jobs/jobTags/${jobTag.slug}`}

      openGraph={{
        url: `https://www.theprograd.com/jobs/jobCategories/${jobTag.slug}`,
        title:`Jobs Related to tag name - ${jobTag.name}`,
        description:`Jobs Related to tag name - ${jobTag.name}`,

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
          name: `Jobs According to Tag ${jobTag.name}`,
          item: `https://www.theprograd.com/jobs/jobTags/${jobTag.slug}`,
        },
      ]}
    /> 
    <section className="flex flex-col-reverse p-4 pt-20 lg:grid lg:grid-cols-2 lg:px-60">
     <h1 className='mx-2 text-lg font-bold'>{`Jobs related to ${jobTag.name}`}</h1>
     <hr className="my-2" />
     {/* <Infeed />
     <Infeed /> */}
   <div>
   {jobs.map((j, i) => (
        <article key={i}  className="m-1 mb-5 rounded-md shadow-md shadow-green-400 hover:ring-slate-900 hover:ring-1" >
          <Card job={j} /> 
        </article>
         ))}
     
     {/* <Infeed /> */}
   </div> 
    <div>
   <ShortSearch filterRoute='jobs' />

   </div>
   </section>
    </>
    )
}

export const getStaticPaths=async ()=>{
    const res = await fetch(`${API}/jobTags`);
    const data= await res.json();

    const pathData= data.map(category=>{
        return{
            params:{slug:category.slug}
        }
    }) 
    return{
        paths:pathData,
        fallback:'blocking'
    }
}

export const getStaticProps=async (ctx)=>{
    const slug=ctx.params.slug;
    const res=await fetch(`${API}/jobTags/`+slug);
    
    const data=res.json()

    return{
        props:{
            jobTag: data.jobTag , 
            jobs:  data.jobs ? data.jobs : null,
        },
        revalidate:500

    }

}
export default JobTag;

