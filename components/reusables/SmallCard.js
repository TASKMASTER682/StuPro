import React from 'react';
import { useState, useEffect } from 'react';

import { API } from '../../config';


const SmallCard = (props) => {

    const { listRelated, job,newRoute }=props

    const [related, setRelated] = useState([]);

    const loadRelated = () => {
        listRelated(job).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setRelated(data);
            }
        });
    };

    useEffect(() => {
        loadRelated();
    }, []);

    const showRelated = () => {
        return related.map((j) => (
            <div className='shadow-md shadow-green-500 rounded-md  m-2 hover:ring-1 hover:ring-red-500' key={j._id}>   
              
                <a href={`/${newRoute}/${j.slug}`}>
                 <h3 className=' p-2 text-sm font-semibold'>{j.title}</h3>
                </a>
               
            
            </div>
        ));
    };
    return (
            showRelated()
    )
}
export default SmallCard;