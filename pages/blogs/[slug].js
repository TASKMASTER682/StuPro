import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from "next/dynamic";
import { useState,useEffect  } from 'react';
import { singleBlog,listRelated} from '../../actions/blog';
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../config';
import renderHTML from 'react-render-html';
import moment from 'moment';
const SmallCard = dynamic(async () => import('../../components/blogs/SmallCard'),{loading:()=><p>...</p>,ssr:false});
const FacebookIcon=dynamic(async ()=>import('@material-ui/icons/Facebook'),{loading:()=><p>...</p>,ssr:false});
const LinkedInIcon =dynamic(async ()=>import('@material-ui/icons/LinkedIn'),{loading:()=><p>...</p>,ssr:false});
const TelegramIcon =dynamic(async ()=>import('@material-ui/icons/Telegram'),{loading:()=><p>...</p>,ssr:false});
const SingleBlog=  ({blog,query})=>{
    const [related, setRelated] = useState([]);

    const loadRelated = () => {
        listRelated({ blog }).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setRelated(data);
            }
        });
    };

    useEffect(() => {
        loadRelated();
    }, []);

    function makeJobSchema(blog) {
        return {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://theprograd.com/blogs/${blog.slug}`
            },
            "headline": `${blog.title}`,
            "image": {
                "@type":"imageObject",
                "url": `${API}/blog/photo/${blog.slug}`,
                "height":463,
                "width":700
            },
            "datePublished": `${blog.createdAt}`,
            "dateModified": `${blog.updatedAt}`,
            "author":{
                "@type":"Person",
                "name":`${blog.postedBy.name}`
            },
            "publisher": {
              "@type": "Organization",
              "name": "The ProGrad",
              "logo": {
                "@type": "ImageObject",
                "url": "http://theprograd.com/img/prograd.png",
                "width":550,
                "height":60
  
              }
            },
            "description":`${blog.mdesc}`,

        }
    }
    const BlogSchema=()=> {
        return (
            <script
                key={`jobJSON-${blog.id}`}
                type='application/ld+json'
                dangerouslySetInnerHTML={{ __html: JSON.stringify(makeJobSchema(blog)) }}
            />
        )
    }


    const head = () => (
        <Head>
            <title>
                {blog.title} | {APP_NAME}
            </title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content={blog.mdesc} />
            <link rel="canonical" href={`https://${DOMAIN}/blogs/${query.slug}`} />
            <meta property="og:title" content={`${blog.title}| ${APP_NAME}`} />
            <meta property="og:description" content={blog.mdesc} />
            <meta property="og:type" content="webiste" />
            <meta property="og:url" content={`${DOMAIN}/blogs/${query.slug}`} />
            <meta property="og:site_name" content={`${APP_NAME}`} />

            <meta property="og:image" content={`${API}/blog/photo/${blog.slug}`} />
            <meta property="og:image:secure_url" ccontent={`${API}/blog/photo/${blog.slug}`} />
            <meta property="og:image:type" content={`${API}/blog/photo/${blog.slug}`} />
            <meta property="fb:app_id" content={`${FB_APP_ID}`} />
            {BlogSchema()}
        </Head>
    );
 
     const showBlogCategories = blog =>
        blog.categories.map((c, i) => (
            <Link key={i} href={`/categories/${c.slug}`}>
                <a style={{padding:" 0 0.8rem",border:'solid #00e7d2'}}  className="btn nbtn btn-light-gray "><p>{c.name}</p></a>
            </Link>
        ));

    const showBlogTags = blog =>
        blog.tags.map((t, i) => (
            <Link key={i} href={`/tags/${t.slug}`}>
                <a style={{padding:" 0 0.8rem",border:'solid black'}}  className="btn nbtn btn-light-gray my-1"><p>{t.name}</p></a>
            </Link>
        ));

        const showRelatedBlog =  () => {
            return related.map((blog, i) => (
                <div className='card-item m-1' key={i}>
                    <article>
                        <SmallCard blog={blog} />
                        
                    </article>
                </div>
            ));
        };
        const myLoader = ({ src }) => {
            return `${API}/blog/photo/${blog.slug}` 
          }
     

        return(
            <>
            {head()}
            <main>
            <section className="container">
            <Link href="/search"><a className="btn nbtn btn-dark m-1">Click here to Search blog</a></Link>

            <article  className="blog bg-light ">
               <header>
                    <Link href={`/blogs/${blog.slug}`}>
                     <a>
                     <h1  className="text-dark small p-1  " style={{fontFamily:`'Source Serif Pro' ,serif` ,lineHeight:'1.9rem'}}>
                        {blog.title}
                    </h1>
                        </a>
                        </Link>
                        <div style={{display: 'flex',alignItems:'left',flexWrap:'wrap'}}>
                      <div>
                          {showBlogCategories(blog)}
                       </div>
                      </div>
                    </header>
                       <div className="blog-top">
                       <div>
                       <div className='round-image profile-img-border'style={{alignItems:'center'}}>
    
                       <Link href={`/profile/${blog.postedBy.username}`}>
                                   <a>
                                   <img loading='lazy' src={`${API}/user/photo/${blog.postedBy.username}`}   alt={blog.postedBy.name}   className="profile-img round-image" />
                                   </a>
                               </Link>
                               </div>
                          <small className="text-primary author extra-small">| Published on {moment(blog.updatedAt).format("MMM DD YYYY")}</small>
                       </div>
                      
                          <div>
                       
                               <Link href={`/profile/${blog.postedBy.username}`}>
                                   <a>
                                   <h2  className="small text-dark">{blog.postedBy.name} </h2>
                                   </a>
                               </Link>
                               <div className="share icons">
                                   <a href={`https://www.facebook.com/sharer/sharer.php?u=https://theprograd.com/blogs/${query.slug}`} target="_blank"><strong className='text-primary'><FacebookIcon style={{fontSize:30}}/></strong></a>
                                   <a href={` https://www.linkedin.com/sharing/share-offsite/?url=https://theprograd.com/blogs/${query.slug}`} target="_blank" ><strong className='text-primary'><LinkedInIcon style={{fontSize:30}}/></strong></a>
                                   <a href={`https://t.me/share/url?url=https://theprograd.com/blogs/${query.slug}&text=${blog.title}`}><strong className='text-primary'><TelegramIcon style={{fontSize:30}} /></strong></a>
                               </div>
                         
                               
                          </div>
                       </div>
                      <div className="blog-body">
                      <div  style={{maxHeight: '400px', width: '100%', marginBottom: '3rem'}}>
                      <Image  loader={myLoader}  className="nbtn" src={`${API}/blog/photo/${blog.slug}`} width={1000} height={400} alt={blog.title} />
                       </div>
                            <div className='eduBlog p-1' style={{lineHeight:'2rem'}}> {renderHTML(blog.body)}</div>
                    </div>
                    <div style={{display: 'flex',alignItems:'left',flexWrap:'wrap'}}>

                           <div>
                           <div className="line"></div>

                           {showBlogCategories(blog)}
                           {showBlogTags(blog)}
                           </div>
                      </div>
                    </article>
                    
                    </section>
                    <section className="container">
                    <h2 className="text-primary small m-1">Suggested blogs</h2>
                    <div className='line'></div>
                    <div className="card">
                        {showRelatedBlog()}
                    </div>
                    </section>
               </main>
            </>
            )
 }

SingleBlog.getInitialProps = ({ query }) => {
    return singleBlog(query.slug).then(data => {
        if (data.error) {
            console.log(data.error);
        } else {
            return { blog: data, query };
        }
    });
};

export default SingleBlog;

