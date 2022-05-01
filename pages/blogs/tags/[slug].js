import Head from 'next/head';
import { API, DOMAIN, APP_NAME } from '../../../config';
import Card from '../../../components/blogs/Card';
import { BreadcrumbJsonLd,NextSeo } from 'next-seo';


const Tag=({ tag, blogs})=>{

    return(
        <>
    <NextSeo
      title={`Blogs Related to tag name - ${tag.name}`}
      description={`Blogs Related to tag name - ${tag.name}`}
      canonical={`https://www.theprograd.com/blogs/tags/${tag.slug}`}

      openGraph={{
        url: `https://www.theprograd.com/blogs/tags/${tag.slug}`,
        title:`Blogs Related to tag name - ${tag.name}`,
        description:`Blogs Related to tag name - ${tag.name}`,

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
          name: `Blogs According to tag ${tag.name}`,
          item: `https://www.theprograd.com/blogs/tags/${tag.slug}`,
        },
      ]}
    />        <section className="container">
        <h1 className="text-primary large m-1">{tag.name}</h1>
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
    const paths=data.map(tag=>{
        return{
            params:{slug:tag.slug}
        }
    })
    return{
        paths,
        fallback:'blocking'
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