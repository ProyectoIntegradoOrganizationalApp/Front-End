import { useEffect, useState } from "react";

import { AxiosHeaders } from 'axios';

import { useAuth } from "../../hooks/useAuth";

import { ApiError } from '../../domain/ApiError.interface';
import { RequestParams } from "../../domain/RequestParams.interface";
import { useAxios } from "./useAxios";

interface Response {
    error: boolean, 
    message: string
}

/**
 * Hook de conexión con la Base de datos para la vista de Profile.
 * @returns 
 */
export const useFriendApi = () => {

    /**
     *  Hook de autenticación del que recogemos el usuario.
     */
    const { user } = useAuth();

    /**
     *  Variables reactivas necesarias para el funcionamiento del Hook
     */
    const [data, setData] = useState<Response>();
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

    }, []);

    const fetchUsers = () => {

    }

    const addUser = ( guestId: string ) => {
        const props: RequestParams = {
            url: `${API}/friend/${guestId}`,
            method: "POST",
            headers: new AxiosHeaders({
                "Content-Type": "application/json",
                Authorization: `Bearer ${user?._token}`
            }),
            data: {
                title: "Be my friend!",
                message: `Hi there, ${user?.name} here, Wanna be friends?`
            }
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

    const removeUser = () => {
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
    }

    /**
     *  Función que maneja los datos que salen de la API.
     *  @param info 
     */
    const handleData = ( info: Response | ApiError ) => {

        /**
         * Hay Error
         */
        if( info && "error" in info && info.error ) {
            setError(info);
            setData({error: false, message: info.message});
        }
        
        /**
         * Si no hay error
         */
        if( info && !info.error ) {
            // Quitamos los errores en caso de que los halla
            setError(undefined);
            setData({error: false, message: info.message});
        }

        setLoading(false);
    }


    return { data, error, loading, addUser, removeUser };
}