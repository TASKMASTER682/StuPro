import Admin from '../../../components/auth/Admin';
import MaterialRead from '../../../components/materialCrud/MaterialRead';
import Head from 'next/head';
import {APP_NAME} from '../../../config'


const Materials = () => {
    const head = () => (
        <Head>
            <title>
                Read Material | The {APP_NAME}
            </title>
            <meta name="robots" content="noindex nofollow" />
        </Head>
    )
    return (
        <>
        {head()}
            <Admin>
                <MaterialRead />
            </Admin>
        </>

       
    );
};

export default Materials;