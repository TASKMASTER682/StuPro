import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { listHome } from '../../actions/job';
import moment from 'moment';
import Image from 'next/image'

const JobHome = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        loadJobs();
    }, []);

    const loadJobs = () => {
        listHome().then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setJobs(data);
            }
        });
    };

    const showAllJobs = () => {
        return jobs.map((job, i) => {
            return (
                <div className="home-card m-1 nbtn">
               <img loading='lazy' src="img/pvthome.jpg" alt={"ProGrad"} />
                <div className="card-heading">
                    <Link href={`/jobs/${job.slug}`}>
                    <a>
                     <h1  className="text-dark   " style={{fontFamily:`'Source Serif Pro' ,serif`,fontSize:'1.2rem' }}>
                        {job.title}
                        </h1>
                    </a>
                    </Link>
                    </div>
                
               
                  <h3 className="extra-small text-danger p-1">Published on | {moment(job.updatedAt).format("MMM DD YYYY")}</h3>
             </div>
            );
        });
    };
    // {showUpdateButton(blog)}
    return (
        <React.Fragment>
         {showAllJobs()}
        </React.Fragment>
    );
};

export default JobHome;



