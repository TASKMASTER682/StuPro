import React from 'react';
import Link from 'next/link';

const SlugCat = ({ newCat, cats }) => {
    const showSlugCategories = () =>
        cats.map((cat,i) => (
            <Link key={i} href={`/${newCat}/${cat.slug}`}>
                <a className="input-box bg-dark m-1"><small>#{cat.name}</small></a>
            </Link>
        ));
    return (
        <>
            {showSlugCategories()}

        </>
    )
}

export default SlugCat;