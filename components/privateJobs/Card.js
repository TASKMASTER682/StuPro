import Link from 'next/link';
import dynamic from 'next/dynamic';
import React from 'react';
import moment from 'moment';
import TagInSlug from '../reusables/TagInSlug';
import CategoryInSlug from '../reusables/SlugCat';
const SecurityIcon = dynamic(async () => import('@material-ui/icons/Security'), { ssr: false });
const BusinessCenterIcon = dynamic(async () => import('@material-ui/icons/BusinessCenter'), { ssr: false });
const RoomIcon = dynamic(async () => import('@material-ui/icons/Room'), { ssr: false });


const Card = ({ privateJob }) => {

    const today = moment();


    return (
        <>
            <div className="nbtn job job-read my-1" style={{ border: 'solid 1px black' }}>
                <div className="p-1 new-job-card">

                    <Link href={`/privateJobs/${privateJob.slug}`}>
                        <a>
                            <h2 className="lead text-success" style={{ lineHeight: '1.9rem' }}>{privateJob.title}</h2>
                        </a>

                    </Link>
                    <p className="extra-small p-1 text-primary"><SecurityIcon style={{ fontSize: 15 }} /><strong className='text-dark'> {privateJob.agency}</strong></p>
                </div>
                <strong className="extra-small m-1 text-danger"> Last Date is {moment(privateJob.lastDate).format("MMM DD YYYY")}</strong>
                <div className='new-flex'>
               <CategoryInSlug newCat='privateJobCategories' cats={privateJob.privateJobCategories} />
                <TagInSlug newTagRoute='privateJobTags' tags={privateJob.privateJobTags} />

                </div>
                <div className="xyz">
                <div className='my-1'>
                        <i className=" text-gray "><strong >Rs.<span> </span> {privateJob.salary}</strong></i>
                        <i className=" text-gray "><BusinessCenterIcon /><span> </span><strong> {privateJob.type}</strong></i>
                        <i className=" text-gray "><RoomIcon /><span> </span><strong>{privateJob.location}</strong></i>
                    </div>
                    <Link href={`/privateJobs/${privateJob.slug}`} >
                        <a className={`btn nbtn nbtn1 m-1 btn-${moment(privateJob.lastDate).format() < today.format() ? 'danger' : 'primary'}  `}>{moment(privateJob.lastDate).format() < today.format() ? <strong>Closed</strong> : <strong>Apply Now</strong>}</a>
                    </Link>
                </div>

            </div>
        </>
    )

};
export default Card;