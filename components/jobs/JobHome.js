import Link from 'next/link';
import React from 'react';
import {format} from 'date-fns';

const JobHome = ({jobs,newRoute}) => {


    const showAllJobs = () => {
        return jobs.map((job,i) => {
    
            return (
                <div key={i} className=' shadow-md shadow-green-400 w-[16rem] mx-2 rounded-md ring-1 ring-black'>
                <Link href={`/jobs/${job.slug}`}>
                <h3 className='font-bold text-teal-600 text-xl p-1 w-[16rem] h-28 hover:underline overflow-hidden'>{job.title}</h3>
                
                </Link>
               <p className='p-1 my-2 font-semibold text-gray-500'>{`${job.desc.substr(0-160)}......Read More`}</p>
               <p className='p-1 text-sm font-bold text-gray-400'>Published on | {format(new Date(job.updatedAt),'dd MMM yyyy')}</p>
                </div>


            );
        });
    };
    
    // {showUpdateButton(blog)}
    return (
    <div className='flex p-2 overflow-x-auto '>
         {showAllJobs()}
    </div>
        
    );
};

export default JobHome;




{/* <div  className="w-3/6 mx-2 overflow-hidden rounded shadow-lg ">
// <div className="px-6 py-4">
  <div className="font-bold"></div>
</div>
<div className="px-6 pt-4 pb-2">
</div>
</div> */}



{/* <Link href={`/jobs/${job.slug}`}>
<a>
<img className="w-[14rem] h-[8rem] rounded-t-md" src={`${API}/${newRoute}s/photo/${job.slug}`} alt="Sunset in the mountains" />
</a>
</Link> */}