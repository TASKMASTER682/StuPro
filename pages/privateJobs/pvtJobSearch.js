import AutoComplete from '../../components/reusables/AutoComplete';
import {listPvt} from '../../actions/privateJob'
import Head from 'next/head';
import ShowPvtJobCategories from '../../components/reusables/SearchCat';
import ShowPvtJobTags from '../../components/reusables/SearchTags';
import { DOMAIN, APP_NAME} from '../../config';



const PvtJobSearch=()=>{
    const head = () => (
        <Head>
            <title> Search your jobs in the Fastest way | {APP_NAME}</title>
            <meta name="robots" content="noindex nofollow" />

            <meta name="description" 
            content={`Search your job and get Fastjob search experience`}
            />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />

            <link rel="canonical" href={`${DOMAIN}/privateJobs/pvtJobSearch`} />
            <meta property="og:title" content={`Search your job here. | ${APP_NAME}`} />
            <meta
                property="og:description"
                content={`Search your naukri on the basis of title, job location or on the basis of category`}

            />
            <meta property="og:type" content="webiste" />
            <meta property="og:url" content={`${DOMAIN}/privateJobs/pvtJobSerach`} />
            <meta property="og:site_name" content={`The ${APP_NAME}`} />
            <meta property="og:image" content={`${DOMAIN}/img/StuproLogo.png`} />
            <meta property="og:image:secure_url" ccontent={`${DOMAIN}/img/StuproLogo.png`} />
            <meta property="og:image:type" content="img/StuproLogo.png" />
        </Head>
    );
    return(
        <>
        {head()}
        <section className="container">
            <h1 className="large text-primary">Fast Job Search</h1>
            <p className="extra-small text-light-gray m-1">Find the job of your choice by searching keywords,title or location</p>
            <div className="line"></div>
            <div className="my-1">
            <AutoComplete list={listPvt} newRoute='privateJobs' />
            </div>
           <div className="my-2">
           <div style={{textAlign:'center',justifyContent:'center'}}>
           <h2 className="lead text-danger">Private Job Categories</h2>
           <ShowPvtJobCategories newRoute='privateJobCategories' />
           </div>
           <div style={{textAlign:'center',justifyContent:'center'}}>
           <h2 className="lead text-danger">Private Job Tags</h2>
               <ShowPvtJobTags newRoute='privateJobTags' />
           </div>  
               
           </div>
        </section>
        </>
       
    )
}

export default PvtJobSearch;