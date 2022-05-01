// import AutoComplete from '../../components/reusables/AutoComplete';
import FilterSearch from '../../../components/reusables/FilterSearch';
import ShortSearch from '../../../components/reusables/ShortSearch';
import { BreadcrumbJsonLd ,NextSeo} from 'next-seo';





const PvtJobSearch=()=>{
 
    return(
        <>
    <NextSeo
      title='Search Private Sector jobs category wise in the fastest way'
      description='Search Private Sector job and get fastjob search experience'
      canonical={`https://www.theprograd.com/privateJobs/job-search`}
      
      openGraph={{
        url: `https://www.theprograd.com/privateJobs/job-search`,
        title:'Search Private Sector jobs ctegory wise in the fastest way',
        description:'Search Private Sector job and get fastjob search experience',
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
          name: 'Private Sector Jobs',
          item: 'https://www.theprograd.com/privateJobs',
        },
        {
          position: 3,
          name: 'Private Sector Jobs',
          item: `https://www.theprograd.com/privateJobs/job-search`,
        },
      
      ]}
    />
        <div className='rounded-md shadow-md  lg:px-40 lg:pt-11 pt-11 shadow-green-400'>
        <h1 className='my-4 text-xl font-bold text-teal-400'>Search jobs acording to your interest</h1>
        <FilterSearch fRoute='privateJobs' /> 
        <hr className='my-3' />
        <ShortSearch />

        </div>

        </>
       
    )
}

export default PvtJobSearch;

// list={list} newRoute='jobs'






{/* <input className='p-2' onChange={(e)=>setTitle(e.target.value)} type="text" placeholder='Search Title' />
<a href={`/jobs/dynamic-search?title=${title}`}>Go to </a> */}

