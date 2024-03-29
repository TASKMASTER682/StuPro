import React,{useState,useEffect} from 'react';
import {useRouter} from 'next/router';
import {API} from '../../config';
import Card from '../jobs/Card';
import fetch from 'isomorphic-fetch';



const SearchedJobs = ({xRoute}) => {
    const [data,setData]=useState([]);
    const router=useRouter();
    const {title}=router.query;

    const fetchData= async ()=> {
        const searchData=await fetch(`${API}/${xRoute}/filter/${title}`).then(res=>res.json());
        searchData && setData(searchData);
        
    }

    useEffect(() => {
        fetchData();
    
    },[title]);



  return (
      <>
   <h1 className='pt-20 my-2 text-lg font-bold lg:px-60'>Jobs Related to, {title}</h1>
    <div className='flex flex-col p-4 lg:grid lg:grid-cols-2 lg:px-60'>
        {data.length ? data.map((j,i)=>{
            return(
                <article className="m-1 mb-5 rounded-md shadow-md shadow-green-400 hover:ring-slate-900 hover:ring-1" key={i}>
                <Card job={j} />
                </article>
            )

        }) : <p className='my-2 text-lg font-bold text-red-500 '>Searching...</p>}
    </div>
      </>
 
  )
}

export default SearchedJobs

