import React from 'react';
import Admin from '../../components/auth/Admin';
import AddExperience from '../../components/auth/AddExperience';
import Head from 'next/head';
import {APP_NAME} from '../../config'

const Experience = () => {
    const head = () => (
        <Head>
            <title>
                Add Experience to the Profile | The {APP_NAME}
            </title>
            <meta name="robots" content="noindex nofollow" />
        </Head>
    )
    return (
        <>
        {head()}
        <Admin>
        <AddExperience />
            
        </Admin>
        </>

    )
}

export default Experience
