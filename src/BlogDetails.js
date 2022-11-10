import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from './useFetch';
import Loading from './Loading';

const BlogDetails = () => {
    const {id} = useParams();
    const {data: blog, isPending, error, handle_delete} = useFetch("http://localhost:5000/blogs/" + id);
    return (
        <div className="BlogDetails">
            {error && <h1 className="error-message">Error: { error }</h1>}
            {isPending && <Loading />}
            {blog && (
                <article>
                    <h3 className="blog-title">{blog.title}</h3>
                    <h3 className="blog-author">By. {blog.author}</h3>
                    <p className="blog-body">{blog.body}</p>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;