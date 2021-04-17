import Link from 'next/link';
import { useState, useEffect } from 'react';
import { listSearch } from '../../actions/job';

const Search = () => {
    const [values, setValues] = useState({
        search: undefined,
        results: [],
        searched: false,
        message: ''
    });

    const { search, results, searched, message } = values;

    const searchSubmit = e => {
        e.preventDefault();
        listSearch({ search }).then(data => {
            setValues({ ...values, results: data, searched: true, message: `${data.length} jobs found` });
        });
    };

    const handleChange = e => {
        
        setValues({ ...values, search: e.target.value, searched: false, results: [] });
    };

    const searchedJobs = (results = []) => {
        return (
            <div className="bg-light">
                {message && <p className="extra-small text-light-gray " >{message}</p>}

                {results.map((job, i) => {
                    return (
                        
                        <div key={i} >
                        <Link href={`/jobs/${job.slug}`}>
                       <a>
                        <h3  className="text-dark " style={{fontFamily:`'Source Serif Pro' ,serif` ,lineHeight:'1.9rem'}}>
                        🤩<span> </span>{job.title}
                        </h3>
                        <div className="line"></div>
                       </a>
                        </Link>
                      
                    </div>
                    );
                })}
            </div>
        );
    };

    const searchForm = () => (

        <form onSubmit={searchSubmit} style={{width: '100%', display: 'flex' ,alignItems:'end' ,height: '2.4rem',justifyContent:'space-between',alignContent:'center',alignItems:'center' }} className="btn nbtn btn-success" >
           <input className='btn nbtn btn-success' style={{width:'100%'}} type="search" placeholder="Search Jobs" onChange={handleChange} />
          <button className="btn nbtn btn-dark lead my-1"   type="submit">Search</button>
         </form>
    );

    return (
        <>
       <div style={{display:'block'}}>  
        <div className="my-3">{searchForm()}</div>
       
        {searched && <div className='blog m-2 ' >{searchedJobs(results)}</div>}
       
        </div>
       
        </>
    );
}
export default Search;