import React,{useState,useEffect} from 'react';
import Link from 'next/link';
import { getCookie, isAuth } from '../../actions/auth';
import moment from 'moment';

const Read = ({removeApi,list,newRoute,updateLink}) => {
    const [jobs, setJobs] = useState([]);
    const [message, setMessage] = useState('');
    const token = getCookie('token');
    useEffect(() => {
        loadAll();
    }, []);

    const loadAll = () => {
        list().then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setJobs(data);
            }
        });
    };
    const deleteNow = slug => {
        removeApi(slug, token).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setMessage(data.message);
                loadAll();
            }
        });
    };

    const deleteConfirm = slug => {
        let answer = window.confirm('Are you sure you want to delete your Job?');
        if (answer) {
            deleteNow(slug);
        }
    };

    const showUpdateButton = job => {
        if (isAuth() && isAuth().role === 0) {
            return (
                <Link href={`/user/${updateLink}/${job.slug}`}>
                    <a className="btn nbtn btn-success">Update</a>
                </Link>
            );
        } else if (isAuth() && isAuth().role === 1) {
            return (
              
                    <a href={`/admin/${updateLink}/${job.slug}`} className="m-2 btn nbtn btn-success">Update</a>
                
            );
        }
    };
    const showAll = () => {
        return jobs.map((job, i) => {
            return (
                <div key={i} className="p-1">
                    <Link href={`/${newRoute}/${job.slug}`}>
                    <a>
                     <h2  className="text-dark small   " style={{lineHeight:'1.9rem'}}>
                        {job.title}
                        </h2>
                    </a>
                    </Link>
              
                    <button className="btn btn-danger nbtn" onClick={() => deleteConfirm(job.slug)}>
                        Delete
                    </button>
                    {showUpdateButton(job)}
                   
                </div>
            );
        });
    };


    const today=moment();

    return (
        <React.Fragment>

                <div className="blog">
                    {/* {message && <div className="alert alert-warning">{message}</div>} */}
                    {showAll()}
                </div>
        </React.Fragment>
    );
}

export default Read
