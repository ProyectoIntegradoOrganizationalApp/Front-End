import { useState } from "react"

export const useApi = <T> () => {

    const [data, setData] = useState<T>();
    const [error, setError] = useState<Error>();
    const [loading, setLoading] = useState<boolean>(false);

    const fetchData = async ( url: string, content: any ) => {
        setLoading(true);

        await fetch( url, {
            method: content.method,
            headers: content.headers,
            body: JSON.stringify(content.body)
        })
            .then(data => data.json())
            .then(data => setData(data))
            .catch(err => setError(err));

        console.log(data)

        setLoading(false);

    }
    
    return { data, error, loading, fetchData };

}