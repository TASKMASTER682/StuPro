import Link from 'next/link';
import React from 'react';
import renderHTML from 'react-render-html';


const Card = ({ blog }) => {


    return (
      <>
      <Link href={`/blogs/${blog.slug}`}><a>
      <h2 className='text-lg font-bold bg-slate-200 rounded-md hover:underline '>{blog.title}</h2>
      </a></Link>
        <div className='mt-2 p-2 text-lg lg:text-sm text-gray-600'>{renderHTML(blog.excerpt)}</div>
        <ul className='flex justify-between'>
            <li className='text-sm font-bold text-teal-600 p-2'>Posted By</li>
            <li className='text-sm font-semibold p-2'>{blog.postedBy.name}</li>
        </ul>

</>
    )
}
export default Card;