import Head from 'next/head';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import {listRelatedPvt } from '../../actions/privateJob';
import { API, DOMAIN, APP_NAME } from '../../config';
import renderHTML from 'react-render-html';
const CategoryInSlug =  dynamic(async ()=> import('../../components/reusables/SlugCat'))
const TagInSlug =  dynamic(async ()=> import('../../components/reusables/TagInSlug'))
const ApplyButton =  dynamic(async ()=> import('../../components/reusables/ApplyLink'))
import useSWR from 'swr';
import moment from 'moment';
const SmallCard = dynamic(() => import('../../components/reusables/SmallCard'), { loading: () => <i>...</i> });
import { isAuth } from '../../actions/auth';
import {fetcher} from '../api/fetcher';
const FacebookIcon =dynamic(async()=>import( '@material-ui/icons/Facebook'),{loading:()=><p>...</p>,ssr:false});
const LinkedInIcon =dynamic(async()=>import('@material-ui/icons/LinkedIn'),{loading:()=><p>...</p>,ssr:false}) ;
const TelegramIcon =dynamic(async()=>import('@material-ui/icons/Telegram'),{loading:()=><p>...</p>,ssr:false}) ;
// const Article=dynamic(async()=>import('../../components/ads/Article'),{loading:()=><p>...</p>,ssr:false}) ;
const AttachmentIcon =dynamic(async()=>import('@material-ui/icons/Attachment'),{loading:()=><p>...</p>,ssr:false});
import Image from '../../components/reusables/ImageComponent';
const FilterTiltShiftIcon =dynamic(async()=>import('@material-ui/icons/FilterTiltShift'),{loading:()=><p>...</p>,ssr:false}) ;
const UpdateButton = dynamic(async ()=> import('../../components/reusables/UpdateButton'))
const Faq =  dynamic(async ()=> import('../../components/reusables/ShowFaq'))
const NewsLetter =dynamic(async ()=> import('../../components/NewsLetterSubscribe'), { ssr: false })
const FaqSchema =dynamic(async ()=> import('../../components/schema/FaqSchema'), { ssr: false })
const JobSchema =dynamic(async ()=> import('../../components/schema/JobSchema'), { ssr: false })







