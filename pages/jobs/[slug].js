import Head from 'next/head';
import Link from 'next/link';
import { useState,useEffect  } from 'react';
import { singleJob ,listRelated } from '../../actions/job';
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../config';
import renderHTML from 'react-render-html';
import moment from 'moment';
import SmallCard from '../../components/jobs/SmallCard';
import DisqusThread from '../../components/DisqusThread';

const SingleJob=({job,query})=>{
    const [related, setRelated] = useState([]);

    const loadRelated = () => {
        listRelated({ job }).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setRelated(data);
            }
        });
    };

    useEffect(() => {
        loadRelated();
    }, []);

    const head = () => (
        <Head>
            <title>
                {job.title} | {APP_NAME}
            </title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />

            <meta name="description" content={job.mdesc} />
            <link rel="canonical" href={`${DOMAIN}/jobs/${query.slug}`} />
            <meta property="og:title" content={`${job.title}| ${APP_NAME}`} />
            <meta property="og:description" content={job.mdesc} />
            <meta property="og:type" content="webiste" />
            <meta property="og:url" content={`${DOMAIN}/jobs/${query.slug}`} />
            <meta property="og:site_name" content={`${APP_NAME}`} />

            <meta property="og:image" content={`${API}/job/photo/${job.slug}`} />
            <meta property="og:image:secure_url" ccontent={`${API}/job/photo/${job.slug}`} />
            <meta property="og:image:type" content="img/StuproLogo.png" />
            <meta name="twitter:card" content="summary_large_image"></meta>
            <meta property="fb:app_id" content={`${FB_APP_ID}`} />
        </Head>
    );


 
     const showJobCategories = job =>
        job.jobCategories.map((c, i) => (
            <Link key={i} href={`/jobCategories/${c.slug}`}>
                <a style={{padding:" 0 0.8rem",border:'solid #00e7d2'}}  className="btn nbtn btn-light-gray "><p>{c.name}</p></a>
            </Link>
        ));

    const showJobTags = job =>
        job.jobTags.map((t, i) => (
            <Link key={i} href={`/jobTags/${t.slug}`}>
                <a style={{padding:" 0 0.8rem",border:'solid black '}}  className="btn nbtn btn-light-gray  "><p>{t.name}</p></a>
            </Link>
        ));

        const showRelatedJob = () => {
            return related.map((job, i) => (
                <div className='card-item m-1' key={i}>
                    <article>
                        <SmallCard job={job} />
                    </article>
                </div>
            ));
        };
        const showComments = () => {
            return (
                <div>
                    <DisqusThread id={job._id} title={job.title} path={`/job/${job.slug}`} />
                </div>
            );
        };
     

        return(
           <>
           {head()}
            <section className="container">
           
            <h1 className="large text-primary my-1">See detailed</h1>
             <p className="extra-small text-light-gray m-1 ">see eligibilty and full notification</p>

          
             <div className="jobs">
             <div className="job bg-light ">
                 <div className="job-top p-1">
                
                 <img src={`${API}/job/photo/${job.slug}`} alt={job.title} className="round-image my-1 hide-sm" />
                
            <Link href={`/jobs/${job.slug}`}>
                <a>
                <h2 className="small text-dark"  style={{fontFamily:`'Source Serif Pro' ,serif` ,lineHeight:'1.9rem'}}>{job.title}</h2>
                </a>
            </Link>
                  <div className="share icons p-1">
                     <a href={`https://www.facebook.com/sharer.php?u=https://theprograd.com/jobs/${query.slug}`} target="_blank"><i className="fab fa-facebook text-primary lead"></i></a>
                     <a href={`https://www.linkedin.com/shareArticle?mini=true&url=<?php the_permalink(); ?>&title=<?php the_title(); ?>&source=https://theprograd.com/jobs/${job.title}"><img src=${API}/job/photo/${job.slug}`} target="_blank" ><i className="fab fa-linkedin-in text-primary lead"></i></a>
                     <a href={`https://twitter.com/home?status=Currentlyreading <?php the_permalink(); ?>" title=${job.title}"><img src=${API}/job/photo/${job.slug} alt="Share on Twitter`} target="_blank"><i className="fab fa-twitter text-primary lead"></i></a>
                  </div>

                 </div>
                 <small className="text-light-gray author extra-small ">| Published {moment(job.updatedAt).fromNow()}</small>
                 <div style={{display: 'flex',alignItems:'left',flexWrap:'wrap'}}>
                     <div className='my-1'>
                         {showJobCategories(job)}
                           </div>
                           <div className='my-1'>
                           {showJobTags(job)}
                           </div>
                      </div>
                 <div className="job-bottom">

                 <div className="job-table p-1">
                          <div >
                              <ul>
                                  <li><i className="fas fa-shield-alt text-primary"></i></li>
                                  <li className="my-1"><i className="far fa-clock text-primary"></i></li>
                                  <li className="my-1"><i className="fas fa-rupee-sign text-primary"></i></li>
                                  <li className="my-1"><i className="fas fa-graduation-cap text-primary"></i></li>
                                  <li className='my-1'><i className="fas fa-map-marker-alt text-primary"></i></li>
                                  <li><i className="fas fa-briefcase text-primary"></i></li>
                              </ul>
                          </div>
                          <div>
                              <ul>
                                  <li><h4 >Agency</h4></li>
                                  <li><h4 className="my-1">Expire</h4></li>
                                  <li><h4 className="my-1">Salary</h4></li>
                                  <li><h4 className="my-1">Qualification</h4></li>
                                  <li><h4 className="my-1">Location</h4></li>
                                  <li><h4>Job Type</h4></li>
                                  
                             </ul>
                          </div>
                          <div>
                              <ul>
                                  <li ><p>{job.agency}</p></li>
                                  <li><p className="my-1">{moment(job.lastDate).fromNow()}</p></li>
                                  <li><p className="my-1">{job.salary}</p></li>
                                  <li><p className="my-1">{job.qualification}</p></li>
                                  <li><p className="my-1">{job.location}</p></li>
                                  <li><p>{job.type}</p></li>

                                </ul>
                          </div>
                        </div>  
                          <div className="job-buttons p-1">
                              <a href={`${job.applyLink}`}  target="_blank" className="btn nbtn btn-success nbtn1 my-1 ">Apply now</a>
                        </div>
                      </div>
                     
                      <div className='job-content' style={{padding:'0.4rem'}}>
                      {renderHTML(job.body)}
                    </div>
                </div>
              </div>
        </section>
            <section className="container">
                    <h2 className="text-primary small m-1">Suggested Jobs to apply</h2>
                    <div className='line'></div>
                    <div className="card">
                        {showRelatedJob()}
                    </div>
                    <div className="bg-primary m-1">
                      <h3 className="cmnt-body">Leave A Comment</h3>
                    </div>
                    <div className="p-1">{showComments()}</div>
            </section>
             
           </> 
            )
 }

SingleJob.getInitialProps = ({ query }) => {
    return singleJob(query.slug).then(data => {
        if (data.error) {
            console.log(data.error);
        } else {
            // console.log('GET INITIAL PROPS IN SINGLE BLOG', data);
            return { job: data, query };
        }
    });
};

export default SingleJob;