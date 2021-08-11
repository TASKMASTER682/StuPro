import React from 'react'
import { list, removeMat } from '../../actions/material';
import moment from 'moment';
import Read from '../reusables/Read'

const MaterialRead = () => {
    return (
            <div className="container">
            <h2 className="large text-primary my-">Manage Study Material</h2>
            <div className="line"></div>
            <Read list={list} removeApi={removeMat} newRoute='free-study-material' updateLink='materialcrud' />
            </div>
    )
}

export default MaterialRead
