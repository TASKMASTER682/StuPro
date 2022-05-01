import React from 'react';
import Link from 'next/link';
import {DOMAIN } from '../../config'


const TagInSlug = ({ tags, newTagRoute,tagRoute }) => {
    const showSlugTags = () =>
        tags.map((t) => (
            
            <Link key={t._id} href={`${DOMAIN}/${tagRoute}/${newTagRoute}/${t.slug}`} prefetch={false}>
                <a  className='ring-1 rounded-sm bg-slate-800 text-slate-300 m-1 p-1 text-xs'>#{t.name}</a>
            </Link>
        ));
    return (
            showSlugTags()
    )
}

export default TagInSlug
