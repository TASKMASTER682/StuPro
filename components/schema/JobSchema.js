import React from 'react';
import {API} from '../../config'

const JobSchema = ({job,newRoute}) => {
    const makeJobSchema= ()=> {
        return {
            // schema truncated for brevity
           '@context': 'http://schema.org',
            '@type': 'JobPosting',
            'title': `${job.title}`,
            'description': `            
            <p>${job.desc ? `${job.desc}` : `Are you also looking for a job or, are you looking for a better job based on your qualification, then you are at the right place. Latest job posts in ${job.location} from ${job.agency} have been rolled out.You can apply for these posts before ${job.lastDate} If you want to work in ${job.location} and your qualification is ${job.qualification}, then this is an opportunity for you. On getting this job in ${job.location}, you get a basic monthly salary of around ${job.salary}. It is a ${job.type} job, if you want to apply, then click on the apply button and you will reach at the India's best job website.`}</p>
            <br>
            <h3>Job Highlights</h3>,
            <ul>
            <li>Notification issued By - ${job.agency}</li>
            <li>Job Location - ${job.location}</li>
            <li>The Last Date to Apply - ${job.lastDate}</li>
            <li>Qualification needed - ${job.qualification}</li>
            <li>Pay Scale - ${job.salary}</li>
            </ul>`,
    
            'url': `https://theprograd.com/${newRoute}/${job.slug}`,
            'identifier': {
                '@type': "PropertyValue",
                'name': "The ProGrad",
                'value': "1234567"
    
            },
            'datePosted': `${job.createdAt}`,
            'validThrough': `${job.lastDate}`,
            'directApply' : false,
            'employmentType': `${job.type}`,
            'hiringOrganization': {
                '@type': "Organization",
                'name': `${job.agency}`,
                'sameAs':`${job.officialLink}`,
                'logo':`${API}/${newRoute}/photo/${job.slug}`
            },
            'jobLocation': {
                '@type': "Place",
                'address': {
                    '@type': "PostalAddress",
                    "addressLocality": `${job.city}`,
                    "streetAdress":`${job.street}`,
                    "addressRegion": `${job.location}`,
                    "postalCode":`${job.postal}`,
                    'addressCountry': "IN"
                }
            },
            'baseSalary': {
                '@type': "MonetaryAmount",
                'currency': "INR",
                'value': {
                    '@type': "QuantitativeValue",
                    'value':job.salary,
                    'unitText': "Month"
                }
            }
        
          }
    }
    return (
        <>
               <script
                 key={`jobJSON-${job._id}`}
                 type='application/ld+json'
                dangerouslySetInnerHTML={{ __html: JSON.stringify(makeJobSchema())}} />
        </>
    )
}

export default JobSchema
