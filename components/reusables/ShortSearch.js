import React from 'react';
import Link from 'next/link'

const ShortSearch = ({filterRoute}) => {
  return (
    <div>
    <h2 className='p-1 my-2 text-lg font-bold text-red-500 bg-slate-200'>Jobs according to Location</h2>
    <ul className='flex flex-wrap p-1'>
        <li className='p-1 px-2 m-2 text-sm font-bold bg-teal-300 rounded-sm '><Link href={`/${filterRoute}/job-search/related-jobs?title=jammu`}>Jammu and Kashmir</Link></li>
        <li className='p-1 px-2 m-2 text-sm font-bold bg-teal-300 rounded-sm '><Link href={`/${filterRoute}/job-search/related-jobs?title=delhi`}>Delhi</Link></li>
        <li className='p-1 px-2 m-2 text-sm font-bold bg-teal-300 rounded-sm '><Link href={`/${filterRoute}/job-search/related-jobs?title=punjab`}>Punjab</Link></li>
        <li className='p-1 px-2 m-2 text-sm font-bold bg-teal-300 rounded-sm '><Link href={`/${filterRoute}/job-search/related-jobs?title=odisha`}>Odisha</Link></li>
        <li className='p-1 px-2 m-2 text-sm font-bold bg-teal-300 rounded-sm '><Link href={`/${filterRoute}/job-search/related-jobs?title=chennai`}>Chennai</Link></li>
        <li className='p-1 px-2 m-2 text-sm font-bold bg-teal-300 rounded-sm '><Link href={`jobs/job-search/related-jobs?title=uttar%20pradesh`}>Uttar Pradesh</Link></li>
        <li className='p-1 px-2 m-2 text-sm font-bold bg-teal-300 rounded-sm '><Link href={`/${filterRoute}/job-search/related-jobs?title=bihar`}>Bihar</Link></li>
        <li className='p-1 px-2 m-2 text-sm font-bold bg-teal-300 rounded-sm '><Link href={`/${filterRoute}/job-search/related-jobs?title=chhattisgarh`}>Chhattisgarh</Link></li>
        <li className='p-1 px-2 m-2 text-sm font-bold bg-teal-300 rounded-sm '><Link href={`/${filterRoute}/job-search/related-jobs?title=rajasthan`}>Rajasthan</Link></li>
        <li className='p-1 px-2 m-2 text-sm font-bold bg-teal-300 rounded-sm '><Link href={`/${filterRoute}/job-search/related-jobs?title=gujarat`}>Gujarat</Link></li>
        <li className='p-1 px-2 m-2 text-sm font-bold bg-teal-300 rounded-sm '><Link href={`/${filterRoute}/job-search/related-jobs?title=tamilnadu`}>Tamilnadu</Link></li>
        <li className='p-1 px-2 m-2 text-sm font-bold bg-teal-300 rounded-sm '><Link href={`/${filterRoute}/job-search/related-jobs?title=kerela`}>Kerela</Link></li>
        <li className='p-1 px-2 m-2 text-sm font-bold bg-teal-300 rounded-sm '><Link href={`/${filterRoute}/job-search/related-jobs?title=Andhra%20Pradesh`}>Andhra Pradesh</Link></li>
        <li className='p-1 px-2 m-2 text-sm font-bold bg-teal-300 rounded-sm '><Link href={`/${filterRoute}/job-search/related-jobs?title=assam`}>Assam</Link></li>
        <li className='p-1 px-2 m-2 text-sm font-bold bg-teal-300 rounded-sm '><Link href={`/${filterRoute}/job-search/related-jobs?title=chandigarh`}>Chandigarh</Link></li>
        <li className='p-1 px-2 m-2 text-sm font-bold bg-teal-300 rounded-sm '><Link href={`/${filterRoute}/job-search/related-jobs?title=delhi`}>Delhi</Link></li>
        <li className='p-1 px-2 m-2 text-sm font-bold bg-teal-300 rounded-sm '><Link href={`/${filterRoute}/job-search/related-jobs?title=goa`}>Goa</Link></li>
        <li className='p-1 px-2 m-2 text-sm font-bold bg-teal-300 rounded-sm '><Link href={`/${filterRoute}/job-search/related-jobs?title=haryana`}>Haryana</Link></li>
        <li className='p-1 px-2 m-2 text-sm font-bold bg-teal-300 rounded-sm '><Link href={`/${filterRoute}/job-search/related-jobs?title=jharkhand`}>Jharkhand</Link></li>
        <li className='p-1 px-2 m-2 text-sm font-bold bg-teal-300 rounded-sm '><Link href={`/${filterRoute}/job-search/related-jobs?title=karnataka`}>Karnataka</Link></li>
        <li className='p-1 px-2 m-2 text-sm font-bold bg-teal-300 rounded-sm '><Link href={`/${filterRoute}/job-search/related-jobs?title=maharashtra`}>Maharashtra</Link></li>
        <li className='p-1 px-2 m-2 text-sm font-bold bg-teal-300 rounded-sm '><Link href={`/${filterRoute}/job-search/related-jobs?title=meghalya`}>Meghalya</Link></li>
        <li className='p-1 px-2 m-2 text-sm font-bold bg-teal-300 rounded-sm '><Link href={`/${filterRoute}/job-search/related-jobs?title=mizoram`}>Mizoram</Link></li>
        <li className='p-1 px-2 m-2 text-sm font-bold bg-teal-300 rounded-sm '><Link href={`/${filterRoute}/job-search/related-jobs?title=manipur`}>Manipur</Link></li>
        <li className='p-1 px-2 m-2 text-sm font-bold bg-teal-300 rounded-sm '><Link href={`/${filterRoute}/job-search/related-jobs?title=sikkim`}>Sikkim</Link></li>
        <li className='p-1 px-2 m-2 text-sm font-bold bg-teal-300 rounded-sm '><Link href={`/${filterRoute}/job-search/related-jobs?title=uttarakhand`}>Uttarakhand</Link></li>
        <li className='p-1 px-2 m-2 text-sm font-bold bg-teal-300 rounded-sm '><Link href={`/${filterRoute}/job-search/related-jobs?title=West%20Bengal`}>West Bengal</Link></li>
        <li className='p-1 px-2 m-2 text-sm font-bold bg-teal-300 rounded-sm '><Link href={`/${filterRoute}/job-search/related-jobs?title=all%20india`}>All India</Link></li>
        <li className='p-1 px-2 m-2 text-sm font-bold text-white rounded-sm bg-slate-600 '><Link href={`/${filterRoute}/job-search`}>Search More</Link></li>
 
    </ul>      
    <h2 className='p-1 my-2 text-lg font-bold text-red-500 bg-slate-200'>Jobs according to Qualification</h2>
    <ul className='flex flex-wrap p-1'>
    <li className='p-1 px-2 m-2 text-sm font-bold rounded-sm bg-slate-400 '><Link href={`/${filterRoute}/job-search/related-jobs?title=graduation`}>Graduation</Link></li>
    <li className='p-1 px-2 m-2 text-sm font-bold rounded-sm bg-slate-400 '><Link href={`/${filterRoute}/job-search/related-jobs?title=12th`}>12th Pass</Link></li>
    <li className='p-1 px-2 m-2 text-sm font-bold rounded-sm bg-slate-400 '><Link href={`/${filterRoute}/job-search/related-jobs?title=10th`}>10th Pass</Link></li>
    <li className='p-1 px-2 m-2 text-sm font-bold rounded-sm bg-slate-400 '><Link href={`/${filterRoute}/job-search/related-jobs?title=msc`}>MSc</Link></li>
    <li className='p-1 px-2 m-2 text-sm font-bold rounded-sm bg-slate-400 '><Link href={`/${filterRoute}/job-search/related-jobs?title=btech`}>Engineering</Link></li>
    <li className='p-1 px-2 m-2 text-sm font-bold rounded-sm bg-slate-400 '><Link href={`/${filterRoute}/job-search/related-jobs?title=b%20arch`}>B Arch</Link></li>
    <li className='p-1 px-2 m-2 text-sm font-bold rounded-sm bg-slate-400 '><Link href={`/${filterRoute}/job-search/related-jobs?title=b%20com`}>B Com</Link></li>
    <li className='p-1 px-2 m-2 text-sm font-bold rounded-sm bg-slate-400 '><Link href={`/${filterRoute}/job-search/related-jobs?title=b%20ed`}>B Ed</Link></li>
    <li className='p-1 px-2 m-2 text-sm font-bold rounded-sm bg-slate-400 '><Link href={`/${filterRoute}/job-search/related-jobs?title=b%20pharma`}>B Pharma</Link></li>
    <li className='p-1 px-2 m-2 text-sm font-bold rounded-sm bg-slate-400 '><Link href={`/${filterRoute}/job-search/related-jobs?title=ba`}>BA</Link></li>
    <li className='p-1 px-2 m-2 text-sm font-bold rounded-sm bg-slate-400 '><Link href={`/${filterRoute}/job-search/related-jobs?title=bba`}>BBA</Link></li>
    <li className='p-1 px-2 m-2 text-sm font-bold rounded-sm bg-slate-400 '><Link href={`/${filterRoute}/job-search/related-jobs?title=bca`}>BCA</Link></li>
    <li className='p-1 px-2 m-2 text-sm font-bold rounded-sm bg-slate-400 '><Link href={`/${filterRoute}/job-search/related-jobs?title=bds`}>BDS</Link></li>
    <li className='p-1 px-2 m-2 text-sm font-bold rounded-sm bg-slate-400 '><Link href={`/${filterRoute}/job-search/related-jobs?title=bvsc`}>BVSc</Link></li>
    <li className='p-1 px-2 m-2 text-sm font-bold rounded-sm bg-slate-400 '><Link href={`/${filterRoute}/job-search/related-jobs?title=diploma`}>Diploma</Link></li>
    <li className='p-1 px-2 m-2 text-sm font-bold rounded-sm bg-slate-400 '><Link href={`/${filterRoute}/job-search/related-jobs?title=icwa`}>ICWA</Link></li>
    <li className='p-1 px-2 m-2 text-sm font-bold rounded-sm bg-slate-400 '><Link href={`/${filterRoute}/job-search/related-jobs?title=llb`}>LLB</Link></li>
    <li className='p-1 px-2 m-2 text-sm font-bold rounded-sm bg-slate-400 '><Link href={`/${filterRoute}/job-search/related-jobs?title=m%20com`}>M Com</Link></li>
    <li className='p-1 px-2 m-2 text-sm font-bold rounded-sm bg-slate-400 '><Link href={`/${filterRoute}/job-search/related-jobs?title=m%20tech`}>M Tech</Link></li>
    <li className='p-1 px-2 m-2 text-sm font-bold rounded-sm bg-slate-400 '><Link href={`/${filterRoute}/job-search/related-jobs?title=m%20ed`}>M Ed</Link></li>
    <li className='p-1 px-2 m-2 text-sm font-bold rounded-sm bg-slate-400 '><Link href={`/${filterRoute}/job-search/related-jobs?title=m%20phill`}>M Phill</Link></li>
    <li className='p-1 px-2 m-2 text-sm font-bold rounded-sm bg-slate-400 '><Link href={`/${filterRoute}/job-search/related-jobs?title=mba`}>MBA</Link></li>
    <li className='p-1 px-2 m-2 text-sm font-bold rounded-sm bg-slate-400 '><Link href={`/${filterRoute}/job-search/related-jobs?title=mbbs`}>MBBS</Link></li>
    <li className='p-1 px-2 m-2 text-sm font-bold rounded-sm bg-slate-400 '><Link href={`/${filterRoute}/job-search/related-jobs?title=mca`}>MCA</Link></li>
    <li className='p-1 px-2 m-2 text-sm font-bold rounded-sm bg-slate-400 '><Link href={`/${filterRoute}/job-search/related-jobs?title=mds`}>MDS</Link></li>
    <li className='p-1 px-2 m-2 text-sm font-bold rounded-sm bg-slate-400 '><Link href={`/${filterRoute}/job-search/related-jobs?title=mcw`}>MCW</Link></li>
    <li className='p-1 px-2 m-2 text-sm font-bold rounded-sm bg-slate-400 '><Link href={`/${filterRoute}/job-search/related-jobs?title=Ph.D`}>Ph.D</Link></li>
    <li className='p-1 px-2 m-2 text-sm font-bold rounded-sm bg-slate-400 '><Link href={`/${filterRoute}/job-search/related-jobs?title=pgdm`}>PGDM</Link></li>




    <li className='p-1 px-2 m-2 text-sm font-bold rounded-sm bg-slate-400 '><Link href={`/${filterRoute}/job-search/related-jobs?title=it`}>IT</Link></li>
    <li className='p-1 px-2 m-2 text-sm font-bold bg-red-400 rounded-sm '><Link href={`/${filterRoute}/job-search`}>Search more</Link></li>
 
    </ul>
    </div>
  )
}

export default ShortSearch