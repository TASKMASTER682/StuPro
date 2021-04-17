import Link from 'next/link';
import dynamic from 'next/dynamic';
import React from 'react';
import moment from 'moment';
const SecurityIcon=dynamic(async ()=>import('@material-ui/icons/Security'),{ssr:false}) ;
const BusinessCenterIcon =dynamic(async ()=>import('@material-ui/icons/BusinessCenter'),{ssr:false}) ;
const RoomIcon =dynamic(async ()=>import('@material-ui/icons/Room'),{ssr:false}) ;


const Card=({privateJob})=>{
    const showJobCategories = privateJob =>
    privateJob.privateJobCategories.map((c, i) => (
        <Link key={i} href={`/privateJobCategories/${c.slug}`}>
            <a style={{padding:" 0 0.8rem",border:'solid #00e7d2'}}  className="btn nbtn bg-light-gray "><p className="extra-small">{c.name}</p></a>
        </Link>
    ));

const showJobTags = privateJob =>
    privateJob.privateJobTags.map((t, i) => (
        <Link key={i} href={`/privateJobTags/${t.slug}`}>
            <a style={{padding:" 0 0.8rem",border:'solid black '}}  className="btn nbtn bg-light-gray "><p className="extra-small">{t.name}</p></a>
        </Link>
    ));
    const today=moment();


    return (
        <>
    <div className="nbtn job-read my-1"style={{border:'solid #e64444'}}>
       <main className="p-1"  style={{display: "grid",gridTemplateColumns:'10fr 2fr'}}>
       
       <Link href={`/privateJobs/${privateJob.slug}`}>
       <a>
       <h1 className="lead text-success" style={{lineHeight:'1.9rem'}}>{privateJob.title}</h1>
       </a>
       
       </Link>
       <p className="extra-small p-1 text-primary"><SecurityIcon style={{fontSize:15}}/><strong className='text-dark'> {privateJob.agency}</strong></p>
    </main>
    <small className="text-gray p-1"> Published {moment(privateJob.updatedAt).fromNow()}</small>
     <p className="extra-small py-1" style={{paddingLeft:'1rem'}}> Expire  {moment(privateJob.lastDate).fromNow()}</p>
     <div  style={{display: "flex",marginLeft:'1rem',flexWrap:'wrap',lineHeight:'1.2rem'}}>
         {showJobCategories(privateJob)}
         {showJobTags(privateJob)}
        </div>
       <div className="xyz">
       <div>
           <p className=" text-gray my-1">Rs.<span> </span> {privateJob.salary}</p>
           <p className=" text-gray my-1"><BusinessCenterIcon /><span> </span> {privateJob.type}</p>
           <p className=" text-gray my-1"><RoomIcon /><span> </span>{privateJob.location}</p>
        </div>
        <Link href={`/privateJobs/${privateJob.slug}`} >
        <a   className={`btn nbtn nbtn1 m-1 btn-${ moment(privateJob.lastDate).format()<today.format() ? 'danger':'primary'}  `}>{moment(privateJob.lastDate).format()<today.format()  ? 'Closed':'Apply now'}</a>
</Link>
        </div>
       
    </div>
</>
    )

};
export default Card;