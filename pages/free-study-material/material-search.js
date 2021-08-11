import AutoComplete from '../../components/reusables/AutoComplete';
import {list} from '../../actions/material'
import Head from 'next/head';
import ShowJobCategories from '../../components/reusables/SearchCat';
import {DOMAIN, APP_NAME} from '../../config';



const MaterialSearch=()=>{
    const head = () => (
        <Head>
            <title> Search the Study Material | The {APP_NAME}</title>
            <meta name="robots" content="noindex nofollow" />
            <meta name="description" 
            content='Search Every type of Study Material you want and you can download it free of cost'
            />
            <link rel="canonical" href={`${DOMAIN}/materials/material-search`} />
            <meta property="og:title" content={`> Search the Study Material | The ${APP_NAME}`} />
            <meta
                property="og:description"
                content='Search Every type of Study Material you want and you can download it free of cost'

            />
            <meta property="og:type" content="webiste" />
            <meta property="og:url" content={`${DOMAIN}/materials/material-search`} />
            <meta property="og:site_name" content={`${APP_NAME}`} />
            <meta property="og:image" content={`${DOMAIN}/img/StuproLogo.png`} />
            <meta property="og:image:secure_url" ccontent={`${DOMAIN}/img/StuproLogo.png`} />
            <meta property="og:image:type" content="img/StuproLogo.png" />
        </Head>
    );
    return(
        <>
        {head()}
        <section className="container">
            <h1 className="large text-primary">Fast Search Your Study Material here</h1>
            <div className="line"></div>
            <div className="my-1">
            <AutoComplete list={list} newRoute='materials' />
            </div>
           <div className="my-2">
           <div >
           <h2 className="lead text-primary">Study Material Categories</h2>
           <ShowJobCategories newRoute='materialCategories' />
           </div> 
               
           </div>
        </section>
        </>
       
    )
}

export default MaterialSearch;