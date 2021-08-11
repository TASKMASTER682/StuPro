import Admin from '../../../../components/auth/Admin';
import AddLink from '../../../../components/reusables/AddLink';
import Head from 'next/head';
import {APP_NAME} from '../../../../config'

const AddLinks = () => {
    const head = () => (
        <Head>
            <title>
                Add Links | The {APP_NAME}
            </title>
            <meta name="robots" content="noindex nofollow" />
        </Head>
    )
    return (
        <>
        {head()}
    <Admin>
        <AddLink newRoute='materials'/>
    </Admin>
        </>

    )
}

export default AddLinks
