import { Feed } from "feed";
import { list } from '../../actions/sitemap';
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
      image: `${DOMAIN}/img/landingjob.jpg`,
      favicon: `${DOMAIN}/favicon.ico`,
      copyright: `All rights reserved ${n}, The ProGrad`,
      updated: new Date(), 
      generator: "Feed for best government Jobs in India", 
      feedLinks: {
        xml: `${DOMAIN}/feed.xml`,
        atom: `${DOMAIN}/feed.atom`
      }
    
    });
    const jobs = await list();
    // jobs != null
    jobs.forEach(job => {
      feed.addItem({
        title: job.title,
        id: `/jobs/${job.slug}`,
        link: `/jobs/${job.slug}`,
        description:`Latest vacancies has been rolled out by ${job.agency} in ${job.location}.If you are searching a sarkari naukri in ${job.location} then it is an oppurtunity for you. ${job.excerpt}`,
        content: `<p>Latest vacancies has been rolled out by ${job.agency} in ${job.location}.If you are searching a job in ${job.location} then it is an oppurtunity for you.You can apply for these vacancies before ${job.lastDate}.The basic pay scale range of these vacancies is ${job.salary}/month.If you are interested to apply online for these vacancies then click on the link to visit the prograd and apply.</p>`,
        date: new Date(job.updatedAt),
      });
    });
  
    res.send(feed.rss2())
  } catch (err) {
    console.log(err)
  }
}

