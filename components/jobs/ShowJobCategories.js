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
        return jobCategories.map((c,i)=>{
            return(
               <Link href={`/jobCategories/${c.slug}`}><a style={{ padding:'0rem 0.8rem'}}   key={i} className="btn nbtn  btn-danger  my-1  "><p>{c.name}</p></a></Link> 
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