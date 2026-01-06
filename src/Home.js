import BlogList from "./BlogList";
import useFetch from "./useFetch";


function Home() {
    const { data: blogs, isLoading, error, setData } = useFetch('http://localhost:8000/blogs');

    function handleDelete(id) {
        const newBlogs = blogs.filter((blog) => blog.id !== id);
        setData(newBlogs);
    }

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />}
        </div>
    );
}

export default Home;  