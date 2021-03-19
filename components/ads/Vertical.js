import React, { useEffect } from "react";

const Vertical = () => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <ins
    className="adsbygoogle"
    style={{display:'block'}}
     data-ad-client="ca-pub-8555056818557400"
     data-ad-slot="4777970144"
     data-ad-format="auto"
     data-full-width-responsive="true"
  />
  )
}
export default Vertical;