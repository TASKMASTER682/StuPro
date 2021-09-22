import ContactForm from '../components/form/ContactForm';
import Head from 'next/head';
import {APP_NAME,DOMAIN} from '../config'
const Contact = () => {
    const head = () => (
        <Head>
            <title>
                Contct Us | The {APP_NAME}
            </title>
            <meta name="robots" content="index follow" />
            <link rel="canonical" href={`${DOMAIN}/contact`} />
            <meta name="description" 
            content='If you have any offer,guest posting request,sposership query,advertisement of any query relates to job,then you can contact with us'
            />
        </Head>
    )
    return (
        <>
        {head()}
            <div className="container">
                 <h2 className="text-primary large">Contact form</h2>
                 <p className="extra-small text-light-gray">If you have any query regrading Site, Advertisement and any other issue, please feel free to contact us</p>
                        <div className="line"></div>
                        <ContactForm />
            </div>
        </>

        
    );
};

export default Contact;