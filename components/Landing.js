import {APP_NAME} from "../config";
import Link from 'next/link';
import JobHome from './jobs/JobHome';
import PvtJobHome from './privateJobs/PvtJobHome';



const Landing=()=>{

    return(
<>
<section className="landing " >
<div className="highlight">

 <ul className='my-1 ' style={{listStyle:'square',fontFamily:`'Source Serif Pro' ,serif`}}>
   <li><h2 className='large text-dark'>The ProGrad</h2> </li>
    <li>
        <h2 className=' text-dark  my-1'>
        A Platform Bringing Aspiring Grads And Excelling Professionals Togather.
        </h2>
    </li>
    <li>
        <h2 className=" text-dark ">
        A Community That Has A Perfect Ecosystem For Every Niche Of Education System.
        </h2>
    </li>
</ul>
<ol type='A' className='text-light-gray nbtn p-1' style={{lineHeight:'1.8rem',border:'solid #fff',paddingLeft:'2rem'}}>
    <li><h3>Plan and get your education in accordance with the professional aspirations.</h3></li>
    <li><h3>Get professional help around the clock and tip to toe.</h3></li>
    <li><h3>Excel and grow your profile with, “THE ProGrad”.</h3></li>
    <li><h3>Find jobs and get hired for the most suitable professions to your profiles.</h3></li>
    <li><h3>Share the knowledge, help it increase and get the sweet experience.</h3></li>
    <li><h3>Contribute for others to follow and lead eventually.</h3></li>

</ol>
<div>
<Link href='/signup'>
    <a className="btn btn-dark nbtn my-2">Let's Get Started</a>
    </Link>
</div>
</div>
    <div >
        <img className='p-1 my-1' src="./img/stupro2.png" alt="" />
    </div>     
</section>
<section className="landing-two" style={{textAlign:'center',alignItems:'center',alignContent:'center'}}>
   <div className="land-1" >
               
        <h2 className="large text-primary my-2 ">Latest Jobs</h2>
     <div style={{width:'50vw',height:'auto',margin:'auto'}}>
            <img src="/img/landingjob.webp"  alt="" />
     </div>
     </div>

     <div>
     <Link href='/jobs'>
      <a>
      <h2 class="text-danger small m-1">Government Jobs:-</h2>
      </a>
     </Link>
     
        <div class="line"></div>
        <div class="card">
        <JobHome />
            </div>
    <div>
    <Link href='/privateJobs'>
      <a>
      <h2 class="text-danger small m-1">Private Jobs:-</h2>
      </a>
     </Link>
                <div className="line"></div>
                <div className="card">
                <PvtJobHome />
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