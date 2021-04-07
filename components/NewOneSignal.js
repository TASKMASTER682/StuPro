import React, { useEffect } from "react";

window.OneSignal = window.OneSignal || [];
const OneSignal = window.OneSignal;

const NewOneSignal=()=>{
    useEffect(
        OneSignal.push(()=> {
            OneSignal.init(
              {
                appId: "9bbd3dff-ae1b-4c84-8a28-782f2b03ee5d", //STEP 9
                promptOptions: {
                  slidedown: {
                    enabled: true,
                    actionMessage: "We'd like to show you notifications for the latest Jobs and updates about the following categories.",
                    acceptButtonText: "OMG YEEEEESS!",
                    cancelButtonText: "NAHHH",
                    categories: {
                        tags: [
                            {
                                tag: "governmentJobs",
                                label: "Government Jobs",
                            },
                            {
                              tag: "PrivateJobs",
                              label: "Private Jobs",
                            }
                            
                        ]
                    }     
                } 
              },
              welcomeNotification: {
                "title": "The ProGrad",
                "message": "Thanks for subscribing!",
              } 
            },
              //Automatically subscribe to the new_app_version tag
              OneSignal.sendTag("new_app_version", "new_app_version", tagsSent => {
                // Callback called when tag has finished sending
                console.log('new_app_version TAG SENT', tagsSent);
              })
            );
          })
    )
}

export default NewOneSignal;