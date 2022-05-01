// import AutoComplete from '../../components/reusables/AutoComplete';
import FilterSearch from '../../../components/reusables/FilterSearch';
import Head from 'next/head';
import ShowJobCategories from '../../../components/reusables/SearchCat';
import ShowJobTags from '../../../components/reusables/SearchTags';
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../../config';
// import {useState} from 'react';
// import Link from 'next/link';
import { BreadcrumbJsonLd,NextSeo } from 'next-seo';


export async function getStaticProps(){

  const [jobCategories,jobTags] = await Promise.all([
    fetch(`${API}/jobCategories/`).then(r => r.json()),
    fetch(`${API}/jobTags`).then(r=>r.json())
  ]);
  return{
    props:{
      jobCategories,
      jobTags
  
    }
  }
}

const JobSearch=({jobTags,jobCategories})=>{

    return(
        <>
    <NextSeo
      title='Search your sarkari job and get Fastjob search experience'
      description='The ProGrad is an online, just-in-time career network that enables you to search for government jobs in your area or anywhere in the India.'
      canonical='https://www.theprograd.com/jobs/job-search'
      
      openGraph={{
        url: 'https://www.theprograd.com/jobs/job-search',
        title:'Search your sarkari job and get Fastjob search experience',
        description:'The ProGrad is an online, just-in-time career network that enables you to search for government jobs in your area or anywhere in the India.',
        site_name: 'The ProGrad',
      }}
      facebook={{
        handle: '@handle',
        site: '@site',
        cardType: 'summary_large_image',
        appId: '721482821740858'
      }}
    />
    <BreadcrumbJsonLd
      itemListElements={[
        {
          position: 1,
          name: 'Home',
          item: 'https://www.theprograd.com/',
        },
        {
          position: 2,
          name: 'Government Jobs',
          item: 'https://www.theprograd.com/jobs',
        },
        {
          position: 3,
          name: 'Search your sarkari jobs in the Fastest way ',
          item: `https://www.theprograd.com/jobs/job-search`,
        },
      
      ]}
    />
        <div className='rounded-md shadow-md  lg:px-40 pt-11 shadow-green-400'>
        <h1 className='my-4 text-xl font-bold text-teal-400 p-3'>Search jobs acording to your interest</h1>
        <FilterSearch fRoute='jobs'  /> 
        <h2 className='m-4 text-xl font-bold text-teal-400'>Job Tags</h2>
        <ShowJobTags btag='jobs'  newRoute='jobTags' fun={jobTags}/> 
        <h2 className='m-4 text-xl font-bold text-gray-700'>Job Categories</h2>
        <ShowJobCategories bcat='jobs' newRoute='jobCategories' fun={jobCategories}/>
        </div>

        </>
       
    )
}

export default JobSearch;

// list={list} newRoute='jobs'






{/* <input className='p-2' onChange={(e)=>setTitle(e.target.value)} type="text" placeholder='Search Title' />
<a href={`/jobs/dynamic-search?title=${title}`}>Go to </a> */}

