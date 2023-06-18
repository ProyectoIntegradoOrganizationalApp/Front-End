import { useState } from "react";

import { AxiosHeaders } from 'axios';

import { useAuth } from "../../hooks/useAuth";

import { ApiError } from '../../domain/ApiError.interface';
import { RequestParams } from "../../domain/RequestParams.interface";
import { useAxios } from "./useAxios";

interface UserData {
    email: string,
    id: string,
    lastname: string,
    level: number,
    name: string,
    photo: string
}

interface UserDataWrapper {
    users: UserData[]
}

/**
 * Hook de conexión con la Base de datos para la vista de Profile.
 * @returns 
 */
export const useProjectMemberApi = () => {

    /**
     *  Hook de autenticación del que recogemos el usuario.
     */
    const { user } = useAuth();

    /**
     *  Variables reactivas necesarias para el funcionamiento del Hook
     */
    const [userData, setUserData] = useState<UserData[]>();
    const [error, setError] = useState<ApiError>();
    const [loading, setLoading] = useState<boolean>(false);

    /**
     *  Variable de entorno con la información de la API
     */
    const API = import.meta.env.VITE_API_URL;

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
    const addUser = ( guestId: string, projectId: string ) => {

        setLoading(true);

        const props: RequestParams = {
            url: `${API}/user/${guestId}/project/${projectId}`,
            method: "POST",
            headers: new AxiosHeaders({
                "Content-Type": "application/json",
                Authorization: `Bearer ${user?._token}`
            }),
            data: {
                title: "Join My project!",
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

    const removeUser = ( guestId: string, projectId: string ) => {

        setLoading(true);

        const props: RequestParams = {
            url: `${API}/user/${guestId}/project/${projectId}`,
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
     *  Función que depura los datos de la API
     * 
     *  @param info 
     */
    const handleData = ( info: UserDataWrapper | ApiError ) => {

        console.log(info)

        if( info && "users" in info ) {
            setUserData([...info.users])
        }

        if( info && "error" in info ) {
            setError({ error: info.error, message: info.message })
        }

    }


    return { userData, error, loading, addUser, removeUser, fetchUsers };
}