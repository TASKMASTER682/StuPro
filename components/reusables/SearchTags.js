import React,{ useState, useEffect } from 'react';
import Link from 'next/link';
import {API } from '../../config'



const ShowTags=({newRoute})=>{

    const getTags = async () => {
        return fetch(`${API}/${newRoute}`, {
            method: 'GET'
        })
            .then(response => {
                return response.json();
            })
            .catch(err => console.log(err));
    };
    const [values, setValues] = useState({
      
        tags: [],
        reaload:true
        
    });

    const {  tags,reload} = values;
    

    useEffect(() => {
        loadTags();
       
    }, [reload]);

   
    const loadTags = () => {
        getTags().then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setValues({ ...values, tags: data });
            }
        });
    };

    const showTags=()=>{
        return tags.map((t)=>{
            return(
            <div className="input-box  m-1 bg-success ">
                    <Link href={`/${newRoute}/${t.slug}`}><a key={t._id} ><strong className="text-dark p-1">#{t.name}</strong></a></Link> 
            </div>
                )    
            })
    };
return(
    <>
       <div className="new-flex" >
       {showTags()}

       </div>
       
   </>
)
}
export default ShowTags;