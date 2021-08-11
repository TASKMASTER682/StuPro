import React from 'react'
import {isAuth} from '../../actions/auth'

const UpdateButton = ({url,name}) => {
    return (
        <div>
                
         {( isAuth() && isAuth().role===1 )? <a href={url} className="m-1 btn nbtn btn-success">{name}</a>:''}
                   
        </div>
    )
}

export default UpdateButton
