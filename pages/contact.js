import ContactForm from '../components/form/ContactForm';
import Head from 'next/head';
import {APP_NAME,DOMAIN} from '../config';
import { BreadcrumbJsonLd,NextSeo } from 'next-seo';

const Contact = () => {
    const head = () => (
        <Head>
            <title>
                Contct Us | The {APP_NAME}
            </title>
            <meta name="robots" content="index follow" />
            <link rel="canonical" href={`${DOMAIN}/contact`} />
            <meta name="description" content='If you have any offer,guest posting request,sposership query,advertisement of any query relates to job,then you can contact with us' />
         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
    )
    return (
        <>

    <NextSeo
      title="Countact Us"
      description="If you have any offer,guest posting request,sposership query,advertisement of any query relates to job,then you can contact with us"
      canonical="https://www.theprograd.com/contact"

      openGraph={{
        url: 'https://www.theprograd.com/contact',
        title:'Contact Us',
        description:"If you have any offer,guest posting request,sposership query,advertisement of any query relates to job,then you can contact with us",

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
          name: 'Contact Us',
          item: 'https://www.theprograd.com/contact',
        }
      ]}
    />
    <div className='lg:pt-12 px-2 pt-6 lg:px-60 w-auto'>
        <h2 className='text-2xl text-teal-500 mt-7 font-bold'>Contact form</h2>
        <hr />
        <p className='p-2 font-bold text-gray-500'>If you have any query regrading Site, Advertisement and any other issue, please feel free to contact us</p>
         <ContactForm />
    </div>
        </>

        
    );
};

export default Contact;