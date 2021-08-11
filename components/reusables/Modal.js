import React,{useState,useEffect} from 'react';
import Dialog from '@material-ui/core/Dialog';
import CloseIcon from '@material-ui/icons/Close';


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
      <CloseIcon style={{marginLeft:'1rem ',marginTop:'1rem'}} onClick={closeAd} />

      <div >
        {children}    
      </div>
     </Dialog>

    )
}

export default Modal
