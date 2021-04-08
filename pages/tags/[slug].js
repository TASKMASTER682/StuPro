import Head from 'next/head';
import { singleTag } from '../../actions/tag';
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../config';
import Card from '../../components/blogs/Card';

const Tag=({ tag, blogs, query })=>{
    const head = () => (
        <Head>
            <title>
                {tag.name} | {APP_NAME}
            </title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content={`Blogs related to ${tag.name}`} />
            <link rel="canonical" href={`https://${DOMAIN}/categories/${query.slug}`} />
            <meta property="og:title" content={`${tag.name}| ${APP_NAME}`} />
            <meta property="og:description" content={`Blogs related to ${tag.name}`} />
            <meta property="og:type" content="webiste" />
            <meta property="og:url" content={`${DOMAIN}/categories/${query.slug}`} />
            <meta property="og:site_name" content={`${APP_NAME}`} />

            <meta property="og:image" content={`${DOMAIN}/img/StuproLogo.png`} />
            <meta property="og:image:secure_url" content={`${DOMAIN}/img/StuproLogo.png`} />
            <meta property="og:image:type" content="img/stupro2.png" />
            <meta property="fb:app_id" content={`${FB_APP_ID}`} />
        </Head>
    );
    return(
        <>
        {head()}
        <section class="container">
        <h1 className="text-primary large m-1">{tag.name}</h1>
        <div className="line"></div>
          <main>
              <article className="blog bg-light">
              {blogs.map((b, i) => (
                   <Card key={i} blog={b} /> 
                  ))}
              </article>
          </main>
         </section>
       </>
    )
}

Tag.getInitialProps = ({ query }) => {
    return singleTag(query.slug).then(data => {
        if (data.error) {
            console.log(data.error);
        } else {
            return { tag: data.tag, blogs: data.blogs, query };
        }
    });
};
export default Tag;