import Head from 'next/head';
import dynamic from 'next/dynamic';
import { list } from '../../actions/job';
import { API, DOMAIN, APP_NAME } from '../../config';
import Card from '../../components/jobs/Card';
const AutoComplete =dynamic(async ()=>import('../../components/reusables/AutoComplete'),{ssr:false});
// import Infeed from '../../components/ads/Infeed';
// import DisplayAd from '../../components/ads/DisplayAd';
// import Vertical from '../../components/ads/Vertical';


const JobCategory=({jobCategory,jobs})=>{

    const head = () => (
        <Head>
            <title>
                {jobCategory.name} | The {APP_NAME}
            </title>
            <meta name="robots" content="noindex nofollow" />
            <meta name="description" content={`Jobs related to category: ${jobCategory.name}`} />
            <link rel="canonical" href={`${DOMAIN}/jobCategories/${jobCategory.slug}`} />
            <meta property="og:title" content={`${jobCategory.name}| ${APP_NAME}`} />
            <meta property="og:description" content={`Jobs related to category: ${jobCategory.name}`} />
            <meta property="og:type" content="webiste" />
            <meta property="og:url" content={`${DOMAIN}/categories/${jobCategory.slug}`} />
            <meta property="og:site_name" content={`The ${APP_NAME}`} />
            <meta property="og:image" content={`${DOMAIN}/img/StuproLogo.png`} />
            <meta property="og:image:secure_url" content={`${DOMAIN}/StuproLogo.png`} />
            <meta property="og:image:type" content="image/png" />
        </Head>
    );
 
 


    return(
     <>
     {head()}
     <section className="blogCreate">
     <h1 className="text-primary large m-1">{jobCategory.name}</h1>
     <div className="line"></div>
     <div className="createMain">
     <div>
     {/* <Infeed />
     <Infeed /> */}

           <article className="my-1" >
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
};

export const getStaticPaths=async ()=>{
    const res = await fetch(`${API}/jobCategories`);
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
    const res=await fetch(`${API}/jobCategories/`+slug)
    const data=await res.json();

    return{
        props:{
            jobCategory: data.jobCategory, 
            jobs: data.jobs,
        },
        revalidate:500

    }

}

export default JobCategory;

