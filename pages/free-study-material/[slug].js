import Head from 'next/head';
import Link from 'next/link';
import dynamic from 'next/dynamic'
import {useRouter} from 'next/router'
import { listRelatedMat } from '../../actions/material'
import PdfConverter from '../../components/reusables/PdfConverter';
import {fetcher} from '../api/fetcher';
import { API, DOMAIN, APP_NAME} from '../../config';
import renderHTML from 'react-render-html';
import moment from 'moment';
import useSWR from 'swr';
const NewsLetter =dynamic(async ()=> import('../../components/NewsLetterSubscribe'), { ssr: false });
const FacebookIcon=dynamic(async ()=>import('@material-ui/icons/Facebook'),{loading:()=><p>...</p>,ssr:false});
const LinkedInIcon =dynamic(async ()=>import('@material-ui/icons/LinkedIn'),{loading:()=><p>...</p>,ssr:false});
const TelegramIcon =dynamic(async ()=>import('@material-ui/icons/Telegram'),{loading:()=><p>...</p>,ssr:false});
const  UpdateButton = dynamic(() => import('../../components/reusables/UpdateButton'));
const IFrame = dynamic(async ()=> import('../../components/reusables/IFrame'))
const Faq =  dynamic(async ()=> import('../../components/reusables/ShowFaq'))
const SmallCard = dynamic(() => import('../../components/reusables/SmallCard'));
import Image from '../../components/reusables/ImageComponent'




const SingleMaterial=  (props)=>{
    const {data} = useSWR(props.slug ? `${API}/materials/${props.slug}`:null, fetcher, { initialData: props});

    const {material}=data;
    
    const newFaq=()=>{
        return material.faq.map((f,i)=>{
            return (
               {
                   "@type": "Question",
                   "name": `<h4 key=${i}>${f.ques}</h4>`,
                   "acceptedAnswer": {
                    "@type": "Answer",
                    "text":`<p key=${i}>${f.ans}</p>`
                },
               }
   
            )
            
        })
    }
    const makeFaqSchema=()=> {
        return {
            // schema truncated for brevity
            '@context': 'http://schema.org',
            '@type': 'FAQPage',
            'mainEntity':[material.faq ? newFaq():null]
        }
    }


    const head = () => (
        <Head>
        <title>{material.title} |The {APP_NAME}</title>
        <meta name="robots" content="index follow" />
            <meta name="description" content={material.desc} />
            <link rel="canonical" href={`${DOMAIN}/free-study-material/${material.slug}`} />
            <meta property="og:title" content={`${material.title}| ${APP_NAME}`} />
            <meta property="og:description" content={material.desc} />
            <meta property="og:type" content="webiste" />
            <meta property="og:url" content={`${DOMAIN}/free-study-material/${material.slug}`} />
            <meta property="og:site_name" content={`The ${APP_NAME}`} />
            <meta property="og:image" content={`${API}/materials/photo/${material.slug}`} />
            <meta property="og:image:secure_url" content={`${API}/materials/photo/${material.slug}`} />
            <meta property="og:image:type" content={`${API}/materials/photo/${material.slug}`} />
            <script
                key={`faqJSON-${material.faq._id}`}
                type='application/ld+json'
                dangerouslySetInnerHTML={{ __html: JSON.stringify(makeFaqSchema())}}
            />
        </Head>

    );
    const router=useRouter();

    if(router.isFallback){
        return <div>Loading...</div>
    }
  return(
         <>
            {head()}
 
            <section className="mat-container">
            <div className="main-mat job" >
            <PdfConverter>
            <div className="input-box p-1">
            <Link href={`/free-study-material/${material.slug}`}>
                <a>
                  <h1  className="text-dark large p-1" style={{lineHeight:'3rem'}}>
                        {material.title}
                  </h1>
                </a>
            </Link>
            </div>
           
            <div className="avatar-upload my-1" style={{margin:'auto'}}>
                <div className="avatar-preview"><Image photo={props.photo} /></div>
                <strong className=" text-danger extra-small author my-1 p-1 input-box">Published {moment(material.createdAt).format("MMM DD YYYY")}</strong>
             </div>
            <a href="#pdf-mat" className="mat-special"><strong >Download Study Material Now</strong> </a>
            <div className="job-content p-1" > 
                <div className="selectable" >
                    {renderHTML(material.body)}
                </div>
            </div>
            {material.downloadLink[0] !=null && 
                        <div className='input-box' id="pdf-mat" >
                        <h3 className="small text-primary my-1">The Related Free Pdfs to download </h3>
                        <ol className="btn nbtn">
                        <IFrame material={material} />
                        </ol>
                        </div>
                      }
            
            </PdfConverter>
            <div className='new-flex'>
                      <UpdateButton url={`/admin/materialcrud/${material.slug}/addLinks `} name='Add Pdf Links'/>
                      <UpdateButton url={`/admin/materialcrud/${material.slug} `} name='Add Faq' />
                      <UpdateButton url={`/admin/materialcrud/${material.slug}/update `} name='Update' />
                      </div>
            </div>

        <div className="mat-author p-1">
        <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
        <div className='round-image profile-img-border'>
            <Link href={`/profile/${material.postedBy.username}`}>
                <a>
                <img loading='lazy' src={`${API}/user/photo/${material.postedBy.username}`}   alt={`${material.postedBy.name} profile photo`}   className="profile-img round-image" />
                </a>
            </Link>
            </div>
            <p className="text-dark extra-small my-1"><strong>About the Author</strong></p>
            <Link href={`/profile/${material.postedBy.username}/public-profile`}>
                <a>
                 <strong  className="small text-primary input-box my-1">{material.postedBy.name} </strong>
                </a>
            </Link>
        </div>
        <div className="line"></div>
        <p className="text-danger my-1"><strong>Share this Article</strong></p>

            <div className="share icons m-1 " >       
                <a href={`https://www.facebook.com/sharer/sharer.php?u=https://theprograd.com/free-study-material/${material.slug}`} target="_blank"><strong className='text-primary'><FacebookIcon style={{fontSize:30}}/></strong></a>
                <a href={` https://www.linkedin.com/sharing/share-offsite/?url=https://theprograd.com/free-study-material/${material.slug}`} target="_blank" ><strong className='text-primary'><LinkedInIcon style={{fontSize:30}}/></strong></a>
                <a href={`https://t.me/share/url?url=https://theprograd.com/free-study-material/${material.slug}&text=${material.title}`}><strong className='text-primary'><TelegramIcon style={{fontSize:30}} /></strong></a>    
            </div>
            <div className="line"></div>
            <div className="my-1">
            <a href="#pdf-mat" className="input-box p-1 hide-sm"><strong className="text-danger">Download {material.materialType}</strong> </a>
            </div>
            <div className="py-2">
            <a href="#pdf-mat" className="input-box p-1 hide-sm"> <strong className="text-dark"> Download this article as Pdf</strong></a>
            </div>
            </div>

</section>
<div className="container">
<div  className="input-box p-1">
{material.faq[0] !=null  && 
    <div className='btn input-box'>
    <h2 className="small text-primary my-1"> Frequently Asked Questions</h2>
            <Faq material={material}/>
    </div> 
 }
</div>
 <h2 className="text-primary small m-1">Suggested blogs</h2>
            <div className='line'></div>
            <div className="card">
            <SmallCard listRelated={listRelatedMat} job={material} newRoute='materials' />
            </div>
</div>
<NewsLetter />

 </>

)
 }

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

export default SingleMaterial;






     