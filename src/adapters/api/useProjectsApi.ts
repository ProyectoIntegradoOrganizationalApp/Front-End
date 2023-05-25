import { useEffect, useState } from 'react';

import axios from 'axios';

import { ApiError } from "../../domain/ApiError.interface";

/**
 * Hook para la conexión con los endpoints del back-end que se
 * encargan de hacer las peticiones sobre proyectos.
 */
export const useProjectsApi = () => {

    const [data, setData] = useState();
    const [error, setError] = useState<ApiError>();
    const [loading, setLoading] = useState();

    /**
     * Efecto para manejar el ciclo de vida de las peticiones a la
     * api, cuando se invoque el hook esto saltará, rellenando las
     * variables que se devuelven para así tener disponibles los
     * datos allí donde se llame al hook.
     */
    useEffect(() => {

    }, [])

    const API = import.meta.env.VITE_API_URL;

    const getUserProjects = ( id: string ) => {

    }

    const removeUserProjects = () => {

    }

    const editProject = () => {

    }

    return { data, error, loading, getUserProjects, removeUserProjects, editProject };

}