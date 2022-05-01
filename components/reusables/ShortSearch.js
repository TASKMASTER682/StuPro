import React from 'react';
import Link from 'next/link'

const ShortSearch = ({filterRoute}) => {
  return (
    <div>
    <h2 className='p-1 my-2 text-lg font-bold text-red-500 bg-slate-200'>Jobs according to Location</h2>
    <ul className='flex flex-wrap p-1'>
        <li className='p-1 px-2 m-2 text-sm font-bold bg-teal-300 rounded-sm '><Link href={`/${filterRoute}/job-search/related-jobs?title=jammu`}><a>Jammu and Kashmir</a></Link></li>
        <li className='p-1 px-2 m-2 text-sm font-bold bg-teal-300 rounded-sm '><Link href={`/${filterRoute}/job-search/related-jobs?title=delhi`}><a>Delhi</a></Link></li>
        <li className='p-1 px-2 m-2 text-sm font-bold bg-teal-300 rounded-sm '><Link href={`/${filterRoute}/job-search/related-jobs?title=punjab`}><a>Punjab</a></Link></li>
        <li className='p-1 px-2 m-2 text-sm font-bold bg-teal-300 rounded-sm '><Link href={`/${filterRoute}/job-search/related-jobs?title=odisha`}><a>Odisha</a></Link></li>
        <li className='p-1 px-2 m-2 text-sm font-bold bg-teal-300 rounded-sm '><Link href={`/${filterRoute}/job-search/related-jobs?title=chennai`}><a>Chennai</a></Link></li>
        <li className='p-1 px-2 m-2 text-sm font-bold bg-teal-300 rounded-sm '><Link href={`jobs/job-search/related-jobs?title=uttar%20pradesh`}><a>Uttar Pradesh</a></Link></li>
        <li className='p-1 px-2 m-2 text-sm font-bold bg-teal-300 rounded-sm '><Link href={`/${filterRoute}/job-search/related-jobs?title=bihar`}><a>Bihar</a></Link></li>
        <li className='p-1 px-2 m-2 text-sm font-bold bg-teal-300 rounded-sm '><Link href={`/${filterRoute}/job-search/related-jobs?title=chhattisgarh`}><a>Chhattisgarh</a></Link></li>
        <li className='p-1 px-2 m-2 text-sm font-bold bg-teal-300 rounded-sm '><Link href={`/${filterRoute}/job-search/related-jobs?title=rajasthan`}><a>Rajasthan</a></Link></li>
        <li className='p-1 px-2 m-2 text-sm font-bold bg-teal-300 rounded-sm '><Link href={`/${filterRoute}/job-search/related-jobs?title=gujarat`}><a>Gujarat</a></Link></li>
        <li className='p-1 px-2 m-2 text-sm font-bold bg-teal-300 rounded-sm '><Link href={`/${filterRoute}/job-search/related-jobs?title=tamilnadu`}><a>Tamilnadu</a></Link></li>
        <li className='p-1 px-2 m-2 text-sm font-bold bg-teal-300 rounded-sm '><Link href={`/${filterRoute}/job-search/related-jobs?title=kerela`}><a>Kerela</a></Link></li>
        <li className='p-1 px-2 m-2 text-sm font-bold bg-teal-300 rounded-sm '><Link href={`/${filterRoute}/job-search/related-jobs?title=Andhra%20Pradesh`}><a>Andhra Pradesh</a></Link></li>
        <li className='p-1 px-2 m-2 text-sm font-bold bg-teal-300 rounded-sm '><Link href={`/${filterRoute}/job-search/related-jobs?title=assam`}><a>Assam</a></Link></li>
        <li className='p-1 px-2 m-2 text-sm font-bold bg-teal-300 rounded-sm '><Link href={`/${filterRoute}/job-search/related-jobs?title=chandigarh`}><a>Chandigarh</a></Link></li>
        <li className='p-1 px-2 m-2 text-sm font-bold bg-teal-300 rounded-sm '><Link href={`/${filterRoute}/job-search/related-jobs?title=delhi`}><a>Delhi</a></Link></li>
        <li className='p-1 px-2 m-2 text-sm font-bold bg-teal-300 rounded-sm '><Link href={`/${filterRoute}/job-search/related-jobs?title=goa`}><a>Goa</a></Link></li>
        <li className='p-1 px-2 m-2 text-sm font-bold bg-teal-300 rounded-sm '><Link href={`/${filterRoute}/job-search/related-jobs?title=haryana`}><a>Haryana</a></Link></li>
        <li className='p-1 px-2 m-2 text-sm font-bold bg-teal-300 rounded-sm '><Link href={`/${filterRoute}/job-search/related-jobs?title=jharkhand`}><a>Jharkhand</a></Link></li>
        <li className='p-1 px-2 m-2 text-sm font-bold bg-teal-300 rounded-sm '><Link href={`/${filterRoute}/job-search/related-jobs?title=karnataka`}><a>Karnataka</a></Link></li>
        <li className='p-1 px-2 m-2 text-sm font-bold bg-teal-300 rounded-sm '><Link href={`/${filterRoute}/job-search/related-jobs?title=maharashtra`}><a>Maharashtra</a></Link></li>
        <li className='p-1 px-2 m-2 text-sm font-bold bg-teal-300 rounded-sm '><Link href={`/${filterRoute}/job-search/related-jobs?title=meghalya`}><a>Meghalya</a></Link></li>
        <li className='p-1 px-2 m-2 text-sm font-bold bg-teal-300 rounded-sm '><Link href={`/${filterRoute}/job-search/related-jobs?title=mizoram`}><a>Mizoram</a></Link></li>
        <li className='p-1 px-2 m-2 text-sm font-bold bg-teal-300 rounded-sm '><Link href={`/${filterRoute}/job-search/related-jobs?title=manipur`}><a>Manipur</a></Link></li>
        <li className='p-1 px-2 m-2 text-sm font-bold bg-teal-300 rounded-sm '><Link href={`/${filterRoute}/job-search/related-jobs?title=sikkim`}><a>Sikkim</a></Link></li>
        <li className='p-1 px-2 m-2 text-sm font-bold bg-teal-300 rounded-sm '><Link href={`/${filterRoute}/job-search/related-jobs?title=uttarakhand`}><a>Uttarakhand</a></Link></li>
        <li className='p-1 px-2 m-2 text-sm font-bold bg-teal-300 rounded-sm '><Link href={`/${filterRoute}/job-search/related-jobs?title=West%20Bengal`}><a>West Bengal</a></Link></li>
        <li className='p-1 px-2 m-2 text-sm font-bold bg-teal-300 rounded-sm '><Link href={`/${filterRoute}/job-search/related-jobs?title=all%20india`}><a>All India</a></Link></li>
        <li className='p-1 px-2 m-2 text-sm font-bold text-white rounded-sm bg-slate-600 '><Link href={`/${filterRoute}/job-search`}><a>Search More</a></Link></li>
 
    </ul>      
    <h2 className='p-1 my-2 text-lg font-bold text-red-500 bg-slate-200'>Jobs according to Qualification</h2>
    <ul className='flex flex-wrap p-1'>
    <li className='p-1 px-2 m-2 text-sm font-bold rounded-sm bg-slate-400 '><Link href={`/${filterRoute}/job-search/related-jobs?title=graduation`}><a>Graduation</a></Link></li>
    <li className='p-1 px-2 m-2 text-sm font-bold rounded-sm bg-slate-400 '><Link href={`/${filterRoute}/job-search/related-jobs?title=12th`}><a>12th Pass</a></Link></li>
    <li className='p-1 px-2 m-2 text-sm font-bold rounded-sm bg-slate-400 '><Link href={`/${filterRoute}/job-search/related-jobs?title=10th`}><a>10th Pass</a></Link></li>
    <li className='p-1 px-2 m-2 text-sm font-bold rounded-sm bg-slate-400 '><Link href={`/${filterRoute}/job-search/related-jobs?title=msc`}><a>MSc</a></Link></li>
    <li className='p-1 px-2 m-2 text-sm font-bold rounded-sm bg-slate-400 '><Link href={`/${filterRoute}/job-search/related-jobs?title=btech`}><a>Engineering</a></Link></li>
    <li className='p-1 px-2 m-2 text-sm font-bold rounded-sm bg-slate-400 '><Link href={`/${filterRoute}/job-search/related-jobs?title=b%20arch`}><a>B Arch</a></Link></li>
    <li className='p-1 px-2 m-2 text-sm font-bold rounded-sm bg-slate-400 '><Link href={`/${filterRoute}/job-search/related-jobs?title=b%20com`}><a>B Com</a></Link></li>
    <li className='p-1 px-2 m-2 text-sm font-bold rounded-sm bg-slate-400 '><Link href={`/${filterRoute}/job-search/related-jobs?title=b%20ed`}><a>B Ed</a></Link></li>
    <li className='p-1 px-2 m-2 text-sm font-bold rounded-sm bg-slate-400 '><Link href={`/${filterRoute}/job-search/related-jobs?title=b%20pharma`}><a>B Pharma</a></Link></li>
    <li className='p-1 px-2 m-2 text-sm font-bold rounded-sm bg-slate-400 '><Link href={`/${filterRoute}/job-search/related-jobs?title=ba`}><a>BA</a></Link></li>
    <li className='p-1 px-2 m-2 text-sm font-bold rounded-sm bg-slate-400 '><Link href={`/${filterRoute}/job-search/related-jobs?title=bba`}><a>BBA</a></Link></li>
    <li className='p-1 px-2 m-2 text-sm font-bold rounded-sm bg-slate-400 '><Link href={`/${filterRoute}/job-search/related-jobs?title=bca`}><a>BCA</a></Link></li>
    <li className='p-1 px-2 m-2 text-sm font-bold rounded-sm bg-slate-400 '><Link href={`/${filterRoute}/job-search/related-jobs?title=bds`}><a>BDS</a></Link></li>
    <li className='p-1 px-2 m-2 text-sm font-bold rounded-sm bg-slate-400 '><Link href={`/${filterRoute}/job-search/related-jobs?title=bvsc`}><a>BVSc</a></Link></li>
    <li className='p-1 px-2 m-2 text-sm font-bold rounded-sm bg-slate-400 '><Link href={`/${filterRoute}/job-search/related-jobs?title=diploma`}><a>Diploma</a></Link></li>
    <li className='p-1 px-2 m-2 text-sm font-bold rounded-sm bg-slate-400 '><Link href={`/${filterRoute}/job-search/related-jobs?title=icwa`}><a>ICWA</a></Link></li>
    <li className='p-1 px-2 m-2 text-sm font-bold rounded-sm bg-slate-400 '><Link href={`/${filterRoute}/job-search/related-jobs?title=llb`}><a>LLB</a></Link></li>
    <li className='p-1 px-2 m-2 text-sm font-bold rounded-sm bg-slate-400 '><Link href={`/${filterRoute}/job-search/related-jobs?title=m%20com`}><a>M Com</a></Link></li>
    <li className='p-1 px-2 m-2 text-sm font-bold rounded-sm bg-slate-400 '><Link href={`/${filterRoute}/job-search/related-jobs?title=m%20tech`}><a>M Tech</a></Link></li>
    <li className='p-1 px-2 m-2 text-sm font-bold rounded-sm bg-slate-400 '><Link href={`/${filterRoute}/job-search/related-jobs?title=m%20ed`}><a>M Ed</a></Link></li>
    <li className='p-1 px-2 m-2 text-sm font-bold rounded-sm bg-slate-400 '><Link href={`/${filterRoute}/job-search/related-jobs?title=m%20phill`}><a>M Phill</a></Link></li>
    <li className='p-1 px-2 m-2 text-sm font-bold rounded-sm bg-slate-400 '><Link href={`/${filterRoute}/job-search/related-jobs?title=mba`}><a>MBA</a></Link></li>
    <li className='p-1 px-2 m-2 text-sm font-bold rounded-sm bg-slate-400 '><Link href={`/${filterRoute}/job-search/related-jobs?title=mbbs`}><a>MBBS</a></Link></li>
    <li className='p-1 px-2 m-2 text-sm font-bold rounded-sm bg-slate-400 '><Link href={`/${filterRoute}/job-search/related-jobs?title=mca`}><a>MCA</a></Link></li>
    <li className='p-1 px-2 m-2 text-sm font-bold rounded-sm bg-slate-400 '><Link href={`/${filterRoute}/job-search/related-jobs?title=mds`}><a>MDS</a></Link></li>
    <li className='p-1 px-2 m-2 text-sm font-bold rounded-sm bg-slate-400 '><Link href={`/${filterRoute}/job-search/related-jobs?title=mcw`}><a>MCW</a></Link></li>
    <li className='p-1 px-2 m-2 text-sm font-bold rounded-sm bg-slate-400 '><Link href={`/${filterRoute}/job-search/related-jobs?title=Ph.D`}><a>Ph.D</a></Link></li>
    <li className='p-1 px-2 m-2 text-sm font-bold rounded-sm bg-slate-400 '><Link href={`/${filterRoute}/job-search/related-jobs?title=pgdm`}><a>PGDM</a></Link></li>




    <li className='p-1 px-2 m-2 text-sm font-bold rounded-sm bg-slate-400 '><Link href={`/${filterRoute}/job-search/related-jobs?title=it`}><a>IT</a></Link></li>
    <li className='p-1 px-2 m-2 text-sm font-bold bg-red-400 rounded-sm '><Link href={`/${filterRoute}/job-search`}><a>Search more</a></Link></li>
 
    </ul>
    </div>
  )
}

export default ShortSearch