import React from 'react'

const ShowFaq = ({material}) => {
    const showFaq=()=>{
        return material.faq.map((newFaq)=>{
            return(
                <div key={newFaq._id}>
                <h3 className="lead text-dark"><span className="text-primary">Ques.:</span>{newFaq.ques} ?</h3>
                <p className='m-1'><span className="text-primary"><strong>Ans: </strong></span>{newFaq.ans}</p>
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
