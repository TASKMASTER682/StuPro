import Head from 'next/head';
import Link from 'next/link';
import dynamic from 'next/dynamic'
import {useRouter} from 'next/router'
import { listRelatedMat } from '../../actions/material';
import { BreadcrumbJsonLd,NextSeo,ArticleJsonLd } from 'next-seo';
import { API, DOMAIN, APP_NAME} from '../../config';
import renderHTML from 'react-render-html';
import {format} from 'date-fns';
import Share from '../../components/Share'
const NewsLetter =dynamic(async ()=> import('../../components/NewsLetterSubscribe'), { ssr: false });
const  UpdateButton = dynamic(() => import('../../components/reusables/UpdateButton'));
const IFrame = dynamic(async ()=> import('../../components/reusables/IFrame'))
const Faq =  dynamic(async ()=> import('../../components/reusables/ShowFaq'))
const SmallCard = dynamic(() => import('../../components/reusables/SmallCard'));
import Image from '../../components/reusables/ImageComponent'
import { isAuth } from '../../actions/auth';



export const getStaticPaths=async ()=>{
    const res = await fetch(`${API}/materials`);
    const data= await res.json();
    const paths=data.map(material=>{
        return{
            params:{slug:material.slug}
        }
    })
    return{
        paths,
        fallback:true
    }
}
  
export const getStaticProps=async (ctx)=>{
    const slug=ctx.params.slug;
    const [material, photo] = await Promise.all([
        fetch(`${API}/materials/` + slug).then(r => r.json()),
        `${API}/materials/photo/` + slug
    ]);

    if (!material) {
        return {
      notFound:true
        }
      }
    return{
        props:{
            material,
            photo
        },
        revalidate:60
    }

}
const SingleMaterial=  ({material,photo})=>{

    const router=useRouter();

    if(router.isFallback){
        return <div>Loading...</div>
    }
  return(
      <>
    <NextSeo
      title={material.title}
      description={material.desc}
      canonical={`https://www.theprograd.com/free-study-material/${material.slug}`}
      
      openGraph={{
        url: `https://www.theprograd.com/free-study-material/${material.slug}`,
        title: `${material.title}`,
        description:`${material.desc}`,
        images:[
        {
           url: 'https://www.theprograd.com/img/hire.svg',
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
        },
        {
          position: 3,
          name: `${material.title}`,
          item: `https://www.theprograd.com/free-study-material/${material.slug}`,
        },
      
      ]}
    />
      <ArticleJsonLd
      url={`https://www.theprograd.com/free-study-material/${material.slug}`}
      title={material.title}
      images={[
        `${API}/materials/photo/${material.slug}`,
,
      ]}
      datePublished={material.createdAt}
      dateModified={material.updatedAt}
      authorName={['Sayed Anwar']}
      publisherName="The ProGrad"
      publisherLogo="http://www.theprograd.com/img/StuproLogo.png"
      description={material.desc}
    />
        <section className='flex flex-col gap-2 mb-2 pt-14 lg:pt-20 lg:grid lg:grid-cols-3 lg:px-16'>
      <div className='col-span-2 p-1 rounded-md lg:shadow-md lg:shadow-green-600 '>
      <div className='flex mb-1 '>
      <img className='w-16 h-16 p-1 mx-2 mt-3 rounded-full shadow-md lg:w-24 lg:h-24 shadow-green-500 lg:mt-4' src={`${photo}`}  alt='Logo' />
      <Link href={`/free-study-material/${material.slug}`}>
        
        <h1 className='mb-1 text-2xl font-bold lg:text-4xl'>{material.title}</h1>
        
      </Link>
      </div>

      <ul className='flex flex-col justify-between px-1 my-1 lg:flex-row'>
          <li className='text-sm font-semibold'>Posted on: <span className=' mx-1'> {format(new Date(material.updatedAt),'dd MMM yyyy')}</span></li>
          <li><Share newRoute='free-study-material' blog={material} /></li>
      </ul>
          <div className='p-1 body-style'>
          {renderHTML(material.body)}
          <br />
          <button className='p-1 px-2 text-sm rounded-sm ring-1 ring-green-600'>{material.materialType}</button>

          </div>
      </div>
      <div className='p-1 rounded-md lg:shadow-md lg:shadow-green-500 '>
      <h2 className="p-1 my-2 text-lg font-bold bg-teal-100">Suggested Material</h2>
      <SmallCard listRelated={listRelatedMat} job={material} newRoute='materials' />
      <h2 className="p-1 my-2 text-lg font-bold bg-teal-100"> Frequently Asked Questions</h2>
      <Faq material={material}/>
{    isAuth() && isAuth().role===1  &&
<>
<h3 className='p-1 my-2 text-lg font-bold bg-teal-100'>Admin Panel</h3>
      <div className='flex flex-row justify-between '>
          <UpdateButton url={`/admin/materialcrud/${material.slug}/addLinks `} name='Add Pdf Links'/>
          <UpdateButton url={`/admin/materialcrud/${material.slug} `} name='Add Faq' />
          <UpdateButton url={`/admin/materialcrud/${material.slug}/update `} name='Update' />
          </div>
</>
}
           <div  id="pdf-mat" >
            <h3 className="p-1 my-2 text-lg font-bold bg-teal-100">The Related Free Pdfs to download </h3>
            <ol className="rounded-md ring-1 ring-teal-400">
            <IFrame material={material} />
            </ol>
            </div>
      </div>
      <NewsLetter />
      </section>

      </>
  

)
 }



export default SingleMaterial;






