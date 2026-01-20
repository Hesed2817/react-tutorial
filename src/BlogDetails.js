import { useParams } from "react-router";
import {useNavigate} from 'react-router-dom';
import useFetch from "./useFetch";

function BlogDetails() {

    const navigate = useNavigate();
    const { id } = useParams();
    const { data: blog, isLoading, setIsLoading, error } = useFetch(`http://localhost:8000/blogs/${id}`);

    function handleDelete() {
        var userChoice = window.confirm("Are you sure you want to delete this blog?");
        if (userChoice) {
            fetch('http://localhost:8000/blogs/' + id, {
                method: 'DELETE'
            }).then(() => {
                setIsLoading(false);
                alert("Blog deleted !");
                window.location.href = '/';
            })
                .catch((err) => {
                    console.error(err);
                    setIsLoading(false)
                });
        } else {
            return;
        }
    }

    if (isLoading) {
        return <div className="content">Loading...</div>;
    } else if (error) {
        return <div className="content">{error}</div>;
    }

    return (
        <div className="blog-details">
            <button className="back-btn" onClick={()=>navigate(-1)}>↩&nbsp;&nbsp;Back</button>
            <article>
                <h2>{blog.title}</h2>
                <p>Written by <span className="capitalize"><strong>{blog.author}</strong></span></p>
                <div>{blog.body}</div>
                <div>
                    {!isLoading && <button onClick={() => handleDelete()}>Delete Blog</button>}
                    {isLoading && <button disabled>Deleting...</button>}
                </div>
            </article>
        </div>
    );
}

export default BlogDetails;