import Head from 'next/head';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { withRouter } from 'next/router';
import Card from '../../components/jobs/Card';
const AutoComplete =dynamic(async ()=>import('../../components/reusables/AutoComplete'),{ssr:false});
const LoadMoreJobs =dynamic(async ()=>import('../../components/jobs/LoadMoreJobs'),{ssr:false})
import { listJobsWithCategoriesAndTags,list } from '../../actions/job';
// const Infeed=dynamic(async()=>import('../../components/ads/Infeed'),{ssr:false});
// const DisplayAd=dynamic(async()=>import('../../components/ads/DisplayAd'),{ssr:false});
import { DOMAIN, APP_NAME } from '../../config';
const Jobs = ({jobs,jobTags,jobCategories, router, totalJobs, jobsLimit, jobSkip})=>{
    
    const head = () => (
        <Head>
            <title>50+ Best Latest Government Jobs in India to Apply |The {APP_NAME}</title>
            <link rel="canonical" href={`${DOMAIN}/jobs`} />
            <meta name="robots" content="index follow" />
            <meta name="description" 
            content='50+ active government jobs in India to apply.Apply today and get employed.See the employment news and the crux of each govt job notification and easily apply on The ProGrad.'
            />
            <meta property="og:title" content={`50+ Best Government Jobs in India to Apply |The ${APP_NAME}`} />
            <meta
                property="og:description"
                content='50+ active government jobs in India to apply.Apply today and get employed.See the employment news and the crux of each govt job notification and easily apply on The ProGrad.'
            />
            <meta property="og:type" content="webiste" />
            <meta property="og:url" content={`${DOMAIN}/jobs`} />
            <meta property="og:site_name" content={`The ${APP_NAME}`} />
            <meta property="og:image" content={`${DOMAIN}/img/StuproLogo.png`} />
            <meta property="og:image:secure_url" content={`${DOMAIN}/img/StuproLogo.png`} />
            <meta property="og:image:type" content={`${DOMAIN}/img/StuproLogo.png`} />
        </Head>
    );



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

    const showJobCategories = job =>{
    return jobCategories.map((c) => (
        
        <Link key={c._id} href={`/jobCategories/${c.slug}`}>
         <li className="my-1"> <a className="input-box bg-light-gray "><span className="extra-small text-dark p-1"><strong>{c.name}</strong></span></a></li> 
        </Link>
        
    ));
    }
    const showJobTags = job =>{
    return jobTags.map((t) => (
        <Link key={t._id} href={`/jobTags/${t.slug}`}>
          <li className="my-1">  <a  className="input-box bg-dark "><span className="extra-small p-1"><strong>{t.name}</strong></span></a></li>
        </Link>
    ));
    }
    return(
    <>
    {head()}
     <section className="blogCreate">
     <h1 className="large text-primary" style={{lineHeight:'1.9rem'}}>State and Central Govt Jobs Notifications </h1>
     <p className="extra-small text-gray ">Find suitable and best jobs for you and apply.Just click on the title of job and see it in detail</p>
     <Link href="/jobs/jobSearch"><a className="btn nbtn btn-dark m-1">Click here to Search job</a></Link>
     <div className="createMain">
     <div>
     {/* <DisplayAd /> 
     <Infeed /> */}

         <div >
         {showAllJobs()}
         </div>
         {/* <Infeed /> */}

         <div>
            <LoadMoreJobs listWithCategoriesAndTags={listJobsWithCategoriesAndTags} totalContent={totalJobs} contentLimit={jobsLimit} />
        </div>
    </div> 
    <div className='hide-sm'>
    <h2 className="lead text-dark">Type in Search box what you are searching</h2>
        <AutoComplete list={list} newRoute='jobs' />
        <div style={{display:'flex',justifyContent:'space-between'}}>
        
        <ul className='p-1'style={{overflowY:'scroll',maxHeight:'20rem'}}>
        <h3 className="my-1 text-danger">Categories</h3>
        
        {showJobCategories()}
        
        </ul>
        
        
        <ul className='p-1' style={{overflowY:'scroll',maxHeight:'20rem'}}>
        <h3 className="my-1 text-danger">Tags</h3>
         {showJobTags()}
        </ul>
        
        </div>
        {/* <DisplayAd /> */}
        <div className="line"></div>
        {/* <DisplayAd/> */}
    </div> 
     </div>
    </section>
        </>
    )
};
export default withRouter(Jobs);

export async function getStaticProps(){
    let skip = 0;
    let limit = 10;
    return listJobsWithCategoriesAndTags(skip, limit).then(data => {
        if (data.error) {
            console.log(data.error);
        } else {
            return {
                props:{
                    jobs: data.jobs,
                    jobCategories: data.jobCategories,
                    jobTags: data.jobTags,
                    totalJobs: data.size,
                    jobsLimit: limit,
                    jobSkip: skip

                },
                revalidate:60
             
            };
        }
    });
}

