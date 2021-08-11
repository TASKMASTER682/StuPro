import Private from '../../components/auth/Private';
import AddEducation from '../../components/auth/AddEducation';
import Head from 'next/head';
import {APP_NAME} from '../../config'



const NewEducation = () => {
    const head = () => (
        <Head>
            <title>
               Add Education |The {APP_NAME}
            </title>
            <meta name="robots" content="noindex nofollow"></meta>
        </Head>
    );
    return (
        <>
        {head()}
        <Private>
        <AddEducation />
            
        </Private>
        </>

    )
}

export default NewEducation
