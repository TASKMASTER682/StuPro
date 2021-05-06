import SigninComponent from '../components/auth/SigninComponent';
import {APP_NAME,DOMAIN,FB_APP_ID} from "../config";
import Head from 'next/head';

const Signin=()=>{
    const head=()=>{
        <Head>
    <title> Signin to The ProGrad  </title>
    <meta
        name="description"
        content="Sign in to The ProGrad and Share your Ideas to the students and get job notifications and updates"
   
    />
    <link rel="canonical" href={`${DOMAIN}`} />
    <meta property="og:title" content={`The ${APP_NAME} | Sign in to The ProGrad and Share your Ideas to the students and get job notifications and updates `} />
    <meta
        property="og:description"
        content="Sign in to The ProGrad and Share your Ideas to the students and get job notifications and updates"
    />
    <meta property="og:type" content="webiste" />
    <meta property="og:url" content={`${DOMAIN}`} />
    <meta property="og:site_name" content={`${APP_NAME}`} />
    <meta property="og:image" content={`${DOMAIN}/img/stupro2.png`} />
    <meta property="og:image:secure_url" content={`${DOMAIN}/stupro2.png`} />
    <meta property="og:image:type" content="img/stupro2.png" />
    <meta property="fb:app_id" content={`${FB_APP_ID}`} />
  

</Head>
    }
    return(
        <>
        {head()}
        <SigninComponent/>
        </>
    )
}
export default Signin;