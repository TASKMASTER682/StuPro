import Head from 'next/head';
import Link from 'next/link';
import { useState,useEffect } from 'react';
import { withRouter } from 'next/router';
import { listBlogsWithCategoriesAndTags } from '../../actions/blog';
import Card from '../../components/blogs/Card';
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../config';

const Blogs = ({ blogs, categories, tags, totalBlogs, blogsLimit, blogSkip, router }) => {



    const head = () => (
        <Head>
            <title>Get all types of educational blogs for learning and dive deep into conceptual knowledge | {APP_NAME}</title>
            <meta
                name="description"
                content="Welcome to the India's best emerging learning platform in which you can check your understanding of a concept by writing it and publishing it.
                It is free of cost.This helps you in two ways that you will never forget the concept and secondly it helps other to your blog and this will increase 
                your popularity on internet and on other socia media.Make this patform the india wikipedia.The future of India is in your hands."
            />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />

            <link rel="canonical" href={`${DOMAIN}${router.pathname}`} />
            <meta property="og:title" content={`Get all types of educational blogs and get best user experience | ${APP_NAME}`} />
            <meta
                property="og:description"
                content="Welcome to the India's best emerging learning platform in which you can check your understanding of a concept by writing it and publishing it.
                It is free of cost.This helps you in two ways that you will never forget the concept and secondly it helps other to your blog and this will increase 
                your popularity on internet and on other social media.Make this patform the india wikipedia.The future of India is in your hands."
            />
            <meta property="og:type" content="webiste" />
            <meta property="og:url" content={`${DOMAIN}${router.pathname}`} />
            <meta property="og:site_name" content={`${APP_NAME}`} />

            <meta property="og:image" content={`${DOMAIN}/static/images/seoblog.jpg`} />
            <meta property="og:image:secure_url" content={`${DOMAIN}/img/StuproLogo.png`} />
            <meta property="og:image:type" content="image/jpg" />
            <meta property="fb:app_id" content={`${FB_APP_ID}`} />
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
        return blogs.map((blog, i) => {
            // ()
            return (
                <article key={i} className="blog bg-light ">
                 <Card blog={blog}/>
               </article>
            );
        });
    };
    const showLoadedBlogs = () => {
        return loadedBlogs.map((blog, i) => (
            <article key={i} className="blog bg-light ">
                <Card blog={blog} />
            </article>
        ));
    };

    return (
       <>
       {head()}
  <main>
     <section className="container ">
          <h1 className="large text-primary">All Educational Blogs</h1>
          <p className="extra-small text-light-gray">Knowledge is everything,gain it and share it.</p>
          <div className="line"></div>
          <Link href="/search"><a className="btn nbtn btn-dark m-1">Click here to Search blog</a></Link>

         <main>
         {showAllBlogs()}
         </main>
         <main>
            {showLoadedBlogs()}
        </main>
        <div>
            {loadMoreButton()}
        </div>
    </section>
 </main>
  </>  
    );
};

Blogs.getInitialProps = () => {
    let skip = 0;
    let limit = 10;
    return listBlogsWithCategoriesAndTags(skip, limit).then(data => {
        if (data.error) {
            console.log(data.error);
        } else {
            return {
                blogs: data.blogs,
                categories: data.categories,
                tags: data.tags,
                totalBlogs: data.size,
                blogsLimit: limit,
                blogSkip: skip
            };
        }
    });
}

export default withRouter(Blogs);

