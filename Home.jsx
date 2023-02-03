import React from "react";
import BlogList from './BlogList';
import { useState } from "react";
import useFetch from './Fetch'


const Home = () => {
    const {data:blogs, isLoading, error} = useFetch('http://localhost:8000/blogs');
   

    return(
        <div className="home">
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}

        </div>
    );
}

export default Home;