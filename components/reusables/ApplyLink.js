import React from 'react'
import moment from 'moment'

const ApplyLink = ({applyLink,lastDate,newStatus}) => {
    const today=moment();

    const Status=()=>{
        if(newStatus==='jobs'){
            return('Closed')
        }
        else if(newStatus==='admit-card'){
            return('My Admit-Card')
        }
        else if(newStatus='result'){
            return('My result')
        }
    }
    return (
        <>
        <a href={applyLink}  target="_blank" rel='noopener noreferrer' className={`btn nbtn  btn-${ moment(lastDate).format()<today.format() ? 'danger':'primary'} nbtn1 my-1 `}>{moment(lastDate).format()<today.format()  ? <strong>{Status()}</strong> :<strong>Apply Now</strong>}</a>

        </>
    )
}

export default ApplyLink
