import { useEffect, useState } from 'react';

import axios, { AxiosHeaders, AxiosResponse } from 'axios';

import { ApiError } from "../../domain/ApiError.interface";
import { UserProjectDTO } from '../../domain/user/UserProjectDTO.interface';
import { useAuth } from '../../hooks/useAuth';
import { UserProject } from '../../domain/user/UserProject.interface';

import { useAxios } from './useAxios';
import { RequestParams } from '../../domain/RequestParams.interface';

/**
 * Hook para la conexión con los endpoints del back-end que se
 * encargan de hacer las peticiones sobre proyectos.
 */
export const useProjectsApi = ( fetch: boolean ) => {

    const { user } = useAuth();

    const [data, setData] = useState<Array<UserProject>>();
    const [error, setError] = useState<ApiError>();
    const [loading, setLoading] = useState<boolean>(false);

    /**
     *  Efecto que maneja el ciclo de vida de la API
     */
    useEffect(() => {
        // Para así poder usar el hook sin realizar otra query.
        if( fetch ) {
            fetchData();
        }
    }, [])

    const API = import.meta.env.VITE_API_URL;

    /**
     *  Función que fetchea los datos de los proyectos, se debe de llamar desde un 
     *  efecto, para que el objeto de usuario ya haya cargado.
     */
    const fetchData = () => {
        setLoading(true);
        
        axios.get<Array<UserProject> | ApiError>(`${API}/user/${user?.id}/projects`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${user?._token}`
            }
        }).then( data => {
            handleData(data.data);
        }).catch( err => {
            const error: ApiError = {error: true, message: err};
            handleData(error);
        })
    }

    /**
     *  Función que recibe los parámetros necesarios para hacer la petición al back y crear un
     *  proyecto.
     *  @param name     
     *  @param description 
     */
    const createProject = ( name: string, description: string ) => {
        setLoading(true);

        const props: RequestParams = {
            url: `${API}/project`,
            method: "POST",
            headers: new AxiosHeaders({
                "Content-Type": "application/json",
                Authorization: `Bearer ${user?._token}`
            }),
            data: {
                name: name,
                description: description
            }
        }
        
        /**
         *  Petición usando el Hook de Axios
         */
        useAxios(props)
            .then( data => console.log(data))
            .catch( err => console.log("err"))
            .finally(() => {
                setLoading(false)
            });

    }

    const removeUserProjects = () => {

    }

    const editProject = () => {

    }

    /**
     *  Función que maneja los datos que salen de la API.
     *  @param info 
     */
    const handleData = ( info: Array<UserProjectDTO> | ApiError ) => {

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
        if( info && "user" in info ) {
            // Quitamos los errores en caso de que los halla
            setError(undefined);
        }

        setLoading(false);
    }

    return { data, error, loading, createProject, removeUserProjects, editProject };

}