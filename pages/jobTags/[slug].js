import Head from 'next/head';
import dynamic from 'next/dynamic';
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../config';
import Card from '../../components/jobs/Card';
import {list} from '../../actions/job'
const AutoComplete =dynamic(async ()=>import('../../components/reusables/AutoComplete'),{ssr:false});
// import Infeed from '../../components/ads/Infeed';
// import DisplayAd from '../../components/ads/DisplayAd';
// import Vertical from '../../components/ads/Vertical';

const JobTag=({ jobTag, jobs})=>{
    const head = () => (
        <Head>
            <title>
                {jobTag.name} | Jobs | {APP_NAME}
            </title>
            <meta name="robots" content="noindex nofollow" />

            <meta name="description" content={`Jobs related to ${jobTag.name}`} />
            <link rel="canonical" href={`${DOMAIN}/jobCategories/${jobTag.slug}`} />
            <meta property="og:title" content={`${jobTag.name}| The ${APP_NAME}`} />
            <meta property="og:description" content={`Jobs related to ${jobTag.name}`} />
            <meta property="og:type" content="webiste" />
            <meta property="og:url" content={`${DOMAIN}/categories/${jobTag.slug}`} />
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
        <h1 className="text-primary large m-1">{jobTag.name}</h1>
        <div className="line"></div>
        <div className="createMain">
          <div >
          {/* <Infeed />
          <Infeed /> */}
              <article>
              {jobs.map((j, i) => (
                   <Card key={i} job={j} /> 
                  ))}
              </article>
              {/* <Infeed /> */}
        </div>
          <div className='hide-sm'>
        <AutoComplete list={list} newRoute='jobs' />
        {/* <DisplayAd />
        <Vertical /> */}

    </div>
          </div>
         </section>
       </>
    )
}

export const getStaticPaths=async ()=>{
    const res = await fetch(`${API}/jobTags`);
    const data= await res.json();
    const paths=data.map(category=>{
        return{
            params:{slug:category.slug}
        }
    })
    return{
        paths,
        fallback:false
    }
}

export const getStaticProps=async (ctx)=>{
    const slug=ctx.params.slug;
    const res=await fetch(`${API}/jobTags/`+slug)
    const data=await res.json();

    return{
        props:{
            jobTag: data.jobTag, 
            jobs: data.jobs,
        },
        revalidate:800

    }

}
export default JobTag;

