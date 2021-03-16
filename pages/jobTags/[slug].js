import Head from 'next/head';
import { singleJobTag } from '../../actions/jobTag';
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../config';
import Card from '../../components/jobs/Card';
import Search from '../../components/jobs/Search';


const JobTag=({ jobTag, jobs, query })=>{
    const head = () => (
        <Head>
            <title>
                {jobTag.name} | Jobs | {APP_NAME}
            </title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content={`Jobs related to ${jobTag.name} | Get all types of prograd jobs in india based on different tags which includes all types of government jobs,analyst jobs,best jobs,free jobs,account manager,engineering jobs,jobriya,fast jobs,sbi carreers,highest paying jobs,sarkari work,army jobs,public jobs,it jobs,online jobs from home,accounting jobs,sarkari rojgar,marketing manager and various other jobs.Here recruters can also come to post jobs`} />
            <link rel="canonical" href={`https://${DOMAIN}/jobCategories/${query.slug}`} />
            <meta property="og:title" content={`${jobTag.name}| ${APP_NAME}`} />
            <meta property="og:description" content={`Jobs related to ${jobTag.name} | Get all types of prograd jobs based on tags in india which includes all types of government jobs,analyst jobs,best jobs,free jobs,account manager,engineering jobs,jobriya,fast jobs,sbi carreers,highest paying jobs,sarkari work,army jobs,public jobs,it jobs,online jobs from home,accounting jobs,sarkari rojgar,marketing manager and various other jobs.Here recruters can also come to post jobs`} />
            <meta property="og:type" content="webiste" />
            <meta property="og:url" content={`${DOMAIN}/categories/${query.slug}`} />
            <meta property="og:site_name" content={`${APP_NAME}`} />

            <meta property="og:image" content={`${DOMAIN}/img/StuproLogo.png`} />
            <meta property="og:image:secure_url" content={`${DOMAIN}/img/StuproLogo.png`} />
            <meta property="og:image:type" content="img/stupro2.png" />
            <meta property="fb:app_id" content={`${FB_APP_ID}`} />
        </Head>
    );

  
    return(
        <>
        {head()}
        <section class="blogCreate">
        <h1 className="text-primary large m-1">{jobTag.name}</h1>
        <div className="line"></div>
        <div className="createMain">
          <main >
              <article>
              {jobs.map((j, i) => (
                   <Card key={i} job={j} /> 
                  ))}
              </article>
        </main>
          <div>
        <Search />
    </div>
          </div>
         </section>
       </>
    )
}

JobTag.getInitialProps = ({ query }) => {
    
    return singleJobTag(query.slug).then(data => {
        if (data.error) {
            console.log(data.error);
        } else {
            return { jobTag: data.jobTag, jobs: data.jobs, query };
        }
    });
};
export default JobTag;