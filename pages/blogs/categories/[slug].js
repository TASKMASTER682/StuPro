import Head from 'next/head';
import { API, DOMAIN, APP_NAME } from '../../../config';
import Card from '../../../components/blogs/Card';
import { BreadcrumbJsonLd,NextSeo } from 'next-seo';



const Category=({blogs, category})=>{

 

    return(
     <>
    <NextSeo
      title={`Blogs Related to category name - ${category.name}`}
      description={`Blogs Related to category name - ${category.name}`}
      canonical={`https://www.theprograd.com/blogs/categories/${category.slug}`}

      openGraph={{
        url: `https://www.theprograd.com/blogs/categories/${category.slug}`,
        title:`Blogs Related to category name - ${category.name}`,
        description:`Blogs Related to category name - ${category.name}`,

        site_name: 'The ProGrad',
      }}

      facebook={{
        handle: '@handle',
        site: '@site',
        cardType: 'summary_large_image',
        appId: '721482821740858'
      }}
    />

         <BreadcrumbJsonLd
      itemListElements={[
        {
          position: 1,
          name: 'Home',
          item: 'https://www.theprograd.com/',
        },
        {
          position: 2,
          name: 'Educational Blogs',
          item: 'https://www.theprograd.com/blogs',
        },
        {
          position: 3,
          name: `Blogs According to Category ${category.name}`,
          item: `https://www.theprograd.com/blogs/categories/${category.slug}`,
        },
      ]}
    /> 
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

