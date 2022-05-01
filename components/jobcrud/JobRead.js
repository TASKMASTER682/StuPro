import React from 'react'
import { list, removeJob } from '../../actions/job';
import Read from '../reusables/Read'

const JobRead = () => {
    return (
            <div className="lg:pt-20 lg:px-40 pt-14 px-3 mb-40">
            <h2 className="text-2xl font-bold text-teal-400">Manage Jobs</h2>
            <hr />
            <Read list={list} removeApi={removeJob} newRoute='jobs' updateLink='jobcrud' />
            </div>
    )
}

export default JobRead
