import Admin from '../../../../components/auth/Admin';
import AddFaq from '../../../../components/reusables/AddFaq';
import Head from 'next/head';
import {APP_NAME} from '../../../../config'


const NewFaq = () => {
    const head = () => (
        <Head>
            <title>
                Add Faqs | The {APP_NAME}
            </title>
            <meta name="robots" content="noindex nofollow" />
        </Head>
    )
    return (
        <>
        {head()}
      <Admin>
        <AddFaq newRoute='jobs' />   
        </Admin>
        </>
  
    )
}

export default NewFaq
