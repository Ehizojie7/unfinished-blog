

const BlogList = ({blogs, title}) => {
    return(
<div className="blog-list">
    {blogs.map((blog)=>{
        return(
        <div className="blog-preview" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>{blog.author}</p>
        </div>
        )
    })}
</div>
)
};

export default BlogList;