import React from 'react'
import moment from 'moment'

const ApplyLink = ({applyLink,lastDate}) => {
    const today=moment();

    return (
        <>
        <a href={applyLink}  target="_blank" rel='noopener noreferrer' className={`btn nbtn  btn-${ moment(lastDate).format()<today.format() ? 'danger':'primary'} nbtn1 my-1 `}>{moment(lastDate).format()<today.format()  ? <strong>Closed</strong> :<strong>Apply Now</strong>}</a>

        </>
    )
}

export default ApplyLink
