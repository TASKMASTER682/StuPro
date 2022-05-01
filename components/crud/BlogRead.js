import Link from 'next/link';
import React,{ useState, useEffect } from 'react';
import { getCookie, isAuth } from '../../actions/auth';
import { list, removeBlog } from '../../actions/blog';
import {format} from 'date-fns';



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
                
                    <a  href={`/user/crud/${blog.slug}`} className="p-2 mx-2 font-bold bg-teal-400 rounded-md">Update</a>
                
            );
        } else if (isAuth() && isAuth().role === 1) {
            return (
                
             <a href={`/admin/crud/${blog.slug}`} className="p-2 mx-2 font-bold bg-teal-400 rounded-md">Update</a>
                
            );
        }
    };

    const showAllBlogs = () => {
        return blogs.map((blog, i) => {
            return (
                <div key={i} className="p-4 my-4 rounded-md shadow-md shadow-green-400">
                    <Link href={`/blogs/${blog.slug}`}>
                    <a>
                     <h2  className="text-2xl font-bold ">
                        {blog.title}
                        </h2>
                    </a>
                    </Link>
                    <p className="text-sm text-gray-400 ">
                        Written by {blog.postedBy.name} | Published on {format(new Date(blog.updatedAt),'dd MMM yyyy')}
                    </p>
                    <button className="p-2 my-2 font-bold bg-red-400 rounded-md " onClick={() => deleteConfirm(blog.slug)}>
                        Delete
                    </button>
                    {showUpdateButton(blog)}
                </div>
            );
        });
    };

    return (
        <>
            <div className="px-3 mb-40 lg:pt-20 lg:px-20 pt-14">
            <h2 className="text-4xl font-bold text-teal-500 ">Manage Blogs</h2>
                <div >
                   
                    {showAllBlogs()}
                </div>
            </div>
        </>
    );
};

export default BlogRead;