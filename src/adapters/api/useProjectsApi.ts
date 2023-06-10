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
export const useProjectsApi = ( fetch: boolean ) => {

    const { user } = useAuth();

    const [data, setData] = useState<Array<Project>>();
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
     *  Función que llama a fetchData para actualizar la información de los proyectos.
     */
    const refreshData = () => {
        fetchData();
    }

    /**
     *  Función para controlar la petición sobre múltiple proyectos
     *  @param info 
     */
    const handleData = ( info: ProjectWrapper | ApiError ) => {

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

            // Cambiamos el state
            let projects: Array<Project> = ProjectMapper.prototype.mapArrayTo(info.projects);
            setData(projects);
        }

        setLoading(false);
    }


    return { data, error, loading, refreshData };

}

/**
 *  Envoltorio de una propiedad que es un array. Esta es la respuesta del back-end.
 */
interface ProjectWrapper {
    projects: Array<ProjectDTO>
}