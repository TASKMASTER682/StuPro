import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image'
import dynamic from 'next/dynamic';
import { useState,useEffect  } from 'react';
import { singlePvtJob,listRelatedPvt } from '../../actions/privateJob';
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../config';
import renderHTML from 'react-render-html';
import moment from 'moment';
const SmallCardPvt=dynamic(()=>import('../../components/privateJobs/SmallCardPvt'));
import { isAuth } from '../../actions/auth';
const FacebookIcon =dynamic(async()=>import( '@material-ui/icons/Facebook'),{loading:()=><p>...</p>,ssr:false});
const LinkedInIcon =dynamic(async()=>import('@material-ui/icons/LinkedIn'),{loading:()=><p>...</p>,ssr:false}) ;
const TelegramIcon =dynamic(async()=>import('@material-ui/icons/Telegram'),{loading:()=><p>...</p>,ssr:false}) ;
const SecurityIcon =dynamic(async()=>import('@material-ui/icons/Security'),{loading:()=><p>...</p>,ssr:false}) ;
const DateRangeIcon= dynamic(async()=>import( '@material-ui/icons/DateRange'),{loading:()=><p>...</p>,ssr:false});
const AccountBalanceWalletIcon =dynamic(async()=>import('@material-ui/icons/AccountBalanceWallet'),{loading:()=><p>...</p>,ssr:false}) ;
const SchoolIcon =dynamic(async()=>import('@material-ui/icons/School'),{loading:()=><p>...</p>,ssr:false}) ;
const PinDropIcon =dynamic(async()=>import('@material-ui/icons/PinDrop'),{loading:()=><p>...</p>,ssr:false}) ;
const BusinessCenterIcon =dynamic(async()=>import('@material-ui/icons/BusinessCenter')) ;
const VpnKeyIcon =dynamic(async()=>import('@material-ui/icons/VpnKey'),{loading:()=><p>...</p>,ssr:false}) ;
const WatchLaterIcon=dynamic(async()=>import( '@material-ui/icons/WatchLater'),{loading:()=><p>...</p>,ssr:false});
const Article=dynamic(async()=>import('../../components/ads/Article'),{loading:()=><p>...</p>,ssr:false}) ;

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

    function makeJobSchema(privateJob) {
        return {
            // schema truncated for brevity
            '@context': 'http://schema.org',
            '@type': 'JobPosting',
            'title' : `${privateJob.title}`,
            'description' : `${privateJob.mdesc} Last date to apply is ${moment(privateJob.lastDate).format("MMM DD YYYY")} Job Location is ${privateJob.location} The Pay Scale is ${privateJob.salary} .For more details visit The ProGrad and checkout the full update.`,
            'identifier': {
                '@type': "PropertyValue",
                 'name': "The ProGrad",
                 'value': "1234567svha0896"
               },
               'datePosted' : `${privateJob.createdAt}`,
               'validThrough' : `${privateJob.lastDate}`,
               'employmentType' : `${privateJob.type}`,
               'hiringOrganization' : {
                '@type' : "Organization",
                'name' : 'The ProGrad',
                'sameAs' :`https://theprograd.com/privateJobs/${privateJob.slug}`,
                "logo" : 'https://theprograd.com/img/prograd.png' 
              },
              'jobLocation': {
                '@type': "Place",
                  'address': {
                  '@type': "PostalAddress",
                  'streetAddress': `Any where in ${privateJob.location}`,
                  "addressLocality": `All over ${privateJob.location}`,
                  "addressRegion": `${privateJob.location}`,
                  "postalCode": "Not required",
                  'addressCountry': "India"
                  }
                },
                'baseSalary': {
                    '@type': "MonetaryAmount",
                    'currency': "INR",
                    'value': {
                      '@type': "QuantitativeValue",
                      'value': `${privateJob.salary}`,
                      'unitText': "Month"
                    }
                  }
        }
    }
    const JobSchema=()=> {
        return (
            <script
                key={`jobJSON-${privateJob.id}`}
                type='application/ld+json'
                dangerouslySetInnerHTML={{ __html: JSON.stringify(makeJobSchema(privateJob)) }}
            />
        )
    }

    const head = () => (
        <Head>
            <title>
                {privateJob.title} |Apply Online| {APP_NAME}
            </title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />

            <meta name="description" content= {`${privateJob.mdesc} Last date is ${moment(privateJob.lastDate).format("MMM DD YYYY")} The Job Location is ${privateJob.location} Pay scale is ${privateJob.salary}.`} />
            <link rel="canonical" href={`https://${DOMAIN}/privateJobs/${query.slug}`} />
            <meta property="og:title" content={`${privateJob.title}| ${APP_NAME}`} />
            <meta property="og:description" content={`${privateJob.mdesc} Last date is ${moment(privateJob.lastDate).format("MMM DD YYYY")} The Job Location is ${privateJob.location} Pay scale is ${privateJob.salary}.`} />
            <meta property="og:type" content="webiste" />
            <meta property="og:url" content={`${DOMAIN}/privateJobs/${query.slug}`} />
            <meta property="og:site_name" content={`${APP_NAME}`} />
            <meta property="og:image" content={`${API}/privateJob/photo/${privateJob.slug}`} />
            <meta property="og:image:secure_url" content={`${API}/privateJob/photo/${privateJob.slug}`} />
            <meta property="og:image:type" content={`${API}/privateJob/photo/${privateJob.slug}`} />
            <meta property="fb:app_id" content={`${FB_APP_ID}`} />
            {JobSchema()}
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
                        <SmallCardPvt privateJob={privateJob} />
                    </article>
                </div>
            ));
        };
        const myLoader = ({ src }) => {
            return `${API}/privateJob/photo/${privateJob.slug}` 
          }
