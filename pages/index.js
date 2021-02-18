import {APP_NAME,DOMAIN,FB_APP_ID} from "../config";
import Head from 'next/head';
import Landing from '../components/Landing';
const Index=()=> {

    const head = () => (
        <Head>
            <title>{APP_NAME}  | A community that has a perfect ecosystem for every niche of education system.Also get government(sarkari) and private jobs here </title>
            <meta
                name="description"
                content="A community that has a perfect ecosystem for every niche of education system.You can find apply online for all government jobs,sarkari jobs here.You can write anything on any social topic or any topic related to education. "
           
            />
            <link rel="canonical" href={`${DOMAIN}`} />
            <meta property="og:title" content={`${APP_NAME} | An Online Platform that helps Students to become professionals.Prepare and apply online for any job directly from here `} />
            <meta
                property="og:description"
                content="A community that has a perfect ecosystem for every niche of education system.You can find apply online for all government jobs,sarkari jobs here.You can write anything on any social topic or any topic related to education. "
            />
            <meta property="og:type" content="webiste" />
            <meta property="og:url" content={`${DOMAIN}`} />
            <meta property="og:site_name" content={`${APP_NAME}`} />
            <meta property="og:image" content={`${DOMAIN}/img/stupro2.png`} />
            <meta property="og:image:secure_url" content={`${DOMAIN}/stupro2.png`} />
            <meta property="og:image:type" content="img/stupro2.png" />
            <meta property="fb:app_id" content={`${FB_APP_ID}`} />

        </Head>
    );


    return (
        <>
       {head()}
        <Landing />
        </>
    )
}

export default Index;