import {APP_NAME,DOMAIN} from '../config';
import Head from 'next/head'
const InstantJobs = () => {
    const head = () => (
        <Head>
            <title>Get Job Instantly| The {APP_NAME}</title>
            <meta name="robots" content="index follow" />

            <meta
                name="description"
                content="Get your job Instatntly.If your are in a harsh need of a job then connect with us.We will surely give you some advie to do a job instantly and earn money"        
            />
            <link rel="canonical" href={`${DOMAIN}/instant-jobs`} />
            <meta property="og:title" content={`The ${APP_NAME}`} />
            <meta
                property="og:description"
                content="Get your job Instatntly.If your are in a harsh need of a job then connect with us.We will surely give you some advie to do a job instantly and earn money"
            />

        </Head>
    );
    return (
        <>
        {head()}
        <section className="container my-1">
        <h1 className="text-primary large">Get a Job now</h1>
        <div className="job p-2">
        <p>If you don't have any skills or have no educational background or you are not intrested to study then we have an oppurtunity for you with the help of which you can earn a big amount if you will work hard.You must have social media accounts to work.
        Actually there are various types of work out there which do not need any educational qualification.The only thing required is your interest and your hard work.We also provide career guidance.So for anything related to job career guidance and free study material,Just Sign up and contact us</p>
        <h2 className="small text-danger my-2">To know more contact us on our social media accounts.Links are given in the bottom of the page</h2>
            
        </div>
        
        </section>
        </>

    )
}

export default InstantJobs
