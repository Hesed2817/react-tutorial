function BlogList({ blogs, title }) {
    return (
        <div className="blog-list">
            <h1>{title}</h1>
            {blogs.map((blog) => (
                <div className="blog-preview" onClick={() => {
                    window.location.href = `/blogs/${blog.id}`;
                }} key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by <span className="capitalize"><strong>{blog.author}</strong></span></p>
                </div>
            ))}

            {blogs.length > 0 ? "" : <div className="blog-preview"><p>There are no blogs yet.. 😞</p></div>}
        </div>
    );
}

export default BlogList;