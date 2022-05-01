import React from 'react'
import { list, removeMat } from '../../actions/material';
import Read from '../reusables/Read'

const MaterialRead = () => {
    return (
            <div className="lg:pt-20 lg:px-20 pt-14 px-3 mb-40">
            <h2 className="text-2xl font-bold text-teal-400">Manage Study Material</h2>
            <Read list={list} removeApi={removeMat} newRoute='free-study-material' updateLink='materialcrud' />
            </div>
    )
}

export default MaterialRead
