import React from 'react'
import { useState, useEffect } from "react"
import BlogList from "./BlogList";
import Loading from "./Loading";
import useFetch from "./useFetch";
const Home = () => {

    const {data: blogs, isPending, error, handle_delete} = useFetch("http://localhost:5000/blogs");

return (

    <div className="home">
        {error && <h1 className="error-message">Error: { error }</h1>}
        {isPending && <Loading />}
        {!isPending && blogs && <BlogList blogs={blogs} handle_delete={handle_delete}/>}
    </div>
);
}
 
export default Home;