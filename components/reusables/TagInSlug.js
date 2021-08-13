import React from 'react';
import Link from 'next/link';

const TagInSlug = ({ tags, newTagRoute }) => {
    const showSlugTags = () =>
        tags.map((t) => (
            
            <Link key={t._id} href={`/${newTagRoute}/${t.slug}`}>
                <a  className="input-box " style={{margin:'0.5rem'}}><small className='text-dark'>#{t.name}</small></a>
            </Link>
        ));
    return (
        <>
            {showSlugTags()}
        </>
    )
}

export default TagInSlug
