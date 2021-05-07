import Search from '../../components/jobs/Search';
import Head from 'next/head';
import ShowJobCategories from '../../components/jobs/ShowJobCategories';
import ShowJobTags from '../../components/jobs/ShowJobTags';
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../config';



const JobSearch=()=>{
    const head = () => (
        <Head>
            <title> Search your sarkari jobs in the Fastest way | {APP_NAME}</title>
            <meta name="description" 
            content={`Search your sarkari job and get Fastjob search experience`}
            />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />

            <link rel="canonical" href={`${DOMAIN}/jobs/jobSearch`} />
            <meta property="og:title" content={`Search your job here. | ${APP_NAME}`} />
            <meta
                property="og:description"
                content={`Search your naukri on the basis of title, job location or on the basis of category`}

            />
            <meta property="og:type" content="webiste" />
            <meta property="og:url" content={`${DOMAIN}/jobs/jobSearch`} />
            <meta property="og:site_name" content={`${APP_NAME}`} />
            <meta property="og:image" content={`${DOMAIN}/img/StuproLogo.png`} />
            <meta property="og:image:secure_url" ccontent={`${DOMAIN}/img/StuproLogo.png`} />
            <meta property="og:image:type" content="img/StuproLogo.png" />
            <meta property="fb:app_id" content={`${FB_APP_ID}`} />
        </Head>
    );
    return(
        <>
        {head()}
        <section className="container">
            <h1 className="large text-primary">Fast Job Seach | Bharat Naukri</h1>
            <p className="extra-small text-light-gray">Find the job of your choice by searching keywords,title or location</p>
            <div className="line"></div>
            <div className="my-1">
            <Search />
            </div>
           <div className="my-2">
           <div style={{textAlign:'center',justifyContent:'center'}}>
           <h2 className="lead text-primary">Job Categories</h2>
           <ShowJobCategories />
           </div>
           <div style={{textAlign:'center',justifyContent:'center'}}>
           <h2 className="lead text-primary">JobTags</h2>
               <ShowJobTags />
           </div>  
               
           </div>
        </section>
        </>
       
    )
}

export default JobSearch;