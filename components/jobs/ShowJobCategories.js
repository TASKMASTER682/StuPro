import { useState, useEffect } from 'react';
import {  getJobCategories } from '../../actions/jobCategory';
import Link from 'next/link';



const ShowJobCategories=()=>{
    const [values, setValues] = useState({
      
        jobCategories: [],
        reaload:true
        
    });

    const {  jobCategories,reload} = values;
    

    useEffect(() => {
        loadJobCategories();
       
    }, [reload]);

   
    const loadJobCategories = () => {
        getJobCategories().then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setValues({ ...values, jobCategories: data });
            }
        });
    };

    const showJobCategories=()=>{
        return jobCategories.map((jc,ji)=>{
            return(
               <Link href={`/jobCategories/${jc.slug}`}><a style={{ padding:'0rem 0.8rem' }}   key={ji} className="btn nbtn  btn-danger  my-1  ">{jc.name}</a></Link> 
                )    
            })
    };





return(
    <>
       
        {showJobCategories()}
       
   </>
)
}
export default ShowJobCategories;