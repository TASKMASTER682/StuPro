import { SitemapStream, streamToPromise } from 'sitemap';
import { list } from '../../actions/sitemap';
import { listPvt } from '../../actions/sitemap';
import {DOMAIN} from '../../config'




export default async (req, res) => {
  
  try {

    const smStream = new SitemapStream({
      hostname: `${DOMAIN}`,
      // cacheTime: 600000,
    });


    // List of posts
    const jobs = await list();

    jobs != null
      ? jobs.forEach((job) => {
        smStream.write({
          url: `/jobs/${job.slug}`,
          changefreq: 'daily',
          priority: 0.9,
          lastmod:`${job.updatedAt}`

        });
      })
      : "";
    const pvtJobs = await listPvt();

    pvtJobs != null
      ? pvtJobs.forEach((pvtJob) => {
        smStream.write({
          url: `/pvtJobs/${pvtJob.slug}`,
          changefreq: 'daily',
          priority: 0.9,
          lastmod:`${pvtJob.updatedAt}`
        });
      })
      : "";



    smStream.end();

    // XML sitemap string
    const sitemapOutput = (await streamToPromise(smStream)).toString();

    // Change headers
    res.writeHead(200, {
      'Content-Type': 'application/xml'
    });

    // Display output to user
    res.end(sitemapOutput);

  } catch (e) {
    console.log(e)
  }

}