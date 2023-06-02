import { useEffect, useState } from "react";

import { AxiosHeaders } from 'axios';

import { useAuth } from "../../hooks/useAuth";

import { ApiError } from '../../domain/ApiError.interface';
import { AchievementDTO } from "../../domain/achievement/AchievementDTO.interface";
import { RequestParams } from "../../domain/RequestParams.interface";
import { useAxios } from "./useAxios";
import { Achievement } from "../../domain/achievement/Achievement.interface";

interface AchievementResponse {
    total: number,
    achievements: Array<AchievementDTO & { states: Array<number>}>
}

/**
 * Hook de conexión con la Base de datos para la vista de Profile.
 * @returns 
 */
export const useAchievementsApi = ( fetch: boolean ) => {

    const { user } = useAuth();

    const [data, setData] = useState<any>();
    const [error, setError] = useState<ApiError>();
    const [loading, setLoading] = useState<boolean>(false);

    /**
     *  Efecto que maneja el ciclo de vida de la API
     */
    useEffect(() => {
        // Para así poder usar el hook sin realizar otra query.
        if( fetch ) {
            fetchAchievementData();
        }
    }, [])

    const API = import.meta.env.VITE_API_URL;

    /**
     *  Función que fetchea los datos de los proyectos, se debe de llamar desde un 
     *  efecto, para que el objeto de usuario ya haya cargado.
     */
    const fetchAchievementData = () => {
        setLoading(true);

        /**
         * Props de la petición
         */
        const props: RequestParams = {
            url: `${API}/achievements`,
            method: "GET",
            headers: new AxiosHeaders({
                "Content-Type": "application/json",
                Authorization: `Bearer ${user?._token}`
            }),
        }
        
        useAxios(props)
            .then( data => handleData(data.data))
            .catch( err => {
                handleData({error: true, message: err});
            })
            .finally(() => {
                setLoading(false);
            });
    }

    /**
     *  Función que maneja los datos que salen de la API.
     *  @param info 
     */
    const handleData = ( info: any | ApiError ) => {

        console.log(info)

        /**
         * Hay Error
         */
        if( info && "error" in info && info.error ) {
            setError(info);
        }
        
        /**
         * Si no hay error
         */
        if( info && "projects" in info ) {
            // Quitamos los errores en caso de que los halla
            setError(undefined);


        }

        if( info ) {
            // Quitamos los errores en caso de que los halla
            setError(undefined);
            
            
        }

        setLoading(false);
    }

    return { data, error, loading };

}