import Head from 'next/head';
import Link from 'next/link';
import { useState,useEffect  } from 'react';
import { singlePvtJob ,listRelatedPvt } from '../../actions/privateJob';
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../config';
import renderHTML from 'react-render-html';
import moment from 'moment';
import SmallCardPvt from '../../components/privateJobs/SmallCardPvt';
import DisqusThread from '../../components/DisqusThread';
import { isAuth } from '../../actions/auth';

const SinglePvtJob=({privateJob,query})=>{
    const [relatedPvt, setRelatedPvt] = useState([]);

    const loadRelated = () => {
        listRelatedPvt({ privateJob }).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setRelatedPvt(data);
            }
        });
    };

    useEffect(() => {
        loadRelated();
    }, []);

    const head = () => (
        <Head>
            <title>
                {privateJob.title} | {APP_NAME}
            </title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />

            <meta name="description" content= {`${privateJob.mdesc} Last date:${privateJob.lastdate},Job Location:${privateJob.location},Salary:${privateJob.salary} .Get more freejobalerts and many other features here`} />
            <link rel="canonical" href={`${DOMAIN}/privateJobs/${query.slug}`} />
            <meta property="og:title" content={`${privateJob.title}| ${APP_NAME}`} />
            <meta property="og:description" content={privateJob.mdesc} />
            <meta property="og:type" content="webiste" />
            <meta property="og:url" content={`${DOMAIN}/privateJobs/${query.slug}`} />
            <meta property="og:site_name" content={`${APP_NAME}`} />

            <meta property="og:image" content={`${API}/privateJob/photo/${privateJob.slug}`} />
            <meta property="og:image:secure_url" ccontent={`${API}/privateJob/photo/${privateJob.slug}`} />
            <meta property="og:image:type" content={`${API}/privateJob/photo/${privateJob.slug}`} />
            <meta name="twitter:card" content="summary_large_image"></meta>
            <meta property="fb:app_id" content={`${FB_APP_ID}`} />
        </Head>
    );


 
     const showJobCategories = privateJob =>
        privateJob.privateJobCategories.map((c, i) => (
            <Link key={i} href={`/privateJobCategories/${c.slug}`}>
                <a style={{padding:" 0 0.8rem",border:'solid #00e7d2'}}  className="btn nbtn btn-light-gray "><p>{c.name}</p></a>
            </Link>
        ));

    const showJobTags = privateJob =>
        privateJob.privateJobTags.map((t, i) => (
            <Link key={i} href={`/privateJobTags/${t.slug}`}>
                <a style={{padding:" 0 0.8rem",border:'solid black '}}  className="btn nbtn btn-light-gray my-1 "><p>{t.name}</p></a>
            </Link>
        ));

        const showRelatedJob = () => {
            return relatedPvt.map((privateJob, i) => (
                <div className='card-item m-1' key={i}>
                    <article>
                        <SmallCardPvt privateJob={privatejob} />
                    </article>
                </div>
            ));
        };
        const showComments = () => {
            return (
                <div>
                    <DisqusThread id={privateJob._id} title={privateJob.title} path={`/privateJob/${privateJob.slug}`} />
                </div>
            );
        };
     
