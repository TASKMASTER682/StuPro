import React from 'react';
import Admin from '../../components/auth/Admin';
import AddEducation from '../../components/auth/AddEducation';
import Head from 'next/head';
import {APP_NAME} from '../../config';


const Education = () => {
    const head = () => (
        <Head>
            <title>
                Add Education to the Profile | The {APP_NAME}
            </title>
            <meta name="robots" content="noindex nofollow" />
        </Head>
    )
    return (
        <>
        {head()}
        <Admin>
        <AddEducation />
        </Admin>
        </>

    )
}

export default Education
