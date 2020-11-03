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
                <Link href={`/jobs/${job.slug}`}>
                  <a>
                  <h3 className="small text-primary p-1"  style={{fontFamily:`'Source Serif Pro' ,serif`,lineHeight:'1.8rem' }}>{job.title}</h3>
                  </a>
                </Link>
               
                <div className="author extra-small"  style={{display: "flex"}}>
                
                  <p className="author text-light-gray  my-1 p-1">|Published {moment(job.updatedAt).fromNow()} by {' '}</p>
                </div>
          </main>
        
    
    )
}
export default SmallCard;