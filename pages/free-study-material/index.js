import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic'
import Card from '../../components/materials/Card';
import { withRouter } from 'next/router';
import {APP_NAME , DOMAIN} from '../../config'
import {listMaterialWithCategories} from '../../actions/material'
const LoadMoreMat =dynamic(async ()=>import('../../components/materials/LoadMoreMat'));

const FreeStudyMaterial = ({ router, materials,materialCategories,materialsLimit,totalmaterials}) => {

    const head = () => (
        <Head>
            <title>100+ collection of free study material with best tips and tricks |The {APP_NAME}</title>
            <link rel="canonical" href={`${DOMAIN}/${router.pathname}`} />
            <meta name="robots" content="index follow" />
            <meta name="description" 
            content='Read and download 100+ articles which consists of free Pdfs ,tips and tricks ,syllabuses,books pdfs,and study of Bansal classes akash and more top institutes of Kota.'
            />
            <meta property="og:title" content={`|The ${APP_NAME}`} />
            <meta
                property="og:description"
                content='Read and download 100+ articles which consists of free Pdfs ,tips and tricks ,syllabuses,books pdfs,and study of Bansal classes akash and more top institutes of Kota.'
            />
            <meta property="og:type" content="webiste" />
            <meta property="og:url" content={`${DOMAIN}${router.pathname}`} />
            <meta property="og:site_name" content={`${APP_NAME}`} />
            <meta property="og:image" content={`${DOMAIN}/img/StuproLogo.png`} />
            <meta property="og:image:secure_url" content={`${DOMAIN}/img/StuproLogo.png`} />
            <meta property="og:image:type" content="img/StuproLogo.png" />
        </Head>
    );

    const showAllMaterials = () => {
        return materials.map((material, i) => {
            // ()
            return (
                <article className="my-1 " key={i} >
                 <Card material={material}/>
               </article>
            );
        });
    };
    return (
        <>
        {head()}
<section className='container'>
  <h1 className="text-primary large">Free Study Material</h1>
  <hr className='hr-1' />
  <p className="text-primary small mb-1">Filter the study material according to your needs</p>
  <a href="/free-study-material/material-search" className="btn btn-dark my-1 input-box">Click me to search</a>

 <div  className="new-flex">
 {showAllMaterials()}
 <LoadMoreMat listMaterialWithCategories={listMaterialWithCategories} totalMaterials={totalmaterials} materialsLimit={materialsLimit} />

 </div>

</section>
        </>

    )
}

export default withRouter(FreeStudyMaterial)


export async function getStaticProps(){
    let skip = 0;
    let limit = 10;
    return listMaterialWithCategories(skip, limit).then(data => {
        if (data.error) {
            console.log(data.error);
        } else {
            return {
                props:{
                    materials: data.materials,
                    materialCategories: data.materialCategories,
                    totalmaterials: data.size,
                    materialsLimit: limit,
                    materialSkip: skip

                },
                revalidate:60
            };
        }
    });
}

