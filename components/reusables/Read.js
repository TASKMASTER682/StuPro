import React,{useState,useEffect} from 'react';
import Link from 'next/link';
import { getCookie, isAuth } from '../../actions/auth';

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
                <Link className="bg-teal-400 rounded-md py-2 px-4 m-2" href={`/user/${updateLink}/${job.slug}`}>
                   Update
                </Link>
            );
        } else if (isAuth() && isAuth().role === 1) {
            return (
              
                    <a href={`/admin/${updateLink}/${job.slug}`} className="bg-teal-400 rounded-md py-2 px-4 m-2">Update</a>
                
            );
        }
    };
    const showAll = () => {
        return jobs.map((job, i) => {
            return (
                <div key={i} className="p-2 shadow-md rounded-md my-3 ">
                    <Link href={`/${newRoute}/${job.slug}`}>
                     <h2  className="text-lg font-bold">
                        {job.title}
                        </h2>
                    
                    </Link>
                    <button className="bg-red-400 rounded-md py-2 px-4 m-2" onClick={() => deleteConfirm(job.slug)}>
                        Delete
                    </button>
                    {showUpdateButton(job)}
                   
                </div>
            );
        });
    };



    return (
        <React.Fragment>

                <div >
                    {/* {message && <div className="alert alert-warning">{message}</div>} */}
                    {showAll()}
                </div>
        </React.Fragment>
    );
}

export default Read
