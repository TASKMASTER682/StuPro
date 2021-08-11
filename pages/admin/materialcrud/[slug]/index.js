import Admin from '../../../../components/auth/Admin';
import AddFaq from '../../../../components/reusables/AddFaq';
import Head from 'next/head';
import {APP_NAME} from '../../../../config'

const NewFaq = () => {
    const head = () => (
        <Head>
            <title>
                Create Job | The {APP_NAME}
            </title>
            <meta name="robots" content="noindex nofollow" />
        </Head>
    )
    return (
        <>
        {head()}
        <Admin>
        <AddFaq newRoute='materials'/>
        </Admin>
        </>

    )
}

export default NewFaq
