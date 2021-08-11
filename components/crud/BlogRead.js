import Link from 'next/link';
import React,{ useState, useEffect } from 'react';
import { getCookie, isAuth } from '../../actions/auth';
import { list, removeBlog } from '../../actions/blog';
import moment from 'moment';



const BlogRead = ({ username }) => {
    const [blogs, setBlogs] = useState([]);
    const [message, setMessage] = useState('');
    const token = getCookie('token');


    

    useEffect(() => {
        loadBlogs();
    }, []);

    const loadBlogs = () => {
        list(username).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setBlogs(data);
            }
        });
    };

    const deleteBlog = slug => {
        removeBlog(slug, token).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setMessage(data.message);
                loadBlogs();
            }
        });
    };

    const deleteConfirm = slug => {
        let answer = window.confirm('Are you sure you want to delete your blog?');
        if (answer) {
            deleteBlog(slug);
        }
    };

    const showUpdateButton = blog => {
        if (isAuth() && isAuth().role === 0) {
            return (
                
                    <a  href={`/user/crud/${blog.slug}`} className="btn nbtn btn-success">Update</a>
                
            );
        } else if (isAuth() && isAuth().role === 1) {
            return (
                
             <a href={`/admin/crud/${blog.slug}`} className="m-2 btn nbtn btn-success">Update</a>
                
            );
        }
    };

    const showAllBlogs = () => {
        return blogs.map((blog, i) => {
            return (
                <div key={i} className="p-1">
                    <Link href={`/blogs/${blog.slug}`}>
                    <a>
                     <h2  className="text-dark small   " style={{textAlign: 'justify',fontFamily:`'Source Serif Pro' ,serif` ,lineHeight:'1.9rem'}}>
                        {blog.title}
                        </h2>
                    </a>
                    </Link>
                    <p className="extra-small text-light-gray ">
                        Written by {blog.postedBy.name} | Published on {moment(blog.updatedAt).fromNow()}
                    </p>
                    <button className="btn btn-danger nbtn" onClick={() => deleteConfirm(blog.slug)}>
                        Delete
                    </button>
                    {showUpdateButton(blog)}
                </div>
            );
        });
    };

    return (
        <React.Fragment>
            <div className="container">
            <h2 className="large text-primary my-">Manage Blogs</h2>
            <div className="line"></div>
                <div className="blog">
                   
                    {showAllBlogs()}
                </div>
            </div>
        </React.Fragment>
    );
};

export default BlogRead;