const today=moment();
        return(
           <>
           {head()}
            <section className="container">
           
            <h1 className="large text-primary my-1">See detailed</h1>
             <p className="extra-small text-light-gray m-1 ">see eligibilty and full notification</p>

          
             <div className="jobs">
             <div className="job bg-light ">
                 <div className="job-top p-1">
                
                 <img src={`${API}/privateJob/photo/${privateJob.slug}`} alt={privateJob.title} className="round-image my-1 hide-sm" />
                
            <Link href={`/privateJobs/${privateJob.slug}`}>
                <a>
                <h2 className="small text-dark"  style={{fontFamily:`'Source Serif Pro' ,serif` ,lineHeight:'1.9rem'}}>{privateJob.title}</h2>
                </a>
            </Link>
                  <div className="share icons p-1">
                     <a href={`https://www.facebook.com/sharer.php?u=https://theprograd.com/privateJobs/${query.slug}`} target="_blank"><i className="fab fa-facebook text-primary lead"></i></a>
                     <a href={`https://www.linkedin.com/shareArticle?mini=true&url=<?php the_permalink(); ?>&title=<?php the_title(); ?>&source=https://theprograd.com/privateJobs/${privateJob.title}"><img src=${API}/privateJob/photo/${privateJob.slug}`} target="_blank" ><i className="fab fa-linkedin-in text-primary lead"></i></a>
                     <a href={`https://twitter.com/home?status=Currentlyreading <?php the_permalink(); ?>" title=${privateJob.title}"><img src=${API}/privateJob/photo/${privateJob.slug} alt="Share on Twitter`} target="_blank"><i className="fab fa-twitter text-primary lead"></i></a>
                  </div>

                 </div>
                 <small className="text-light-gray author extra-small ">| Published {moment(privateJob.updatedAt).fromNow()}</small>
                 <div style={{display: 'flex',alignItems:'left',flexWrap:'wrap'}}>
                     <div className='my-1'>
                         {showJobCategories(privateJob)}
                           
                           {showJobTags(privateJob)}
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
                                  <li className="my-1"><i class="fas fa-map-marker-alt text-primary"></i></li>
                                  <li className='my-1'><i class="fas fa-user-tie text-primary"></i></li>
                                  <li className='my-1'><i class="fas fa-key text-primary"></i></li>
                                  <li ><i className="fas fa-briefcase text-primary"></i></li>

                              </ul>
                          </div>
                          <div>
                              <ul>
                                  <li><h4 >Agency</h4></li>
                                  <li><h4 className="my-1">Expire</h4></li>
                                  <li><h4 className="my-1">Salary</h4></li>
                                  <li><h4 className="my-1">Qualification</h4></li>
                                  <li><h4 className="my-1">Location</h4></li>
                                  <li><h4 className="my-1">Position</h4></li>
                                  <li><h4 className="my-1">Key Skills</h4></li>
                                  <li><h4>Job Type</h4></li>
                                  
                             </ul>
                          </div>
                          <div>
                              <ul>
                                  <li ><p>{privateJob.agency}</p></li>
                                  <li><p className="my-1">{moment(privateJob.lastDate).fromNow()}</p></li>
                                  <li><p className="my-1">{privateJob.salary}</p></li>
                                  <li><p className="my-1">{privateJob.qualification}</p></li>
                                  <li><p className="my-1">{privateJob.location}</p></li>
                                  <li><p className="my-1">{privateJob.position}</p></li>
                                  <li><p className="my-1">{privateJob.keySkills}</p></li>
                                  <li><p>{privateJob.type}</p></li>

                                </ul>
                          </div>
                        </div>  
                          <div className="job-buttons p-1">
                          <a href={`${privateJob.applyLink}`}  target="_blank" className={`btn nbtn btn-${ moment(privateJob.lastDate).format()<today.format() ? 'danger':'primary'} nbtn1 my-1 `}>{moment(privateJob.lastDate).format()<today.format()  ? 'Closed':'Apply now'}</a>
                        </div>
                      </div>
                     
                      <div className='job-content' style={{padding:'0.4rem'}}>
                      {renderHTML(privateJob.body)}
                    </div>
                    <div>
                   {( isAuth() && isAuth().role===1 )? <a href={`/admin/privatejobcrud/${privateJob.slug}`} className="m-2 btn nbtn btn-success">Update</a>:''}
                   </div>
                </div>
                <div className='btn nbtn' style={{border:'solid #e64444',fontFamily:'Source Serif Pro ,serif'}}>
                        <h2 className="small text-primary my-1">Frequently Asked Questions </h2>
                        <h3 className="lead text-dark"><strong className='text-primary'>Q-1:</strong>What is the salary of {privateJob.title} ?</h3>
                        <p className='m-1'><strong className="text-primary">Ans:</strong>The salary of {privateJob.title} is {privateJob.salary}</p>
                        <h3 className="lead text-dark"><strong className='text-primary'>Q-2:</strong>What is the job location of {privateJob.title} ?</h3>
                        <p className='m-1'><strong className="text-primary">Ans:</strong>The job location of {privateJob.title} is {privateJob.location}</p>
                        <h3 className="lead text-dark"><strong className='text-primary'>Q-3:</strong>What is the last date to apply for {privateJob.title} ?</h3>
                        <p className='m-1'><strong className="text-primary">Ans:</strong>The Last date of {privateJob.title} is - {moment(privateJob.lastDate).format("MMM DD YYYY")}</p>
                        <h3 className="lead text-dark"><strong className='text-primary'>Q-4:</strong>What is the qualification needed for {privateJob.title} ?</h3>
                        <p className='m-1'><strong className="text-primary">Ans:</strong>The detailed qualification needed to apply for {privateJob.title} is shown above.</p>
                        <h3 className="lead text-dark"><strong className='text-primary'>Q-5:</strong>What are the keySkills needed for {privateJob.title} ?</h3>
                        <p className='m-1'><strong className="text-primary">Ans:</strong>The Key Skills needed to apply for {privateJob.title} is {privateJob.keySkills}.Also they are shown above.</p>
                    </div>
              </div>
        </section>
            <section className="container">
                    <h2 className="text-primary small">Suggested Jobs to apply</h2>
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

SinglePvtJob.getInitialProps = ({ query }) => {
    return singlePvtJob(query.slug).then(data => {
        if (data.error) {
            console.log(data.error);
        } else {
            return { privateJob: data, query };
        }
    });
};

export default SinglePvtJob;