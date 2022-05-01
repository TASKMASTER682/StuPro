import React from 'react';
import Link from 'next/link'

const BottomNav = () => {
  return (
    <ul className='lg:hidden flex flex-row justify-between w-full bg-teal-900 py-2 fixed bottom-0 rounded-t-md'>
    <li className='mx-3'><Link href='#'>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-white" fill="none" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
     </svg>
    </Link></li>
    <li className='mx-3'><Link href='#'>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-white" fill="none" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
     </svg>
    </Link></li>
    <li className='mx-3'><Link href='#'>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-white" fill="none" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round"  d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
     </svg>
    </Link></li>
    <li className='mx-3'><Link href='#'>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-white" fill="none" viewBox="0 0 24 24" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round"d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
     </svg>
    </Link></li>

    </ul>
  )
}

export default BottomNav;


