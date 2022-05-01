export const fetcher=async (...url)=>{
    const res= await fetch(url);
    return await res.json;
}