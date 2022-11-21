import AutoComplete from '../../components/reusables/AutoComplete';
import ShowCategories from '../../components/reusables/SearchCat';
import ShowTags from '../../components/reusables/SearchTags';
import fetch from 'isomorphic-fetch';
import Head from 'next/head';
import {APP_NAME,API} from '../../config'

export async function getStaticProps(){

    const [categories,tags,blogs] = await Promise.all([
      fetch(`${API}/categories/`).then(r => r.json()),
      fetch(`${API}/tags`).then(r=>r.json()),
      fetch(`${API}/blogs`).then(r=>r.json()),
    ]);
    return{
      props:{
        categories,
        tags,
        blogs
    
      }
    }
  }
const NewSearch=({categories,tags,blogs})=>{
    const head = () => (
        <Head>
            <title>
                Search Blogs | The {APP_NAME}
            </title>
            <meta name="robots" content="noindex nofollow" />
        </Head>
    )

    return(
        <>
        {head()}
        <section className="pt-24 lg:px-20">
            <h1 className=" text-3xl font-bold text-teal-700">Search Blogs</h1>
            <p className="text-base text-gray-500 font-bold p-1">Find the blog of your choice by searching keywords,title </p>
            <div className="my-1">
            <AutoComplete  newRoute='blogs' jobs={blogs} />
            </div>
           <div className="my-2">
           <div >
           <h2 className="text-lg font-bold text-red-500">Categories</h2>
           <ShowCategories bcat='blogs'  newRoute='categories' fun={categories} />
           </div>  
           <div >
           <h2 className="text-lg font-bold text-teal-500">Tags</h2>
           <ShowTags btag='blogs'  newRoute='tags' fun={tags} />
           </div>
              
           </div>
        </section>
        </>

       
    )
}

export default NewSearch;