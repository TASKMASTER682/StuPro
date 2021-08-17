import Head from 'next/head';
import dynamic from 'next/dynamic';
import { listPvt } from '../../actions/privateJob';
import { API, DOMAIN, APP_NAME } from '../../config';
import Card from '../../components/privateJobs/Card';
const AutoComplete =dynamic(async ()=>import('../../components/reusables/AutoComplete'),{ssr:false});
// import Infeed from '../../components/ads/Infeed';
// import DisplayAd from '../../components/ads/DisplayAd';
// import Vertical from '../../components/ads/Vertical';


const PvtJobTag=({ privateJobTag, privateJobs})=>{
    const head = () => (
        <Head>
            <title>
                {privateJobTag.name} | Jobs| {APP_NAME}
            </title>
            <meta name="robots" content="noindex nofollow" />

            <meta name="description" content={`Jobs related to ${privateJobTag.name} | Apply Online for best jobs in india which includes all types of government jobs,analyst jobs,best jobs,free jobs,account manager,engineering jobs,jobriya,fast jobs,sbi carreers,highest paying jobs,sarkari work,army jobs,public jobs,it jobs,online jobs from home,accounting jobs,sarkari rojgar,marketing manager and various other jobs.Here recruters can also come to post jobs`} />
            <link rel="canonical" href={`${DOMAIN}/privateJobCategories/${privateJobTag.slug}`} />
            <meta property="og:title" content={`${privateJobTag.name}| ${APP_NAME}`} />
            <meta property="og:description" content={`Jobs related to ${privateJobTag.name} | Apply Online for best jobs in india which includes all types of government jobs,analyst jobs,best jobs,free jobs,account manager,engineering jobs,jobriya,fast jobs,sbi carreers,highest paying jobs,sarkari work,army jobs,public jobs,it jobs,online jobs from home,accounting jobs,sarkari rojgar,marketing manager and various other jobs.Here recruters can also come to post jobs`} />
            <meta property="og:type" content="webiste" />
            <meta property="og:url" content={`${DOMAIN}/privateJobCategories/${privateJobTag.slug}`} />
            <meta property="og:site_name" content={`The ${APP_NAME}`} />

            <meta property="og:image" content={`${DOMAIN}/img/StuproLogo.png`} />
            <meta property="og:image:secure_url" content={`${DOMAIN}/img/StuproLogo.png`} />
            <meta property="og:image:type" content="img/stupro2.png" />
        </Head>
    );

  
    return(
        <>
        {head()}
        <section className="blogCreate">
        <h1 className="text-primary large m-1">{privateJobTag.name}</h1>
        <div className="line"></div>
        <div className="createMain">
        
          {/* <Infeed />
          <Infeed /> */}
              <article>
              {privateJobs.map((j, i) => (
                   <Card key={i} privateJob={j} /> 
                  ))}
              </article>
              {/* <Infeed /> */}
      
          <div className='hide-sm'>
        <AutoComplete list={listPvt} newRoute='privateJobs' />
        {/* <DisplayAd />
        <Vertical /> */}
    </div>
          </div>
         </section>
       </>
    )
}

export const getStaticPaths=async ()=>{
    const res = await fetch(`${API}/privateJobTags`);
    const data= await res.json();
    const paths=data.map(category=>{
        return{
            params:{slug:category.slug}
        }
    })
    return{
        paths,
        fallback:"blocking"
    }
}

export const getStaticProps=async (ctx)=>{
    const slug=ctx.params.slug;
    const res=await fetch(`${API}/privateJobTags/`+slug)
    const data=await res.json();

    return{
        props:{
            privateJobTag: data.privateJobTag, 
            privateJobs: data.privateJobs,
        },
        revalidate:600

    }

}

export default PvtJobTag;