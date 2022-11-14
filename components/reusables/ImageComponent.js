import React from 'react'
import Image from 'next/legacy/image';
import {API} from '../../config'



const ImageComponent = ({photo}) => {
    const myLoader = ({ src }) => {
        return `${photo}`
      }
    return (
        <Image  loader={myLoader} src={`${photo}`} width={300} height={300} alt='Logo' className="rounded-full " blurDataURL="/img/blurr-min.jpg" placeholder='blur'/>  
    )
}

export default ImageComponent;


