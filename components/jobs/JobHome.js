import Link from 'next/link';
import React from 'react';
import moment from 'moment';
import {API} from '../../config'

const JobHome = ({jobs,newRoute}) => {


    const showAllJobs = () => {
        return jobs.map((job) => {
    
            return (
                    <div key={job._id} className="home-card  m-1">
                <img loading='lazy' className="job-home-img" src={`${API}/${newRoute}s/photo/${job.slug}`} alt={job.title} />           
                <div className="card-heading">
                    <Link href={`/${newRoute}s/${job.slug}`}>
                    <a>
                     <h3  className="text-dark home-font  ">
                        {job.title}
                        </h3>
                    </a>
                    </Link>
                    </div>                           
                  <p className="extra-small text-danger">Published on | {moment(job.updatedAt).format("MMM DD YYYY")}</p>
             </div>
            );
        });
    };
    


    // {showUpdateButton(blog)}
    return (
        <>
         {showAllJobs()}
        </>
    );
};

export default JobHome;


