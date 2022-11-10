import React from 'react'
import {Link} from 'react-router-dom'

const BlogList = (props) => {
    const blogs = props.blogs;
    const handle_delete = props.handle_delete



return (  
    <div className="center-home">
        {blogs.map((blog) => (
            <div className="preview-blog" key={blog.id}>
                <Link to={`blogs/${blog.id}`} className='list-title'>
                    <h3>{ blog.title }</h3>
                </Link>
                <p>by { blog.author }</p>
                <button id="delete-button" onClick={()=> handle_delete(blog.id)}>X</button>
            </div>
        ))}
    </div>
);
}
 
export default BlogList;