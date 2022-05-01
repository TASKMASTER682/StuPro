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
            setFormData({ ...formData,ques:'',ans:'' , error: '', success: `Fresh ${newRoute} titled is created`});
           
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
        <section className=" px-14 lg:pt-24">
            <h1 className="text-4xl font-bold text-teal-400 ">
                Create faq for the {newRoute}
            </h1>
            <div className="my-1">
            <form onSubmit={submit}>
                <input type="text" className="w-full p-2 my-2 rounded-md ring-2 ring-teal-500" name='ques' placeholder='Question' value={formData.ques} onChange={handleChange} />
                <div>
               <label className="text-teal-400 ">Description</label>
              <br/>
                <textarea className="w-full p-2 my-2 rounded-md ring-2 ring-teal-500" rows='10'  name='ans' placeholder="Answer" value={formData.ans} onChange={handleChange}></textarea>
             </div>
            <button type="submit" className="p-2 font-bold text-white bg-red-400 rounded-md ">Create</button>

        </form>
            </div>
        </section>
            
        </>
    )
}

export default withRouter(AddFaq);
