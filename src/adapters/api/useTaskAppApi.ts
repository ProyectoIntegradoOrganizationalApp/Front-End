import React, { useEffect } from "react";

import { AxiosHeaders } from "axios";

import { useAuth } from "../../hooks/useAuth";
import { useAxios } from "./useAxios";

import { ApiError } from "../../domain/ApiError.interface";
import { RequestParams } from "../../domain/RequestParams.interface";
import { useParams } from "react-router-dom";

export interface TaskAppInfo {
    boards: Board | Board[] | undefined,
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

export interface Column {
    id: string,
    title: string,
    tasks: Array<Task>
}

export interface Task {
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
    boards: Board | Array<Board>
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
     *  Función para recoger los datos de una aplicación concreta de un proyecto,
     *  I.E: Recoger los datos de Taskman del proyecto de "Teamer".
     * 
     *  @param idProject 
     */
    const getAppInfo = ( idProject: string ): void => {
        getBoards(idProject);
    }

    /**
     *  Función de recoger datos de los TODOS los tableros
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
     *  Función que se encarga de ejecutar las peticiones necesarias
     *  para recoger toda la información sobre un tablero concreto.
     * 
     *  @param idBoard 
     */
    const getBoardInfo = ( idApp: string, idBoard: string ): void => {
        getBoard(idBoard);
        getColumns(idApp, idBoard);
    }

    /**
     * 
     *  @param idBoard 
     */
    const getBoard = ( idBoard: string ): void => {
        setLoading(true);

        const props: RequestParams = {
            url: `${API}/board/${idBoard}`,
            method: "GET",
            headers: new AxiosHeaders({
                "Content-Type": "application/json",
                Authorization: `Bearer ${user?._token}`
            }),
        }

        useAxios(props)
            .then(res => {
                handleData({ boards: res.data });
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
    const getColumns = ( idApp: string, idBoard: string ): void => {
        setLoading(true);

        const props: RequestParams = {
            url: `${API}/${idApp}/task_app/${idBoard}/columns`,
            method: "GET",
            headers: new AxiosHeaders({
                "Content-Type": "application/json",
                Authorization: `Bearer ${user?._token}`
            }),
        }

        useAxios(props)
            .then(res => {
                const wrap: Array<Column> = res.data;
                handleData({ columns: wrap });
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
    const createBoard = ( photo: string, title: string, description: string, idProyect: string, idApp: string ) => {

        setLoading(true);

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
                photo: photo
            }
        }

        useAxios(props)
            .then(data => {
                setError({ error: false, message: "Board Created"});
            })
            .catch( err => {
                handleData({ error: true, message: err.message });
            })
            .finally(() => {
                setLoading(false);
            })
    }

    const removeBoard = () => {

    }

    /**
     *  Función de creación de columnas
     * 
     * @param idBoard 
     * @param idApp 
     * @param title 
     * @param description 
     */
    const createColumn = ( idBoard: string, idApp: string, title: string, description: string ) => {

        setLoading(true);

        const props: RequestParams = {
            url: `${API}/${idApp}/task_app/column`,
            method: "POST",
            headers: new AxiosHeaders({
                "Content-Type": "application/json",
                Authorization: `Bearer ${user?._token}`
            }),
            data: {
                idboard: idBoard,
                title: title,
                description: description,
            }
        }

        useAxios(props)
            .then(data => {
                setError({ error: false, message: "Columna Creada" })
            })
            .catch( err => {
                handleData({ error: true, message: err.message });
            })
            .finally(() => {
                refreshData(idApp, idBoard);
                setLoading(false);
            })
        
    }

    /**
     *  Función de eliminación de columnas
     * 
     *  @param idApp 
     *  @param idBoard 
     *  @param column 
     */
    const removeColumn = ( idApp: string, idBoard: string, column: Column ) => {

        setLoading(true);

        const props: RequestParams = {
            url: `${API}/${idApp}/task_app/column/${column.id}`,
            method: "DELETE",
            headers: new AxiosHeaders({
                "Content-Type": "application/json",
                Authorization: `Bearer ${user?._token}`
            }),
        }

        useAxios(props)
            .then( data => {
                setError(data.data)
            })
            .catch( err => {
                handleData({error: true, message: err.message});
            })
            .finally(() => {
                refreshData(idApp, idBoard);
                setLoading(false);
            })
    }

    /**
     *  Función de creación de tareas.
     *  Endpoint: POST /{idApp}/task_app/task
     * 
     *  @param idApp
     *  @param idBoard
     *  @param idColumn
     *  @param title
     *  @param description
     */
    const createTask = ( idApp: string, idBoard: string, idColumn: string, title: string, description: string ) => {

        setLoading(true);

        const props: RequestParams = {
            url: `${API}/${idApp}/task_app/task`,
            method: "POST",
            headers: new AxiosHeaders({
                "Content-Type": "application/json",
                Authorization: `Bearer ${user?._token}`
            }),
            data: {
                idcolumn: idColumn,
                title: title,
                description: description,
                state: 0
            }
        }

        useAxios(props)
            .then( res => {
                setError({ error: false, message: "Task Created Successfully" });
            })
            .catch( err => {
                handleData({error: true, message: err.message});
            })
            .finally(() => {       
                refreshData(idApp, idBoard);      
                setLoading(false);
            })
    }

    /**
     *  Función de eliminación de tareas
     *  
     *  @param idApp
     *  @param idBoard
     *  @param task
     */
    const removeTask = ( idApp: string, idBoard: string, task: Task ) => {

        setLoading(true);

        const props: RequestParams = {
            url: `${API}/${idApp}/task_app/task/${task.id}`,
            method: "DELETE",
            headers: new AxiosHeaders({
                "Content-Type": "application/json",
                Authorization: `Bearer ${user?._token}`
            }),
        }

        useAxios(props)
            .then( res => {
                setError({ error: false, message: "Task Deleted Successfully" });
            })
            .catch( err => {
                handleData({error: true, message: err.message});
            })
            .finally(() => {       
                refreshData(idApp, idBoard);      
                setLoading(false);
            })
    }

    /**
     *  Mini-hook para exportar las funciones de CRUD de la app.
     * 
     *  @returns 
     */
    const BoardCrud = () => {
        return { createBoard, removeBoard };
    }

    const TaskCrud = () => {
        return { createTask, removeTask };
    }

    const ColumnCrud = () => {
        return { createColumn, removeColumn };
    }

    /**
     *  Función de refresco de datos.
     * 
     *  @param idProject 
     */
    const refreshData = ( idApp: string, idBoard?: string ): void => {

        // Comprobamos si es un array para refrescar las tablas
        if( idApp && !idBoard ) {
            getAppInfo(idApp);
        }

        // Si no es un array refrescamos las columnas y tasks
        if( idApp && idBoard && data?.boards && !Array.isArray(data.boards) ) {
            getBoardInfo(idApp, idBoard);
        }
        
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

    return { data, loading, error, getAppInfo, getBoardInfo, BoardCrud, ColumnCrud, TaskCrud, refreshData };
}

