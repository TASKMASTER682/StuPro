import SignupComponent from '../components/auth/SignupComponent';
import {APP_NAME,DOMAIN} from "../config";
import { BreadcrumbJsonLd,NextSeo } from 'next-seo';


const Signup=()=>{


    return(
        <>
    <NextSeo
      title={`Sign Up at The ${APP_NAME} `}
      description="Sign Up and get latest updates from The ProGrad"
      canonical="https://www.theprograd.com/signup"
      
      openGraph={{
        url: 'https://www.theprograd.com/signup',
        title:`Sign Up at The ${APP_NAME} `,
        description:"Sign Up and get latest updates from The ProGrad",
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
          name: 'Sign Up',
          item: 'https://www.theprograd.com/signup',
        },
      
      ]}
    />
        <SignupComponent/>
        </>
    )
}
export default Signup;