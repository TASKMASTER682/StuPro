import Private from '../../components/auth/Private';
import AddExperience from '../../components/auth/AddExperience';
import Head from 'next/head';
import {APP_NAME} from '../../config'


const NewExperience = () => {
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
        <AddExperience />
            
        </Private>
        </>

    )
}

export default NewExperience
