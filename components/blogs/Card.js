import Link from 'next/link';
import React from 'react';
import renderHTML from 'react-render-html';
import moment from 'moment';
import { API } from '../../config';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

const Card=({blog})=>{
    const showBlogCategories = blog =>
        blog.categories.map((c, i) => (
            <Link key={i} href={`/categories/${c.slug}`}>
                <a style={{padding:" 0 0.8rem", marginBottom:'0.4rem'}}  className="btn nbtn btn-danger "><h5>{c.name}</h5></a>
            </Link>
        ));


    return(
        <>
           <header >
                    <Link href={`/blogs/${blog.slug}`}>
                    <a>
                     <h1  className="text-dark small p-1  " style={{fontFamily:`'Source Serif Pro' ,serif` ,lineHeight:'1.9rem'}}>
                        {blog.title}
                        </h1>
                    </a>
                    </Link>
                    <div className="p-1" style={{display: "flex",alignItems:'left',flexWrap:'wrap'}}>
                       {showBlogCategories(blog)}
                  </div>
                </header>
                   <div className="blog-top">
                   <div>
                   <div className="profile-img-border round-image" style={{alignItems:'center'}}>
                   <Link href={`/profile/${blog.postedBy.username}`}>
                       <a>
                       <img loading='lazy' src={`${API}/user/photo/${blog.postedBy.username}`} alt={blog.postedBy.name} className="profile-img round-image" />
                       </a>
                   </Link>
                   </div>
                   <small className="text-primary author extra-small ">| Published {moment(blog.updatedAt).format("MMM DD YYYY")}</small>
                   </div>
                      <div>
                       
                           <Link href={`/profile/${blog.postedBy.username}`}>
                           <a>
                           <h2  className="small text-dark">{blog.postedBy.name} </h2>
                           </a>
                           </Link>
                           <div>
                               <small  className="text-light-gray extra-small">Follow me on :</small>
                               <a href={`${blog.postedBy.facebook}`} target="_blank"><FacebookIcon /></a>
                               <a href={`${blog.postedBy.linkedin}`} target="_blank"><LinkedInIcon /></a>
                               <a href={`${blog.postedBy.insta}`} target="_blank"><InstagramIcon /></a>
                               <a href={`${blog.postedBy.twitter}`} target="_blank"><TwitterIcon /></a>
                           </div>
                      </div>
                   </div>
                  <div className="blog-body">
                       <img className="nbtn " src={`${API}/blog/photo/${blog.slug}`} style={{maxHeight: '350px', width: '100%', marginBottom: '3rem'}}  alt={blog.title} />
                        <div> {renderHTML(blog.excerpt)}
                         </div>
                     </div>
                      <ul> 
                      <li> <a href={`/blogs/${blog.slug}`} className="btn btn-primary nbtn  ">View to Discuss</a></li>
                      </ul> 
                    
                 
            </>
        )
}
export default Card;