import { useEffect, useState } from "react"

export const useApi = <T>( url: string ) => {

    const [data, setData] = useState<T>();
    const [error, setError] = useState<Error>();
    const [loading, setLoading] = useState<boolean>(false);

    useEffect( () => {
        (
            async function(){
                setLoading(true);

                const data = await fetch(url)
                    .then(res => res.json())
                    .then(data => setData(data))
                    .catch(err => setError(err))
                    .finally(() => setLoading(false))

                
            }
        )
    }, [url]);

    console.log(data, error, loading)
    
    return { data, error, loading};

}