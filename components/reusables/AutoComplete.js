import React,{useState,useEffect} from 'react'
import Link from 'next/link';

const AutoComplete = ({list,newRoute}) => {
    const [jobs,setJobs]=useState([])
    const [text,setText]=useState("");
    const [suggestions,setSuggestions]=useState([])
   

    useEffect(()=>{
        const loadJobs=async ()=>{
           list().then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setJobs(data);
            }
        });    

        }
    loadJobs()
        },[])

     const onChangeHandler=(text)=>{
         let matches=[];
         if(text.length>0){
             matches=jobs.filter(j=>{
                 const regex=new RegExp(`${text}`,'gi');
                 return(
                    j.title.match(regex) 

                 ) 
             })
         }else{
             <h3>Loading...</h3>
         }
         setSuggestions(matches)
         setText(text)

     }   


    
    return (
        <div  >
        <input className='nbtn my-1 job text-primary small bg-light-gray' style={{ width: '100%',border:'solid 2px #00e7d2'}} type="text" value={text} placeholder={`Seacrh ${newRoute}`}  onChange={e=>onChangeHandler(e.target.value)} />
   
       {suggestions ? suggestions.map((sug,i)=>{
           return(
            <div className="job bg-light">
            <div key={i} >
                <Link href={`/${newRoute}/${sug.slug}`}>
                    <a>
                    <h3 className="text-dark " style={{ fontFamily: `'Source Serif Pro' ,serif`, lineHeight: '1.9rem' }}>
                         🤩<span> </span>{sug.title}
                   </h3>
                 <div className="line"></div>
                 </a>
                </Link>

              </div>
           </div>
           )
 

       }) : <h6 className="text-primary p-1">Loading...</h6> }
 
        </div>
    )
}

export default AutoComplete
