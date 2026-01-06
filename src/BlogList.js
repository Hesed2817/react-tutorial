function BlogList({ blogs, title, handleDelete }) {
    return (
        <div className="blog-list">
            <h1>{title}</h1>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <button onClick={() => handleDelete(blog.id)}>Delete</button>
                </div>
            ))}

            {blogs.length > 0 ? "" : <p className="blog-preview">There are no blogs yet.. 😞</p>}
        </div>
    );
}

export default BlogList;