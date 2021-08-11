import Link from 'next/link';
import React from 'react';
import moment from 'moment';
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
            <div className='card-item m-1' key={j._id}>
                <article>
                    <div>
                        <a href={`/${newRoute}/${j.slug}`}>
                            <img loading='lazy' className="img-slider mob-image-slider" src={`${API}/${newRoute}/photo/${j.slug}`} alt={j.title} />

                        </a>
                        <div style={{ maxHeight: '6rem', overflow: 'hidden' }}>
                            <a href={`/${newRoute}/${j.slug}`}>
                                <h3 className="small text-dark" style={{  lineHeight: '1.8rem', padding: '0.6rem' }}>{j.title}</h3>
                            </a>
                        </div>
                        <div className="author extra-small" style={{ display: "flex", alignContent: 'flex-end' }}>

                            <p className="author text-primary p-1">|Published {moment(j.updatedAt).fromNow()} </p>
                        </div>
                    </div>

                </article>
            </div>
        ));
    };
    return (
        <>
            {showRelated()}
        </>


    )
}
export default SmallCard;