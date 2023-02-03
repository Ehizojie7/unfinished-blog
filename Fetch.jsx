import { useState, useEffect } from "react"

const useFetch = (url) => {
    const [blogs, setBlogs] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    

    useEffect(() => {
        setTimeout(() => {
          fetch(url)
            .then((res) => {
              if (!res.ok) {
                throw Error("could not fetch the data for that resource");
              }
              return res.json();
            })
            .then((data) => {
              setBlogs(data);
              setIsLoading(false);
              setError(null);
            })
            .catch((err) => {
                setIsLoading(false);
                setError(err.message);
                          });
        }, 1000);
        
      }, [url]);
      return { data: blogs, isLoading, error };
};      

    export default useFetch;