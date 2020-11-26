import Link from 'next/link';
import renderHTML from 'react-render-html';
import moment from 'moment';
import { API } from '../../config';


const SmallCard=({job})=>{
    return(
        
         <main>
           <Link href={`/jobs/${job.slug}`}>
            <a>
             <img className="img-slider mob-image-slider"  src={`${API}/job/photo/${job.slug}`} alt={job.title} />
              </a>
              </Link>
              <div style={{maxHeight:'6rem',overflow:'hidden'}}>
                <Link href={`/jobs/${job.slug}`}>
                  <a>
                  <h3 className="small text-dark"  style={{fontFamily:`'Source Serif Pro' ,serif`,lineHeight:'1.8rem',padding:'0.6rem' }}>{job.title}</h3>
                  </a>
                </Link>
                </div>
                <div className="author extra-small"  style={{display: "flex" ,alignContent:'flex-end'}}>
                
                  <p className="author text-light-gray p-1">|Published {moment(job.updatedAt).fromNow()} </p>
                </div>
          </main>
        
    
    )
}
export default SmallCard;