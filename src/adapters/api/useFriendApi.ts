import { useEffect, useState } from "react";

import { AxiosHeaders } from 'axios';

import { useAuth } from "../../hooks/useAuth";

import { ApiError } from '../../domain/ApiError.interface';
import { RequestParams } from "../../domain/RequestParams.interface";
import { useAxios } from "./useAxios";

/**
 * Hook de conexión con la Base de datos para la vista de Profile.
 * @returns 
 */
export const useFriendApi = ( fetch: boolean ) => {

    /**
     *  Hook de autenticación del que recogemos el usuario.
     */
    const { user } = useAuth();

    /**
     *  Variables reactivas necesarias para el funcionamiento del Hook
     */
    const [friendData, setFriendData] = useState<any[]>();
    const [userData, setUserData] = useState<any[]>();
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
        if( fetch ) {
            fetchFriends();
        }
    }, []);

    /**
     *  Función que fetchea los amigos del usuario.
     */
    const fetchFriends = () => {
        setLoading(true);

        const props: RequestParams = {
            url: `${API}/friends`,
            method: "GET",
            headers: new AxiosHeaders({
                "Content-Type": "application/json",
                Authorization: `Bearer ${user?._token}`
            }),
        }

        useAxios(props)
            .then( data => {
                handleData(data.data)
            })
            .catch( err => {
                handleData({error: true, message: err});
            })
            .finally(() => {
                setLoading(false);
            })
    }

    /**
     *  Función que fetchea los usuario de la app por el nombre
     *  que se le pase.
     * 
     *  @param name
     */
    const fetchUsers = ( name: string ) => {
        setLoading(true);

        if( name.length == 0 ) {
            setUserData(undefined);
            return;
        }

        const props: RequestParams = {
            url: `${API}/users/${name}`,
            method: "GET",
            headers: new AxiosHeaders({
                "Content-Type": "application/json",
                Authorization: `Bearer ${user?._token}`
            }),
        }

        useAxios(props)
            .then( data => {
                handleData(data.data)
            })
            .catch( err => {
                handleData({error: true, message: err});
            })
            .finally(() => {
                setLoading(false);
            })
    }

    /**
     *  Función que fetchea los amigos del usuario actual
     * 
     *  @param guestId 
     */
    const addFriend = ( guestId: string ) => {
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

    const removeFriend = ( guestId: string ) => {
        console.log(guestId)
        const props: RequestParams = {
            url: `${API}/friend/${guestId}`,
            method: "DELETE",
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

        console.log(info);

        /**
         *  Hay Error
         */
        if( info && "error" in info && info.error ) {
            setError(info);
        }
        
        
        /**
         *  Si no hay error llamamos a la función que se encarga de manejar los datos
         *  dependiendo de la respuesta del servidor
         */
        if( info && !info.error ) {
            handleInfo(info);
        }

    }

    const handleInfo = ( info: any ) => {

        /**
         *  Petición de AMIGOS
         */
        if( "friends" in info ) {
            setError(undefined);
            setFriendData(info.friends);
        }

        /**
         *  Petición de USUARIOS
         */
        if( "users" in info ) {
            setError(undefined);
            setUserData(info.users);
        }

        
    }


    return { friendData, userData, error, loading, addFriend, removeFriend, fetchUsers };
}