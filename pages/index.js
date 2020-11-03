import {APP_NAME,DOMAIN,FB_APP_ID} from "../config";
import Head from 'next/head';
import Landing from '../components/Landing';
const Index=()=> {

    const head = () => (
        <Head>
            <title>{APP_NAME}  | An Online Platform that helps Students to become professionals </title>
            <meta
                name="description"
                content=" An Online Platform that helps Students to become professionals.It provides Jobs ,blogs written by top class professionals of india and free study material.It helps the students to guide "
            />
            <link rel="canonical" href={`${DOMAIN}`} />
            <meta property="og:title" content={`${APP_NAME} | An Online Platform that helps Students to become professionals  `} />
            <meta
                property="og:description"
                content="All types of government and private sector Jobs"
            />
            <meta property="og:type" content="webiste" />
            <meta property="og:url" content={`${DOMAIN}`} />
            <meta property="og:site_name" content={`${APP_NAME}`} />

            <meta property="og:image" content={`${DOMAIN}/static/images/stupro.jpg`} />
            <meta property="og:image:secure_url" content={`${DOMAIN}/static/images/stupro.jpg`} />
            <meta property="og:image:type" content="image/jpg" />
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