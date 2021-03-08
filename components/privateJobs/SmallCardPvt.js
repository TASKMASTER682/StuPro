import Link from 'next/link';
import renderHTML from 'react-render-html';
import moment from 'moment';
import { API } from '../../config';


const SmallCardPvt=({privateJob})=>{
    return(
        
         <main>
           <Link href={`/privateJobs/${privateJob.slug}`}>
            <a>
             <img loading='lazy' className="img-slider mob-image-slider"  src={`${API}/privateJob/photo/${privateJob.slug}`} alt={privateJob.title} />
              </a>
              </Link>
              <div style={{maxHeight:'6rem',overflow:'hidden'}}>
                <Link href={`/privateJobs/${privateJob.slug}`}>
                  <a>
                  <h3 className="small text-dark"  style={{fontFamily:`'Source Serif Pro' ,serif`,lineHeight:'1.8rem',padding:'0.6rem' }}>{privateJob.title}</h3>
                  </a>
                </Link>
                </div>
                <div className="author extra-small"  style={{display: "flex" ,alignContent:'flex-end'}}>
                
                  <p className="author text-light-gray p-1">|Published {moment(privateJob.updatedAt).fromNow()} </p>
                </div>
          </main>
        
    
    )
}
export default SmallCardPvt;