import React, { useEffect } from "react";
import OneSignal from 'react-onesignal';

const initOneSignal = async () => {
    OneSignal.initialize('9bbd3dff-ae1b-4c84-8a28-782f2b03ee5d')

    useEffect(() => {
        initOneSignal()
      }, [])
      return <></>
  }



  export default initOneSignal;

