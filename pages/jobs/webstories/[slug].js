import Head from 'next/head';
import { BreadcrumbJsonLd,NextSeo ,NewsArticleJsonLd} from 'next-seo';

import { listJobsWithCategoriesAndTags } from '../../../actions/job';
import Script from 'next/script';
import { API } from '../../../config';
import { format } from 'date-fns';

export const config = { amp: true };
export const getStaticPaths = async () => {
    const post = await listJobsWithCategoriesAndTags();
    // const post = await res.json();
    const paths =await post.map((job) => {
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

    const [job,photo] = await Promise.all([
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
export default ({job,photo}) => (
  <>
    <Head>
      <Script strategy='lazyOnload' key="amp-story" custom-element="amp-story" src="https://cdn.ampproject.org/v0/amp-story-1.0.js" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
<link href="https://fonts.googleapis.com/css2?family=Marcellus&family=Oleo+Script&family=Righteous&display=swap" rel="stylesheet" />
   </Head>
   <NextSeo
      title='JKSSB Jobs Notification 2022 has released.Chekout this story for all details'
      description='RGNUL Jobs Notification 2022 information for the hiring of 12 Finance Officers, Deputy Librarians, Medical Officers, Assistant Registrar, and Superintendent Posts has been released on the official website at rgnul.ac.in. Candidates Planning to start their career at the Rajiv Gandhi National University of Law can apply Offline application on or before 2022-07-05'
      canonical='https://www.theprograd.com/jobs/webstories/rgnul-job-notification-for-12-finance-officer-deputy-librarian-medical-officer-assistant-registrar-superintendent'
      
      openGraph={{
        url: 'https://www.theprograd.com/jobs/webstories/rgnul-job-notification-for-12-finance-officer-deputy-librarian-medical-officer-assistant-registrar-superintendent',
        title:'JKSSB Jobs Notification 2022 has released.Chekout this story for all details',
        description:'RGNUL Jobs Notification 2022 information for the hiring of 12 Finance Officers, Deputy Librarians, Medical Officers, Assistant Registrar, and Superintendent Posts has been released on the official website at rgnul.ac.in. Candidates Planning to start their career at the Rajiv Gandhi National University of Law can apply Offline application on or before 2022-07-05',        images:[
        {
           url: 'https://i.ibb.co/Sd0sJXD/www-theprograd-com-4.jpg' ,
            width: 800,
            height: 600,
            alt: 'JKSSB Jobs Notification 2022 has released.Chekout this story for all details',
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
          name: 'JKSSB Jobs Notification 2022 has released.Chekout this story for all details',
          item: 'https://www.theprograd.com/jobs/webstories/rgnul-job-notification-for-12-finance-officer-deputy-librarian-medical-officer-assistant-registrar-superintendent',
        },
      
      ]}
    />
    <NewsArticleJsonLd
      url='https://www.theprograd.com/jobs/webstories/rgnul-job-notification-for-12-finance-officer-deputy-librarian-medical-officer-assistant-registrar-superintendent'
      title='JKSSB Jobs Notification 2022 has released.Chekout this story for all details'
      images={[
        'https://i.ibb.co/Sd0sJXD/www-theprograd-com-4.jpg',
      ]}
      section="Government Job News Web Story"
      keywords='Jkssb jobs,latest sarkari naukri'
      datePublished='10-09-2021'
      dateModified='10-09-2021'
      authorName='Sayed Anwar'
      publisherName='The ProGrad'
      publisherLogo={`https://www.theprograd.com/img/StuproLogo.png`}
      description='RGNUL Jobs Notification 2022 information for the hiring of 12 Finance Officers, Deputy Librarians, Medical Officers, Assistant Registrar, and Superintendent Posts has been released on the official website at rgnul.ac.in. Candidates Planning to start their career at the Rajiv Gandhi National University of Law can apply Offline application on or before 2022-07-05.'
      body='RGNUL Jobs Notification 2022 information for the hiring of 12 Finance Officers, Deputy Librarians, Medical Officers, Assistant Registrar, and Superintendent Posts has been released on the official website at rgnul.ac.in. Candidates Planning to start their career at the Rajiv Gandhi National University of Law can apply Offline application on or before 2022-07-05.'
    />
    <amp-story
      standalone=""
      title='JKSSB Jobs Notification 2022 has released.Chekout this story for all details'
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
        <amp-story-grid-layer template="vertical">
        <amp-img src='https://i.ibb.co/10gjXBp/Govt-Jobs-Pvt-Jobs-Study-Material.jpg'  animate-in="fly-in-top"
                   width="720" height="1280"
                   layout="responsive"></amp-img>
  
          <h1 className='new-head'  animate-in="fly-in-bottom"  animate-in-delay="0.4s">JKSSB Jobs Notification 2022 has released. <span className="text-red">Chekout this story for all details</span></h1>
          
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
          <p>RGNUL Jobs Notification 2022 information for the hiring of 12 Finance Officers, Deputy Librarians, Medical Officers, Assistant Registrar, and Superintendent Posts has been released on the official website at rgnul.ac.in. Candidates Planning to start their career at the Rajiv Gandhi National University of Law can apply Offline application on or before 2022-07-05.</p>
          
          
        <h2 className='newHead'  animate-in="fly-in-bottom"  animate-in-delay="0.4s">Job Location</h2>
          <p>Jammu</p> 
          
          
          <h2 className='newHead'  animate-in="fly-in-bottom"  animate-in-delay="0.4s">Salary Details</h2>
          <p>The Salary offered is ₹ 5000 per month.But you can check the detailed notification</p>
          
         

        </amp-story-grid-layer>
      </amp-story-page>

      {/* <!-- Pre-defined entry animations make it possible to create dynamic pages without videos. The length and initial delay can be customized using the `animate-in-duration` and `animate-in-delay` properties. The [animations sample](/documentation/examples/visual-effects/amp_story_animations/) shows all available animantions in action. --> */}
      <amp-story-page id="animation-demo" auto-advance-after="8s">
        <amp-story-grid-layer template="fill">
          <amp-img src="https://i.ibb.co/Sd0sJXD/www-theprograd-com-4.jpg"
                   animate-in="fly-in-top"
                   width="720" height="1280"
                   layout="responsive">
          </amp-img>
        </amp-story-grid-layer>
        <amp-story-grid-layer template="thirds">
        <amp-story-grid-layer grid-area="upper-third">
        <h2 className='newHead'  animate-in="fly-in-bottom"
              animate-in-delay="0.4s">
            Qualification Required
          </h2>
          <p>MBBS,BUMS,GRADUATION</p>
        </amp-story-grid-layer>
        <amp-story-grid-layer grid-area="middle-third">
        <h2 className='newHead'  animate-in="fly-in-bottom"
              animate-in-delay="0.4s">
            Last Date to Apply
          </h2>
          <p>Last date to apply is:5-10-2022</p>
        </amp-story-grid-layer>
        <amp-story-grid-layer grid-area="lower-third">
 
          <a className='rounded-md bg-red'  animate-in="fly-in-bottom"
              animate-in-delay="0.4s" href='/jobs/rgnul-job-notification-for-12-finance-officer-deputy-librarian-medical-officer-assistant-registrar-superintendent'><h2 className='newHead'>
            Click to Know More 
          </h2></a>
        </amp-story-grid-layer>
        </amp-story-grid-layer>
      </amp-story-page>
      {/* <!-- A "bookend" panel containing links to other resources will appear on the last page of your story if you include an `amp-story-bookend` that references a [bookend JSON config](/static/samples/json/bookend.json). --> */}
      <amp-story-bookend src="https://amp.dev/static/samples/json/bookend.json" layout="nodisplay">
      </amp-story-bookend>
    </amp-story>
    <style jsx amp-custom>
{`
.newHead{
  font-family: 'Righteous', cursive;
    color:#005555;
    text-decoration:underline
}
.new-head{
  font-family: 'Righteous', cursive;
    color:#005555;
}
.bg-green{
  background-color:#00FFAB;
  padding:1rem
  opacity:0.7rem
}
.bg-red{
  background-color:#FF8C8C;
  padding:1rem
}
.text-green{
  color:#00FFAB;
}
.text-red{
  color:#FD5D5D;
}
.rounded-md{
  border-radius:4px;
}
amp-img {
border: 1px solid black;
border-radius: 4px;
}
a{
  text-align:center;
  color:black;
  margin-bottom:2rem;
}
p {
padding: 1rem;
color:black;
font-family: 'Marcellus', serif;
line-height:1.5rem
}`}
</style>
  </>
)




// export const getStaticPaths = async () => {
//   const post = await listJobsWithCategoriesAndTags();
//   // const post = await res.json();
//   const paths =await post.map((job) => {
//       return {
//           params: { slug: job.slug }

//       }
//   })

//   return {

//       paths,
//       fallback:true
//   }
// }

// export const getStaticProps = async (ctx) => {
//   const slug = ctx.params.slug;

//   const [job,photo] = await Promise.all([
//     fetch(`${API}/jobs/` + slug).then(r => r.json()),
//     `${API}/jobs/photo/` + slug
//   ]);
//   if (!job) {
//       return {
//     notFound:true
//       }
//     }
//   return {
//       props: {
//           job,
//           photo

//       },
//       revalidate:60
//   }

// }
// export default ({job,photo}) => (
// <>
//   <Head>
//     <Script strategy='lazyOnload' key="amp-story" custom-element="amp-story" src="https://cdn.ampproject.org/v0/amp-story-1.0.js" />
//     <link rel="preconnect" href="https://fonts.googleapis.com" />
// <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
// <link href="https://fonts.googleapis.com/css2?family=Marcellus&family=Oleo+Script&family=Righteous&display=swap" rel="stylesheet" />
//  </Head>
//  <NextSeo
//     title={`${job.title}`}
//     description={`${job.desc}`}
//     canonical={`https://www.theprograd.com/jobs/webstories/${job.slug}`}
    
//     openGraph={{
//       url: `https://www.theprograd.com/jobs/webstories/${job.slug}`,
//       title:`${job.title}`,
//       description:`${job.desc}`,
//       images:[
//       {
//          url: job.imgLink ? `${job.imgLink}` : 'https://i.ibb.co/Sd0sJXD/www-theprograd-com-4.jpg' ,
//           width: 800,
//           height: 600,
//           alt: `${job.title}`,
//           type: 'image/jpeg',
//         }
//         ],
//       site_name: 'The ProGrad',
//     }}

//   />
//   <BreadcrumbJsonLd
//     itemListElements={[
//       {
//         position: 1,
//         name: 'Home',
//         item: 'https://www.theprograd.com/',
//       },
//       {
//         position: 2,
//         name: 'Government Jobs',
//         item: 'https://www.theprograd.com/jobs',
//       },
//       {
//         position: 3,
//         name: 'Government Job Webstories',
//         item: 'https://www.theprograd.com/jobs/webstories',
//       },
//       {
//         position: 4,
//         name: `${job.agency} Jobs Notification 2022 has released.Chekout this story for all details`,
//         item: `https://www.theprograd.com/jobs/webstories/${job.slug}`,
//       },
    
//     ]}
//   />
//   <NewsArticleJsonLd
//     url={`https://www.theprograd.com/jobs/webstories/${job.slug}`}
//     title={ `${job.agency} Jobs Notification 2022 has released.Chekout this story for all details`}
//     images={[
//       'https://i.ibb.co/Sd0sJXD/www-theprograd-com-4.jpg',
//     ]}
//     section="Government Job News Web Story"
//     keywords={`${job.agency} jobs,latest sarkari naukri`}
//     datePublished={job.createdAt}
//     dateModified={job.updatedAt}
//     authorName={job.agency}
//     publisherName='The ProGrad'
//     publisherLogo={`https://www.theprograd.com/img/StuproLogo.png`}
//     description={job.desc}
//     body={job.desc}
//   />
//   <amp-story
//     standalone=""
//     title={`${job.agency} Jobs Notification 2022 has released.Chekout this story for all details`}
//     publisher="The ProGrad"
//     publisher-logo-src="https://www.theprograd.com/img/StuproLogo.png"
//     poster-portrait-src="https://i.ibb.co/Sd0sJXD/www-theprograd-com-4.jpg"
//     poster-square-src="https://i.ibb.co/Sd0sJXD/www-theprograd-com-4.jpg"
//     poster-landscape-src="https://i.ibb.co/Sd0sJXD/www-theprograd-com-4.jpg">
//     {/* <!-- A story consists of one or more pages. Each page is declared by an `amp-story-page` element. Pages are designed by layering videos, images and text. Here we have a page that uses two layers. One layer filling the available space with an image and one text layer that shows a heading. --> */}
//     <amp-story-page id="page-1" auto-advance-after="8s">
//       <amp-story-grid-layer template="fill">
//         <amp-img src="https://i.ibb.co/Sd0sJXD/www-theprograd-com-4.jpg"
//                  width="720" height="1280"
//                  animate-in="fly-in-top"
//                  layout="responsive">
//         </amp-img>
//       </amp-story-grid-layer>
//       <amp-story-grid-layer template="vertical">
//       <amp-img src={job.imgLink ? `${job.imgLink}` : 'https://i.ibb.co/10gjXBp/Govt-Jobs-Pvt-Jobs-Study-Material.jpg'}  animate-in="fly-in-top"
//                  width="720" height="1280"
//                  layout="responsive"></amp-img>

//         <h1 className='new-head'  animate-in="fly-in-bottom"  animate-in-delay="0.4s">{`${job.agency} Jobs Notification 2022 has released. `}<span className="text-red">Chekout this story for all details</span></h1>
        
//       </amp-story-grid-layer>
//     </amp-story-page>

//     {/* <!-- Here we have a page consisting of a video which autoplays and loops. --> */}
//     <amp-story-page id="page-2" auto-advance-after="8s">
//     <amp-story-grid-layer template="fill">
//         <amp-img src="https://i.ibb.co/Sd0sJXD/www-theprograd-com-4.jpg"
//                  animate-in="fly-in-top"
//                  width="720" height="1280"
//                  layout="responsive">
//         </amp-img>
//       </amp-story-grid-layer>
//       <amp-story-grid-layer template="vertical">
      
//       <h2 className='newHead'  animate-in="fly-in-bottom"  animate-in-delay="0.4s">Description</h2>
//         <p>{job.desc.substr(0 ,275)}...</p>
        
        
//       <h2 className='newHead'  animate-in="fly-in-bottom"  animate-in-delay="0.4s">Job Location</h2>
//         <p>{job.location}</p> 
        
        
//         <h2 className='newHead'  animate-in="fly-in-bottom"  animate-in-delay="0.4s">Salary Details</h2>
//         <p>The Salary offered is ₹ {job.salary} per month.But you can check the detailed notification</p>
        
       

//       </amp-story-grid-layer>
//     </amp-story-page>

//     {/* <!-- Pre-defined entry animations make it possible to create dynamic pages without videos. The length and initial delay can be customized using the `animate-in-duration` and `animate-in-delay` properties. The [animations sample](/documentation/examples/visual-effects/amp_story_animations/) shows all available animantions in action. --> */}
//     <amp-story-page id="animation-demo" auto-advance-after="8s">
//       <amp-story-grid-layer template="fill">
//         <amp-img src="https://i.ibb.co/Sd0sJXD/www-theprograd-com-4.jpg"
//                  animate-in="fly-in-top"
//                  width="720" height="1280"
//                  layout="responsive">
//         </amp-img>
//       </amp-story-grid-layer>
//       <amp-story-grid-layer template="thirds">
//       <amp-story-grid-layer grid-area="upper-third">
//       <h2 className='newHead'  animate-in="fly-in-bottom"
//             animate-in-delay="0.4s">
//           Qualification Required
//         </h2>
//         <p>{job.qualification}</p>
//       </amp-story-grid-layer>
//       <amp-story-grid-layer grid-area="middle-third">
//       <h2 className='newHead'  animate-in="fly-in-bottom"
//             animate-in-delay="0.4s">
//           Last Date to Apply
//         </h2>
//         <p>{`Last date to apply is:${format(new Date(job.lastDate),'dd MMM yyyy')}`}</p>
//       </amp-story-grid-layer>
//       <amp-story-grid-layer grid-area="lower-third">

//         <a className='rounded-md bg-red'  animate-in="fly-in-bottom"
//             animate-in-delay="0.4s" href={`/jobs/${job.slug}`}><h2 className='newHead'>
//           Click to Know More 
//         </h2></a>
//       </amp-story-grid-layer>
//       </amp-story-grid-layer>
//     </amp-story-page>
//     {/* <!-- A "bookend" panel containing links to other resources will appear on the last page of your story if you include an `amp-story-bookend` that references a [bookend JSON config](/static/samples/json/bookend.json). --> */}
//     <amp-story-bookend src="https://amp.dev/static/samples/json/bookend.json" layout="nodisplay">
//     </amp-story-bookend>
//   </amp-story>
//   <style jsx amp-custom>
// {`
// .newHead{
// font-family: 'Righteous', cursive;
//   color:#005555;
//   text-decoration:underline
// }
// .new-head{
// font-family: 'Righteous', cursive;
//   color:#005555;
// }
// .bg-green{
// background-color:#00FFAB;
// padding:1rem
// opacity:0.7rem
// }
// .bg-red{
// background-color:#FF8C8C;
// padding:1rem
// }
// .text-green{
// color:#00FFAB;
// }
// .text-red{
// color:#FD5D5D;
// }
// .rounded-md{
// border-radius:4px;
// }
// amp-img {
// border: 1px solid black;
// border-radius: 4px;
// }
// a{
// text-align:center;
// color:black;
// margin-bottom:2rem;
// }
// p {
// padding: 1rem;
// color:black;
// font-family: 'Marcellus', serif;
// line-height:1.5rem
// }`}
// </style>
// </>
// )