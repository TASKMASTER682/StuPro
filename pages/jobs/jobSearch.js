import Search from '../../components/jobs/Search';
import ShowJobCategories from '../../components/jobs/ShowJobCategories';
import ShowJobTags from '../../components/jobs/ShowJobTags';


const JobSearch=()=>{
    return(
        <section className="container">
            <h1 className="large text-primary">Search Jobs</h1>
            <p className="extra-small text-light-gray">Find the job of your choice by searching keywords,title or location</p>
            <div className="line"></div>
            <div className="my-1">
            <Search />
            </div>
           <div className="my-2">
           <div style={{textAlign:'center',justifyContent:'center'}}>
           <h2 className="lead text-primary">Job Categories</h2>
           <ShowJobCategories />
           </div>
           <div style={{textAlign:'center',justifyContent:'center'}}>
           <h2 className="lead text-primary">JobTags</h2>
               <ShowJobTags />
           </div>  
               
           </div>
        </section>
       
    )
}

export default JobSearch;