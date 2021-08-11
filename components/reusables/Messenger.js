import React from 'react'
import MessengerCustomerChat from 'react-messenger-customer-chat';

const Messenger = () => {
    const showIcon=()=>{
        if(typeof window !=='undefined'){
            <MessengerCustomerChat    pageId="101487228510285   " appId="190569426358173"/>
        }else{
            return null
        }
    }

return(
    <>
        {showIcon()}
    </>
)
}

export default Messenger
