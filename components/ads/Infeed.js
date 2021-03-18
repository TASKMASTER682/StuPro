import React, { useEffect } from "react";

const Infeed = () => {
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
    data-ad-format="fluid"
    data-ad-layout-key="-gq-3+1f-3d+2z"
    data-ad-client="ca-pub-8555056818557400"
    data-ad-slot="5859704254"
  />
  )
}
export default Infeed;