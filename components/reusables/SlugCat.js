import React from 'react';
import Link from 'next/link';
import {DOMAIN } from '../../config'

const SlugCat = ({ newCat, cats,catRoute }) => {
    const showSlugCategories = () =>
        cats.map((cat,i) => (
            <Link key={i} href={`${DOMAIN}/${catRoute}/${newCat}/${cat.slug}`} >
                <a className='p-1 m-1 text-xs rounded-sm bg-slate-500 ring-1 text-slate-100'>#{cat.name}</a>
            </Link>
        ));
    return (
        <>
            {showSlugCategories()}

        </>
    )
}

export default SlugCat;