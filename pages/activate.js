import Head from 'next/head';
import {APP_NAME} from '../config'

const Activate=()=>{
    const head = () => (
        <Head>
            <title>
                Activate Your Profile | The {APP_NAME}
            </title>
            <meta name="robots" content="noindex nofollow" />
        </Head>
    )
    return (
        <>
        {head()}
        <section className="container">
        <div className="blog my-2 p-3">
            <p className="small text-dark p-1">You are successfully signed up.Please check your email and click on the link to activate your account.</p>
        </div>
        </section>
        </>

    )    
}
export default Activate;