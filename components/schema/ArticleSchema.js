import React from 'react';
import {DOMAIN,API} from '../../config';

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
               'url':`${API}/${newRoute}/${content.slug}`,
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
 
    const NewArticleSchema = () => {
        return (
            <script
                key={`articleJSON-${content._id}`}
                type='application/ld+json'
                dangerouslySetInnerHTML={{ __html:JSON.stringify(makeArticleSchema())}}
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
