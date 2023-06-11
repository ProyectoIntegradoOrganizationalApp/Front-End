import { useEffect, useState } from "react"

import { AxiosHeaders } from "axios";

import { useAxios } from "./useAxios"
import { useAuth } from "../../hooks/useAuth";

import { RequestParams } from "../../domain/RequestParams.interface"
import { ApiError } from "../../domain/ApiError.interface";

export const useAppApi = () => {

    const { user } = useAuth();

    const [data, setData] = useState<any[]>();
    const [error, setError] = useState<ApiError>();
    const [loading, setLoading] = useState<boolean>(false);

    const API = import.meta.env.VITE_API_URL;

    /**
     *  Función para fetchear datos sobre las aplicaciones de un
     *  proyecto
     */
    const fetchApps = ( idProject: string ) => {
        setLoading(true);

        const props: RequestParams = {
            url: `${API}/apps/${idProject}`,
            method: "GET",
            headers: new AxiosHeaders({
                "Content-Type": "application/json",
                Authorization: `Bearer ${user?._token}`
            }),
        }

        useAxios(props)
            .then( data => {
                handleData(data.data);
            })
            .catch( err => {
                handleData({error: true, message: err.message});
            })
            .finally(() => {
                setLoading(false);
            })
    }

    /**
     *  Función para manejar los datos de las apps de un proyecto
     */
    const handleData = ( data: any | ApiError) => {

        // Si hay Errores
        if( "error" in data && error?.error ) {
            setError(data);
        }

        // Si no los hay
        if( Array.isArray(data) ) {
            setData(data);
        }

    }

    return { data, error, loading, fetchApps };

}