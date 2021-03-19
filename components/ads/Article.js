import React, { useEffect } from "react";

const Article = () => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
      <div className="p-1">
    <ins
    className="adsbygoogle"
    style={{display:'block', textAlign:'center'}}
     data-ad-layout="in-article"
     data-ad-format="fluid"
     data-ad-client="ca-pub-8555056818557400"
     data-ad-slot="6826738350"
  />
  </div>
  )
}
export default Article;