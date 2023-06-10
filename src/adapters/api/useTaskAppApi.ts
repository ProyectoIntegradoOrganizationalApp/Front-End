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
    name: string,
    description: string,
    background: string
}

interface Column {

}

interface Task {

}

const useTaskApp = () => {

    // Recogida del Usuario
    const { user } = useAuth();

    // Variables del hook
    const [data, setData] = React.useState<TaskAppInfo>();
    const [loading, setLoading] = React.useState<boolean>(false);
    const [error, setError] = React.useState<ApiError>();

    // URL de la API usando VITE
    const API = import.meta.env.VITE_API_URL;

    const getProyectInfo = ( idProject: string ): void => {
        getBoards(idProject);
    }

    const getBoards = ( idProject: string ): void => {
        const boards: Array<Board> = [];

        const props: RequestParams = {
            url: `${API}/${idProject}/task_app/boards`,
            method: "GET",
            headers: new AxiosHeaders({
                "Content-Type": "application/json",
                Authorization: `Bearer ${user?._token}`
            }),
        }

        useAxios(props)
            .then(data => {
                // Creamos el nuevo estado
                console.log(data.data)

            }).then( () => console.log(data))

    }

    const createBoard = ( title: string, description: string, idProyect: string ) => {
        const props: RequestParams = {
            url: `${API}/${idProyect}/task_app/board`,
            method: "POST",
            headers: new AxiosHeaders({
                "Content-Type": "application/json",
                Authorization: `Bearer ${user?._token}`
            }),
        }

        useAxios(props)
            .then(data => {
                console.log(data.data)
            })
    }

    const refreshData = ( idProject: string ): void => {
        getProyectInfo(idProject);
    }

    return { data, loading, error, getProyectInfo, refreshData, createBoard };
}

export default useTaskApp;