import Head from 'next/head';
import { listPvt} from '../../actions/privateJob';
import dynamic from 'next/dynamic';
import { API, DOMAIN, APP_NAME } from '../../config';
import Card from '../../components/privateJobs/Card';
const AutoComplete =dynamic(async ()=>import('../../components/reusables/AutoComplete'),{ssr:false});
// import Infeed from '../../components/ads/Infeed';
// import DisplayAd from '../../components/ads/DisplayAd';
// import Vertical from '../../components/ads/Vertical';



const PvtJobCategory=({privateJobCategory,privateJobs})=>{

    const head = () => (
        <Head>
            <title>
                {privateJobCategory.name} |Jobs | {APP_NAME}
            </title>
            <meta name="robots" content="noindex nofollow" />

            <meta name="description" content={`Jobs related to category: ${privateJobCategory.name} | Get all types of prograd jobs in india which includes all types of government jobs,analyst jobs,best jobs,free jobs,account manager,engineering jobs,jobriya,fast jobs,sbi carreers,highest paying jobs,sarkari work,army jobs,public jobs,it jobs,online jobs from home,accounting jobs,sarkari rojgar,marketing manager and various other jobs.Here recruters can also come to post jobs`} />
            <link rel="canonical" href={`${DOMAIN}/privateJobCategories/${privateJobCategory.slug}`} />
            <meta property="og:title" content={`${privateJobCategory.name}| ${APP_NAME}`} />
            <meta property="og:description" content={`Jobs related to category: ${privateJobCategory.name} | Get all types of prograd jobs in india which includes all types of government jobs,analyst jobs,best jobs,free jobs,account manager,engineering jobs,jobriya,fast jobs,sbi carreers,highest paying jobs,sarkari work,army jobs,public jobs,it jobs,online jobs from home,accounting jobs,sarkari rojgar,marketing manager and various other jobs.Here recruters can also come to post jobs`} />
            <meta property="og:type" content="webiste" />
            <meta property="og:url" content={`${DOMAIN}/privateJobCategories/${privateJobCategory.slug}`} />
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
     <h1 className="text-primary large m-1">{privateJobCategory.name}</h1>
     <div className="line"></div>
     <div className="createMain">
     <div>
       {/* <Infeed />
       <Infeed /> */}
           <article className="my-1" >
           {privateJobs.map((j, i) => (
                <Card key={i} privateJob={j} /> 
               ))}
           </article>
       
        </div>
        <div className='hide-sm'>
         <AutoComplete list={listPvt} newRoute='privateJobs' />
     {/* <DisplayAd />
     <Vertical />  */}
    </div> 
     </div>
      </section>
    </>
    )
};

export const getStaticPaths=async ()=>{
    const res = await fetch(`${API}/privateJobCategories`);
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
    const res=await fetch(`${API}/privateJobCategories/`+slug)
    const data=await res.json();

    return{
        props:{
            privateJobCategory: data.privateJobCategory, 
            privateJobs: data.privateJobs,
        },
        revalidate:500

    }

}


export default PvtJobCategory;

