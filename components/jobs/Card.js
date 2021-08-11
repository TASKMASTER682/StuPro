import Link from 'next/link';
import React from 'react';
import dynamic from 'next/dynamic'
import moment from 'moment';
import TagInSlug from '../reusables/TagInSlug';
import CategoryInSlug from '../reusables/SlugCat';
const SecurityIcon = dynamic(async () => import('@material-ui/icons/Security'), { ssr: false });
const BusinessCenterIcon = dynamic(async () => import('@material-ui/icons/BusinessCenter'), { ssr: false });
const RoomIcon = dynamic(async () => import('@material-ui/icons/Room'), { ssr: false });

const Card = ({ job }) => {
    const today = moment();


    return (
        
            <div className="nbtn job-read job  my-1" style={{ border: 'solid 1px #00cdbb' }}>
                <div className="p-1 new-job-card" >

                    <Link href={`/jobs/${job.slug}`}>
                    <a>
                    <h1 className="lead text-success" style={{ lineHeight: '1.9rem' }}>{job.title}</h1>
                    </a>
                    </Link>
                    <span className="extra-small p-1 text-primary"><SecurityIcon style={{ fontSize: 15 }} /><strong className='text-dark'> {job.agency}</strong></span>
                </div>
                <strong className="extra-small m-1 text-danger"> Last Date is {moment(job.lastDate).format("MMM DD YYYY")}</strong>
                <div style={{ display: "flex", flexWrap: 'wrap' }}>
                <div className="m-1"><CategoryInSlug newCat='jobCategories' cats={job.jobCategories} /></div>
                    
                <div className="m-1"><TagInSlug newTagRoute='jobTags' tags={job.jobTags} /></div>

                    
                </div>
                <div className="xyz">
                    <div className='my-1'>
                        <i className=" text-gray ">Rs.<span> </span> <strong >{job.salary}</strong></i>
                        <i className=" text-gray "><BusinessCenterIcon /><span> </span><strong> {job.type}</strong></i>
                        <i className=" text-gray "><RoomIcon /><span> </span><strong>{job.location}</strong></i>
                    </div>
                    <Link href={`/jobs/${job.slug}`}>
                        <a className={`btn nbtn m-1 btn-${moment(job.lastDate).format() < today.format() ? 'danger' : 'primary'} `}>{moment(job.lastDate).format() < today.format() ? <strong>Closed</strong> : <strong>Apply Now</strong>}</a>
                    </Link>
                </div>

            </div>
      
    )

};
export default Card;