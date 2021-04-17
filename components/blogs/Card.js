import Link  from 'next/link';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import React from 'react';
import renderHTML from 'react-render-html';
import moment from 'moment';
import { API } from '../../config';
const FacebookIcon= dynamic(async ()=>import( '@material-ui/icons/Facebook'));
const LinkedInIcon=dynamic(async ()=>import('@material-ui/icons/LinkedIn')) ;
const TwitterIcon =dynamic(async()=>import('@material-ui/icons/Twitter')) ;
const InstagramIcon =dynamic(async()=>import('@material-ui/icons/Instagram')) ;

const Card=({blog})=>{
    const showBlogCategories = blog =>
        blog.categories.map((c, i) => (
            <Link key={i} href={`/categories/${c.slug}`}>
                <a style={{padding:" 0 0.8rem", marginBottom:'0.4rem'}}  className="btn nbtn btn-danger "><h5>{c.name}</h5></a>
            </Link>
        ));

        const myLoader = ({ src }) => {
            return `${API}/blog/photo/${blog.slug}` 
          }
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
                  <div  style={{maxHeight: '400px', width: '100%', marginBottom: '3rem'}}>
                      <Image  loader={myLoader}  className="nbtn" src={`${API}/blog/photo/${blog.slug}`} width={1000} height={400} alt={blog.title} />
                       </div>                        <div> {renderHTML(blog.excerpt)}
                         </div>
                     </div>
                      <ul> 
                      <li> <a href={`/blogs/${blog.slug}`} className="btn btn-primary nbtn  ">View to Discuss</a></li>
                      </ul> 
                    
                 
            </>
        )
}
export default Card;