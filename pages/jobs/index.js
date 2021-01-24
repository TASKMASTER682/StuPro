import Head from 'next/head';
import Link from 'next/link';
import { useState,useEffect } from 'react';
import { withRouter } from 'next/router';
import { listJobsWithCategoriesAndTags } from '../../actions/job';
import Card from '../../components/jobs/Card';
import Search from '../../components/jobs/Search';
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../config';

const Jobs = ({ jobs, jobCategories, jobTags, totalJobs, jobsLimit, jobSkip, router })=>{


    const head = () => (
        <Head>
            <title> Get all types of jobs either it is government of IT jobs in India and apply online directly from here. | {APP_NAME}</title>
            <meta name="description" 
            content={`Get all types of prograd jobs in india which includes all types of government jobs,analyst jobs,best jobs,free jobs,account manager,engineering jobs,jobriya,fast jobs,sbi carreers,highest paying jobs,sarkari work,army jobs,public jobs,it jobs,online jobs from home,accounting jobs,sarkari rojgar,marketing manager and various other jobs.Here recruters can also come to post jobs`}
            />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />

            <link rel="canonical" href={`${DOMAIN}${router.pathname}`} />
            <meta property="og:title" content={`India's best platform for grads to find all type of jobs in India. | ${APP_NAME}`} />
            <meta
                property="og:description"
                content={`Get all types of prograd jobs in india which includes all types of government jobs,analyst jobs,best jobs,free jobs,account manager,engineering jobs,jobriya,fast jobs,sbi carreers,highest paying jobs,sarkari work,army jobs,public jobs,it jobs,online jobs from home,accounting jobs,sarkari rojgar,marketing manager and various other jobs.Here recruters can also come to post jobs`}

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
        listJobsWithCategoriesAndTags(toSkip, limit).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setLoadedJobs([...loadedJobs, ...data.jobs]);
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
        return jobs.map((job, i) => {
            // ()
            return (
                <article className="my-1 " key={i} >
                 <Card job={job}/>
               </article>
            );
        });
    };
    const showLoadedJobs = () => {
        return loadedJobs.map((job, i) => (
            <article key={i} >
                <Card job={job} />
            </article>
        ));
    };
    const showJobCategories = job =>{
    return jobCategories.map((c, i) => (
        
        <Link key={i} href={`/jobCategories/${c.slug}`}>
         <li> <a style={{padding:" 0 0.8rem",border:'solid #00e7d2'}}  className="btn nbtn bg-light-gray "><p className="extra-small">{c.name}</p></a></li> 
        </Link>
        
    ));
    }
    const showJobTags = job =>{
    return jobTags.map((t, i) => (
        <Link key={i} href={`/jobTags/${t.slug}`}>
          <li>  <a style={{padding:" 0 0.8rem",border:'solid black '}}  className="btn nbtn bg-light-gray "><p className="extra-small">{t.name}</p></a></li>
        </Link>
    ));
    }
    return(
    <>
    {head()}
    <main>
     <section className="blogCreate">
     <h1 className="large text-primary" style={{lineHeight:'1.9rem'}}>All Government Jobs in India</h1>
     <p className="extra-small text-gray ">Find suitable jobs for you and apply.Just click on the title of job and see it in detail</p>
     <Link href="/jobs/jobSearch"><a className="btn nbtn btn-dark m-1">Click here to Search job</a></Link>
     <div className="createMain">
     <main>
         <main >
         {showAllJobs()}
         </main>
         <main>
            {showLoadedJobs()}
        </main>
        
        <div>
            {loadMoreButton()}
        </div>
    </main> 
    <div>
    <h2 className="lead text-light-gray">Search the job keyword,title or the location</h2>
        <Search />
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
    </div> 
     </div>
    </section>
 </main>
        </>
    )
};

Jobs.getInitialProps = () => {
    let skip = 0;
    let limit = 10;
    return listJobsWithCategoriesAndTags(skip, limit).then(data => {
        if (data.error) {
            console.log(data.error);
        } else {
            return {
                jobs: data.jobs,
                jobCategories: data.jobCategories,
                jobTags: data.jobTags,
                totalJobs: data.size,
                jobsLimit: limit,
                jobSkip: skip
            };
        }
    });
}
export default withRouter(Jobs);