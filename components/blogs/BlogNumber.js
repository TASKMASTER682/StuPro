import {list} from '../../actions/blog'
import { useState, useEffect } from 'react';

const BlogNumber=()=>{
    const [values, setValues] = useState({
      
        blogs: [],
        reaload:true
        
    });

    const {  blogs,reload} = values;
    

    useEffect(() => {
        loadBlogs();
       
    }, [reload]);

   
    const loadBlogs = () => {
        list().then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setValues({ ...values, blogs: data });
            }
        });
    };

    return(
        <h2 className="x-large text-light-gray">{blogs.length}</h2>
    )
}
export default BlogNumber;