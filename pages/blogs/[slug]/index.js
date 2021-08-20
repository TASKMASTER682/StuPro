import Head from 'next/head';
import Link from 'next/link';
import {useRouter} from 'next/router';
import dynamic from "next/dynamic";
import {listRelated} from '../../../actions/blog'
const UpdateButton = dynamic(async ()=> import('../../../components/reusables/UpdateButton'));;
import {fetcher} from '../../api/fetcher';
import { API, DOMAIN, APP_NAME } from '../../../config';
import renderHTML from 'react-render-html';
import moment from 'moment';
import useSWR from 'swr';
const SmallCard = dynamic(async ()=> import('../../../components/reusables/SmallCard'));
const FacebookIcon=dynamic(async ()=>import('@material-ui/icons/Facebook'),{loading:()=><p>...</p>,ssr:false});
const LinkedInIcon =dynamic(async ()=>import('@material-ui/icons/LinkedIn'),{loading:()=><p>...</p>,ssr:false});
const TelegramIcon =dynamic(async ()=>import('@material-ui/icons/Telegram'),{loading:()=><p>...</p>,ssr:false});
const TagInSlug =  dynamic(async ()=> import('../../../components/reusables/TagInSlug'));
const CategoryInSlug= dynamic(async ()=> import('../../../components/reusables/SlugCat'));
const Faq =  dynamic(async ()=> import('../../../components/reusables/ShowFaq'))
const NewsLetter =  dynamic(async ()=> import('../../../components/NewsLetterSubscribe'));


import Photo from '../../../components/reusables/Photo'

