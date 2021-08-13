import React from 'react';

const FaqSchema = ({faqs}) => {


    const newFaq=()=>{
        return faqs.map((f,i)=>{
            return (
               {
                   "@type": "Question",
                   "name": `<h4 key=${i}>${f.ques}</h4>`,
                   "acceptedAnswer": {
                    "@type": "Answer",
                    "text":`<p key=${i}>${f.ans}</p>`
                },
               }
   
            )
            
        })
    }
    const makeFaqSchema=()=> {
        return {
            // schema truncated for brevity
            '@context': 'http://schema.org',
            '@type': 'FAQPage',
            'mainEntity':[newFaq()]
        }
    }

    const NewFaqSchema = () => {
        return (
            <script
                key={`faqJSON-${faqs._id}`}
                type='application/ld+json'
                dangerouslySetInnerHTML={{ __html: JSON.stringify(makeFaqSchema())}}
            />
        )
    }
    return (
        <>
        {NewFaqSchema()}
            
        </>
    )
}

export default FaqSchema
