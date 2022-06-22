import Head from 'next/head';
import { BreadcrumbJsonLd,NextSeo ,NewsArticleJsonLd} from 'next-seo';
import { listHome } from '../../../actions/job';
import Script from 'next/script';
import { useAmp } from 'next/amp'
import { API } from '../../../config';
import { format } from 'date-fns';


export const config = { amp: 'hybrid '};

export const getStaticPaths = async () => {
    const post = await listHome();
    const paths =await post.map((job,i) => {
        return {
            params: { slug: job.slug }

        }
    })

    return {
        paths,
        fallback:'blocking'
    }
}

export const getStaticProps = async (ctx) => {
    const slug = ctx.params.slug;

    const job = await fetch(`${API}/jobs/` + slug).then(r => r.json());
    
    if (!job) {
        return {
      notFound:true
        }
      }
    return {
        props: {
            job
        },
      
    }

}
const WebStory= ({job}) => {
  const isAmp = useAmp();
  return(
     <>

     <NextSeo
      title={`${job.title}`}
      description={`${job.desc}`}
      canonical={`https://www.theprograd.com/jobs/webstories/${job.slug}`}
      
      openGraph={{
        url: `https://www.theprograd.com/jobs/webstories/${job.slug}`,
        title:`${job.title}`,
        description:`${job.desc}`,
        images:[
        {
           url: job.imgLink ? `${job.imgLink}` : 'https://i.ibb.co/Sd0sJXD/www-theprograd-com-4.jpg' ,
            width: 800,
            height: 600,
            alt: `${job.title}`,
            type: 'image/jpeg',
          }
          ],
        site_name: 'The ProGrad',
      }}
    
    />
    <BreadcrumbJsonLd
      itemListElements={[
        {
          position: 1,
          name: 'Home',
          item: 'https://www.theprograd.com/',
        },
        {
          position: 2,
          name: 'Government Jobs',
          item: 'https://www.theprograd.com/jobs',
        },
        {
          position: 3,
          name: 'Government Job Webstories',
          item: 'https://www.theprograd.com/jobs/webstories',
        },
        {
          position: 4,
          name: `${job.agency} Jobs Notification 2022 has released.Chekout this story for all details`,
          item: `https://www.theprograd.com/jobs/webstories/${job.slug}`,
        },
      
      ]}
    />
    <NewsArticleJsonLd
      url={`https://www.theprograd.com/jobs/webstories/${job.slug}`}
      title={ `${job.agency} Jobs Notification 2022 has released.Chekout this story for all details`}
      images={[
        'https://i.ibb.co/Sd0sJXD/www-theprograd-com-4.jpg',
        `${job.imgLink}`
      ]}
      section="Government Job News Web Story"
      keywords={`${job.agency} jobs,latest sarkari naukri`}
      datePublished={job.createdAt}
      dateModified={job.updatedAt}
      authorName={job.agency}
      publisherName='The ProGrad'
      publisherLogo={`https://www.theprograd.com/img/StuproLogo.png`}
      description={job.desc}
      body={job.desc}
    />
  
    {isAmp ?
    (

    
    <amp-story
        standalone=""
        title={`${job.agency } Jobs Notification 2022 has released.Chekout this story for all details`}
        publisher="The ProGrad"
        publisher-logo-src="https://www.theprograd.com/img/StuproLogo.png"
        poster-portrait-src="https://i.ibb.co/Sd0sJXD/www-theprograd-com-4.jpg"
        poster-square-src="https://i.ibb.co/Sd0sJXD/www-theprograd-com-4.jpg"
        poster-landscape-src="https://i.ibb.co/Sd0sJXD/www-theprograd-com-4.jpg">
        {/* <!-- A story consists of one or more pages. Each page is declared by an `amp-story-page` element. Pages are designed by layering videos, images and text. Here we have a page that uses two layers. One layer filling the available space with an image and one text layer that shows a heading. --> */}
        
        <amp-story-page id="page-1" auto-advance-after="8s">
    
          <amp-story-grid-layer template="fill">
            <amp-img src="https://i.ibb.co/Sd0sJXD/www-theprograd-com-4.jpg"
                     width="720" height="1280"
                     animate-in="fly-in-top"
                     layout="responsive">
            </amp-img>
          </amp-story-grid-layer>
    
          <amp-story-grid-layer template="thirds">
          <amp-img src='https://i.ibb.co/10gjXBp/Govt-Jobs-Pvt-Jobs-Study-Material.jpg' grid-area='upper-third'  animate-in="fly-in-top"
                     width="320" height="640"
                     layout="responsive"></amp-img>
    
            <h1 className='new-head mt'  animate-in="fly-in-bottom"  animate-in-delay="0.4s">{job.agency} Jobs Notification 2022 has released. <span className="text-red">Chekout this story for all details</span></h1>
            
          </amp-story-grid-layer>
        </amp-story-page>
    
        {/* <!-- Here we have a page consisting of a video which autoplays and loops. --> */}
        <amp-story-page id="page-2" auto-advance-after="8s">
    
        <amp-story-grid-layer template="fill">
            <amp-img src="https://i.ibb.co/Sd0sJXD/www-theprograd-com-4.jpg"
                     animate-in="fly-in-top"
                     width="720" height="1280"
                     layout="responsive">
            </amp-img>
          </amp-story-grid-layer>
    
          <amp-story-grid-layer template="vertical">
          
          <h2 className='newHead'  animate-in="fly-in-bottom"  animate-in-delay="0.4s">Description</h2>
            <p>{job.desc.substr(0,270)}...</p>
            
            
          <h2 className='newHead'  animate-in="fly-in-bottom"  animate-in-delay="0.4s">Job Location</h2>
            <p>The location of the job is {job.location}</p> 
            
            
            <h2 className='newHead'  animate-in="fly-in-bottom"  animate-in-delay="0.4s">Salary Details</h2>
            <p>The Salary offered is ₹ {job.salary} per month.But you can check the detailed notification</p>
            
    
          </amp-story-grid-layer>
        </amp-story-page>
    
        <amp-story-page id="page-3" auto-advance-after="8s">
          
          <amp-story-grid-layer template="fill">
            <amp-img src="https://i.ibb.co/Sd0sJXD/www-theprograd-com-4.jpg"
                     animate-in="fly-in-top"
                     width="720" height="1280"
                     layout="responsive">
            </amp-img>
          </amp-story-grid-layer>
          <amp-story-grid-layer template="vertical">
          
          <h2 className='newHead'  animate-in="fly-in-bottom"
                animate-in-delay="0.4s">
              Qualification Required
            </h2>
            <p>{job.qualification}</p>
         
          
          <h2 className='newHead'  animate-in="fly-in-bottom"
                animate-in-delay="0.4s">
              Last Date to Apply
            </h2>
            <p>Last date to apply is: {format(new Date(job.lastDate),'dd MMM yyyy')}</p>
          
            <a className='rounded-md bg-red'  animate-in="fly-in-bottom"
                animate-in-delay="0.4s" href={`/jobs/${job.slug}`} target="_blank"><h2 className='newHead'>
              Click to Know More 
            </h2></a>
          
          </amp-story-grid-layer>
        </amp-story-page>
        {/* <!-- A "bookend" panel containing links to other resources will appear on the last page of your story if you include an `amp-story-bookend` that references a [bookend JSON config](/static/samples/json/bookend.json). --> */}
       
        <amp-story-bookend src="https://amp.dev/static/samples/json/bookend.json" layout="nodisplay">
        </amp-story-bookend>
    
    </amp-story>
    )
    
 : <div className='p-4'><h1 className='text-red-400 text-2xl font-bold my-5'>The AMP stories are not meant for Desktop , So Please Open this Page in Mobie</h1><a  href={`/jobs/${job.slug}`} className=' rounded-md bg-teal-600 text-white font-bold p-2 '>Go Show me full Notification</a></div>  }
</>
 )

}

export default WebStory;


