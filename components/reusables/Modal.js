import React,{useState,useEffect} from 'react';
import Dialog from '@material-ui/core/Dialog';


const Modal = ({children,newInterval}) => {
    const [showAd,setShowAd]=useState(false);
    const openAd=()=>setShowAd(true);
    const closeAd=()=>setShowAd(false);

    useEffect(()=>{
    const interval=setTimeout(openAd,newInterval);

    return ()=>{
        clearTimeout(interval)
    }

    },[])
 
    return (
    <Dialog open={showAd} onClose={closeAd}>
<svg onClick={closeAd} xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 p-1 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>      <div >
        {children}    
      </div>
     </Dialog>

    )
}

export default Modal
