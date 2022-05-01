import SigninComponent from '../components/auth/SigninComponent';
import {APP_NAME,DOMAIN,FB_APP_ID} from "../config";
import { BreadcrumbJsonLd,NextSeo } from 'next-seo';


const Signin=()=>{

    return(
        <>
            <NextSeo
      title="Sign in to get started at The ProGrad"
      description="Sign in to The ProGrad and Share your Ideas to the students and get job notifications and updates"
      canonical="https://www.theprograd.com/signin"
      
      openGraph={{
        url: 'https://www.theprograd.com/signin',
        title:"Sign in to get started at The ProGrad",
        description:"Sign in to The ProGrad and Share your Ideas to the students and get job notifications and updates",
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
        },
        {
          position: 2,
          name: 'Sign In',
          item: 'https://www.theprograd.com/signin',
        },
      
      ]}
    />
        <SigninComponent/>
        </>
    )
}
export default Signin;