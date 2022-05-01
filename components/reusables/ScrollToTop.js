import React, {useState,useEffect} from "react";




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
<div className='fixed z-20 w-12 lg:ml-5 cursor-pointer bottom-10 lg:bottom-8'>
<svg xmlns="http://www.w3.org/2000/svg"  onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}} className="w-12 h-12 fill-teal-600" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
</svg>
</div>
)
}

export default ScrollButton;




