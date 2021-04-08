import React, { useEffect } from "react";

const initOneSignal = () => {



    useEffect(() => {
       OneSignal.push(()=> {
      OneSignal.init(
        {
          appId: "7744c03d-58bb-4313-a26f-553be5180677", //STEP 9
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

