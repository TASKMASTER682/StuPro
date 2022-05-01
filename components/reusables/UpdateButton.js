import React from 'react'
import {isAuth} from '../../actions/auth'

const UpdateButton = ({url,name}) => {
    return (
                
         ( isAuth() && isAuth().role===1 )? <a href={url} className='bg-teal-500 font-bold py-1 px-3 rounded-sm'>{name}</a>:''
                   
    
    )
}

export default UpdateButton
