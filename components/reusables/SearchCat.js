import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { API ,DOMAIN} from '../../config'



const ShowCategories = ({ newRoute,bcat,fun }) => {


    const showCategories = () => {
        return fun.map((jc) => {
            return (
                <Link href={`${DOMAIN}/${bcat}/${newRoute}/${jc.slug}`}><a className='p-1 m-3 text-sm font-semibold rounded-md bg-gray-700 text-white'  key={jc._id} > #{jc.name}</a></Link>
            )
        })
    };





    return (  
       <div className="flex flex-wrap">
        {showCategories()}
       </div>
  
    )
}
export default ShowCategories;