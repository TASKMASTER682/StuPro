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
            <meta name="description" content={job.mdesc} />
            <link rel="canonical" href={`${DOMAIN}/jobs/${query.slug}`} />
            <meta property="og:title" content={`${job.title}| ${APP_NAME}`} />
            <meta property="og:description" content={job.mdesc} />
            <meta property="og:type" content="webiste" />
            <meta property="og:url" content={`${DOMAIN}/jobs/${query.slug}`} />
            <meta property="og:site_name" content={`${APP_NAME}`} />

            <meta property="og:image" content={`${API}/job/photo/${job.slug}`} />
            <meta property="og:image:secure_url" ccontent={`${API}/job/photo/${job.slug}`} />
            <meta property="og:image:type" content="image/jpg" />
            <meta name="twitter:card" content="summary_large_image"></meta>
            <meta property="fb:app_id" content={`${FB_APP_ID}`} />
        </Head>
    );


 
     const showJobCategories = job =>
        job.jobCategories.map((c, i) => (
            <Link key={i} href={`/jobCategories/${c.slug}`}>
                <a style={{padding:" 0 0.8rem"}}  className="btn nbtn btn-danger "><p>{c.name}</p></a>
            </Link>
        ));

    const showJobTags = job =>
        job.jobTags.map((t, i) => (
            <Link key={i} href={`/jobTags/${t.slug}`}>
                <a style={{padding:" 0 0.8rem"}}  className="btn nbtn btn-dark "><p>{t.name}</p></a>
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
                    <DisqusThread id={job.id} title={job.title} path={`/job/${job.slug}`} />
                </div>
            );
        };
     

        return(
           <>
           {head()}
            <section className="container">
           
            <h1 className="large text-primary m-1">See detailed</h1>
             <p className="extra-small text-light-gray m-1 ">see eligibilty and full notification</p>

          
             <div className="jobs">
             <div className="job bg-light">
                 <div className="job-top p-1">
                 <img src={`${API}/job/photo/${job.slug}`} alt={job.title} className="round-image m-1 hide-sm" />
                
            <Link href={`/jobs/${job.slug}`}>
                <a>
                <h2 className="small text-dark"  style={{fontFamily:`'Source Serif Pro' ,serif` ,lineHeight:'1.9rem'}}>{job.title}</h2>
                </a>
            </Link>
                  <div className="share icons p-1">
                     <a href={`https://www.facebook.com/sharer.php?u=www.stupro.com/jobs/${query.slug}`} target="_blank"><i className="fab fa-facebook text-primary lead"></i></a>
                     <a href={`https://www.linkedin.com/shareArticle?mini=true&url=https://www.stupro.com/jobs/${query.slug}.&title=${job.title}&source=stupro.com`} target="_blank" ><i className="fab fa-linkedin-in text-primary lead"></i></a>
                     <a href={`http://twitter.com/share?text=${job.title};url=http://www.stupro.com`} target="_blank"><i className="fab fa-twitter text-primary lead"></i></a>
                  </div>

                 </div>
                 <small className="text-light-gray author extra-small ">| Published {moment(job.updatedAt).fromNow()}</small>
                 <div style={{display: 'inline-block',alignItems:'left'}}>
                           {showJobCategories(job)}
                           {showJobTags(job)}
                      </div>
                 <div className="job-bottom">
                 <table >
                 <tbody>
                 <tr>
                        <td><strong><i className="fas fa-shield-alt text-primary"></i><span> </span>Agency:</strong></td>
                            <td>{job.agency}</td>
                    </tr>
                   <tr>
                        <td><strong><i className="far fa-clock text-primary"></i><span> </span>Last Date to apply:</strong></td>
                            <td>{job.lastDate}</td>
                    </tr>
                    <tr>
                        <td><strong><i className="fas fa-rupee-sign text-primary"></i><span>  </span>Salary:</strong></td>
                            <td>{job.salary}</td>
                    </tr>
                    <tr>
                        <td><i className="fas fa-graduation-cap text-primary"></i><span> </span><strong>Qualification</strong></td>
                            <td>{job.qualification}</td>
                    </tr>
                    <tr>
                        <td><i className="fas fa-map-marker-alt text-primary"></i><span> </span><strong>location:</strong></td>
                            <td>{job.location}</td>
                    </tr>
                    <tr>
                        <td><i className="fas fa-briefcase text-primary"></i><span> </span><strong>Job Type:</strong></td>
                            <td>{job.type}</td>
                    </tr>
                    </tbody>
                           
         </table>
                   <ul>
                     <li><a href="#" className="btn btn-primary nbtn1 ">Save job</a></li>
                     <li><a href={`${job.applyLink}`} className="btn btn-primary nbtn1">Apply now</a></li>
                    </ul>
                 </div>
                 
                 <div class="my-1 p-1">
                 {renderHTML(job.body)}
                 </div>
             </div>
             </div>
                   
            </section>
            <section className="container">
                    <h2 className="text-primary small">Suggested Jobs to apply</h2>
                    <div className='line'></div>
                    <div className="card">
                        {showRelatedJob()}
                    </div>
                    <div class="bg-primary my-2">
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