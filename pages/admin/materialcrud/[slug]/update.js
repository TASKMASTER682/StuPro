import Admin from '../../../../components/auth/Admin';
import UpdateMat from '../../../../components/materialCrud/UpdateMaterial'
import Head from 'next/head'
import {APP_NAME} from '../../../../config'

const update = () => {
    const head = () => (
        <Head>
            <title>
                Update Study Material | The {APP_NAME}
            </title>
            <meta name="robots" content="noindex nofollow" />
        </Head>
    )
    return (
        <>
        {head()}
        <Admin>
        <UpdateMat />
        </Admin>
        </>

    )
}

export default update
