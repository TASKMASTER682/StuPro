import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { API } from '../../config'



const ShowCategories = ({ newRoute }) => {
    const getCategories = async () => {
        return fetch(`${API}/${newRoute}`, {
            method: 'GET'
        })
            .then(response => {
                return response.json();
            })
            .catch(err => console.log(err));
    };


    const [values, setValues] = useState({

        categories: [],
        reaload: true

    });

    const { categories, reload } = values;


    useEffect(() => {
        loadCategories();

    }, [reload]);


    const loadCategories = () => {
        getCategories().then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setValues({ ...values, categories: data });
            }
        });
    };

    const showCategories = () => {
        return categories.map((jc) => {
            return (
                <div className="input-box  m-1 bg-dark ">

                <Link href={`/${newRoute}/${jc.slug}`}><a style={{ padding: '0rem 0.8rem' }} key={jc._id} ><strong className="text-primary p-1"> #{jc.name}</strong></a></Link>
            </div>
            )
        })
    };





    return (
        <>
       <div className="new-flex">

            {showCategories()}
</div>
        </>
    )
}
export default ShowCategories;