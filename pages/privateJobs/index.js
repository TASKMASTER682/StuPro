import Head from 'next/head';
import Link from 'next/link';
import { useState,useEffect } from 'react';
import { withRouter } from 'next/router';
import { listPvtJobsWithCategoriesAndTags } from '../../actions/privateJob';
import Card from '../../components/privateJobs/Card';
import SearchPvt from '../../components/privateJobs/PvtSearch';
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../config';
import Infeed from '../../components/ads/Infeed';
import DisplayAd from '../../components/ads/DisplayAd';
const PvtJobs = ({ privateJobs, privateJobCategories, privateJobTags, totalJobs, jobsLimit, jobSkip, router })=>{


    const head = () => (
        <Head>
            <title> Get all types of jobs either it is government of IT jobs in India and apply online directly from here. | {APP_NAME}</title>
            <meta name="description" 
            content={`Get all types of private jobs in india which includes all types of ,analyst jobs,best jobs,free private jobs,account manager,engineering placement jobs,fast jobs,highest paying jobs,public jobs,it jobs,online jobs from home,accounting jobs,marketing manager and various other jobs.Here recruiters can also come to post jobs`}
            />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />

            <link rel="canonical" href={`https://${DOMAIN}${router.pathname}`} />
            <meta property="og:title" content={`India's best platform for grads to find all type of jobs in India. | ${APP_NAME}`} />
            <meta
                property="og:description"
                content={`Get all types of private jobs in india which includes all types of ,analyst jobs,best jobs,free private jobs,account manager,engineering placement jobs,fast jobs,highest paying jobs,public jobs,it jobs,online jobs from home,accounting jobs,marketing manager and various other jobs.Here recruiters can also come to post jobs`}

            />
            <meta property="og:type" content="webiste" />
            <meta property="og:url" content={`${DOMAIN}${router.pathname}`} />
            <meta property="og:site_name" content={`${APP_NAME}`} />
            <meta property="og:image" content={`${DOMAIN}/img/StuproLogo.png`} />
            <meta property="og:image:secure_url" ccontent={`${DOMAIN}/img/StuproLogo.png`} />
            <meta property="og:image:type" content="img/StuproLogo.png" />
            <meta property="fb:app_id" content={`${FB_APP_ID}`} />
        </Head>
    );

    const [limit, setLimit] = useState(jobsLimit);
    const [skip, setSkip] = useState(0);
    const [size, setSize] = useState(totalJobs);
    const [loadedJobs, setLoadedJobs] = useState([]);

    const loadMore = () => {
        let toSkip = skip + limit;
        listPvtJobsWithCategoriesAndTags(toSkip, limit).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setLoadedJobs([...loadedJobs, ...data.privateJobs]);
                setSize(data.size);
                setSkip(toSkip);
            }
        });
    };
    
    const loadMoreButton = () => {
        return (
            size > 0 &&
            size >= limit && (
                <button style={{width:'100%',textAlign:'center'}} onClick={loadMore} className="btn nbtn btn-danger ">
                    Load more
                </button>
            )
        );
    };

    const showAllJobs = () => {
        return privateJobs.map((privateJob, i) => {
            // ()
            return (
                <article className="my-1 " key={i} >
                 <Card privateJob={privateJob}/>
               </article>
            );
        });
    };
    const showLoadedJobs = () => {
        return loadedJobs.map((privateJob, i) => (
            <article key={i} >
                <Card privateJob={privateJob} />
            </article>
        ));
    };
    const showJobCategories = privateJob =>{
    return privateJobCategories.map((c, i) => (
        
        <Link key={i} href={`/privateJobCategories/${c.slug}`}>
         <li> <a style={{padding:" 0 0.8rem",border:'solid #00e7d2'}}  className="btn nbtn bg-light-gray "><p className="extra-small">{c.name}</p></a></li> 
        </Link>
        
    ));
    }
    const showJobTags = privateJob =>{
    return privateJobTags.map((t, i) => (
        <Link key={i} href={`/privateJobTags/${t.slug}`}>
          <li>  <a style={{padding:" 0 0.8rem",border:'solid black '}}  className="btn nbtn bg-light-gray "><p className="extra-small">{t.name}</p></a></li>
        </Link>
    ));
    }
    return(
    <>
    {head()}
    <main>
     <section className="blogCreate">
     <h1 className="large text-primary" style={{lineHeight:'1.9rem'}}>All Private Sector Jobs in India</h1>
     <p className="extra-small text-gray ">Find suitable jobs for you and apply.Just click on the title of job and see it in detail</p>
     <Link href="/privateJobs/pvtJobSearch"><a className="btn nbtn btn-dark m-1">Click here to Search Pvt. job</a></Link>
     <div className="createMain">
     <main>
     <DisplayAd />
     <div className="line"></div>
     <Infeed />
         <main >
         {showAllJobs()}
         </main>
         <Infeed />
         <main>
            {showLoadedJobs()}
        </main>
        
        <div>
            {loadMoreButton()}
        </div>
    </main> 
    <div className='hide-sm'>
    <h2 className="lead text-dark">Search the job keyword,title or the location and hit search button</h2>
        <SearchPvt />
        <div style={{display:'flex',justifyContent:'space-between'}}>
        
        <ul className='p-1'style={{overflowY:'scroll',maxHeight:'20rem'}}>
        <h4 className="my-1">Categories</h4>
        
        {showJobCategories()}
        
        </ul>
        
        
        <ul className='p-1' style={{overflowY:'scroll',maxHeight:'20rem'}}>
        <h4 className="my-1">Tags</h4>
         {showJobTags()}
        </ul>
        
        </div>
        <DisplayAd />
        <DisplayAd />
    </div> 
     </div>
    </section>
 </main>
        </>
    )
};

PvtJobs.getInitialProps = () => {
    let skip = 0;
    let limit = 10;
    return listPvtJobsWithCategoriesAndTags(skip, limit).then(data => {
        if (data.error) {
            console.log(data.error);
        } else {
            return {
                privateJobs: data.privateJobs,
                privateJobCategories: data.privateJobCategories,
                privateJobTags: data.privateJobTags,
                totalJobs: data.size,
                jobsLimit: limit,
                jobSkip: skip
            };
        }
    });
}
export default withRouter(PvtJobs);