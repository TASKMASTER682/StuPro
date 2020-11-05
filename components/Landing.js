import {APP_NAME} from "../config";
import UserCount from './UserCount'
import Link from 'next/link';
import Search from './jobs/Search';
import JobNumber from './jobs/JobNumber';
import BlogNumber from './blogs/BlogNumber';

const Landing=()=>{

    return(
<>
<section className="landing ">
     
     <div className="dark-overlay nbtn my-1">
         <div className="landing-inner ">
            <div>
            <h2 className="x-large text-dark hide-sm">{APP_NAME}</h2>
            <h3 className="lead text-dark my-2">A platform to make your transition from   Stu-dents towards Pro-fessionalism </h3>
        <ol type="A" style={{lineHeight:'2rem'}}>
             <li className="extra-small">Search and get your job according to your profile</li>
            <li className="extra-small">Search your Topic and Read free of cost</li>
            <li className="extra-small">A new way to to learn and remember things by writing Blogs</li>
            <li className="extra-small">Invite your teachers here to solve your queries</li>
            <li className="extra-small">Contact Professionals and get some advice from them. </li>
     </ol>
     <Link href='/signup'><a className="btn btn-dark nbtn small my-2">Let's Get Started</a></Link>
         </div>
         <div>
             <Search />
         </div>
     </div>
     </div> 
      
 </section>

 <section className="landing-categories my-1">
     <h2 className="text-primary small my-1">Top Job Categories</h2>
     <div className="cat-main ">

     <div className="cat-item nbtn job m-1">
        <Link href="/jobCategories/defence"><a><i className="fas fa-shield-alt x-large text-primary p-1"></i><p className="lead">Defence</p></a></Link>
     </div>

     <div className="cat-item nbtn job m-1">
        <Link href="/jobCategories/banking"><a><i className="fas fa-piggy-bank x-large text-primary p-1"></i><p className="lead">Banking</p></a></Link>
     </div>
     <div className="cat-item nbtn job m-1">
         <Link href="/jobCategories/medical"><a><i className="fas fa-briefcase-medical text-primary x-large p-1"></i><p className="lead">Medical</p></a></Link>

     </div>
     
     <div className="cat-item nbtn job m-1">
         <Link href="/jobCategories/engineering"><a><i className="fas fa-cogs text-primary x-large p-1"></i><p className="lead">Egineering</p></a></Link>

     </div>
     
     <div className="cat-item nbtn job m-1">
         <Link href="/jobCategories/law"><a><i className="fas fa-balance-scale text-primary x-large p-1"></i><p className="lead">Law</p></a></Link>

     </div>
    
     <div className="cat-item nbtn job m-1">
         
        <Link href="/jobTags/jandk-jobs"><a><i className="fas fa-briefcase x-large text-primary p-1"></i><p className='lead'>J&K jobs</p></a></Link> 

     </div>
     <div className="cat-item nbtn job m-1">
         
         <Link href="/jobCategories/railway"><a ><i className="fas fa-train x-large text-primary p-1"></i><p className='lead'>Railway </p></a></Link>

     </div>
  
 </div>
 <Link  href="/jobs/jobSearch"><a className="btn nbtn btn-danger">Show All Job-Categories and Tags</a></Link>
 </section>
 <section className="bg-dark landing-categories nbtn my-1" style={{opacity:'0.9'}}>
   <h2 className="text-primary small py-1">Our Numbers</h2>
   <div className="cat-main">
       <div className="cat-item nbtn job m-1">
         <JobNumber />
         <h2 className="extra-small text-light-gray">Total number of active Jobs</h2>
         </div>

         <div className="cat-item nbtn job m-1">
         <BlogNumber/>
         <h2 className="extra-small text-light-gray">Total number of Blogs</h2>
         </div>

         <div className="cat-item nbtn job m-1">
         <UserCount />
         <h2 className="extra-small text-light-gray">Number of users at our platform</h2>
         </div>
       </div>
       
 </section>
 <section className="bg-primary landing-categories nbtn my-1 py-1">
     <h2 className="text-dark small py-1">Job Posting Plans</h2>
     <div className="cat-main">
     <div>
      <h2 className="small text-light-gray">The job posting is free till 6th of November 2021</h2>
      <p className="text-dark extra-small">Just click on<Link  href="/contact"><a className="text-dark"> <strong>contact us</strong></a></Link>  and send your job to us or ask any other query.</p>
      </div>
     
     </div>
   </section>
  

   </>

       
 )
}

export default Landing;