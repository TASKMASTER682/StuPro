import React, { useEffect } from "react";

const OneSignal = () => {
  useEffect(() => {
    try {
        window.OneSignal = window.OneSignal || [];
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    OneSignal.push(function() {
        OneSignal.init({
          appId: "7744c03d-58bb-4313-a26f-553be5180677",
        });
      })
  )
}
export default OneSignal;