import {useState} from 'react';
import dynamic from 'next/dynamic'
import Card from '../../components/materials/Card';
import { withRouter } from 'next/router';
import {APP_NAME , DOMAIN} from '../../config'
import {listMaterialWithCategories} from '../../actions/material';
import { BreadcrumbJsonLd,NextSeo } from 'next-seo';


export async function getStaticProps(){

    return listMaterialWithCategories().then(data => {
        if (data.error) {
            console.log(data.error);
        } else {
            return {
                props:{
                    materials: data
                },
                revalidate:60
            };
        }
    });
}


const FreeStudyMaterial = ({ router, materials}) => {

  const [visible,setVisible]=useState(10);

    const showAllMaterials = () => {
        return materials.slice(0,visible).map((material, i) => {
            // ()
            return (
                <article className='shadow-md rounded-md shadow-green-500 w-full lg:w-[20rem] mx-4 mb-3 p-2 transition ease-in-out delay-150  hover:ring-1 hover:ring-black hover:-translate-y-1 hover:scale-110' key={i} >
                 <Card material={material}/>
               </article>
            );
        });
    };
    const showMoreItem=()=>{
      setVisible((prevValue)=>prevValue+10)
    }
    return (
<>
<NextSeo
      title={`100+ collection of free study material with best tips and tricks |The ${APP_NAME}`}
      description='Read and download 100+ articles which consists of free Pdfs ,tips and tricks ,syllabus,books pdfs,and study of Bansal classes akash and more top institutes of Kota.'
      canonical={`https://www.theprograd.com/free-study-material`}
      
      openGraph={{
        url: `https://www.theprograd.com/free-study-material`,
        title:`100+ collection of free study material with best tips and tricks |The ${APP_NAME}`,
        description:'Read and download 100+ articles which consists of free Pdfs ,tips and tricks ,syllabus,books pdfs,and study of Bansal classes akash and more top institutes of Kota.',
        images:[
        {
           url: 'https://www.theprograd.com/img/book.svg',
            width: 800,
            height: 600,
            alt: 'The ProGrad Home Page',
            type: 'image/svg',
          }
          ],
        site_name: 'The ProGrad',
      }}
      facebook={{
        handle: '@handle',
        site: '@site',
        cardType: 'summary_large_image',
        appId: '721482821740858'
      }}
    />
    <BreadcrumbJsonLd
      itemListElements={[
        {
          position: 1,
          name: 'Home',
          item: 'https://www.theprograd.com/',
        },
        {
          position: 2,
          name: 'Free Study Material',
          item: 'https://www.theprograd.com/free-study-material',
        }
      
      ]}
    />
    <section className='lg:pt-20 pt-14 lg:px-7'>
 <div  className='flex flex-wrap p-2 my-1'>
 {showAllMaterials()}
 </div>
 { materials.length >= 10 &&  <div>
    <button className='bg-red-400 font-bold p-2' onClick={showMoreItem} >Load More</button>
    </div>}
</section>
</>

    )
}

export default withRouter(FreeStudyMaterial)




