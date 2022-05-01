import { SitemapStream, streamToPromise } from 'sitemap';
import { list } from '../../actions/sitemap';
import { listPvt } from '../../actions/sitemap';
import { listBlog } from '../../actions/sitemap';
import moment from 'moment';
import {DOMAIN} from '../../config'






export default async (req, res) => {
  try {

    const smStream = new SitemapStream({
      hostname: `${DOMAIN}`,
      cacheTime: 600000,
    });


    smStream.write({
      url: `/`,
      changefreq: 'daily',
      priority: 1,
      lastmod:`${moment()}`
    });
    smStream.write('/about');
    smStream.write({
      url: `/jobs`,
      changefreq: 'daily',
      priority: 0.9,
      lastmod:`${moment()}`
      
     
    });
    smStream.write({
      url: `/privateJobs`,
      changefreq: 'daily',
      priority: 0.9,
      lastmod:`${moment()}`


    });
    smStream.write('/privacy');
    smStream.write('/signin');
    smStream.write('/signup');
    smStream.write('/instant-jobs');
    smStream.write('/free-cv-builder');



    // List of posts
    const jobs = await list();

    jobs != null
      ? jobs.forEach((job) => {
        smStream.write({
          url: `/jobs/${job.slug}`,
          changefreq: 'weekly',
          priority: 0.8,
          lastmod:`${job.updatedAt}`

        });
      })
      : "";
    const pvtJobs = await listPvt();

    pvtJobs != null
      ? pvtJobs.forEach((pvtJob) => {
        smStream.write({
          url: `/privateJobs/${pvtJob.slug}`,
          changefreq: 'weekly',
          priority: 0.8,
          lastmod:`${pvtJob.updatedAt}`
        });
      })
      : "";
      const blogs = await listBlog();

      blogs != null
        ? blogs.forEach((blog) => {
          smStream.write({
            url: `/blogs/${blog.slug}`,
            changefreq: 'weekly',
            priority: 0.7,
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