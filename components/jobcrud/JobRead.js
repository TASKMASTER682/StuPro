import React from 'react'
import { list, removeJob } from '../../actions/job';
import moment from 'moment';
import Read from '../reusables/Read'

const JobRead = () => {
    return (
            <div className="container">
            <h2 className="large text-primary my-">Manage Jobs</h2>
            <div className="line"></div>
            <Read list={list} removeApi={removeJob} newRoute='jobs' updateLink='jobcrud' />
            </div>
    )
}

export default JobRead
