import React from 'react'

const ShowFaq = ({material}) => {
    const showFaq=()=>{
        return material.faq.map((newFaq,i)=>{
            return(
                <div key={newFaq._id}>
                <h3 className="text-lg font-bold "><span className="font-bold text-red-500 ">Ques {i+1} </span>{newFaq.ques} ?</h3>
                <p className='p-2 font-semibold '><span className="text-teal-500 "><strong>Ans: </strong></span>{newFaq.ans}</p>
               </div>
 
            )
        })
    }
    return (
        <>
            {showFaq()}
        </>
    )
}

export default ShowFaq
