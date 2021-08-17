import Head from 'next/head';
import { API, DOMAIN, APP_NAME } from '../../config';
import Card from '../../components/blogs/Card';


const Tag=({ tag, blogs})=>{
    const head = () => (
        <Head>
            <title>
                Educational Content related to {tag.name} |The {APP_NAME}
            </title>
            <meta name="robots" content="noindex nofollow"></meta>
            <meta name="description" content={`Blogs related to ${tag.name}`} />
            <link rel="canonical" href={`${DOMAIN}/categories/${tag.slug}`} />
            <meta property="og:title" content={`${tag.name}| ${APP_NAME}`} />
            <meta property="og:description" content={`Blogs related to ${tag.name}`} />
            <meta property="og:type" content="webiste" />
            <meta property="og:url" content={`${DOMAIN}/categories/${tag.slug}`} />
            <meta property="og:site_name" content={`${APP_NAME}`} />
            <meta property="og:image" content={`${DOMAIN}/img/StuproLogo.png`} />
            <meta property="og:image:secure_url" content={`${DOMAIN}/img/StuproLogo.png`} />
            <meta property="og:image:type" content={`${DOMAIN}/img/StuproLogo.png`} />
        </Head>
    );
    return(
        <>
        {head()}
        <section className="container">
        <h1 className="text-primary large m-1">{tag.name}</h1>
        <div className="line"></div>
          <div>
              <article className="blog bg-light">
              {blogs.map((b, i) => (
                   <Card key={i} blog={b} /> 
                  ))}
              </article>
          </div>
         </section>
       </>
    )
}

export const getStaticPaths=async ()=>{
    const res = await fetch(`${API}/tags`);
    const data= await res.json();
    const paths=data.map(category=>{
        return{
            params:{slug:category.slug}
        }
    })
    return{
        paths,
        fallback:true
    }
}

export const getStaticProps=async (ctx)=>{
    const slug=ctx.params.slug;
    const res=await fetch(`${API}/tags/`+slug)
    const data=await res.json();

    return{
        props:{
            tag: data.tag, 
            blogs: data.blogs,
        },
        revalidate:100

    }

}
export default Tag;