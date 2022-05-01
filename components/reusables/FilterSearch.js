import React,{useState,useEffect} from 'react';
import router from 'next/router';

const FilterSearch = ({fRoute}) => {
    
const [search,setSearch]=useState(" ");
const changeText=(e)=>{
    setSearch(e.target.value);
}

const submitHandle=async (e)=>{
    e.preventDefault();
    router.push(`/${fRoute}/job-search/related-jobs?title=${search}`);

}


return(
    <>
    <form className='flex' onSubmit={submitHandle}>
        <input type="search"  onChange={changeText} className='p-4 w-[70%] mx-3 ring-1 ring-teal-500 rounded-lg shadow-lg shadow-teal-400' placeholder='Search' />
        <button className='px-2 bg-red-500 rounded-md 'type='submit'>Search Job</button> 
    </form>
    </>

)

}
export default FilterSearch;