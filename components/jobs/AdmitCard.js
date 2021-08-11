import Link from 'next/link';
import React from 'react';
import moment from 'moment';

const AdmitCard = ({admitCard}) => {

 
    const showAllCards = () => {
        return admitCard.map((card,i) => {

            return (
                <div style={{textAlign:'left'}} key={i}>
                <Link  href={`/jobs/${card.slug}`}><a>
                <h3 className="text-success my-1">{card.subtitle}</h3>
                </a></Link>
         
        
                </div>
            );
        });
    };
    
    return (
        <>
         {showAllCards()}
        </>
    );
};

export default AdmitCard;


