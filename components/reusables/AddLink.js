import React,{useState,useEffect} from 'react'
import { withRouter } from 'next/router';
import { getCookie,handleResponse} from '../../actions/auth';
import {API} from '../../config'


const AddLink = ({router,newRoute}) => {
    const [formData,setFormData]=useState({
        link:'',
        linkName:''
    });
    const token = getCookie('token');

const createLinks=async ()=>{
    let {link,linkName}=formData
    let item={link,linkName}
      return  await fetch(`${API}/${newRoute}/createLinks/${router.query.slug}`,{
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
        createLinks().then(data => {
            setFormData({ ...formData,link:'',linkName:'' , error: '', success: `Fresh Study Material titled is created`});
           
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
            <h1 className="large">
                Create Download Links for the blog
            </h1>
            <div className="my-1">
            <form className='form' onSubmit={submit}>
            <div className="form-group">
                <input type="text" placeholder='Type the title of the link' name='linkName' value={formData.linkName} onChange={handleChange} />
            </div>
            <div className="form-group">
                <input type="text" placeholder='paste the link' name='link' value={formData.link} onChange={handleChange} />
            </div>
            <button type="submit" className="btn nbtn btn-dark my-1">Create</button>

        </form>
            </div>
        </section>
            
        </>
    )
}

export default withRouter(AddLink);
