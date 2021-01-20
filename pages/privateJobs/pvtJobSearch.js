import PvtSearch from '../../components/privateJobs/PvtSearch';
import ShowPvtJobCategories from '../../components/privateJobs/ShowPvtJobCategories';
import ShowPvtJobTags from '../../components/privateJobs/ShowPvtJobTags';


const PvtJobSearch=()=>{
    return(
        <section className="container">
            <h1 className="large text-primary">Search Jobs</h1>
            <p className="extra-small text-light-gray">Find the job of your choice by searching keywords,title or location</p>
            <div className="line"></div>
            <div className="my-1">
            <PvtSearch />
            </div>
           <div className="my-2">
           <div style={{textAlign:'center',justifyContent:'center'}}>
           <h2 className="lead text-primary">Job Categories</h2>
           <ShowPvtJobCategories />
           </div>
           <div style={{textAlign:'center',justifyContent:'center'}}>
           <h2 className="lead text-primary">Job Tags</h2>
               <ShowPvtJobTags />
           </div>  
               
           </div>
        </section>
       
    )
}

export default PvtJobSearch;