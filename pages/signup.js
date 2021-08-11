import SignupComponent from '../components/auth/SignupComponent';
import {APP_NAME,DOMAIN} from "../config";
import Head from 'next/head';

const Signup=()=>{
 const head=()=>{
    <Head>
    <title>Sign Up to The ProGrad | The ProGrad</title>
    <meta name="robots" content="index follow" />

    <meta
        name="description"
        content="Sign Up to The ProGrad and Share your Ideas to the students and get job notifications and updates"
   
    />
    <link rel="canonical" href={`${DOMAIN}/signup`} />
    <meta property="og:title" content={`Sign up | The ${APP_NAME}  `} />
    <meta
        property="og:description"
        content="Sign up to The ProGrad and Share your Ideas to the students and get job notifications and updates"
    />
    <meta property="og:type" content="webiste" />
    <meta property="og:url" content={`${DOMAIN}/signup`} />
    <meta property="og:site_name" content={`The ${APP_NAME}`} />
    <meta property="og:image" content={`${DOMAIN}/img/stupro2.png`} />
    <meta property="og:image:secure_url" content={`${DOMAIN}/stupro2.png`} />
    <meta property="og:image:type" content="img/stupro2.png" />
 

</Head>
 }
    return(
        <>
        {head()}
        <SignupComponent/>
        </>
    )
}
export default Signup;