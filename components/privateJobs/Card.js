import Link from 'next/link';
import React from 'react';



const Card = ({ privateJob }) => {



    return (
        <div >
        <Link href={`/privateJobs/${privateJob.slug}`}>
            <h2 className='text-xl font-bold text-success p-2 hover:underline' >{privateJob.title}</h2>
        </Link>
        <p className='font-semibold text-blue-900 px-2'>{privateJob.location}</p>
        <p className='font-semibold text-red-400 px-2 mb-3'>{privateJob.agency}</p>
        <p className='text-gray-500 font-semibold text-base p-2'>{privateJob.desc}</p>
        <ul className='flex justify-between m-1'>
            <li className='m-1 p-1 flex'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-green-400" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 5a1 1 0 100 2h1a2 2 0 011.732 1H7a1 1 0 100 2h2.732A2 2 0 018 11H7a1 1 0 00-.707 1.707l3 3a1 1 0 001.414-1.414l-1.483-1.484A4.008 4.008 0 0011.874 10H13a1 1 0 100-2h-1.126a3.976 3.976 0 00-.41-1H13a1 1 0 100-2H7z" clipRule="evenodd" />
            </svg>
            <p className='text-sm font-bold'>{privateJob.salary}.</p>
            </li>
            <li className=' bg-teal-700 rounded-md font-bold text-white  p-2 m-1'><Link href={`/privateJobs/${privateJob.slug}`}>Apply Online</Link></li>
        </ul>
        
        </div>
    )

};
export default Card;

    



