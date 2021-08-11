import Link from 'next/link';
import dynamic from 'next/dynamic';
import React from 'react';
import renderHTML from 'react-render-html';
import moment from 'moment';
import { API } from '../../config';
const FacebookIcon = dynamic(async () => import('@material-ui/icons/Facebook'));
const LinkedInIcon = dynamic(async () => import('@material-ui/icons/LinkedIn'));
const TwitterIcon = dynamic(async () => import('@material-ui/icons/Twitter'));
const InstagramIcon = dynamic(async () => import('@material-ui/icons/Instagram'));
import CatInSlug from '../reusables/SlugCat'
import Photo from '../reusables/Photo';

const Card = ({ blog }) => {
    // const showBlogCategories = blog =>
    //     blog.categories.map((c) => (
    //         <Link key={c._id} href={`/categories/${c.slug}`}>
    //             <p style={{ padding: " 0 0.8rem", marginBottom: '0.4rem' }} className="btn nbtn btn-danger ">#<strong>{c.name}</strong></p>
    //         </Link>
    //     ));


    return (
        <>
            <div >
                <Link href={`/blogs/${blog.slug}`}>
                <a><h2 className="text-success small p-1  " style={{ lineHeight: '1.9rem' }}>{blog.title}</h2></a>


                </Link>
                {/* <div className="p-1" style={{ display: "flex", alignItems: 'left', flexWrap: 'wrap' }}>
                    {showBlogCategories(blog)}
                </div> */}
                <CatInSlug newCat='categories' cats={blog.categories} />
            </div>
            <div className="blog-top">
                <div>
                    <div className="profile-img-border round-image" style={{ alignItems: 'center' }}>
                        <Link href={`/profile/${blog.postedBy.username}/public-profile`}>
                            <a>
                                <img loading='lazy' src={`${API}/user/photo/${blog.postedBy.username}`} alt={blog.postedBy.name} className="profile-img round-image" />
                            </a>
                        </Link>
                    </div>
                    <small className="text-primary author extra-small ">| Published {moment(blog.updatedAt).format("MMM DD YYYY")}</small>
                </div>
                <div>

                    <Link href={`/profile/${blog.postedBy.username}/public-profile`}>
                        <a>
                            <h3 className="small text-dark">{blog.postedBy.name} </h3>
                        </a>
                    </Link>
                    <div>
                        <small className="text-light-gray extra-small">Follow me on :</small>

                        <a href={`${blog.postedBy.facebook}`} target="_blank" rel='noopener noreferrer'><FacebookIcon /></a>
                        <a href={`${blog.postedBy.linkedin}`} target="_blank" rel='noopener noreferrer'><LinkedInIcon /></a>
                        <a href={`${blog.postedBy.insta}`} target="_blank" rel='noopener noreferrer'><InstagramIcon /></a>
                        <a href={`${blog.postedBy.twitter}`} target="_blank" rel='noopener noreferrer'><TwitterIcon /></a>

                    </div>
                </div>
            </div>
            <div className="blog-body">
            <Photo photo={ `${API}/blogs/photo/${blog.slug}`} content={blog} />
                <div className="my-1"> {renderHTML(blog.excerpt)} </div>
            </div>
            <ul>
                <li> <a href={`/blogs/${blog.slug}`} className="btn btn-primary nbtn  ">View to Discuss</a></li>
            </ul>


        </>
    )
}
export default Card;