const SingleBlog=  (props)=>{
    const {data} = useSWR(props.slug ? `${API}/blogs/${props.slug}`:null, fetcher, { initialData: props});
    const {blog}=data;
const router=useRouter();

    const makeArticleSchema=()=> {
        return {
            '@context': 'http://schema.org',
            '@type': 'BlogPosting',
            "mainEntityOfPage":{
                "@type":"WebPage",
               " @id":`${DOMAIN}/blogs`
            },
            "headline":`${blog.title}`,
            'image':{
               ' @type': 'ImageObject',
               'url':`${API}/blogs/${blog.slug}`,
               'height': 463,
              ' width': 700
            },
           ' datePublished':`${blog.createdAt}`,
           'dateModified': `${blog.updatedAt}`,
          ' author': {
            '@type': 'Person',
           ' name': `${blog.postedBy.name}`
            },
         'publisher': {
                '@type':' Organization',
               ' name': 'The ProGrad',
                'logo': {
               ' @type':' ImageObject',
                'url': `${DOMAIN}/img/StuproLogo.png` ,
                'width': 550,
                 'height': 60
                }
                }
            }
           
    }
    const head = () => (
        <Head>
        <title>{blog.subtitle ? blog.subtitle : blog.title} |The {APP_NAME}</title>
        <meta name="robots" content="index follow" />
            <meta name="description" content={blog.desc ? blog.desc:blog.excerpt} />
            <link rel="canonical" href={`${DOMAIN}/blogs/${blog.slug}`} />
            <meta property="og:title" content={`${blog.title} | ${APP_NAME}`} />
            <meta property="og:description" content={blog.desc ? blog.desc : blog.excerpt} />
            <meta property="og:type" content="webiste" />
            <meta property="og:url" content={`${DOMAIN}/blogs/${blog.slug}`} />
            <meta property="og:site_name" content={`The ${APP_NAME}`} />
            <meta property="og:image" content={`${API}/blogs/photo/${blog.slug}`} />
            <meta property="og:image:secure_url" content={`${API}/blogs/photo/${blog.slug}`} />
            <meta property="og:image:type" content={`${API}/blogs/photo/${blog.slug}`} />
            <script
                key={`articleJSON-${blog._id}`}
                type='application/ld+json'
                dangerouslySetInnerHTML={{ __html:JSON.stringify(makeArticleSchema())}}
            />
         </Head>
    );
 
if(router.isFallback){
    return <div>Loading...</div>
}
return(
<>        
{head()}

<section className="container">
<Link href="blogs/search"><a className="btn nbtn btn-dark m-1">Click here to Search blog</a></Link>

<div  className="blog bg-light " >
   <div>
        <Link href={`/blogs/${blog.slug}`}>
         <a>
         <h1  className="text-dark small p-1  " style={{lineHeight:'1.9rem'}}>
            {blog.title}
        </h1>
            </a>
            </Link>
        </div>
        <h2 className="extra-small text-success">Author's Information</h2>
           <div className="blog-top input-box p-1">
           <div>
           <div className='round-image profile-img-border'style={{alignItems:'center'}}>

           <Link href={`/profile/${blog.postedBy.username}/public-profile`}>
                       <a>
                       <img loading='lazy' src={`${API}/user/photo/${blog.postedBy.username}`}   alt={`${blog.postedBy.name} profile photo`}   className="profile-img round-image" />
                       </a>
                   </Link>
                   </div>
              <small className="text-danger my-1 author extra-small"><strong>| Published on {moment(blog.updatedAt).format("MMM DD YYYY")}</strong></small>
           </div>
              <div>
                   <Link href={`/profile/${blog.postedBy.username}`}>
                       <a>
                       <p  className="small text-dark"><strong>{blog.postedBy.name} </strong> </p>
                       </a>
                   </Link>
                   <div className="share icons">
                       <a href={`https://www.facebook.com/sharer/sharer.php?u=https://theprograd.com/blogs/${blog.slug}`} target="_blank"><strong className='text-primary'><FacebookIcon style={{fontSize:30}}/></strong></a>
                       <a href={` https://www.linkedin.com/sharing/share-offsite/?url=https://theprograd.com/blogs/${blog.slug}`} target="_blank" ><strong className='text-primary'><LinkedInIcon style={{fontSize:30}}/></strong></a>
                       <a href={`https://t.me/share/url?url=https://theprograd.com/blogs/${blog.slug}&text=${blog.title}`}><strong className='text-primary'><TelegramIcon style={{fontSize:30}} /></strong></a>
                   </div>
             
                   
              </div>
           </div>
          <div className="blog-body">
          <Photo photo={props.photo} content={blog} />
                <div className=' eduBlog selectable' style={{lineHeight:'2rem',padding:'0.7rem'}}> 
                {renderHTML(blog.body)}
                </div>
                <div className="new-flex">
        <UpdateButton url={`/admin/crud/${blog.slug}`} name='Update'/>
        <UpdateButton url={`/admin/crud/${blog.slug}/add-faq`} name='Add Faq' />
    </div>
        </div>
        <div className="new-flex">

               <div>
               <div className="line"></div>
               <div >
            <div className='m-1 new-flex'>
                <CategoryInSlug newCat='categories' cats={blog.categories} />
                <TagInSlug tags={blog.tags} newTagRoute='tags' />
            </div>
        </div>
               </div>
          </div>
 
        </div>
        {blog.faq !=null  && 
     <div className='btn input-box m-1'>
            <h2 className="small text-danger my-1"> Frequently Asked Questions</h2>
            <Faq material={blog} />
    </div> 
          }
        <h2 className="text-primary small m-1">Suggested blogs</h2>
        <div className='line'></div>
        <div className="card">
        <SmallCard listRelated={listRelated} job={blog} newRoute='blogs' />
        </div>
        </section>
        <NewsLetter />
</>
)

 }

export const getStaticPaths=async ()=>{
    const res = await fetch(`${API}/blogs`);
    const data= await res.json();
    const paths=data.map(blog=>{
        return{
            params:{slug:blog.slug}
        }
    })
    return{
        paths,
        fallback:true
    }
}
  
export const getStaticProps = async (ctx) => {
    const slug = ctx.params.slug;

    const [blog, photo] = await Promise.all([
        fetch(`${API}/blogs/` + slug).then(r => r.json()),
        `${API}/blogs/photo/` + slug
    ]);
    if (!blog) {
        return {
      notFound:true
        }
      }
    return {
        props: {
            blog,
            photo

        },
        revalidate:60


    }

}

export default SingleBlog;



