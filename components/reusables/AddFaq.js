import React,{useState} from 'react'
import { withRouter } from 'next/router';
import { getCookie,handleResponse} from '../../actions/auth';
import {API} from '../../config'


const AddFaq = ({router,newRoute}) => {
    const [formData,setFormData]=useState({
        ques:'',
        ans:''
    });
    const token = getCookie('token');

const createFaqs=async ()=>{
    let {ques,ans}=formData
    let item={ques,ans}
      return  await fetch(`${API}/${newRoute}/faq/${router.query.slug}`,{
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
        createFaqs().then(data => {
            setFormData({ ...formData,ques:'',ans:'' , error: '', success: `Fresh Study ${newRoute} titled is created`});
           
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
                Create faq for the blog
            </h1>
            <div className="my-1">
            <form className='form' onSubmit={submit}>
            <div className="form-group">
                <input type="text" name='ques' value={formData.ques} onChange={handleChange} />
            </div>
            <div className="form-group">
                <input type="text" name='ans' value={formData.ans} onChange={handleChange} />
            </div>
            <button type="submit" className="btn nbtn btn-dark my-1">Create</button>

        </form>
            </div>
        </section>
            
        </>
    )
}

export default withRouter(AddFaq);
