import {API,APP_NAME,DOMAIN} from "../config";
import Landing from '../components/Landing';
import { BreadcrumbJsonLd,NextSeo } from 'next-seo';
import fetch from 'isomorphic-fetch';


export const getStaticProps=async ()=>{

  const jobs = await fetch(`${API}/jobsHome`).then(r => r.json());
    return{
        props:{
            jobs,

        },
        revalidate:60
    }

}
const Index=(props)=> {

    return (
    <>
    <NextSeo
      title={`The ${APP_NAME}- For Jobs and Conceptual Leaarning `}
      description="The ProGrad is a free job alerts platform for job seekers and an educational platform for students who will get conceptual learning here."
      canonical="https://www.theprograd.com/"

      openGraph={{
        url: 'https://www.theprograd.com/',
        title:`The ${APP_NAME} | Jobs and Conceptual Leaarning `,
        description:"The ProGrad is a free job alerts platform for job seekers and an educational platform for students who will get conceptual learning here.",
        images:[
        {
           url: 'https://www.theprograd.com/img/top-landing.svg',
            width: 800,
            height: 600,
            alt: 'The ProGrad Home Page',
            type: 'image/svg',
          }
          ],
        site_name: 'The ProGrad',
      }}

      facebook={{
        handle: '@handle',
        site: '@site',
        cardType: 'summary_large_image',
        appId: '721482821740858'
      }}
    />

         <BreadcrumbJsonLd
      itemListElements={[
        {
          position: 1,
          name: 'Home',
          item: 'https://www.theprograd.com/',
        }
      ]}
    />
        <Landing jobs={props.jobs}  />
    </>
    )
}

export default Index;




