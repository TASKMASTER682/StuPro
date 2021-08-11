import React from 'react';
import {DOMAIN,API} from '../../config';
import Script from 'next/script'
const DOMPurify = require('dompurify');

const ArticleSchema = ({content,newRoute}) => {
    const makeArticleSchema=()=> {
        return {
            '@context': 'http://schema.org',
            '@type': 'BlogPosting',
            "mainEntityOfPage":{
                "@type":"WebPage",
               " @id":`${DOMAIN}/${newRoute}`
            },
            "headline":`${content.title}`,
            'image':{
               ' @type': 'ImageObject',
               'url':`${API}/blogs/${content.slug}`,
               'height': 463,
              ' width': 700
            },
           ' datePublished':`${content.createdAt}`,
           'dateModified': `${content.updatedAt}`,
          ' author': {
            '@type': 'Person',
           ' name': `${content.postedBy.name}`
            },
         'publisher': {
                '@type':' Organization',
               ' name': 'The ProGrad',
                'logo': {
               ' @type':' ImageObject',
                'url': `${DOMAIN}/img/StuproLogo.png` ,
                'width': 550,
                 'height': 60
                }
                }
            }
           
    }
    const sanitizer=()=>{
        if(typeof window != 'undefined'){
            return(
                DOMPurify.sanitize(JSON.stringify(makeArticleSchema()) )
            )
        }
    }
    const NewArticleSchema = () => {
        return (
            <Script
            strategy='afterInteractive'
                key={`articleJSON-${content._id}`}
                type='application/ld+json'
                dangerouslySetInnerHTML={{ __html: sanitizer()}}
            />
        )
    }
    return (
        <>
        {NewArticleSchema()}
            
        </>
    )
}

export default ArticleSchema
