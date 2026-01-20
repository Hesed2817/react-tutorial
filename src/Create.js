import { useState } from "react";

function Create() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    function handleSubmit(e){
        e.preventDefault();
        const blog = { title, body, author };
        setIsLoading(true);
        console.log(blog);
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(blog)
        }).then(() => {
            setIsLoading(false);
            alert("Blog created successfully!");
            window.location.href = '/';
        })
            .catch((err) => console.error(err));
    }

    return (
        <div className="content">
            <div className="create">
                <h2>✍️ Add a New Blog</h2>
                <form onSubmit={handleSubmit}>
                    <label>Blog title:</label>
                    <input type="text" placeholder="Enter blog title..." required value={title} onChange={(e) => setTitle(e.target.value)} />

                    <label>Blog body:</label>
                    <textarea placeholder="Write your blog content here..." required value={body} onChange={(e) => setBody(e.target.value)}></textarea>

                    <label>Blog author:</label>
                    <select required 
                        value={author} 
                        onChange={(e) => setAuthor(e.target.value)
                    }>
                        <option value="" disabled> -- select author --</option>
                        <option value="hesed">hesed</option>
                        <option value="stroz">stroz</option>
                    </select>
                    {!isLoading && <button>Add Blog</button>}
                    {isLoading && <button disabled>Adding...</button>}
                </form>
            </div>
        </div>
    );
}

export default Create;