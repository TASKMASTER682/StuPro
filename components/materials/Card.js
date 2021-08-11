import Link from 'next/link';
import CategoryInSlug from '../reusables/SlugCat';
const Card = ({material}) => {
    
    return (
        <>
        <div className="study-home-card p-1 m-1">
                  <Link href={`/free-study-material/${material.slug}`}>
                  <a>
                  <h2 className="text-primary">{material.title}</h2>
                  </a>
                  </Link>
                   <hr className="my-1 hr-1 " />
                  <p>{material.desc}</p>
                  <hr className="my-1 hr-1 " />

                <div className='new-flex'>
                <CategoryInSlug newCat='materialCategories' cats={material.materialCategories} />                
                </div>
                <p><strong><span className="text-danger"> Material Type:</span>{material.materialType}</strong></p>

                 </div>

        </>

    )
}

export default Card


