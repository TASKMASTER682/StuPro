import React,{ useState, useEffect } from 'react';
import Link from 'next/link';
import {API,DOMAIN } from '../../config'



const ShowTags=({newRoute,btag,fun})=>{


    const showTags=()=>{
        return fun.map((t)=>{
            return(
                    <Link href={`${DOMAIN}/${btag}/${newRoute}/${t.slug}`}><a className='p-1 m-3 text-sm font-semibold rounded-md bg-teal-300 text-black' key={t._id} >#{t.name}</a></Link> 
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