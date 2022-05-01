import { Feed } from "feed";
import { list } from '../../actions/job';
import { listPvt } from '../../actions/privateJob';
import {DOMAIN} from '../../config'


export default async(req,res)=>{
  const d = new Date();
   const n = d.getFullYear();
  try {
    const feed = new Feed({
      title: "The ProGrad Jobs",
      description: "The ProGrad Jobs feed.Apply for the best government jobs in India",
      id: `${DOMAIN}/jobs`,
      link: `${DOMAIN}/jobs`,
      language: "en", 
      image: `${DOMAIN}/img/top-landing.svg`,
      favicon: `${DOMAIN}/favicon.ico`,
      copyright: `All rights reserved ${n}, The ProGrad`,
      updated: new Date(), 
      generator: "Feed for best government Jobs in India", 
      feedLinks: {
        xml: `${DOMAIN}/api/rss-feed`,
      }
    
    });
    const jobs = await list();
    const privateJobs = await listPvt();

    // jobs != null
    jobs.forEach(job => {
      feed.addItem({
        title: job.subtitle ? job.subtitle :job.title,
        id: `${DOMAIN}/jobs/${job.slug}`,
        link: `${DOMAIN}/jobs/${job.slug}`,
        description:`${job.desc ? job.desc : `Latest vacancies has been rolled out by ${job.agency} in ${job.location}.If you are searching a sarkari naukri in ${job.location} then it is an oppurtunity for you.`}`,
        content:`${job.desc ? job.desc : `Latest vacancies has been rolled out by ${job.agency} in ${job.location}.If you are searching a sarkari naukri in ${job.location} then it is an oppurtunity for you.`}`,
        date: new Date(job.updatedAt),
      });
    });

    privateJobs.forEach(job => {
      feed.addItem({
        title:job.title,
        id: `${DOMAIN}/privateJobs/${job.slug}`,
        link: `${DOMAIN}/privateJobs/${job.slug}`,
        description:job.desc ,
        content:job.desc ,
        date: new Date(job.updatedAt),
      });
    });

    res.writeHead(200, {
      'Content-Type': 'application/xml'
    });

    res.end(feed.rss2())
  } catch (err) {
    console.log(err)
  }
}

