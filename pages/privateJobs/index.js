import Head from 'next/head';
import Link from 'next/link';
import dynamic from 'next/dynamic'
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../config';
import { withRouter } from 'next/router';
import { listPvtJobsWithCategoriesAndTags,listPvt } from '../../actions/privateJob';
import Card from '../../components/privateJobs/Card';
const AutoComplete =dynamic(async ()=>import('../../components/reusables/AutoComplete'),{ssr:false});
const LoadMore =dynamic(async ()=>import('../../components/privateJobs/LoadMore'),{ssr:false})

// const Infeed =dynamic(async ()=>import('../../components/ads/Infeed'),{ssr:false}) ;
// const DisplayAd =dynamic(async ()=>import('../../components/ads/DisplayAd'),{ssr:false}) ;

const PvtJobs = ({ privateJobs, privateJobCategories, privateJobTags, totalJobs, jobsLimit, jobSkip, router })=>{


    const head = () => (
        <Head>
            <title>100+ Best Latest Private Sector Jobs in India to Apply | The {APP_NAME}</title>
            <meta name="robots" content="index follow" />

            <meta name="description" 
            content='100+ active private jobs in India to apply.Apply today and get employed.See the employment news and the crux of each private sector job notification and easily apply on The ProGrad.'
            />
            <link rel="canonical" href={`${DOMAIN}/privateJobs`} />
            <meta property="og:title" content={`100+ Best Latest Private Sector Jobs in India to Apply | The ${APP_NAME}`} />
            <meta
                property="og:description"
                content='100+ active private jobs in India to apply.Apply today and get employed.See the employment news and the crux of each private sector job notification and easily apply on The ProGrad.'

            />
            <meta property="og:type" content="webiste" />
            <meta property="og:url" content={`${DOMAIN}/privateJobs`} />
            <meta property="og:site_name" content={`The ${APP_NAME}`} />
            <meta property="og:image" content={`${DOMAIN}/img/StuproLogo.png`} />
            <meta property="og:image:secure_url" content={`${DOMAIN}/img/StuproLogo.png`} />
            <meta property="og:image:type" content="img/StuproLogo.png" />
        </Head>
    );



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

    const showJobCategories = () =>{
    return privateJobCategories.map((c) => (
        
        <Link key={c._id} href={`/privateJobCategories/${c.slug}`}>
        <li className="my-1"> <a className="input-box bg-primary "><span className="extra-small text-dark p-1"><strong>{c.name}</strong></span></a></li> 
       </Link>
        
    ));
    }
    const showJobTags = () =>{
    return privateJobTags.map((t) => (
        <Link key={t._id} href={`/privateJobTags/${t.slug}`}>
        <li className="my-1">  <a  className="input-box bg-dark "><span className="extra-small p-1"><strong>{t.name}</strong></span></a></li>
      </Link>
    ));
    }
    return(
    <>
    {head()}
    <div>
     <section className="blogCreate">
     <h1 className="large text-primary" style={{lineHeight:'1.9rem'}}> <strong>Best Private Sector Jobs in India</strong> </h1>
     <p className="extra-small text-gray ">Find suitable jobs for you and apply.Just click on the title of job and see it in detail</p>
     <Link href="/privateJobs/pvtJobSearch"><a className="btn nbtn btn-dark m-1">Click here to Search Pvt. jobs</a></Link>
     <div className="createMain">
     <div>
     {/* <DisplayAd /> */}
     <div className="line"></div>
     {/* <Infeed /> */}
         <div >
         {showAllJobs()}
         </div>
         {/* <Infeed /> */}
         <div>
         <LoadMore listPvtJobsWithCategoriesAndTags={listPvtJobsWithCategoriesAndTags} jobsLimit={jobsLimit} totalJobs={totalJobs} />

        </div>
    </div> 
    <div className='hide-sm'>
    <h2 className="lead text-dark">Type in Search box what you are searching</h2>
        <AutoComplete newRoute='privateJobs' list={listPvt}/>
        <div className='new-flex'>       
        <ul className='p-1'style={{overflowY:'scroll',maxHeight:'20rem'}}>
        <h3 className="my-1 text-danger">Categories</h3>       
        {showJobCategories()}       
        </ul>        
        <ul className='p-1' style={{overflowY:'scroll',maxHeight:'20rem'}}>
        <h3 className="my-1 text-danger">Tags</h3>
         {showJobTags()}
        </ul>
        
        </div>
        {/* <DisplayAd />
        <DisplayAd /> */}
    </div> 
     </div>
    </section>
 </div>
</>
    )
};

export async function getStaticProps(){
    let skip = 0;
    let limit = 10;
    return listPvtJobsWithCategoriesAndTags(skip, limit).then(data => {
        if (data.error) {
            console.log(data.error);
        } else {
            return {
                props:{
                    privateJobs: data.privateJobs,
                    privateJobCategories: data.privateJobCategories,
                    privateJobTags: data.privateJobTags,
                    totalJobs: data.size,
                    jobsLimit: limit,
                    jobSkip: skip
                },
                revalidate:60
            };
        }
    });
}
export default withRouter(PvtJobs);