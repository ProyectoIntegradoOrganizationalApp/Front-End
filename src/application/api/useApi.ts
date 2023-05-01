import { useState } from "react"

export const useApi = <T> () => {

    const [data, setData] = useState<T>();
    const [error, setError] = useState<{error: boolean, message: string}>();
    const [loading, setLoading] = useState<boolean>(false);

    const fetchData = async ( url: string, content: any ) => {
        setLoading(true);

        const response = await fetch( url, {
            method: content.method,
            headers: content.headers,
            body: JSON.stringify(content.body)
        })

        const data = await response.json();
            
        if( data.error ) {
            setError({error: true, message: data.message});
        }

        if( !data.error && data.token != '' ) {
            setData(data);
            setError({error: false, message: ''})
        }

        setLoading(false);
    }
    
    return { data, error, loading, fetchData };

}