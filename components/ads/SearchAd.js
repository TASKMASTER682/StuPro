import React, { useEffect } from "react";

const SearchAd = () => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
<div className="gcse-search"></div>
  )
}
export default SearchAd;
