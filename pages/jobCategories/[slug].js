import Head from 'next/head';
import { singleJobCategory } from '../../actions/jobCategory';
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../config';
import Card from '../../components/jobs/Card';
import Search from '../../components/jobs/Search';



const JobCategory=({jobCategory,jobs,query})=>{

    const head = () => (
        <Head>
            <title>
                {jobCategory.name} | {APP_NAME}
            </title>
            <meta name="description" content={`Best programming tutorials on ${jobCategory.name}`} />
            <link rel="canonical" href={`${DOMAIN}/jobCategories/${query.slug}`} />
            <meta property="og:title" content={`${jobCategory.name}| ${APP_NAME}`} />
            <meta property="og:description" content={`Best programming tutorials on ${jobCategory.name}`} />
            <meta property="og:type" content="webiste" />
            <meta property="og:url" content={`${DOMAIN}/categories/${query.slug}`} />
            <meta property="og:site_name" content={`${APP_NAME}`} />

            <meta property="og:image" content={`${DOMAIN}/img/StuproLogo.png`} />
            <meta property="og:image:secure_url" content={`${DOMAIN}/StuproLogo.png`} />
            <meta property="og:image:type" content="image/jpg" />
            <meta property="fb:app_id" content={`${FB_APP_ID}`} />
        </Head>
    );
 
 


    return(
     <>
     {head()}
     <section className="blogCreate">
     <h1 className="text-primary large m-1">{jobCategory.name}</h1>
     <div className="line"></div>
     <div className="createMain">
     <main>
       
           <article className="my-1" >
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
};

JobCategory.getInitialProps = ({ query }) => {
   
    return singleJobCategory(query.slug).then(data => {
        if (data.error) {
            console.log(data.error);
        } else {
            return { jobCategory: data.jobCategory, jobs: data.jobs ,query};
        }
    });
};
export default JobCategory;