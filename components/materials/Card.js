import Link from 'next/link';
import CategoryInSlug from '../reusables/SlugCat';
const Card = ({material}) => {
    
    return (
        <>
        <Link href={`/free-study-material/${material.slug}`}>
        <h2 className='text-lg font-bold text-success hover:underline p-1 '>{material.title}</h2>
         </Link>
        <p className='mt-2 text-sm text-slate-500'>{material.desc}</p>
        <p className='text-xs mt-2'><span className='text-red-500 font-bold'> Material Type: </span><span className='ring-1  rounded-sm p-1 bg-primary'>{material.materialType}</span></p>
                 
        </>

    )
}

export default Card;


