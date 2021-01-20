import Head from 'next/head';
import { singlePvtJobTag } from '../../actions/privateJobTag';
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../config';
import Card from '../../components/privateJobs/Card';
import PvtSearch from '../../components/privateJobs/PvtSearch';


const PvtJobTag=({ privateJobTag, privateJobs, query })=>{
    const head = () => (
        <Head>
            <title>
                {privateJobTag.name} | Jobs| {APP_NAME}
            </title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content={`Jobs related to ${privateJobTag.name} | Get all types of prograd jobs in india which includes all types of government jobs,analyst jobs,best jobs,free jobs,account manager,engineering jobs,jobriya,fast jobs,sbi carreers,highest paying jobs,sarkari work,army jobs,public jobs,it jobs,online jobs from home,accounting jobs,sarkari rojgar,marketing manager and various other jobs.Here recruters can also come to post jobs`} />
            <link rel="canonical" href={`${DOMAIN}/privateJobCategories/${query.slug}`} />
            <meta property="og:title" content={`${privateJobTag.name}| ${APP_NAME}`} />
            <meta property="og:description" content={`Jobs related to ${privateJobTag.name} | Get all types of prograd jobs in india which includes all types of government jobs,analyst jobs,best jobs,free jobs,account manager,engineering jobs,jobriya,fast jobs,sbi carreers,highest paying jobs,sarkari work,army jobs,public jobs,it jobs,online jobs from home,accounting jobs,sarkari rojgar,marketing manager and various other jobs.Here recruters can also come to post jobs`} />
            <meta property="og:type" content="webiste" />
            <meta property="og:url" content={`${DOMAIN}/privateJobCategories/${query.slug}`} />
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
        <h1 className="text-primary large m-1">{privateJobTag.name}</h1>
        <div className="line"></div>
        <div className="createMain">
          <main >
              <article>
              {privateJobs.map((j, i) => (
                   <Card key={i} privateJob={j} /> 
                  ))}
              </article>
        </main>
          <div>
        <PvtSearch />
    </div>
          </div>
         </section>
       </>
    )
}

PvtJobTag.getInitialProps = ({ query }) => {
    
    return singlePvtJobTag(query.slug).then(data => {
        if (data.error) {
            console.log(data.error);
        } else {
            return { privateJobTag: data.privateJobTag, privateJobs: data.privateJobs, query };
        }
    });
};
export default PvtJobTag;