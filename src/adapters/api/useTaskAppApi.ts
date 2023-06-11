import React from "react";

import { AxiosHeaders } from "axios";

import { useAuth } from "../../hooks/useAuth";
import { useAxios } from "./useAxios";

import { ApiError } from "../../domain/ApiError.interface";
import { RequestParams } from "../../domain/RequestParams.interface";

interface TaskAppInfo {
    boards: Board[] | undefined,
    columns: Column[] | undefined,
}

interface Board {
    title: string,
    photo: string,
    updated_at: string,
    id: string,
    iduser: string,
    idproject: string,
    idapp: string
}

interface Column {
    id: string,
    title: string,
    tasks: Array<Task>
}

interface Task {
    id: string,
    idcolumn: string,
    iduser: string,
    idproject: string,
    title: string,
    description: string,
    state: number,
    completed_at: string,
    created_at: string,
    updated_at: string
}

interface BoardWrapper {
    boards: Array<Board>
}

interface ColumnWrapper {
    columns: Array<Column>
}

/**
 *  Hook para recoger los datos de la aplicación, tanto las tablas, columnas y tasks.
 *  
 *  @returns 
 */
export const useTaskAppApi = () => {

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

        setLoading(true);

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
                const wrap: Array<Board> = res.data;
                handleData({ boards: wrap });
            })
            .catch( err => {
                handleData({ error: true, message: err.message });
            })
            .finally(() => {
                setLoading(false);
            })

    }

    /**
     *  Función que recoge 
     *  @param idBoard 
     */
    const getColumns = ( idBoard: string ): void => {
        setLoading(true);

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
                const wrap: Array<Board> = res.data;
                handleData({ boards: wrap });
            })
            .catch( err => {
                handleData({ error: true, message: err.message });
            })
            .finally(() => {
                setLoading(false);
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

    /**
     *  Función que sirve para manejar los datos que vienen del back end
     *  @param info 
     */
    const handleData = ( info: BoardWrapper | ColumnWrapper | ApiError ) => {

        // Borramos lo errores antes de manejar los datos
        setError(undefined);

        // Si hay error
        if( "error" in info ) {
            setError({ error: info.error, message: info.message })
        }

        // Si no hay error y es de tipo boards
        if( "boards" in info ) {
            setData({
                boards: info.boards,
                columns: data?.columns,
            });
        }

        // Si no hay error y es de tipo 
        if( "columns" in info ) {
            setData({
                boards: data?.boards,
                columns: info.columns,
            });
        }

    }

    return { data, loading, error, getProyectInfo, refreshData, createBoard };
}

