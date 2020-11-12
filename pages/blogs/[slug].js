import Head from 'next/head';
import Link from 'next/link';
import { useState,useEffect  } from 'react';
import { singleBlog,listRelated } from '../../actions/blog';
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../config';
import renderHTML from 'react-render-html';
import moment from 'moment';
import SmallCard from '../../components/blogs/SmallCard';
import DisqusThread from '../../components/DisqusThread';

const SingleBlog=({blog,query})=>{
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

    const head = () => (
        <Head>
            <title>
                {blog.title} | {APP_NAME}
            </title>
            <meta name="description" content={blog.mdesc} />
            <link rel="canonical" href={`${DOMAIN}/blogs/${query.slug}`} />
            <meta property="og:title" content={`${blog.title}| ${APP_NAME}`} />
            <meta property="og:description" content={blog.mdesc} />
            <meta property="og:type" content="webiste" />
            <meta property="og:url" content={`${DOMAIN}/blogs/${query.slug}`} />
            <meta property="og:site_name" content={`${APP_NAME}`} />

            <meta property="og:image" content={`${API}/blog/photo/${blog.slug}`} />
            <meta property="og:image:secure_url" ccontent={`${API}/blog/photo/${blog.slug}`} />
            <meta property="og:image:type" content="img/StuproLogo.png" />
            <meta property="fb:app_id" content={`${FB_APP_ID}`} />
        </Head>
    );
 
     const showBlogCategories = blog =>
        blog.categories.map((c, i) => (
            <Link key={i} href={`/categories/${c.slug}`}>
                <a style={{padding:" 0 0.8rem"}}  className="btn nbtn btn-danger "><p>{c.name}</p></a>
            </Link>
        ));

    const showBlogTags = blog =>
        blog.tags.map((t, i) => (
            <Link key={i} href={`/tags/${t.slug}`}>
                <a style={{padding:" 0 0.8rem"}}  className="btn nbtn btn-dark "><p>{t.name}</p></a>
            </Link>
        ));

        const showRelatedBlog = () => {
            return related.map((blog, i) => (
                <div className='card-item m-1' key={i}>
                    <article>
                        <SmallCard blog={blog} />
                        
                    </article>
                </div>
            ));
        };
        const showComments = () => {
            return (
                <div>
                    <DisqusThread id={blog._id} title={blog.title} path={`/blog/${blog.slug}`} />
                </div>
            );
        };
     

        return(
            <>
            {head()}
            <main>
            <section className="container">
            <article  className="blog bg-light">
               <header>
                    <Link href={`/blogs/${blog.slug}`}>
                     <a>
                     <h2  className="text-dark large p-1  " style={{fontFamily:`'Source Serif Pro' ,serif` ,lineHeight:'1.9rem'}}>
                        {blog.title}
                    </h2>
                        </a>
                        </Link>
                        <div style={{display: 'flex',alignItems:'left',flexWrap:'wrap'}}>
                           <div className="my-1">
                           {showBlogCategories(blog)}
                           </div>
                           <div className="my-1">
                           {showBlogTags(blog)}
                           </div>
                      </div>
                    </header>
                       <div className="blog-top">
                       <div>
                       <Link href={`/profile/${blog.postedBy.username}`}>
                                   <a>
                                   <img src={`${API}/user/photo/${blog.postedBy.username}`} alt={blog.postedBy.name}  className="round-image" />
                                   </a>
                               </Link>
                          <small className="text-light-gray author extra-small ">| Published {moment(blog.updatedAt).fromNow()}</small>
                       </div>
                          <div>
                            <div className=" p-1">
                                   
                                   <a href={`https://www.facebook.com/sharer/sharer.php?u=https://theprograd.com/blogs/${query.slug}`} target="_blank"><i className="lead fab fa-facebook"></i></a>
                                   <a href={`http://www.linkedin.com/shareArticle?mini=true&url=<?php the_permalink(); ?>&title=<?php the_title(); ?>&source=https://theprograd.com/jobs/${job.title}"><img src=${API}/job/photo/${job.slug}`}><i className="lead fab fa-linkedin-in"></i></a>
                                
                                   <a href={`http://twitter.com/home?status=Currentlyreading <?php the_permalink(); ?>" title=${job.title}"><img src=${API}/job/photo/${job.slug} alt="Share on Twitter`}><i className="lead fab fa-twitter"></i></a>
                               </div>
                               <Link href={`/profile/${blog.postedBy.username}`}>
                                   <a>
                                   <h2  className="small text-dark">{blog.postedBy.name} </h2>
                                   </a>
                               </Link>
                               
                          </div>
                       </div>
                      <div className="blog-body">
                           <img className="nbtn " src={`${API}/blog/photo/${blog.slug}`} style={{maxHeight: '400px',width:'100%', marginBottom: '3rem'}}  alt={blog.title} />
                            <div className="p-1"> {renderHTML(blog.body)}</div>
                              
                            </div>
                      
                    </article>
                    
                    </section>
                    <section className="container">
                    <h2 className="text-primary small">Suggested blogs</h2>
                    <div className='line'></div>
                    <div className="card">
                        {showRelatedBlog()}
                    </div>
                    <div className="bg-primary my-2">
                      <h3 className="cmnt-body">Start Discussion</h3>
                    </div>
                    <div className="p-1">{showComments()}</div>
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
            // console.log('GET INITIAL PROPS IN SINGLE BLOG', data);
            return { blog: data, query };
        }
    });
};

export default SingleBlog;