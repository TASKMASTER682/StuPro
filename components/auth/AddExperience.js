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
            <section className="container">
            <h1 className="large  text-primary p-1" style={{lineHeight:'2.8rem'}}>
                Add New experience to show off in your Profile and CV
            </h1>
            <div className="my-1">
            <form className='form' onSubmit={submit}>
            <div className="form-group">
                <input type="text" placeholder='Title' name='title' value={formData.title} onChange={handleChange} />
            </div>
            <div className="form-group">
                <input type="text" placeholder='Company or Organization Name' name='company' value={formData.company} onChange={handleChange} />
            </div>
            <div className="form-group">
                <input type="text" placeholder='location' name='location' value={formData.location} onChange={handleChange} />
            </div>
   
            <div className="form-group">
                <input type="date" placeholder='Start Date' name='from' value={formData.from} onChange={handleChange} />
            </div>
            <div className="form-group">
            <p><input type="checkbox" name="current" value={formData.current} checked={formData.current} onChange={e=>{setFormData({...formData,current:!formData.current}); toggleDisabled(!toDateDisabled);}} />{' '} Currently Doing</p>
            </div>
            <div className="form-group">
            <label className='text-primary'>Ending Date</label>
                <input type="date" placeholder='End Date' disabled={toDateDisabled ? 'disbaled':''}  name='to' value={formData.to} onChange={handleChange} />
            </div>
        <div className="form-group">
          <textarea className="blog textinput"
            name="description"
            cols="30"
            rows="5"
            placeholder="A short description about your new experience"
            value={formData.description}
            onChange={handleChange}>
          </textarea>
        </div>
            <button type="submit" className="btn nbtn btn-dark my-1">Add New Experience </button>

        </form>
            </div>
        </section>
        </>
    )
}

export default AddExperience
