import Link from 'next/link';
import { useState, useEffect } from 'react';
import Router from 'next/router';
import { getCookie, isAuth } from '../../actions/auth';
import { list, removeJob } from '../../actions/job';
import moment from 'moment';

const JobRead = () => {
    const [jobs, setJobs] = useState([]);
    const [message, setMessage] = useState('');
    const token = getCookie('token');

    useEffect(() => {
        loadJobs();
    }, []);

    const loadJobs = () => {
        list().then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setJobs(data);
            }
        });
    };

    const deleteJob = slug => {
        removeJob(slug, token).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setMessage(data.message);
                loadJobs();
            }
        });
    };

    const deleteConfirm = slug => {
        let answer = window.confirm('Are you sure you want to delete your Job?');
        if (answer) {
            deleteJob(slug);
        }
    };

    const showUpdateButton = job => {
        if (isAuth() && isAuth().role === 0) {
            return (
                <Link href={`/user/jobcrud/${job.slug}`}>
                    <a className="btn nbtn btn-success">Update</a>
                </Link>
            );
        } else if (isAuth() && isAuth().role === 1) {
            return (
              
                    <a href={`/admin/jobcrud/${job.slug}`} className="m-2 btn nbtn btn-success">Update</a>
                
            );
        }
    };
    const showAllJobs = () => {
        return jobs.map((job, i) => {
            return (
                <div key={i} className="p-1">
                    <Link href={`/jobs/${job.slug}`}>
                    <a>
                     <h2  className="text-dark small   " style={{fontFamily:`'Source Serif Pro' ,serif` ,lineHeight:'1.9rem'}}>
                        {job.title}
                        </h2>
                    </a>
                    </Link>
                    <p className={`extra-small text-${ moment(job.lastDate).format()<today.format() ? 'primary':'light-gray'}`}>
                      { moment(job.lastDate).format()<today.format() ? 'Expired':'Live' }| Published on {moment(job.updatedAt).fromNow()}
                    </p>
                    <button className="btn btn-danger nbtn" onClick={() => deleteConfirm(job.slug)}>
                        Delete
                    </button>
                    {showUpdateButton(job)}
                   
                </div>
            );
        });
    };

    // {showUpdateButton(blog)}
    const today=moment();

    return (
        <React.Fragment>
            <div className="container">
            <h2 className="large text-primary my-">Manage Jobs</h2>
            <div className="line"></div>
                <div className="blog">
                    {/* {message && <div className="alert alert-warning">{message}</div>} */}
                    {showAllJobs()}
                </div>
            </div>
        </React.Fragment>
    );
};

export default JobRead;