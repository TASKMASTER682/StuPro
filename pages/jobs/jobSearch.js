import AutoComplete from '../../components/reusables/AutoComplete';
import {list} from '../../actions/job'
import Head from 'next/head';
import ShowJobCategories from '../../components/reusables/SearchCat';
import ShowJobTags from '../../components/reusables/SearchTags';
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../config';



const JobSearch=()=>{
    const head = () => (
        <Head>
            <title> Search your sarkari jobs in the Fastest way | The {APP_NAME}</title>
            <meta name="robots" content="noindex nofollow" />

            <meta name="description" 
            content={`Search your sarkari job and get Fastjob search experience`}
            />

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
            <meta property="og:image:secure_url" content={`${DOMAIN}/img/StuproLogo.png`} />
            <meta property="og:image:type" content={`${DOMAIN}/img/StuproLogo.png`} />
        </Head>
    );
    return(
        <>
        {head()}
        <section className="container">
            <h1 className="large text-primary">Fast Job Search | Bharat Naukri</h1>
            <p className="extra-small text-light-gray">Find the job of your choice by searching keywords,title or location</p>
            <div className="line"></div>
            <div className="my-1">
            <AutoComplete list={list} newRoute='jobs' />
            </div>
           <div className="my-2">
           <div >
           <h2 className="lead text-primary">Job Categories</h2>
           <ShowJobCategories newRoute='jobCategories' />
           </div>
           <div >
           <h2 className="lead text-primary">JobTags</h2>
               <ShowJobTags newRoute='jobTags'/>
           </div>  
               
           </div>
        </section>
        </>
       
    )
}

export default JobSearch;