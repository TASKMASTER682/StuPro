import {API,APP_NAME,DOMAIN} from "../config";
import Head from 'next/head';
import Landing from '../components/Landing';
const Index=(props)=> {
    function makeSchema() {
        return {
            "@context": "http://schema.org",
            "@type": "Organization",
            "url": `${DOMAIN}`,
             "logo": `${DOMAIN}/img/prograd.png`
              }
        
    }
    const Schema=()=> {
        return (
            <script
                type='application/ld+json'
                dangerouslySetInnerHTML={{ __html: JSON.stringify(makeSchema()) }}
            />
        )
    }
    const head = () => (
        <Head>
            <title>The {APP_NAME} | Jobs and Conceptual Leaarning </title>
            <meta name="robots" content="index follow" />

            <meta
                name="description"
                content="The ProGrad is a free job alerts platform for job seekers and an educational platform for students who will get conceptual learning here."        
            />
            <link rel="canonical" href={`${DOMAIN}`} />
            <meta property="og:title" content={`The ${APP_NAME}`} />
            <meta
                property="og:description"
                content="The ProGrad is a free job alerts platform for job seekers and an educational platform for students who will get conceptual learning here.Just Signin and start."
            />
            <meta property="og:type" content="webiste" />
            <meta property="og:url" content={`${DOMAIN}`} />
            <meta property="og:site_name" content={`${APP_NAME}`} />
            <meta property="og:image" content={`${DOMAIN}/img/stupro2.png`} />
            <meta property="og:image:secure_url" content={`${DOMAIN}/stupro2.png`} />
            <meta property="og:image:type" content="img/stupro2.png" />
            {Schema()}

        </Head>
    );


    return (
        <>
       {head()}
        <Landing jobs={props.jobs} privateJobs={props.privateJobs}  result={props.results} admitCard={props.admitCard} />
        </>
    )
}

export default Index;



export const getStaticProps=async (ctx)=>{

    const [jobs,privateJobs,results,admitCard] = await Promise.all([
         fetch(`${API}/jobsHome`).then(r => r.json()),
         fetch(`${API}/privateJobsHome`).then(r => r.json()), 
         fetch(`${API}/jobsResult`).then(r => r.json()), 
         fetch(`${API}/jobsAdmit`).then(r => r.json()), 


      ]);
      return{
          props:{
              jobs,
              privateJobs,
              results,
              admitCard,
          },
          revalidate:60
      }

}