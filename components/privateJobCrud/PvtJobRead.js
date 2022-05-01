import React from 'react';
import { listPvt, removePvtJob } from '../../actions/privateJob';
import Read from '../reusables/Read'

const PvtJobRead = () => {
    return(
        <div className="pt-20 lg:px-40">
        <h2 className=" text-4xl font-bold text-teal-600 my-2">Manage Private Jobs</h2>
        <hr />
        <Read list={listPvt} removeApi={removePvtJob} newRoute='privateJobs' updateLink='privatejobcrud'/>
        </div>
    )
}

export default PvtJobRead;



