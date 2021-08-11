import {APP_NAME,DOMAIN} from '../config';
import Head from 'next/head'
const InstantJobs = () => {
    const head = () => (
        <Head>
            <title>Get Job Instantly| The {APP_NAME}</title>
            <meta name="robots" content="index follow" />

            <meta
                name="description"
                content="The ProGrad is a free job alerts platform for job seekers and an educational platform for students who will get conceptual learning here."        
            />
            <link rel="canonical" href={`${DOMAIN}/instant-jobs`} />
            <meta property="og:title" content={`The ${APP_NAME}`} />
            <meta
                property="og:description"
                content="The ProGrad is a free job alerts platform for job seekers and an educational platform for students who will get conceptual learning here.Just Signin and start."
            />

        </Head>
    );
    return (
        <>
        {head()}
        <section className="container">
        <h1 className="text-primary large my-1">Get a Job now</h1>
        <div className="job p-2">
        <p>If you don't have any skills or have no educational background or you are not intrested to study then we have an oppurtunity for you with the help of which you can earn a big amount if you will work hard.You must have social media accounts to work.</p>
        <h2 className="small text-danger my-2">To know more contact us on our social media accounts.Links are given in the bottom of the page</h2>
            
        </div>
        
        </section>
        </>

    )
}

export default InstantJobs
