import React from 'react';
import { listPvt, removePvtJob } from '../../actions/privateJob';
import moment from 'moment';
import Read from '../reusables/Read'

const PvtJobRead = () => {
    return(
        <div className="container">
        <h2 className="large text-primary my-">Manage Jobs</h2>
        <div className="line"></div>
        <Read list={listPvt} removeApi={removePvtJob} newRoute='privateJobs' updateLink='privatejobcrud'/>
        </div>
    )
}

export default PvtJobRead;



{/* <p className={`extra-small text-${ moment(privateJob.lastDate).format()<today.format() ? 'primary':'light-gray'}`}>
{ moment(privateJob.lastDate).format()<today.format() ? 'Expired':'Live' }| Published on {moment(privateJob.updatedAt).fromNow()}
</p> */}