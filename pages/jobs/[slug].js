import Head from 'next/head';
import Link from 'next/link';
import {router, useRouter} from 'next/router';
import dynamic from "next/dynamic";
import { API, DOMAIN, APP_NAME } from '../../config';
import renderHTML from 'react-render-html';
import UpdateButton from '../../components/reusables/UpdateButton';
import ApplyButton from '../../components/reusables/ApplyLink';
import Image from '../../components/reusables/ImageComponent';
import { fetcher } from '../api/fetcher';
import {listRelated} from '../../actions/job';
import moment from 'moment';
import useSWR from 'swr';
const SmallCard = dynamic(() => import('../../components/reusables/SmallCard'), { loading: () => <i>...</i> });
const FacebookIcon = dynamic(async () => import('@material-ui/icons/Facebook'), { loading: () => <i>...</i>, ssr: false });
const LinkedInIcon = dynamic(async () => import('@material-ui/icons/LinkedIn'), { loading: () => <i>...</i>, ssr: false });
const TelegramIcon = dynamic(async () => import('@material-ui/icons/Telegram'), { loading: () => <i>...</i>, ssr: false });
// const Article =dynamic(async ()=>import('../../components/ads/Article'),{loading:()=><i>...</i>,ssr:false}) ;
const TagInSlug =  dynamic(async ()=> import('../../components/reusables/TagInSlug'));
const CategoryInSlug= dynamic(async ()=> import('../../components/reusables/SlugCat'));
const AttachmentIcon = dynamic(async () => import('@material-ui/icons/Attachment'), { loading: () => <i>...</i>, ssr: false });;
const FilterTiltShiftIcon = dynamic(async () => import('@material-ui/icons/FilterTiltShift'), { loading: () => <i>...</i>, ssr: false });
const IFrame = dynamic(async ()=> import('../../components/reusables/IFrame'))
const Faq =  dynamic(async ()=> import('../../components/reusables/ShowFaq'))
const NewsLetter =dynamic(async ()=> import('../../components/NewsLetterSubscribe'), { ssr: false });






