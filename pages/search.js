import Search from '../components/blogs/Search';
import ShowCategories from '../components/blogs/ShowCategories';


const NewSearch=()=>{
    return(
        <section className="container">
            <h1 className="large text-primary">Search Blogs</h1>
            <p className="extra-small text-light-gray">Find the blog of your choice by searching keywords,title </p>
            <div className="line"></div>
            <div className="my-1">
            <Search />
            </div>
           <div className="my-2">
           <div style={{textAlign:'center',justifyContent:'center'}}>
           <h2 className="lead text-primary">Categories</h2>
           <ShowCategories />
           </div>     
           </div>
        </section>
       
    )
}

export default NewSearch;