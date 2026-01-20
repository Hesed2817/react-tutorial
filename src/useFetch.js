import { useState, useEffect } from "react";

function useFetch(url) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then((res) => {
                    if (!res.ok) {
                        throw Error("Could not fetch the data for that resource :(");
                    }
                    return res.json()
                })
                .then((data) => {
                    setData(data);
                    setIsLoading(false);
                    setError(null);
                })
                .catch((err) => {
                    setError(err.message);
                    setIsLoading(false);
                });
        }, 500);
    }, [url]);

    return {data, isLoading, setIsLoading, error}
}

export default useFetch;