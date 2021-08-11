import React from 'react';
import Image from 'next/image';


const Photo = ({content,photo}) => {

  const myLoader = ({ src }) => {
    return `${photo}`
  }
    return (
        <>
          <Image loader={myLoader} className="nbtn"  src={`${photo}`} width={1000} height={400} blurDataURL="/img/blurr-min.jpg" placeholder='blur' alt={content.title} />
        </>
    )
}

export default Photo;
