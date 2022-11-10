import React, { useState } from 'react'

const Create = () => {

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("Basheer");
    const [submitted, setSubmitted] = useState(false);

    const refreshPage = ()=>{
        window.location.reload();
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author}
        setTitle(""); setBody(""); setAuthor("Basheer");
        fetch("http://localhost:5000/blogs", {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(blog)
        })
        .then(()=>{setSubmitted(true)})
    }
    return ( 
        <div className="create">
            
            <h1 className="create-title">Create a new Blog</h1>
            {!submitted && (
            <section>
                <form action="" className="create-form" onSubmit={handleSubmit}>
                    <label className="label-title">Blog title</label>
                    <input type="text" required className="input-title" value={title} onChange={(e)=> setTitle(e.target.value)}/>

                    <label className="label-body">Blog body</label>
                    <textarea required className="input-body" value={body} onChange={(e)=> setBody(e.target.value)}/>

                    <label className="label-select">Select Author</label>
                    <select className="slect-author" value={author} onChange={e=>setAuthor(e.target.value)}>
                        <option value="Essa">Essa</option>
                        <option value="Mohammad">Mohammad</option>
                        <option value="Mona">Mona</option>
                        <option value="Basheer">Basheer</option>
                    </select>
                    <button className="add-blog">Add Blog</button>
                    
                </form>
                
                <div className="preview">
                        <h1>Preview</h1>
                        <h2>{title}</h2>
                        <h3>By. {author}.</h3>
                        <p>{body}</p>
                </div>
        </section>
        )}
        {submitted && (
            <div className="submitted">
                <h1>Blog is Created</h1>
                <button onClick={refreshPage}>Create New</button>
            </div>
        )}
        </div>
     );
}
 
export default Create;