import React,{useState} from 'react';
import { getCookie,handleResponse} from '../../actions/auth';

import {API} from '../../config'


const AddExperience = () => {
    const [formData,setFormData]=useState({
        title:'',
        location:'',
        company:'',
        from:'',
        to:'',
        current:false,
        description:''
    });
    const [toDateDisabled,toggleDisabled]=useState(false);

    const token = getCookie('token');


 
    const createExperience=async ()=>{
        let {title,location,company,from,to,current,description}=formData
        let item={title,location,company,from,to,current,description}
          return  await fetch(`${API}/user/addExperience`,{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Authorization': `Bearer ${token}`,
                'Content-type':'application/json'
            },
            body:JSON.stringify(item)
        }).then(response => {
            handleResponse(response);
            return response.json();
        })
        .catch(err => console.log(err));
    }

    const submit = e => {
        e.preventDefault();
        createExperience().then(data => {
            setFormData({ ...formData,title:'',location:'',company:'',from:'',to:'', current:false,  description:'' , error: '', success: `New Educational qualification added`});
           
        }).catch(err => console.log(err));
    };
    //Change input
    const handleChange=e=>{
        const {name,value}=e.target;
        setFormData({...formData,
            [name]:value
        })
    }
    return (
        <>
            <section className="px-14 lg:pt-24">
            <h1 className="text-4xl font-bold text-teal-500" >
                Add New experience to show off in your Profile and CV
            </h1>
            <div className="my-1">
            <form className='form' onSubmit={submit}>
            
                <input type="text" className="w-full p-2 my-2 rounded-md ring-2 ring-teal-500"  placeholder='Title' name='title' value={formData.title} onChange={handleChange} />
         
          
                <input type="text" className="w-full p-2 my-2 rounded-md ring-2 ring-teal-500"  placeholder='Company or Organization Name' name='company' value={formData.company} onChange={handleChange} />
           
            
                <input type="text" className="w-full p-2 my-2 rounded-md ring-2 ring-teal-500"  placeholder='location' name='location' value={formData.location} onChange={handleChange} />
           
   
            
                <input type="date" className="w-full p-2 my-2 rounded-md ring-2 ring-teal-500"  placeholder='Start Date' name='from' value={formData.from} onChange={handleChange} />
            
           
            <p><input type="checkbox" name="current" value={formData.current} checked={formData.current} onChange={e=>{setFormData({...formData,current:!formData.current}); toggleDisabled(!toDateDisabled);}} />{' '} Currently Doing</p>
            
         <div>
         <label className='text-primary'>Ending Date</label>
        <input type="date" className="w-full p-2 my-2 rounded-md ring-2 ring-teal-500"  placeholder='End Date' disabled={toDateDisabled ? 'disbaled':''}  name='to' value={formData.to} onChange={handleChange} />
          
         </div>
            
        
          <textarea className="w-full p-2 my-2 rounded-md ring-2 ring-teal-500" 
            name="description"
            cols="30"
            rows="5"
            placeholder="A short description about your new experience"
            value={formData.description}
            onChange={handleChange}>
          </textarea>
       
            <button type="submit" className="p-2 font-bold text-white bg-teal-600 rounded-md ">Add New Experience </button>

        </form>
            </div>
        </section>
        </>
    )
}

export default AddExperience
