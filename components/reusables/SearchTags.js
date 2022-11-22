import React from 'react';
import Link from 'next/link';
import {API,DOMAIN } from '../../config'



const ShowTags=({newRoute,btag,fun})=>{


    const showTags=()=>{
        return fun.map((t)=>{
            return(
                    <Link className='p-1 m-3 text-sm font-semibold rounded-md bg-teal-300 text-black' key={t._id}  href={`${DOMAIN}/${btag}/${newRoute}/${t.slug}`}>#{t.name}</Link> 
                )    
            })
    };
return(
       <div className='flex flex-wrap ' >
       {showTags()}
       </div>
)
}
export default ShowTags;