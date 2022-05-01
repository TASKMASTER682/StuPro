import React,{useState} from 'react'

const IFrame = ({material}) => {
    const [frame,setFrame]=useState(false)
    const [id,setId]=useState('')

    const newFrame=(link,i)=>{
        return(
            frame &&  <div key={i} className="input-box">
            <iframe className=' rounded-md ring-2 ring-teal-500 h-[15rem]' src={`https://docs.google.com/file/d/${link}/preview`}   />
            </div> 
        )
        }
    const showPdf=()=>{
        return material.downloadLink.map((newLink)=>{
            return(
     <li key={newLink._id} >
        <div  className="new-pdf">
        <h3 className="px-2 text-lg font-bold text-teal-400">{newLink.linkName}</h3>
        <div  className="flex justify-around " >
        <button  className="p-2 my-2 font-bold bg-red-400 rounded-md" onClick={()=>{setFrame(!frame);setId(newLink._id) }}>{frame && id===newLink._id ? 'Close me' : 'Preview'}</button>
        <a href={`https://drive.google.com/uc?export=download&id=${newLink.link}`} className="p-2 my-2 font-bold bg-teal-400 rounded-md">Download</a>
        </div>
        </div>
        {id===newLink._id && newFrame(newLink.link,newLink._id)}

     </li>
            )
        })
    }
    return (
        <>
        {showPdf()}
            
        </>
    )
}

export default IFrame
