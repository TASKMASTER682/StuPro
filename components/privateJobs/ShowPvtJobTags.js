import React,{ useState, useEffect } from 'react';
import {  getPvtJobTags } from '../../actions/privateJobTag';
import Link from 'next/link';



const ShowPvtJobTags=()=>{
    const [values, setValues] = useState({
      
        privateJobTags: [],
        reaload:true
        
    });

    const {  privateJobTags,reload} = values;
    

    useEffect(() => {
        loadJobTags();
       
    }, [reload]);

   
    const loadJobTags = () => {
        getPvtJobTags().then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setValues({ ...values, privateJobTags: data });
            }
        });
    };

    const showJobTags=()=>{
        return privateJobTags.map((t,i)=>{
            return(
               <Link href={`/privateJobTags/${t.slug}`}><a style={{ padding:'0rem 0.8rem'}}   key={i} className="btn nbtn  btn-dark  my-1  "><p>{t.name}</p></a></Link> 
                )    
            })
    };
return(
    <>
       
        {showJobTags()}
       
   </>
)
}
export default ShowPvtJobTags;