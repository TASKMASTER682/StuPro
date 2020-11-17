import {list} from '../../actions/job'
import { useState, useEffect } from 'react';

const JobNumber=()=>{
    const [values, setValues] = useState({
      
        jobs: [],
        reaload:true
        
    });

    const {  jobs,reload} = values;
    

    useEffect(() => {
        loadJobs();
       
    }, [reload]);

   
    const loadJobs = () => {
        list().then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setValues({ ...values, jobs: data });
            }
        });
    };

    return(
        <h4 className="small text-light-gray">{jobs.length}</h4>
    )
}
export default JobNumber;