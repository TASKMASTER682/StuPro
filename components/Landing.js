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
            <div className='py-1' style={{lineHeight:'1.2rem'}}>
            <small className="text-dark"> 
            <ul>
            <li><h5>A PLATFORM BRINGING ASPIRING GRADS AND EXCELLING PROFESSIONALS TOGETHER.</h5> </li>
                <li><h5> A COMMUNITY THAT HAS A PERFECT ECOSYSTEM FOR EVERY NIECHE OF EDUCATION SYSTEM.</h5></li>
            </ul> 
    </small>
        <h3 className="extra-small text-dark">Be a part of our community</h3>

 </div>
        <ol type="A" style={{lineHeight:'1.8rem'}}>
             <li className="extra-small">Plan and get your education in accordance with the professional aspirations.</li>
            <li className="extra-small">Get professional help around the clock and tip to toe.</li>
            <li className="extra-small">Excel and grow your profile with, “THE ProGrad”</li>
            <li className="extra-small">Find jobs and get hired for the most suitable professions to your profiles</li>
            <li className="extra-small">Share the knowledge, help it increase and get the sweet experience.</li>
            <li className="extra-small">Contribute for others to follow and lead eventually.</li>

     </ol>
     <Link href='/signup'><a className="btn btn-dark nbtn small my-2 hide-sm">Let's Get Started</a></Link>
         </div>
         <div>
         <div className="hide-sm">
         <Search />
         </div>
             
            
             <ul className='hide-sm p-1'>
             <li><h4 className= 'extra-small text-dark'>LEARN, GROW, CONTRIBUTE</h4></li>
             <li><h4 className= 'extra-small text-dark'>BE THE PRO-GRADS FROM THE BEGINNING</h4></li>

         </ul>
         </div>
     </div>
     </div> 
      
 </section>

 <section className="landing-categories my-1">
     <h2 className="text-primary small my-1">Top Job Categories</h2>
     <div className="cat-main ">

     <div className="cat-item nbtn job m-1">
        <Link href="/jobCategories/defence"><a><i className="fas fa-shield-alt x-large text-primary p-1"></i><p className="lead ">Defence</p></a></Link>
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
       <i className="fas fa-briefcase text-primary x-large p-1"></i>
         
         <JobNumber />
         </div>

         <div className="cat-item nbtn job m-1">
         <i className="fas fa-book-reader text-primary x-large p-1"></i>
         <BlogNumber/>
         </div>
         <div className="cat-item nbtn job m-1">
         <i className="fas fa-users text-primary x-large p-1"></i>
         <UserCount />
         </div>
       </div>
       
 </section>
 <section className="bg-primary landing-categories nbtn my-1 py-1">
     <h2 className="text-dark small py-1">Job Posting Plans</h2>
     <div className="cat-main">
     <div>
      <h2 className="small text-light-gray">The job posting is free for a particular period of time</h2>
      <p >Just click on<Link  href="/contact"><a className="text-dark"> <strong>contact us</strong></a></Link>  and send your job to us or ask any other query.</p>
      </div>
    </div>
   </section>
 </>

       
 )
}

export default Landing;