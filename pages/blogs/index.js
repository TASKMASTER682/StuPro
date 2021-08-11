import Head from 'next/head';
import Link from 'next/link';
import React,{ useState} from 'react';
import { withRouter } from 'next/router';
import { listBlogsWithCategoriesAndTags } from '../../actions/blog';
import Card from '../../components/blogs/Card';
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../config';

const Blogs = ({ blogs, categories, tags, totalBlogs, blogsLimit, blogSkip, router }) => {



    const head = () => (
        <Head>
            <title>Best Educational Blogs |The {APP_NAME}</title>
            <meta name="robots" content="index follow" />
            <meta name="description" content="Get best educational blogs, tips and tricks on The ProGrad" />
            <meta property="og:title" content={`Best Educational Blogs | The ${APP_NAME}`} />
            <meta property="og:description" content="Get best educational blogs, tips and tricks on The ProGrad" />
            <meta property="og:type" content="webiste" />
            <meta property="og:url" content={`${DOMAIN}${router.pathname}`} />
            <meta property="og:site_name" content={`The ${APP_NAME}`} />
            <meta property="og:image" content={`${DOMAIN}/img/StuproLogo.png`} />
            <meta property="og:image:secure_url" content={`${DOMAIN}/img/StuproLogo.png`} />
            <meta property="og:image:type" content="image/jpg" />
      
        </Head>
    );
    const [limit, setLimit] = useState(blogsLimit);
    const [skip, setSkip] = useState(0);
    const [size, setSize] = useState(totalBlogs);
    const [loadedBlogs, setLoadedBlogs] = useState([]);

    const loadMore = () => {
        let toSkip = skip + limit;
        listBlogsWithCategoriesAndTags(toSkip, limit).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setLoadedBlogs([...loadedBlogs, ...data.blogs]);
                setSize(data.size);
                setSkip(toSkip);
            }
        });
    };
    const loadMoreButton = () => {
        return (
            size > 0 &&
            size >= limit && (
                <button style={{width:'100%',textAlign:'center'}} onClick={loadMore} className="btn nbtn btn-danger ">
                    Load more
                </button>
            )
        );
    };

    const showAllBlogs = () => {
        return blogs.map((blog) => {
            // ()
            return (
                <article key={blog._id} className="blog bg-light ">
                 <Card blog={blog}/>
               </article>
            );
        });
    };
    const showLoadedBlogs = () => {
        return loadedBlogs.map((blog) => (
            <article key={blog._id} className="blog bg-light ">
                <Card blog={blog} />
            </article>
        ));
    };
  
    return (
       <>
       {head()}
 
     <section className="container ">
          <h1 className="large text-primary">All Educational Blogs</h1>
          <p className="extra-small text-light-gray">Knowledge is everything,gain it and share it.</p>
          <div className="line"></div>
          <Link href="blogs/search"><a className="btn nbtn btn-dark m-1">Click here to Search blog</a></Link>

         <div>
         {showAllBlogs()}
         </div>
         <div>
            {showLoadedBlogs()}
        </div>
        <div>
            {loadMoreButton()}
        </div>
    </section>
 
  </>  
    );
};

export async function getStaticProps() {
    let skip = 0;
    let limit = 10;
    return listBlogsWithCategoriesAndTags(skip, limit).then(data => {
        if (data.error) {
            console.log(data.error);
        } else {
            return {
                props:{
                    blogs: data.blogs,
                    categories: data.categories,
                    tags: data.tags,
                    totalBlogs: data.size,
                    blogsLimit: limit,
                    blogSkip: skip

                },
                revalidate:900
              
            };
        }
    });
  }



export default withRouter(Blogs);