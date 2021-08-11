import Search from '../../components/reusables/AutoComplete';
import ShowCategories from '../../components/reusables/SearchCat';
import {list} from '../../actions/blog';
import Head from 'next/head';
import {APP_NAME} from '../../config'

const NewSearch=()=>{
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
        <section className="container">
            <h1 className="large text-primary">Search Blogs</h1>
            <p className="extra-small text-light-gray">Find the blog of your choice by searching keywords,title </p>
            <div className="line"></div>
            <div className="my-1">
            <Search newRoute='blogs' list={list} />
            </div>
           <div className="my-2">
           <div style={{textAlign:'center',justifyContent:'center'}}>
           <h2 className="lead text-primary">Categories</h2>
           <ShowCategories newRoute='categories' />
           </div>     
           </div>
        </section>
        </>

       
    )
}

export default NewSearch;