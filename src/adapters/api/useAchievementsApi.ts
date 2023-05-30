import { useEffect, useState } from "react";

import axios from 'axios';

import { useAuth } from "../../hooks/useAuth";

import { ApiError } from '../../domain/ApiError.interface';
import { AchievementDTO } from "../../domain/achievement/AchievementDTO.interface";

interface AchievementResponse {
    total: number,
    achievements: Array<AchievementDTO & { states: Array<number>}>
}

/**
 * Hook de conexión con la Base de datos para la vista de Profile.
 * @returns 
 */
export const useAchievementsApi = () => {

    /**
     *  Hook de autenticación del que recogemos el usuario.
     */
    const { user } = useAuth();

    /**
     *  Variables reactivas necesarias para el funcionamiento del Hook
     */
    const [data, setData] = useState<AchievementResponse>();
    const [error, setError] = useState<ApiError>();
    const [loading, setLoading] = useState<boolean>(false);

    /**
     *  Variable de entorno con la información de la API
     */
    const API = import.meta.env.VITE_API_URL;

    /**
     *  Efecto que carga los datos al llamar al hook, y que setea las variables necesarias
     *  para su funcionamiento.
     */
    useEffect(() => {
        let ignore = false;
        setLoading(true);
        
        axios.get<AchievementResponse | ApiError>(`${API}/achievements`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${user?._token}`
            }
        }).then( data => {
            if ( !ignore ) {
                handleData(data.data);
            }
        }).catch( err => {
            const error: ApiError = {error: true, message: err};
            handleData(error);
        })
        
        return () => {
            ignore = true;
        }
    }, []);

    /**
     *  Función que maneja los datos que salen de la API.
     *  @param info 
     */
    const handleData = ( info: AchievementResponse | ApiError ) => {

        /**
         * Hay Error
         */
        if( info && "error" in info && info.error ) {
            setError(info);
        }
        
        /**
         * Si no hay error
         */
        if( info && "achievements" in info ) {
            // Quitamos los errores en caso de que los halla
            setError(undefined);
            setData(info)
            // Transformamos el objecto que nos llega con los mappers a algo que nuestra app entiende
            // let userData: Profile = ProfileMapper.prototype.mapTo(info);
            // setData(userData);
        }

        setLoading(false);
    }


    return { data, error, loading };
}