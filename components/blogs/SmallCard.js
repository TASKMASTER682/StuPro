import Link from 'next/link';
import moment from 'moment';
import { API } from '../../config';


const SmallCard=({blog})=>{
    return(
        
         <main>
           <Link href={`/blogs/${blog.slug}`}>
            <a>
             <img className="img-slider mob-image-slider" src={`${API}/blog/photo/${blog.slug}`} alt={blog.title} />
              </a>
              </Link>
                <Link href={`/blogs/${blog.slug}`}>
                  <a>
                  <h3 className="small text-primary p-1" style={{justifyContent:'center', fontFamily:`'Source Serif Pro' ,serif`,lineHeight:'1.8rem' }} >{blog.title}</h3>
                  </a>
                </Link>
              
                <div className="author extra-small"  style={{display: "flex",paddingBottom:'0rem'}}>
                
                  <a href={`/profile/${blog.postedBy.username}`}>
                  <img className="p-1 round-image" src={`${API}/user/photo/${blog.postedBy.username}`}/>
                 
                  </a>
                
                <p className="author text-light-gray p-1 ">|Published {moment(blog.updatedAt).fromNow()} by {blog.postedBy.name}</p>
                </div>
          </main>
        
    
    )
}
export default SmallCard;