const SinglePvtJob=(props)=>{
    const {data} = useSWR(props.slug ? `${API}/privateJobs/${props.slug}`:null, fetcher, { initialData: props,revalidateOnMount:true});

    const {privateJob}=data;




 

    const head = () => (
        <Head>
            <title>
                {privateJob.subtitle ? privateJob.subtitle :privateJob.title} |The {APP_NAME}
            </title>

             <link rel="canonical" href={`${DOMAIN}/privateJobs/${privateJob.slug}`} />
             <meta name="robots" content="index follow" />
            <meta name="description" content= {privateJob.desc !==undefined  ? privateJob.desc :`Bumper vacancies have been announced by ${privateJob.agency}. If you are finding a job in ${privateJob.location} then you must apply before the ${privateJob.lastDate}. Click here to know more and apply`} />
            <meta property="og:title" content={`${privateJob.title}| The ${APP_NAME}`} />
            <meta property="og:description" content={privateJob.desc !==undefined  ? privateJob.desc :`Bumper vacancies have been announced by ${privateJob.agency}. If you are finding a job in ${privateJob.location} then you must apply before the ${privateJob.lastDate}. Click here to know more and apply`} />
            <meta property="og:url" content={`${DOMAIN}/privateJobs/${privateJob.slug}`} />
            <meta property="og:site_name" content={`The ${APP_NAME}`} />
            <meta property="og:image" content={`${API}/privateJob/photo/${privateJob.slug}`} />
            <meta property="og:image:secure_url" content={`${API}/privateJob/photo/${privateJob.slug}`} />
            <meta property="og:image:type" content={`${API}/privateJob/photo/${privateJob.slug}`} />
           
        </Head>
    );



        return(
           <>
           {head()}
            <section className="container">
             <div className="jobs my-1">
             <div className="job bg-light">
                 <div className="job-top p-1 my-1 input-box" >         
                 <div className="m-1 text-primary hide-sm">
                 <AttachmentIcon style={{fontSize:40}} />
                </div>       
                <div className="my-1">
                <Link href={`/privateJobs/${privateJob.slug}`}>
                    <a><h1 className="small text-dark"  style={{lineHeight:'1.9rem'}}>{privateJob.title}</h1></a>
                </Link>               
                </div>   
             
                  <div className="share icons p-1">
                     <a href={`https://www.facebook.com/sharer.php?u=https://theprograd.com/privateJobs/${privateJob.slug}`} target="_blank" rel='noopener noreferrer'><i className='text-primary'><FacebookIcon style={{fontSize:30}}/></i></a>
                     <a href={` https://www.linkedin.com/sharing/share-offsite/?url=https://theprograd.com/privateJobs/${privateJob.slug}`} target="_blank" ><i className='text-primary'><LinkedInIcon style={{fontSize:30}}/></i></a>
                     <a target="_blank" rel='noopener noreferrer' href={`https://t.me/share/url?url=https://theprograd.com/privateJobs/${privateJob.slug}&text=Fresh recruitment for ${privateJob.agency} for the post of ${privateJob.position}.Do visit the Link to explore more abouthese vacancies and apply directly for The ProGrad.${privateJob.mdesc}`}><i className='text-primary'><TelegramIcon style={{fontSize:30}} /></i></a>
                  </div>
                 
                 </div>
                 <div className="avatar-upload" style={{margin:'auto'}}>
                         <div className="avatar-preview"><Image newRoute='privateJob' job={privateJob} photo={props.photo} /></div>
                         <strong className=" text-success extra-small author my-1 p-1 input-box" >Published on {moment(privateJob.createdAt).format("MMM DD YYYY")}</strong>

                        </div>     
                        <h2 className="small text-primary m-1">Job Higlights</h2>
        
                 <div className="job-bottom">

                 <table style={{width:'100%'}}>
                 <tbody>
                 <tr className='py-1'>
                        <td style={{width:'2rem'}} className='text-danger'><FilterTiltShiftIcon style={{ fontSize: 20 }} /></td>
                         <td ><strong >Company</strong></td>
                        <td >{privateJob.agency}</td>
                      </tr>
                   <tr className='py-1'>
                       <td style={{width:'2rem'}} className='text-danger'><FilterTiltShiftIcon style={{ fontSize: 20 }} /></td>
                       <td ><strong >Last Date</strong></td>
                       <td > {moment(privateJob.lastDate).format("MMM DD YYYY")}</td>
                  </tr>
                    <tr className='py-1'>
                        <td style={{width:'2rem'}} className='text-danger'><FilterTiltShiftIcon style={{ fontSize: 20 }} /></td>
                        <td ><strong >Salary</strong></td>
                        <td >{privateJob.salary}</td>
                  </tr>
                    <tr className='py-1'>
                         <td style={{width:'2rem'}} className='text-danger'><FilterTiltShiftIcon style={{ fontSize: 20 }} /></td>
                         <td ><strong >Qualification</strong></td>
                         <td >{privateJob.qualification}</td>
                  </tr>
                    <tr className='py-1'>
                         <td style={{width:'2rem'}} className='text-danger'><FilterTiltShiftIcon style={{ fontSize: 20 }} /></td>
                         <td ><strong >Location</strong></td>
                         <td >{privateJob.location}</td>
                    </tr>
                  <tr className='py-1'>
                         <td style={{width:'2rem'}} className='text-danger'><FilterTiltShiftIcon style={{ fontSize: 20 }} /></td>
                         <td ><strong >Type</strong></td>
                         <td >{privateJob.type}</td>
                 </tr>
                 <tr className='py-1'>
                         <td style={{width:'2rem'}} className='text-danger'><FilterTiltShiftIcon style={{ fontSize: 20 }} /></td>
                         <td ><strong >Position</strong></td>
                         <td >{privateJob.position}</td>
                 </tr>
                 <tr className='py-1'>
                         <td style={{width:'2rem'}} className='text-danger'><FilterTiltShiftIcon style={{ fontSize: 20 }} /></td>
                         <td ><strong >Key Skills</strong></td>
                         <td >{privateJob.keySkills}</td>
                 </tr>
                 </tbody>       
           </table>
                <div className="job-buttons p-1">
                     <ApplyButton applyLink={privateJob.applyLink} lastDate={privateJob.lastDate} />
                </div>
                </div>
             <div className='job-content p-1 selectable' >
                {renderHTML(privateJob.body)}
            </div>
                <div className="new-flex">
                    <UpdateButton url={`/admin/privatejobcrud/${privateJob.slug}`} name='Update'/>
                        <UpdateButton url={`/admin/privatejobcrud/${privateJob.slug}/addFaq`} name='Add Faq' />
                </div>
                   {/* <Article /> */}
                </div>
                <div >
                <h3 className="small text-primary">Tags and Categories</h3>
                    <div className='my-1 new-flex'>
                         <CategoryInSlug newCat='privateJobCategories' cats={privateJob.privateJobCategories}/>
                         <TagInSlug newTagRoute='privateJobTags' tags={privateJob.privateJobTags}/>
                    </div>
                </div>
                      {privateJob.faq[0] !=null  && 
                 <div className='btn input-box'>
                        <h2 className="small text-danger my-1"> Frequently Asked Questions</h2>
                        <Faq material={privateJob} />
                </div> 
                      }
              </div>
        </section>
            <section className="container">
                    <h3 className="text-primary small">Suggested Jobs to apply</h3>
                    <div className='line'></div>
                    <div className="card">
                    <SmallCard listRelated={listRelatedPvt} job={privateJob} newRoute='privateJobs'/>
                    </div>
                    <div className="m-1">
                    {/* <Article /> */}
                    </div>
            </section>
             <NewsLetter />
           <JobSchema job={privateJob} newRoute='privateJobs' />

         
           </> 
            )
 }


 export const getStaticPaths=async ()=>{
    const res = await fetch(`${API}/privateJobs`);
    const data= await res.json();
    const paths=data.map(privateJob=>{
        return{
            params:{slug:privateJob.slug}
        }
    })
    return{
        paths,
        fallback:false
    }
}
  
export const getStaticProps=async (ctx)=>{
    const slug=ctx.params.slug;
    const [privateJob, photo] = await Promise.all([
        fetch(`${API}/privateJobs/`+slug).then(r => r.json()),
        `${API}/privateJobs/photo/`+slug,


      ]);
  

    return{
        props:{
            privateJob,
            photo,
        }, 
        revalidate:10800


    }

}

export default SinglePvtJob;