import React from "react";

import { AxiosHeaders } from "axios";

import { useAuth } from "../../hooks/useAuth";
import { useAxios } from "./useAxios";

import { ApiError } from "../../domain/ApiError.interface";
import { RequestParams } from "../../domain/RequestParams.interface";

interface TaskAppInfo {
    boards: Board[] | undefined,
    columns: Column[] | undefined,
    tasks: Task[] | undefined,
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
            .then(res => {
                // Creamos el nuevo estado
                console.log(res)
                setData({
                    boards: res.data,
                    columns: data?.columns,
                    tasks: data?.tasks
                })
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
                photo: "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/639x960/8bcdfaee9ea0002ce6163822d51db7bd/photo-1679464349885-f6603194a0bf.jpg"
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

