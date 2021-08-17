import Head from 'next/head';
import { API, DOMAIN, APP_NAME } from '../../config';
import Card from '../../components/blogs/Card';



const Category=({blogs, category})=>{

   
    const head = () => (
        <Head>
            <title>
                Educational Content related to {category.name} | {APP_NAME}
            </title>
            <meta name="robots" content="noindex nofollow" />
            <meta name="description" content={`Blogs related to category: ${category.name}`} />
            <link rel="canonical" href={`${DOMAIN}/categories/${category.slug}`} />
            <meta property="og:title" content={`${category.name}| ${APP_NAME}`} />
            <meta property="og:description" content={`Blogs related to: ${category.name}`} />
            <meta property="og:type" content="webiste" />
            <meta property="og:url" content={`${DOMAIN}/categories/${category.slug}`} />
            <meta property="og:site_name" content={`${APP_NAME}`} />
            <meta property="og:image" content={`${DOMAIN}/img/stupro2.png`} />
            <meta property="og:image:secure_url" content={`${DOMAIN}/img/StuproLogo.png`} />
            <meta property="og:image:type" content="image/png" />
        </Head>
    );

 

    return(
     <>
     {head()}
     <section className="container">
     <h1 className="text-primary large m-1">{category.name}</h1>
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
};

export const getStaticPaths=async ()=>{
    const res = await fetch(`${API}/categories`);
    const data= await res.json();
    const paths=data.map(category=>{
        return{
            params:{slug:category.slug}
        }
    })
    return{
        paths,
        fallback:"blocking"
    }
}

export const getStaticProps=async (ctx)=>{
    const slug=ctx.params.slug;
    const res=await fetch(`${API}/categories/`+slug)
    const data=await res.json();

    return{
        props:{
            category: data.category, 
            blogs: data.blogs,
        },
        revalidate:500

    }

}


export default Category;

