import React, { useEffect } from "react";

const initOneSignal = () => {

    window.OneSignal = window.OneSignal || [];
    const OneSignal = window.OneSignal;

    useEffect(() => {
       OneSignal.push(()=> {
      OneSignal.init(
        {
          appId: "9bbd3dff-ae1b-4c84-8a28-782f2b03ee5d", //STEP 9
          promptOptions: {
            slidedown: {
              enabled: true,
              actionMessage: "We'd like to show you notifications for the latest jobs and updates.",
              acceptButtonText: "OMG YEEEEESS!",
              cancelButtonText: "NAHHH",
             
          } 
        },
        welcomeNotification: {
          "title": "The ProGrad",
          "message": "Thanks for subscribing!",
        } 
        }
      );
    });
      }, [])
      return <></>
  }



  export default initOneSignal;

