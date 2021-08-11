import React, {useState,useEffect} from "react";
import NavigationIcon from '@material-ui/icons/Navigation';




const ScrollButton = () =>{

const [visible, setVisible] = useState(false)

const toggleVisible = () => {
	const scrolled = document.documentElement.scrollTop;
	if (scrolled > 300){
	setVisible(true)
	}
	else if (scrolled <= 300){
	setVisible(false)
	}
};
useEffect(()=>{

  window.addEventListener('scroll', toggleVisible);

},[])
const scrollToTop = () =>{
  if(typeof window !=='undefined'){
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
        in place of 'smooth' */
      });

  }
}


return (
	<div className=" job m-2 text-dark "style={{width:'4rem',cursor:'pointer', position: 'fixed', bottom: '40px', zIndex: '1'}} >
	<NavigationIcon onClick={scrollToTop} style={{display: visible ? 'inline' : 'none',fontSize:50}} />
	</div>
)
}

export default ScrollButton;


