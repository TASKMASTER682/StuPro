import React, { useEffect } from "react";
const initOneSignal = async () => {
    const OneSignal = (await import('react-onesignal')).default
    OneSignal.initialize('9bbd3dff-ae1b-4c84-8a28-782f2b03ee5d')

    useEffect(() => {
        initOneSignal()
      }, [])
      return <></>
  }



  export default initOneSignal;