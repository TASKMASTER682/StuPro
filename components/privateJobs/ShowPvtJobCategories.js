import React, { useState, useEffect } from 'react';
import {  getPvtJobCategories } from '../../actions/privateJobCategory';
import Link from 'next/link';



const ShowPvtJobCategories=()=>{
    const [values, setValues] = useState({
      
        privateJobCategories: [],
        reaload:true
        
    });

    const {  privateJobCategories,reload} = values;
    

    useEffect(() => {
        loadJobCategories();
       
    }, [reload]);

   
    const loadJobCategories = () => {
        getPvtJobCategories().then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setValues({ ...values, privateJobCategories: data });
            }
        });
    };

    const showJobCategories=()=>{
        return privateJobCategories.map((jc,ji)=>{
            return(
               <Link href={`/privateJobCategories/${jc.slug}`}><a style={{ padding:'0rem 0.8rem' }}   key={ji} className="btn nbtn  btn-danger  my-1  ">{jc.name}</a></Link> 
                )    
            })
    };





return(
    <>
       
        {showJobCategories()}
       
   </>
)
}
export default ShowPvtJobCategories;