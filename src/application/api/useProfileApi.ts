import { useEffect, useState } from "react";

import axios from 'axios';

import { useAuth } from "../customHooks/useAuth";
import { useErrorHandler } from "../customHooks/useErrorHandler";

import { ApiError } from '../../domain/ApiError.interface';
import { Profile } from "../../domain/Profile.interface";
import { ProfileMapper } from "../../domain/mappers/ProfileMapper";
import { ProfileDTO } from "../../domain/DTO/ProfileDTO.interface";


type ProfileApiResponse = {
    data?: ProfileDTO,
    error?: ApiError
}

/**
 * Hook de conexión con la Base de datos para la vista de Profile.
 * @returns 
 */
export const useProfileApi = () => {

    /**
     *  Hook de autenticación del que recogemos el usuario.
     */
    const { user } = useAuth();

    /**
     *  Variables reactivas necesarias para el funcionamiento del Hook
     */
    const [data, setData] = useState<Profile>();
    const [error, setError] = useState<ApiError>();
    const [loading, setLoading] = useState<boolean>(false);

    /**
     *  Hook de Manejo de errores.
     */
    const { setInternalError } = useErrorHandler();

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
        
        axios.get<ProfileDTO | ApiError>(`${API}/profile/${user?.id}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${user?._token}`
            }
        }).then( data => {
            if( !ignore && data.status == 200 ) {
                handleData(data.data);
            }

            setLoading(false);
        });
        
        return () => {
            ignore = true;
        }
    }, []);

    /**
     *  Función que maneja los datos que salen de la API.
     *  @param info 
     */
    const handleData = ( info: ProfileDTO | ApiError ) => {

        console.log(info)

        /**
         * Hay Error
         */
        if( info && "error" in info && info.error ) {
            setError(info);
            setInternalError(info);
        }
        
        /**
         * Si no hay error
         */
        if( info && "user" in info ) {
            //TODO => Mapear ProfileDTO a Profile y hacer un setState
            let userData: Profile = ProfileMapper.prototype.mapTo(info);
            setData(userData);
        }
    }


    return { data, error, loading };
}