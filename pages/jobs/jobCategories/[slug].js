import dynamic from 'next/dynamic';
import { API, DOMAIN, APP_NAME } from '../../../config';
import Card from '../../../components/jobs/Card';
import { BreadcrumbJsonLd,NextSeo } from 'next-seo';
const ShortSearch =dynamic(async ()=>import('../../../components/reusables/ShortSearch'),{ssr:false});
import fetch from 'isomorphic-fetch';


// import Infeed from '../../components/ads/Infeed';
// import DisplayAd from '../../components/ads/DisplayAd';
// import Vertical from '../../components/ads/Vertical';


const JobCategory=({jobCategory,jobs})=>{

    return(
     <>
    <NextSeo
      title={`Jobs Related to category name - ${jobCategory.name}`}
      description={`Jobs Related to category name - ${jobCategory.name}`}
      canonical={`https://www.theprograd.com/jobs/jobCategories/${jobCategory.slug}`}

      openGraph={{
        url: `https://www.theprograd.com/jobs/jobCategories/${jobCategory.slug}`,
        title:`Jobs Related to category name - ${jobCategory.name}`,
        description:`Jobs Related to category name - ${jobCategory.name}`,

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
          name: `Jobs According to Category ${jobCategory.name}`,
          item: `https://www.theprograd.com/jobs/jobCategories/${jobCategory.slug}`,
        },
      ]}
    />     <section className="flex flex-col-reverse p-4 pt-20 lg:grid lg:grid-cols-2 lg:px-60">
     <h1 className='mx-2 text-lg font-bold'>{`Jobs related to ${jobCategory.name}`}</h1>
     <hr className="my-2" />
     {/* <Infeed />
     <Infeed /> */}
     <div>
     {jobs.map((j, i) => (
        <article className="m-1 mb-5 rounded-md shadow-md shadow-green-400 hover:ring-slate-900 hover:ring-1" >

          <Card key={i} job={j} />
          </article>
 
         ))}
     </div>
 
     {/* <Infeed /> */}
     <div>
   <ShortSearch filterRoute='jobs' />

   </div>

      </section>
    </>
    )
};

export const getStaticPaths=async ()=>{
    const res = await fetch(`${API}/jobCategories`);
    const data= await res.json();
    const pathData=data.map(category=>{
        return{
            params:{slug:category.slug}
        }
    })
    return{
        paths:pathData,
        fallback:"blocking"
    }
}

export const getStaticProps=async (ctx)=>{
    const slug=ctx.params.slug;
    const res=await fetch(`${API}/jobCategories/`+slug)
    const data=await res.json();

    return{
        props:{
            jobCategory: data.jobCategory, 
            jobs: data.jobs ? data.jobs : null,
        },
        revalidate:500

    }

}

export default JobCategory;



