import React,{useState,useEffect} from 'react';
import { getCookie,handleResponse} from '../../actions/auth';
import { getProfile } from '../../actions/user';

import {API} from '../../config'


const AddEducation = () => {
    const [formData,setFormData]=useState({
        school:'',
        degree:'',
        fieldOfStudy:'',
        from:'',
        to:'',
        current:false,
        description:''
    });
    const [toDateDisabled,toggleDisabled]=useState(false);

    const token = getCookie('token');


 
    const createEducation=async ()=>{
        let {school,degree,fieldOfStudy,from,to,current,description}=formData
        let item={school,degree,fieldOfStudy,from,to,current,description}
          return  await fetch(`${API}/user/addEducation`,{
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
        createEducation().then(data => {
            setFormData({ ...formData,school:'',degree:'',fieldOfStudy:'',from:'',to:'', current:false,  description:'' , error: '', success: `New Educational qualification added`});
           
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
                Add New educational qualification to show off in your Profile and CV
            </h1>
            <div className="my-1">
            <form className='form' onSubmit={submit}>
            <div className="form-group">
                <input type="text" placeholder='Your Schooling From' name='school' value={formData.school} onChange={handleChange} />
            </div>
            <div className="form-group">
                <input type="text" placeholder='Your Graduation From' name='degree' value={formData.degree} onChange={handleChange} />
            </div>
            <div className="form-group">
                <input type="text" placeholder='Your Field of Study' name='fieldOfStudy' value={formData.fieldOfStudy} onChange={handleChange} />
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
            placeholder="A short description about your new qualification"
            value={formData.description}
            onChange={handleChange}>
          </textarea>
        </div>
            <button type="submit" className="btn nbtn btn-dark my-1">Add New Education Qualification</button>

        </form>
            </div>
        </section>
        </>
    )
}

export default AddEducation
