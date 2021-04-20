import React from 'react';
import Image from 'next/image';
import {DOMAIN} from '../config';

 const landingWebp = () => {
    const myLoader = ({ src }) => {
        return `${DOMAIN}/img/landingJob.jpg`
      }
    return (
        <div>
         <Image loader={myLoader} src='/img/landingJob.webp' height={300} width={800}  alt="The ProGrad" />
        </div>
    )
}
export default landingWebp;