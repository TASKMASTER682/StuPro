import React,{useState} from 'react'

const IFrame = ({material}) => {
    const [frame,setFrame]=useState(false)
    const [id,setId]=useState('')

    const newFrame=(link,i)=>{
        return(
            frame &&  <div key={i} className="input-box">
            <iframe className='nbtn' src={`https://docs.google.com/file/d/${link}/preview`} style={{ height:"600px", width:'100%'}}  />
            </div> 
        )
        }
    const showPdf=()=>{
        return material.downloadLink.map((newLink)=>{
            return(
     <li key={newLink._id} >
        <div  className="new-pdf">
        <h3 className="lead text-dark"><span className="text-primary"></span>{newLink.linkName}</h3>
        <div  className="new-flex" >
        <button  className="btn btn-danger nbtn m-1" onClick={()=>{setFrame(!frame);setId(newLink._id) }}>{frame && id===newLink._id ? 'Close me' : 'Preview'}</button>
        <a href={`https://drive.google.com/uc?export=download&id=${newLink.link}`} className="btn btn-primary nbtn m-1">Download</a>
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
