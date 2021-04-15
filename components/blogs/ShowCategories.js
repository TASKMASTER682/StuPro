import React ,{ useState, useEffect } from 'react';
import {  getCategories} from '../../actions/category';
import Link from 'next/link';


 const ShowCategories = () => {

    const [values, setValues] = useState({
      
        categories:[],
        reaload:false
        
    });

    const {categories,reload} = values;

    useEffect(() => {
       loadCategories();
    }, [reload]);

    const loadCategories = () => {
        getCategories().then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setValues({ ...values, categories: data });
            }
        });
    };
    const showCategories=()=>{
        return categories.map((t,i)=>{
            return(
                
               
                <Link href={`/categories/${t.slug}`}><a  style={{ padding:'0rem 0.8rem',border:'solid black'}} key={i} className="btn btn-light-gray nbtn my-1 "><p>{t.name}</p></a></Link> 
              
            )
        })
    };
    return (
       <>
            {showCategories()}
            </>
    )
}
export default ShowCategories;