import Link from 'next/link';
import React,{ useState, useEffect } from 'react';
import { listPvtHome } from '../../actions/privateJob';
import moment from 'moment';
import { API } from '../../config';


const PvtJobHome = () => {
    const [privateJobs, setPrivateJobs] = useState([]);

    useEffect(() => {
        loadJobs();
    }, []);

    const loadJobs = () => {
        listPvtHome().then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setPrivateJobs(data);
            }
        });
    };

 

    const showAllJobs = () => {
        return privateJobs.map((privateJob, i) => {
            return (
                <div class="home-card m-1 nbtn">
                <img loading='lazy' src={`${API}/privateJob/photo/${privateJob.slug}`} alt={privateJob.title} />
                <div class="card-heading">
                    <Link href={`/privateJobs/${privateJob.slug}`}>
                    <a>
                     <h1  className="text-dark   " style={{fontFamily:`'Source Serif Pro' ,serif`,fontSize:'1.2rem' }}>
                        {privateJob.title}
                        </h1>
                    </a>
                    </Link>
                    </div>
                
               
                  <h3 class="extra-small p-1">Published on | {moment(privateJob.updatedAt).format("MMM DD YYYY")}</h3>
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

export default PvtJobHome;



