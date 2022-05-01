import Head from 'next/head';
import Link from 'next/link';
import React,{ useState} from 'react';
import { BreadcrumbJsonLd,NextSeo,ArticleJsonLd } from 'next-seo';
import { withRouter } from 'next/router';
import { listBlogsWithCategoriesAndTags } from '../../actions/blog';
import Card from '../../components/blogs/Card';
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../config';

export async function getStaticProps() {

    return listBlogsWithCategoriesAndTags().then(data => {
        if (data.error) {
            console.log(data.error);
        } else {
            return {
                props:{
                    blogs: data
                },
                revalidate:60
              
            };
        }
    });
  }

const Blogs = ({ blogs, router }) => {

    const [visible,setVisible]=useState(10);


    const showAllBlogs = () => {
        return blogs.slice(0,visible).map((blog) => {
            // ()
            return (
                <article key={blog._id} className='shadow-md rounded-md shadow-green-500 w-full lg:w-[20rem] lg:mx-4 m-1 mb-3 p-1 transition ease-in-out delay-150  hover:ring-1 hover:ring-black hover:-translate-y-1 hover:scale-110'>
                 <Card blog={blog}/>
               </article>
            );
        });
    };
    const showMoreItem=()=>{
        setVisible((prevValue)=>prevValue+10)
      }
    return (
       <>
     <NextSeo
      title='Read the best and quality educational blogs on The ProGrad'
      description='Get best educational blogs, tips and tricks on The ProGrad.Read these quality blogs and be the ProGrad from the beginning'
      canonical={`https://www.theprograd.com/blogs`}
      
      openGraph={{
        url: `https://www.theprograd.com/blogs`,
        title:'Read the best and quality educational blogs on The ProGrad',
        description:'Get best educational blogs, tips and tricks on The ProGrad.Read these quality blogs and be the ProGrad from the beginning',
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
      
      ]}
    />
     <section className=' pt-20 lg:px-7'>
     <a href="/blogs/search" className=' bg-teal-900 rounded-md p-2 text-white font-bold my-2'>Search More Blogs</a>
         <div className='flex flex-wrap p-2'>
         {showAllBlogs()}
         </div>
{ blogs.length >= 10 &&  <div>
    <button className='bg-red-400 font-bold p-2' onClick={showMoreItem} >Load More</button>
    </div>}
    </section>
 
  </>  
    );
};





export default withRouter(Blogs);