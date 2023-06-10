import React from "react";

import { AxiosHeaders } from "axios";

import { useAuth } from "../../hooks/useAuth";
import { useAxios } from "./useAxios";

import { ApiError } from "../../domain/ApiError.interface";
import { RequestParams } from "../../domain/RequestParams.interface";

interface TaskAppInfo {
    boards: Board[],
    columns: Column[],
    tasks: Task[],
}

interface Board {
    title: string,
    photo: string,
    updated_at: string,
    iduser: string,
    idproject: string,
    idapp: string
}

interface Column {

}

interface Task {

}

export const useTaskApp = () => {

    // Recogida del Usuario
    const { user } = useAuth();

    // Variables del hook
    const [data, setData] = React.useState<TaskAppInfo>();
    const [loading, setLoading] = React.useState<boolean>(false);
    const [error, setError] = React.useState<ApiError>();

    // URL de la API usando VITE
    const API = import.meta.env.VITE_API_URL;

    /**
     *  Función de recoger datos de la bbdd.
     *  @param idProject 
     */
    const getProyectInfo = ( idProject: string ): void => {
        getBoards(idProject);
    }

    /**
     *  Función de recoger datos de los tableros.
     * 
     *  @param idApp 
     */
    const getBoards = ( idApp: string ): void => {
        const boards: Array<Board> = [];

        const props: RequestParams = {
            url: `${API}/${idApp}/task_app/boards`,
            method: "GET",
            headers: new AxiosHeaders({
                "Content-Type": "application/json",
                Authorization: `Bearer ${user?._token}`
            }),
        }

        useAxios(props)
            .then(data => {
                // Creamos el nuevo estado
                setData({boards: data.data})
            })

    }

    /**
     * Función de creación de tableros.
     * 
     *  @param title 
     *  @param description 
     *  @param idProyect 
     */
    const createBoard = ( title: string, description: string, idProyect: string ) => {
        const props: RequestParams = {
            url: `${API}/${idProyect}/task_app/board`,
            method: "POST",
            headers: new AxiosHeaders({
                "Content-Type": "application/json",
                Authorization: `Bearer ${user?._token}`
            }),
            data: {
                title: title,
                description: description,
                idProyect: idProyect,
                photo: "https://images.unsplash.com/photo-1682687982167-d7fb3ed8541d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
            }
        }

        useAxios(props)
            .then(data => {
                console.log(data.data)
            })
            .catch( err => {
                console.log(err)
            })
    }

    /**
     *  Función de refresco de datos.
     * 
     *  @param idProject 
     */
    const refreshData = ( idProject: string ): void => {
        getProyectInfo(idProject);
    }

    return { data, loading, error, getProyectInfo, refreshData, createBoard };
}

