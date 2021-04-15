import React,{ useState, useEffect } from 'react';
import {  getJobTags } from '../../actions/jobTag';
import Link from 'next/link';



const ShowJobTags=()=>{
    const [values, setValues] = useState({
      
        jobTags: [],
        reaload:true
        
    });

    const {  jobTags,reload} = values;
    

    useEffect(() => {
        loadJobTags();
       
    }, [reload]);

   
    const loadJobTags = () => {
        getJobTags().then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setValues({ ...values, jobTags: data });
            }
        });
    };

    const showJobTags=()=>{
        return jobTags.map((t,i)=>{
            return(
               <Link href={`/jobTags/${t.slug}`}><a style={{ padding:'0rem 0.8rem'}}   key={i} className="btn nbtn  btn-dark  my-1  "><p>{t.name}</p></a></Link> 
                )    
            })
    };
return(
    <>
       
        {showJobTags()}
       
   </>
)
}
export default ShowJobTags;