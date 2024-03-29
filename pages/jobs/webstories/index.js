import { listHome} from '../../../actions/job';
import { BreadcrumbJsonLd,NextSeo} from 'next-seo';


export async function getStaticProps(){

    return listHome().then(data => {
        if (data.error) {
            console.log(data.error);
        } else {
            return {
                props:{
                    jobs: data,
                },
                revalidate:60
             
            };
        }
    });
}

const NewStories = ({jobs}) => {    
    const showAllJobs = () => {
        return jobs.map((job, i) => {
            // ()
            return (
                <div key={i} className="bg-local w-[320px] h-[580px] overflow-hidden my-4 lg:mx-6 rounded-md shadow-md shadow-green-400 transition ease-in-out delay-150 hover:ring-slate-900 hover:ring-1 hover:-translate-y-1 hover:scale-110" style={{backgroundImage:  "url(" + "https://i.ibb.co/Sd0sJXD/www-theprograd-com-4.jpg" + ")",  backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'}} >
                <a href={`/jobs/webstories/${job.slug}`} target="_blank">
                <img src="https://i.ibb.co/10gjXBp/Govt-Jobs-Pvt-Jobs-Study-Material.jpg" className=' pt-16 rounded-lg h-[300px] w-[100%]' alt={`webstory logo of ${job.agency} `}/>
                    <h2 className='pt-2 text-3xl   px-2 font-extrabold'>Web Story regarding {job.agency} Jobs Notification 2022 which is now out !!</h2>
                </a>
                </div>
            );
        });
    };
  return (
    <>
    <NextSeo
      title='Checkout the Sarkari Naukri Webstories'
      description='Get in short job details here'
      canonical={`https://www.theprograd.com/jobs/webstories`}
      
      openGraph={{
        url: `https://www.theprograd.com/jobs/webstories`,
        title:'Checkout the Sarkari Naukri Webstories',
        description:'Get in short job details here',
        images:[
        {
           url: 'https://i.ibb.co/Sd0sJXD/www-theprograd-com-4.jpg' ,
            width: 800,
            height: 600,
            alt: 'Checkout the Sarkari Naukri Webstories',
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

      
      ]}
    />
    <div className='pt-20' >
    <h1 className='text-4xl text-teal-400 font-bold my-2 px-4 underline'>All Latest Govt. Job Web Stories</h1>
      <div className=' flex justify-evenly flex-row flex-wrap pt-2 px-4'>
       {showAllJobs()}
      </div>
      </div>
    </>

        

  )
}

export default NewStories;



