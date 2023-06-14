import { useEffect, useState } from "react"

import { useAuth } from "../../hooks/useAuth";

import { Notifications } from "../../domain/notification/Notifications.interface";
import { NotificationsDTO } from "../../domain/notification/NotificationsDTO.interface";

import { ApiError } from "../../domain/ApiError.interface";
import { AxiosHeaders } from "axios";
import { RequestParams } from '../../domain/RequestParams.interface';
import { useAxios } from "./useAxios";
import { NotificationsMapper } from "../mappers/NotificationsMapper";

export const useNotificationApi = ( fetch: boolean ) => {

    /**
     *  Hook de autenticación del que recogemos el usuario.
     */
    const { user } = useAuth();

    /**
     *  Variables reactivas necesarias para el funcionamiento del Hook
     */
    const [data, setData] = useState<Notifications>();
    const [error, setError] = useState<ApiError>();
    const [loading, setLoading] = useState<boolean>(false);

    /**
     *  Variable de entorno con la información de la API
     */
    const API = import.meta.env.VITE_API_URL;

    useEffect(() => {
        if( fetch ) {
            fetchData();
        }
    }, [])

    /**
     *  Función para recoger los datos del back-end sobre las 
     *  notificaciones.
     */
    const fetchData = () => {

        const props: RequestParams = {
            url: `${API}/notifications`,
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

    const refreshData = () => {
        fetchData();
    }

    /**
     *  Función para manejar los datos que nos vienen del back-end
     *  sobre las notificaciones.
     * 
     *  @param data 
     */
    const handleData = ( data: NotificationsDTO | ApiError ) => {
        
        if( "error" in data ) {
            setError({error: data.error, message: data.message})
        }

        if( "friends" in data ) {
            setError(undefined);
            setData(NotificationsMapper.prototype.mapTo(data));
        }
    }

    const triggerRequest = ( props: { type: string, userId: string, projectId?: string, action: string } ) => {

        setLoading(true);

        switch(props.type) {

            case "friend" : {
                const req: RequestParams = {
                    url: `${API}/friend/${props.userId}/${props.action}`,
                    method: "GET",
                    headers: new AxiosHeaders({
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${user?._token}`
                    }),
                }

                useAxios(req)
                    .then(data => {
                        setError({error: false, message: data.data.message})
                    })
                    .catch( err => {
                        setError({error: true, message: err.message})
                    })
                    .finally(() => setLoading(false));
            }

            case "project" : {

                const req: RequestParams = {
                    url: `${API}/user/${props.userId}/project/${props.projectId}/${props.action}`,
                    method: "GET",
                    headers: new AxiosHeaders({
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${user?._token}`
                    }),
                }

                useAxios(req)
                    .then(data => {
                        setError({error: false, message: data.data.message})
                    })
                    .catch( err => {
                        setError({error: true, message: err.message})
                    })
                    .finally(() => setLoading(false));
            }

        }

    }

    return { data, error, loading, triggerRequest, refreshData };


}