const today=moment();
        return(
           <>
           {head()}
            <section className="container">
            <h3 className="large text-primary my-1">See detailed</h3>
             <p className="extra-small text-light-gray m-1 ">see eligibilty and full notification</p>
             <div className="jobs">
             <div className="job bg-light ">
                 <div className="job-top p-1">         
                 <div className="m-1 hide-sm">
                <Image  loader={myLoader} src={`${API}/privateJob/photo/${privateJob.slug}`}  width={300} height={300} alt={privateJob.title} className="round-image" />                     

                </div>          
                <h1 className="small text-dark"  style={{fontFamily:`'Source Serif Pro' ,serif` ,lineHeight:'1.9rem'}}>{privateJob.title}</h1>
             
                  <div className="share icons p-1">
                     <a href={`https://www.facebook.com/sharer.php?u=https://theprograd.com/privateJobs/${query.slug}`} target="_blank"><p className='text-primary'><FacebookIcon style={{fontSize:30}}/></p></a>
                     <a href={` https://www.linkedin.com/sharing/share-offsite/?url=https://theprograd.com/privateJobs/${query.slug}`} target="_blank" ><p className='text-primary'><LinkedInIcon style={{fontSize:30}}/></p></a>
                     <a href={`https://t.me/share/url?url=https://theprograd.com/privateJobs/${query.slug}&text=Fresh recruitment for ${privateJob.agency} for the post of ${privateJob.position}.Do visit the Link to explore more abouthese vacancies and apply directly for The ProGrad.${privateJob.mdesc}`}><p className='text-primary'><TelegramIcon style={{fontSize:30}} /></p></a>
                  </div>
                 
                 </div>
                 <small className="text-light-gray author extra-small my-2">| Published {moment(privateJob.updatedAt).fromNow()}</small>
             
                 <div className="job-bottom">

                 <div className="job-table p-1">
                          <div >
                              <ul>
                                  <li className='text-primary'><SecurityIcon style={{fontSize:20}} /></li>
                                  <li className='text-primary' style={{marginTop:'0.7rem'}}><DateRangeIcon style={{fontSize:20 }} /></li>
                                  <li className='text-primary' style={{marginTop:'0.7rem'}}><AccountBalanceWalletIcon style={{fontSize:20}} /></li>
                                  <li className='text-primary' style={{marginTop:'0.7rem'}}><SchoolIcon style={{fontSize:20}} /></li>                                
                                  <li className='text-primary' style={{marginTop:'0.7rem'}}><PinDropIcon  style={{fontSize:20}} /></li>
                                  <li className='text-primary' style={{marginTop:'0.7rem'}}><BusinessCenterIcon style={{fontSize:20}} /></li>
                                  <li className='text-primary' style={{marginTop:'0.7rem'}}><VpnKeyIcon  style={{fontSize:20}} /></li>
                                  <li className='text-primary' style={{marginTop:'0.7rem'}}><WatchLaterIcon style={{fontSize:20}} /></li>

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
                     <Article />
                      <div className='job-content' style={{padding:'0.4rem'}}>
                      {renderHTML(privateJob.body)}
                    </div>
                    <div>
                   {( isAuth() && isAuth().role===1 )? <a href={`/admin/privatejobcrud/${privateJob.slug}`} className="m-2 btn nbtn btn-success">Update</a>:''}
                   </div>
                   <Article />
                </div>
                <div style={{display: 'flex',alignItems:'left',flexWrap:'wrap'}}>
                <h4 className="small text-primary">Tags and Categories</h4>
                    <div className='my-1'>
                         {showJobCategories(privateJob)}
                           
                           {showJobTags(privateJob)}
                           </div>
                      </div>
                <div className='btn nbtn' style={{border:'solid #e64444',fontFamily:'Source Serif Pro ,serif'}}>
                        <h2 className="small text-primary my-1">Frequently Asked Questions </h2>
                        <h3 className="lead text-dark"><strong className='text-primary'>Q-1:</strong>What is the salary of {privateJob.position} ?</h3>
                        <p className='m-1'><strong className="text-primary">Ans:</strong>The salary of {privateJob.position} provided by {privateJob.agency} is {privateJob.salary}</p>
                        <h3 className="lead text-dark"><strong className='text-primary'>Q-2:</strong>What is the job location of {privateJob.position} provided by {privateJob.agency} ?</h3>
                        <p className='m-1'><strong className="text-primary">Ans:</strong>The job location of {privateJob.position} provided by {privateJob.agency} is {privateJob.location}</p>
                        <h3 className="lead text-dark"><strong className='text-primary'>Q-3:</strong>What is the last date to apply for {privateJob.agency} recrutment?</h3>
                        <p className='m-1'><strong className="text-primary">Ans:</strong>The Last date to apply for {privateJob.agency} recruitment is - {moment(privateJob.lastDate).format("MMM DD YYYY")}</p>
                        <h3 className="lead text-dark"><strong className='text-primary'>Q-4:</strong>What is the qualification needed to apply for {privateJob.position} ?</h3>
                        <p className='m-1'><strong className="text-primary">Ans:</strong>The detailed qualification needed to apply for {privateJob.position} is shown above.</p>
                        <h3 className="lead text-dark"><strong className='text-primary'>Q-5:</strong>What are the keySkills needed to apply for {privateJob.position} ?</h3>
                        <p className='m-1'><strong className="text-primary">Ans:</strong>The Key Skills needed to apply for {privateJob.position} is {privateJob.keySkills} and more which are shown above.</p>
                    </div>
              </div>
        </section>
            <section className="container">
                    <h2 className="text-primary small">Suggested Jobs to apply</h2>
                    <div className='line'></div>
                    <div className="card">
                        {showRelatedJob()}
                    </div>
                    <div className="m-1">
                    <Article />
                    </div>
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