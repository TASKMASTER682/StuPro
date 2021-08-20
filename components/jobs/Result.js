import React from 'react';
import Link from 'next/link'

const Result = ({result}) => {
    const showAllResults = () => {
        return result.map((newResult,i) => {

            return (
                <div key={i} style={{textAlign:'left'}}>
                <Link  href={`/jobs/${newResult.slug}`}><a>
                <h3 className="text-success my-1">{newResult.subtitle}</h3>
                </a></Link>
                </div>
            );
        });
    };
    
    return (
        <>
         {showAllResults()}
        </>
    );

}

export default Result;
