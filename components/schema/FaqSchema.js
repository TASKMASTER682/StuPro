import React from 'react';
import Script from 'next/script'
const DOMPurify = require('dompurify');


const FaqSchema = ({faqs}) => {

 const newFaq=()=>{

     return faqs.map((faq,i)=>{
         return (
            {
                "@type": "Question",
                "name": `${faq.ques}`,
                "acceptedAnswer": {
                 "@type": "Answer",
                 "text": <p key={i}>`${faq.ans}`</p>
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
    const sanitizer=()=>{
        if(typeof window != 'undefined'){
            return(
                DOMPurify.sanitize(JSON.stringify(makeFaqSchema()) )
            )
        }
    }
    const NewFaqSchema = () => {
        return (
            <Script
            strategy='afterInteractive'
                key={`faqJSON-${faq._id}`}
                type='application/ld+json'
                dangerouslySetInnerHTML={{ __html: sanitizer()}}
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
