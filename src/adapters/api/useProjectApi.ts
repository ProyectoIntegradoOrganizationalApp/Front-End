import { useEffect, useState } from 'react';
import { useAxios } from './useAxios';
import { AxiosHeaders } from 'axios';

import { useAuth } from '../../hooks/useAuth';

import { RequestParams } from '../../domain/RequestParams.interface';
import { Project } from '../../domain/projects/Project.interface';
import { ApiError } from "../../domain/ApiError.interface";
import { ProjectMapper } from '../mappers/ProjectMapper';
import { ProjectDTO } from '../../domain/projects/ProjectDTO.interface';

/**
 * Hook para la conexión con los endpoints del back-end que se
 * encargan de hacer las peticiones sobre proyectos.
 */
export const useProjectApi = ( fetch: boolean ) => {

    const { user } = useAuth();

    const [data, setData] = useState<Array<Project> | Project>();
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

        /**
         * Props de la petición
         */
        const props: RequestParams = {
            url: `${API}/user/${user?.id}/projects`,
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
     *  Función que recibe un ID y busca el proyecto concreto
     *  @param id
     */
    const fetchProject = ( id: string ) => {
        setLoading(true);

        /**
         * Props de la petición
         */
        const props: RequestParams = {
            url: `${API}/project/${id}`,
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
     *  Función que recibe los parámetros necesarios para hacer la petición al back y crear un
     *  proyecto.
     *  @param name     
     *  @param description 
     */
    const createProject = ( name: string, description: string ) => {
        setLoading(true);

        /**
         * Props de la petición
         */
        const props: RequestParams = {
            url: `${API}/project`,
            method: "POST",
            headers: new AxiosHeaders({
                "Content-Type": "application/json",
                Authorization: `Bearer ${user?._token}`
            }),
            data: {
                name: name,
                description: description,
                icon: "https://www.svgrepo.com/show/513474/rocket.svg",
                state: 1
            }
        }
        
        /**
         *  Petición usando el Hook de Axios
         */
        useAxios(props)
            .then( data => console.log(data))
            .catch( err => {
                const error: ApiError = {error: true, message: err};
                handleData(error);
            })
            .finally(() => {
                setLoading(false)
            });

    }

    /**
     *  Función para dejar un proyecto
     *  @param id 
     */
    const leaveProject = ( id: string ) => {
        setLoading(true);

        /**
         * Props de la petición
         */
        const props: RequestParams = {
            url: `${API}/project/${id}`,
            method: "DELETE",
            headers: new AxiosHeaders({
                "Content-Type": "application/json",
                Authorization: `Bearer ${user?._token}`
            }),
        }
        
        /**
         *  Petición usando el Hook de Axios
         */
        useAxios(props)
            .then( data => console.log(data))
            .catch( err => {
                const error: ApiError = {error: true, message: err};
                handleData(error);
            })
            .finally(() => {
                setLoading(false)
            });
    }

    /**
     *  Función para editar un projecto
     *  @param id
     */
    const editProject = ( id: string ) => {

    }

    /**
     *  Función que llama a fetchData para actualizar la información de los proyectos.
     */
    const refreshData = () => {
        fetchData();
    }


    /**
     *  Función para controlar la petición sobre múltiple proyectos
     *  @param info 
     */
    const handleData = ( info: ProjectDTO | ApiError ) => {

        /**
         * Hay Error
         */
        if( info && "error" in info && info.error ) {
            setError(info);
        }

        /**
         * No hay error
         */
        if( info && "idproject" in info) {
            // Quitamos los errores en caso de que los halla
            setError(undefined);

            let project: Project = ProjectMapper.prototype.mapTo(info);
            setData(project);
        }

        setLoading(false);
    }


    return { data, error, loading, refreshData, fetchProject, createProject, leaveProject, editProject };

}
