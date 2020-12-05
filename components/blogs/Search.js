import Link from 'next/link';
import renderHTML from 'react-render-html';
import { useState, useEffect } from 'react';
import { listSearch } from '../../actions/blog';

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
            setValues({ ...values, results: data, searched: true, message: `${data.length} blogs found` });
        });
    };

    const handleChange = e => {
        setValues({ ...values, search: e.target.value, searched: false, results: [] });
    };

    const searchedBlogs = (results = []) => {
        return (
            <div className="bg-light">
                {message && <p className="extra-small text-light-gray " >{message}</p>}

                {results.map((blog, i) => {
                    return (
                        
                        <div key={i} >
                        <Link href={`/blogs/${blog.slug}`}>
                       <a>
                        <h3  className="text-primary  " style={{fontFamily:`'Source Serif Pro' ,serif` }}>
                        🕵️‍♂️<span> </span>{blog.title}
                        </h3>
                       </a>
                       <div className="line"></div>
                        </Link>
                      
                    </div>
                    );
                })}
            </div>
        );
    };

    const searchForm = () => (

        <form onSubmit={searchSubmit} style={{width: '100%', display: 'flex' ,height: '2.4rem',justifyContent:'center',alignContent:'center',alignItems:'center' }} className="btn nbtn btn-success" >
           <input className='btn nbtn btn-success ' style={{width:'100%'}} type="search" placeholder="Search Blogs" onChange={handleChange} />
          <button className="btn nbtn btn-dark lead my-1"  type="submit">Search</button>
         </form>
    );

    return (
        <>
       <div style={{display:'block'}}>  
        <div className="my-3">{searchForm()}</div>
       
        {searched && <div className='blog m-2 ' >{searchedBlogs(results)}</div>}
       
        </div>
       
        </>
    );
}
export default Search;