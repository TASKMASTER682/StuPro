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
            <title>All Educational blogs | {APP_NAME}</title>
            <meta
                name="description"
                content="Programming blogs and tutorials on react node next vue php laravel and web developoment"
            />
            <link rel="canonical" href={`${DOMAIN}${router.pathname}`} />
            <meta property="og:title" content={`Latest web developoment tutorials | ${APP_NAME}`} />
            <meta
                property="og:description"
                content="Programming blogs and tutorials on react node next vue php laravel and web developoment"
            />
            <meta property="og:type" content="webiste" />
            <meta property="og:url" content={`${DOMAIN}${router.pathname}`} />
            <meta property="og:site_name" content={`${APP_NAME}`} />

            <meta property="og:image" content={`${DOMAIN}/static/images/seoblog.jpg`} />
            <meta property="og:image:secure_url" ccontent={`${DOMAIN}/img/STuproLogo.png`} />
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
          <h1 className="large text-primary">All Blogs</h1>
          <p className="extra-small text-light-gray">Knowledge is everything,share it.</p>
          <div className="line"></div>
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

