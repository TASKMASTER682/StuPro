import Link from 'next/link';
import React,{ useState, useEffect } from 'react';
import { getCookie, isAuth } from '../../actions/auth';
import { listPvt, removePvtJob } from '../../actions/privateJob';
import moment from 'moment';

const PvtJobRead = () => {
    const [privateJobs, setPrivateJobs] = useState([]);
    const [message, setMessage] = useState('');
    const token = getCookie('token');

    useEffect(() => {
        loadJobs();
    }, []);

    const loadJobs = () => {
        listPvt().then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setPrivateJobs(data);
            }
        });
    };

    const deleteJob = slug => {
        removePvtJob(slug, token).then(data => {
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

    const showUpdateButton = privateJob => {
        if (isAuth() && isAuth().role === 0) {
            return (
                <Link href={`/user/privatejobcrud/${privateJob.slug}`}>
                    <a className="btn nbtn btn-success">Update</a>
                </Link>
            );
        } else if (isAuth() && isAuth().role === 1) {
            return (
              
                    <a href={`/admin/privatejobcrud/${privateJob.slug}`} className="m-2 btn nbtn btn-success">Update</a>
                
            );
        }
    };
    const showAllJobs = () => {
        return privateJobs.map((privateJob, i) => {
            return (
                <div key={i} className="p-1">
                    <Link href={`/privateJobs/${privateJob.slug}`}>
                    <a>
                     <h2  className="text-dark small   " style={{fontFamily:`'Source Serif Pro' ,serif` ,lineHeight:'1.9rem'}}>
                        {privateJob.title}
                        </h2>
                    </a>
                    </Link>
                    <p className={`extra-small text-${ moment(privateJob.lastDate).format()<today.format() ? 'primary':'light-gray'}`}>
                    { moment(privateJob.lastDate).format()<today.format() ? 'Expired':'Live' }| Published on {moment(privateJob.updatedAt).fromNow()}
                    </p>
                    <button className="btn btn-danger nbtn" onClick={() => deleteConfirm(privateJob.slug)}>
                        Delete
                    </button>
                    {showUpdateButton(privateJob)}
                   
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

export default PvtJobRead;