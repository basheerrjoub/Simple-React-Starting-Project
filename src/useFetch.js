import { useState, useEffect } from "react";

const useFetch = (url)=> {
    const [data, setData] = useState(null);
    const [isPending, set_is_pending] = useState(true);
    const [error, setError] = useState(null);

    const handle_delete = (id) => {
        const newBlogs = data.filter((blog)=> blog.id != id)
        setData(newBlogs)
        fetch("http://localhost:5000/blogs/" + id, {
            method: "delete",
        })
        .then(()=>{window.location.reload();})
    }

    const abortFetch = new AbortController();

    useEffect(()=>{
        fetch(url, {signal: abortFetch.signal})
        .then(res => {
            if(!res.ok)
                throw Error("Couldn't Find Resources");
            return res.json();
        })
        .then(data => {
            setTimeout(()=>{
                setData(data);
                set_is_pending(false);

            }, 1000);
            return () => abortFetch.abort();

            
        })
        .catch(e => {
            if (e.message === "AbortError") {
                console.log("Fetch Aborted")
            }
            else {
                setError(e.message);
                set_is_pending(false)
            }
        });
        
        
    }, [url]);

    return {data, isPending, error, handle_delete}
}

export default useFetch