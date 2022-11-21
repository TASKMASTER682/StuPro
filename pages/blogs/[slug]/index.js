import Head from 'next/head';
import React ,{useState} from 'react'
import Link from 'next/link';
import {useRouter} from 'next/router';
import dynamic from "next/dynamic";
import {listRelated} from '../../../actions/blog';
import { BreadcrumbJsonLd,NextSeo,ArticleJsonLd } from 'next-seo';
const UpdateButton = dynamic(async ()=> import('../../../components/reusables/UpdateButton'));;
import {fetcher} from '../../api/fetcher';
import { API, DOMAIN, APP_NAME } from '../../../config';
import renderHTML from 'react-render-html';
import {format} from 'date-fns';
import Share from '../../../components/Share'
const SmallCard = dynamic(async ()=> import('../../../components/reusables/SmallCard'));

const TagInSlug =  dynamic(async ()=> import('../../../components/reusables/TagInSlug'));
const CategoryInSlug= dynamic(async ()=> import('../../../components/reusables/SlugCat'));
const Faq =  dynamic(async ()=> import('../../../components/reusables/ShowFaq'))
const NewsLetter =  dynamic(async ()=> import('../../../components/NewsLetterSubscribe'));
import Photo from '../../../components/reusables/Photo'
import { isAuth } from '../../../actions/auth';
import fetch from 'isomorphic-fetch';


export const getStaticPaths=async ()=>{
    const res = await fetch(`${API}/blogs`);
    const data= await res.json();
    const pathData=data.map(blog=>{
        return{
            params:{slug:blog.slug}
        }
    })
    return{
        paths:pathData,
        fallback:'blocking'
    }
}
  
export const getStaticProps = async (ctx) => {
    const slug = ctx.params.slug;

    const [blog, photo] = await Promise.all([
        fetch(`${API}/blogs/` + slug).then(r => r.json()),
        `${API}/blogs/photo/` + slug
    ]);
    if (!blog) {
        return {
      notFound:true
        }
      }
    return {
        props: {
            blog,
            photo

        },
        revalidate:60


    }

}
const SingleBlog=  ({blog,photo})=>{
    // const {data} = useSWR(props.slug ? `${API}/blogs/${props.slug}`:null, fetcher, { initialData: props});
    // const {blog}=data;


return(
<>        
<NextSeo
      title={`${blog.title}`}
      description={`${blog.desc}`}
      canonical={`https://www.theprograd.com/blogs/${blog.slug}`}
      
      openGraph={{
        url: `https://www.theprograd.com/blogs/${blog.slug}`,
        title:`${blog.title} `,
        description:`${blog.desc}`,
        site_name: 'The ProGrad',
        images: [
          {
            url: `${photo} `,
            width: 850,
            height: 650,
            alt:` ${blog.title}`,
          },
        ],
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
          name: 'Blogs',
          item: 'https://www.theprograd.com/blogs',
        },
        {
          position: 3,
          name: blog.title,
          item: `https://www.theprograd.com/blogs/${blog.slug}`,
        },
      
      ]}
    />

    <ArticleJsonLd
      type="Blog"
      url={`https:www.//theprograd.com/blogs/${blog.slug}`}
      title={blog.title}
      images={[
        `https://${API}/blogs/photo/${blog.slug}`,
       
      ]}
      datePublished={blog.createdAt}
      dateModified={blog.updatedAt}
      authorName={blog.updatedBy}
      description={blog.desc}
    />
<section className='flex flex-col gap-2 pt-20 lg:grid lg:grid-cols-3 lg:px-28'>
<div className='col-span-2 p-2 mb-3 rounded-md lg:shadow-md lg:shadow-green-500'>
    <h1 className='text-2xl font-bold lg:text-4xl'>{blog.title}</h1>
    <div className='flex justify-between p-2 my-1'>
        <p className='text-sm font-semibold text-gray-500'>Posted on:{format(new Date(`${blog.updatedAt}`),'dd MMM yyyy')}</p>
        <Share newRoute='blogs' blog={blog} />
    </div>
    <Photo photo={photo} content={blog} />
    <div className='p-2 body-style' >{renderHTML(blog.body)}</div>
</div>
<div className='col-span-1'>
<h3 className='px-1 text-lg font-bold bg-slate-400'>Related Tags and Categories</h3>
<div className='flex flex-wrap my-2'>
    <CategoryInSlug catRoute='blogs' newCat='categories' cats={blog.categories} />
    <TagInSlug tagRoute='blogs' tags={blog.tags} newTagRoute='tags' />
    </div>
    <h3 className='px-1 text-lg font-bold bg-slate-400'>Related Blogs</h3>
    <SmallCard listRelated={listRelated} job={blog} newRoute='blogs' />
    <h2 className="px-1 my-2 text-lg font-bold bg-teal-100"> Frequently Asked Questions</h2>
     <Faq material={blog} />
{  isAuth() && isAuth().role===1 &&
<>
<h2 className="px-1 my-2 text-lg font-bold bg-teal-100">Admin Bar</h2>
     <div className="flex flex-row justify-around my-1 ">
        <UpdateButton url={`/admin/crud/${blog.slug}`} name='Update'/>
        <UpdateButton url={`/admin/crud/${blog.slug}/add-faq`} name='Add Faq' />
    </div>
</> }
  
</div>
</section>
<NewsLetter />
</>
)

 }



export default SingleBlog;


