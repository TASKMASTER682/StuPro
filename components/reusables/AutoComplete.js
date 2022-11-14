import React,{useState,useEffect} from 'react'
import Link from 'next/link';

const AutoComplete = ({newRoute,jobs}) => {
    // const [jobs,setJobs]=useState([])
    const [text,setText]=useState("");
    const [suggestions,setSuggestions]=useState([])
   


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
        <input className='p-2 m-3 rounded-md ring-1 ring-green-700 w-60' type="text" value={text} placeholder={`Seacrh ${newRoute}`}  onChange={e=>onChangeHandler(e.target.value)} />
        <div className={text ? `h-[20rem] overflow-y-scroll p-3` : ""}>
        {suggestions ? suggestions.map((sug,i)=>{
           return(
            <div >
            <div className='p-2 my-4 rounded-md shadow-md ring-1' key={i} >
                <Link href={`/${newRoute}/${sug.slug}`}>
                    <h3 className='p-2 text-xl font-bold'>
                         {sug.title}
                   </h3>
                </Link>

              </div>
           </div>
           )
       }) : <h6 className="p-1 text-primary">Loading...</h6> }

        </div> 
        </div>
    )
}

export default AutoComplete