const SingleJob = (props) => {
    const { data } = useSWR(props.slug ? `${API}/jobs/${props.slug}` : null, fetcher, { initialData: props, revalidateOnMount: true });

    const { job } = data;
    const makeJobSchema= ()=> {
        return {
            // schema truncated for brevity
           '@context': 'http://schema.org',
            '@type': 'JobPosting',
            'title': `${job.title}`,
            'educationalRequirements':`${job.qualification}`,
            'description': `${job.desc}. Job Highlights are given as ----- Notification issued By - ${job.agency} , Job Location - ${job.location}, The Last Date to Apply - ${job.lastDate},Qualification needed - ${job.qualification}, Pay Scale - ${job.salary}`,
            'url': `https://${DOMAIN}/jobs/${job.slug}`,
            'identifier': {
                '@type': "PropertyValue",
                'name': "The ProGrad",
                'value': "1234567"
    
            },
            'datePosted': `${job.createdAt}`,
            'validThrough': `${job.lastDate}`,
            'employmentType': `${job.type}`,
            'hiringOrganization': {
                '@type': "Organization",
                'name': `${job.agency}`,
                'sameAs':`${job.officialLink}`,
                'logo':`${API}/jobs/photo/${job.slug}`
            },
            'directApply':{
                '@type':"Boolean",
                'directApply':'true'
            },
            'jobLocation': {
                '@type': "Place",
                'address': {
                    '@type': "PostalAddress",
                    "addressLocality": `${job.city}`,
                    "streetAddress":`${job.street}`,
                    "addressRegion": `${job.location}`,
                    "postalCode":`${job.postal}`,
                    'addressCountry': "IN"
                }
            },
            'baseSalary': {
                '@type': "MonetaryAmount",
                'currency': "INR",
                'value': {
                    '@type': "QuantitativeValue",
                    'value':`${job.salary}`,
                    'unitText': "Month"
                }
            }
        
          }
    }


    const head = () => (
        <Head>
            <title>
                {job.title} | The {APP_NAME}
            </title>
            <meta name="robots" content="index follow" />
            <link rel="canonical" href={`${DOMAIN}/jobs/${job.slug}`} />
            <meta name="description" content={job.desc !==undefined  ? job.desc :  `Bumper vacancies have been announced by ${job.agency}. If you are finding a job in ${job.location} then you must apply before the ${job.lastDate}. Click here to know more and apply`} />
            <meta property="og:title" content={`${job.title}| ${APP_NAME}`} />
            <meta property="og:description" content={job.desc !==undefined  ? job.desc :  `Bumper vacancies have been announced by ${job.agency}. If you are finding a job in ${job.location} then you must apply before the ${job.lastDate}. Click here to know more and apply`} />
            <meta property="og:type" content="webiste" />
            <meta property="og:url" content={`${DOMAIN}/jobs/${job.slug}`} />
            <meta property="og:site_name" content={`The ${APP_NAME}`} />
            <meta property="og:image" content={`${API}/jobs/photo/${job.slug}`} />
            <meta property="og:image:secure_url" content={`${API}/jobs/photo/${job.slug}`} />
            <meta property="og:image:type" content={`${API}/jobs/photo/${job.slug}`} />
            <script
                 key={`jobJSON-${job._id}`}
                 type='application/ld+json'
                dangerouslySetInnerHTML={{ __html: JSON.stringify(makeJobSchema()) }} />
     
        </Head>
    );
const router=useRouter();
    if(router.isFallback){
        return <div>Loading...</div>
    }
    return (
        <>
            {head()}

            <section className="mat-container">
        
                <div className="jobs main-mat" >
               
                    <div className=" job bg-light ">
           
                        <div className="job-top p-1 my-1 input-box">
                        <div className=" text-primary p-1 hide-sm">
                        <AttachmentIcon style={{fontSize:40}} />
                       </div>
                            <div className="my-1">
                                <Link href={`/jobs/${job.slug}`}>
                                    <h1 className="large text-dark">{job.title}</h1>
                                </Link>

                            </div>
                            <div className="mat-special">
                            <div className="share icons p-1">
                                <a href={`https://www.facebook.com/sharer.php?u=https://theprograd.com/jobs/${job.slug}`} target="_blank" rel='noopener noreferrer'><i className='text-primary'><FacebookIcon style={{ fontSize: 30 }} /></i></a>
                                <a href={` https://www.linkedin.com/sharing/share-offsite/?url=https://theprograd.com/jobs/${job.slug}`} target="_blank" rel='noopener noreferrer' ><i className='text-primary'><LinkedInIcon style={{ fontSize: 30 }} /></i></a>
                                <a href={`https://t.me/share/url?url=https://theprograd.com/jobs/${job.slug}&text=Fresh recruitment for ${job.agency} for the various post.Do visit the Link to explore more abou these vacancies and apply directly at The ProGrad.${job.mdesc}`} target="_blank" rel='noopener noreferrer' ><i className='text-primary'><TelegramIcon style={{ fontSize: 30 }} /></i></a>
                            </div>
                            </div>

                        </div>
                     
                        <div className="avatar-upload" style={{margin:'auto'}}>
                         <div className="avatar-preview"><Image photo={props.photo} /></div>
                         <strong className=" text-danger extra-small author my-1 p-1 input-box">Published on {moment(job.createdAt).format("MMM DD YYYY")}</strong>
                        </div>
                        <h2 className="small text-primary p-1">Job Higlights</h2>
                     <div className="job-bottom">
             <table style={{width:'100%'}}>
             <tbody>
             <tr className='py-1'>
                        <td style={{width:'2rem'}} className='text-primary'><FilterTiltShiftIcon style={{ fontSize: 20 }} /></td>
                         <td ><strong >Agency</strong></td>
                        <td >{job.agency}</td>
                      </tr>
                   <tr className='py-1'>
                       <td style={{width:'2rem'}} className='text-primary'><FilterTiltShiftIcon style={{ fontSize: 20 }} /></td>
                       <td ><strong >Last Date</strong></td>
                       <td >{moment(job.lastDate).format("MMM DD YYYY")}</td>
                  </tr>
                    <tr className='py-1'>
                        <td style={{width:'2rem'}} className='text-primary'><FilterTiltShiftIcon style={{ fontSize: 20 }} /></td>
                        <td ><strong >Salary</strong></td>
                        <td >{job.salary}</td>
                  </tr>
                    <tr className='py-1'>
                         <td style={{width:'2rem'}} className='text-primary'><FilterTiltShiftIcon style={{ fontSize: 20 }} /></td>
                         <td ><strong >Qualification</strong></td>
                         <td >{job.qualification}</td>
                  </tr>
                    <tr className='py-1'>
                         <td style={{width:'2rem'}} className='text-primary'><FilterTiltShiftIcon style={{ fontSize: 20 }} /></td>
                         <td ><strong >Location</strong></td>
                         <td >{job.location}</td>
                    </tr>
                  <tr className='py-1'>
                         <td style={{width:'2rem'}} className='text-primary'><FilterTiltShiftIcon style={{ fontSize: 20 }} /></td>
                         <td ><strong >Type</strong></td>
                         <td >{job.type}</td>
                 </tr>
             </tbody>    
          </table>
 
                    <div className="job-buttons p-1">
                         <ApplyButton applyLink={job.applyLink} lastDate={job.lastDate} newStatus={job.status}/>
                    </div>
                        </div>
                        <a href="#pdf-mat" className="mat-special bg-dark m-1"><strong >Download Previous Years Now</strong> </a>
                        <div className='job-content selectable' >
                          {renderHTML(job.body)}
                        </div>
                        {job.downloadLink[0] !=null && 
                        <div className=' input-box' id="pdf-mat" >
                        <h4 className="small text-primary my-1">Free Previous Years and others Pdfs </h4>
                        <ol className="btn nbtn">
                        <IFrame material={job} />
                        </ol>
                        </div>
                      }
                      <div className="new-flex">
                      <UpdateButton url={`/admin/jobcrud/${job.slug}`} name='Update'/>
                        <UpdateButton url={`/admin/jobcrud/${job.slug}/addFaq`} name='Add Faq' />
                        <UpdateButton url={`/admin/jobcrud/${job.slug}/add-link`} name='Add Pdf Link' />
                      </div>
                        {/* <Article /> */}

                    </div>
                    <div >
                        <h3 className="small text-primary">Tags and Categories</h3>
                        <div className='m-1 new-flex'>
                            <CategoryInSlug newCat='jobCategories' cats={job.jobCategories} />
                            <TagInSlug tags={job.jobTags} newTagRoute='jobTags' />
                        </div>
                    </div>
 

                </div>
            <div className="mat-author p-1">
   
            <h3 className="text-danger my-1">{job.agency}</h3>
            <h3 className=" text-primary m-1">{job.subtitle}</h3>
            <p className="hide-sm">{job.desc !==undefined  ? job.desc :  `Bumper vacancies have been announced by ${job.agency}. If you are finding a job in ${job.location} then you must apply before the ${moment(job.lastDate).format('Do MMMM YYYY')}. Read full notification and Apply`}</p>
            <div className="line"></div>
            <div className="my-1">
            <a href="#pdf-mat" className="btn btn-dark p-1 hide-sm" style={{borderRadius:'0.7rem'}}><strong >Download Free Previous Years Pdf</strong> </a>
            </div>
            <div className="my-1">
            <a href="#faq" className="btn btn-primary p-1 hide-sm" style={{borderRadius:'0.7rem'}}><strong >Some Faqs</strong> </a>
            </div>
            <h4 className="text-primary">Social Share</h4>
            <hr className="hr-1" />
            <div className="share icons p-1">
                <a href={`https://www.facebook.com/sharer.php?u=https://theprograd.com/jobs/${job.slug}`} target="_blank" rel='noopener noreferrer'><i className='text-primary'><FacebookIcon style={{ fontSize: 30 }} /></i></a>
                <a href={` https://www.linkedin.com/sharing/share-offsite/?url=https://theprograd.com/jobs/${job.slug}`} target="_blank" rel='noopener noreferrer' ><i className='text-primary'><LinkedInIcon style={{ fontSize: 30 }} /></i></a>
                <a href={`https://t.me/share/url?url=https://theprograd.com/jobs/${job.slug}&text=Fresh recruitment for ${job.agency} for the various post.Do visit the Link to explore more abou these vacancies and apply directly at The ProGrad.${job.mdesc}`} target="_blank" rel='noopener noreferrer' ><i className='text-primary'><TelegramIcon style={{ fontSize: 30 }} /></i></a>
            </div>
            </div>
            </section>


            <section id='faq' className="container">
            <div  className="input-box p-1">
            {job.faq[0] !=null  && 
                 <div className='btn input-box'>
                        <h2 className="small text-danger my-1"> Frequently Asked Questions</h2>
                        <Faq material={job} />
                </div> 
                }
            </div>
                <h4 className="text-primary small my-1">Related Jobs to apply</h4>
                <div className='line'></div>
                <div className="card">
                    <SmallCard listRelated={listRelated} job={job} newRoute='jobs' />
                </div>
                <div className="m-1">

                    {/* <Article /> */}
                </div>

             <NewsLetter />
            </section>
     
        </>
    )
}

export const getStaticPaths = async () => {
    const res = await fetch(`${API}/jobs`);
    const data = await res.json();
    const paths = data.map(job => {
        return {
            params: { slug: job.slug }

        }
    })

    return {

        paths,
        fallback:true
    }
}

export const getStaticProps = async (ctx) => {
    const slug = ctx.params.slug;

    const [job, photo] = await Promise.all([
        fetch(`${API}/jobs/` + slug).then(r => r.json()),
        `${API}/jobs/photo/` + slug
    ]);
    if (!job) {
        return {
      notFound:true
        }
      }
    return {
        props: {
            job,
            photo

        },
        revalidate:60
    }

}



export default SingleJob;

