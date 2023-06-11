import { useEffect, useState } from "react";

import { AxiosHeaders } from 'axios';

import { useAuth } from "../../hooks/useAuth";

import { ApiError } from '../../domain/ApiError.interface';
import { Profile } from "../../domain/profile/Profile.interface";
import { ProfileMapper } from "../mappers/ProfileMapper";
import { ProfileDTO } from "../../domain/profile/ProfileDTO.interface";
import { RequestParams } from "../../domain/RequestParams.interface";
import { useAxios } from "./useAxios";

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
     *  Variable de entorno con la información de la API
     */
    const API = import.meta.env.VITE_API_URL;

    /**
     *  Efecto que carga los datos al llamar al hook, y que setea las variables necesarias
     *  para su funcionamiento.
     */
    useEffect(() => {
        setLoading(true);
        
        const props: RequestParams = {
            url: `${API}/profile/${user?.id}`,
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
    }, []);

    /**
     *  Función que maneja los datos que salen de la API.
     * 
     *  TODO => CAMBIAR EL TIPO A DTO Y MAPEARLO CUANDO EL MODELO
     *  DEL BACK ESTE TERMINADO
     * 
     *  @param info 
     */
    const handleData = ( info: Profile | ApiError ) => {

        // console.log(info)

        /**
         * Hay Error
         */
        if( info && "error" in info && info.error ) {
            setError(info);
        }
        
        /**
         * Si no hay error
         */
        if( info && "user" in info ) {
            // Quitamos los errores en caso de que los halla
            setError(undefined);

            // Transformamos el objecto que nos llega con los mappers a algo que nuestra app entiendo
            setData(info);
        }

        setLoading(false);
    }


    return { data, error, loading };
}