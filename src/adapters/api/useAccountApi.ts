import { useEffect, useState } from "react"

import { AxiosHeaders } from "axios";

import { useAxios } from "./useAxios";

import { useAuth } from "../../hooks/useAuth";

import { RequestParams } from "../../domain/RequestParams.interface";
import { ApiError } from "../../domain/ApiError.interface";
import { Account } from "../../domain/account/Account.interface";
import { AccountDTO } from "../../domain/account/AccountDTO.interface";
import { AccountMapper } from "../mappers/AccountMapper";

/**
 *  Hook de acceso a la API para recoger los datos de la cuenta del usuario y alter
 */
export const useAccountApi = ( fetch: boolean ) => {

    // Recogemos al usuario del hook de autenticación
    const { user } = useAuth();

    // Creamos las variables reactivas del hook
    const [data, setData] = useState<Account>();
    const [error, setError] = useState<ApiError>();
    const [loading, setLoading] = useState<boolean>(false);

    // Recogemos la URL de la api del .env
    const API = import.meta.env.VITE_API_URL;

    // Cuando el componente se monte, se fetchean los datos
    useEffect(() => {
        if( fetch ) {
            fetchData();
        }


    }, [])

    /**
     *  Función para fetchear los datos de Account
     */
    const fetchData = () => {
        setLoading(true);

        const props: RequestParams = {
            url: `${API}/account`,
            method: "GET",
            headers: new AxiosHeaders({
                "Content-Type": "application/json",
                Authorization: `Bearer ${user?._token}`
            }),
        }

        useAxios(props)
            .then( data => handleData(data.data))
            .catch( err => handleData({ error: true, message: err.message}))
            .finally(() => setLoading(false));
    }

    /**
     *  Funcíon que recibe los datos nuevos y ejecuta la petición
     *  para actualizarlos.
     * 
     *  @param data
     */
    const updateUser = ( data: Account ) => {
        setLoading(true);

        const props: RequestParams = {
            url: `${API}/user/${user?.id}`,
            method: "PUT",
            headers: new AxiosHeaders({
                "Content-Type": "application/json",
                Authorization: `Bearer ${user?._token}`
            }),
            data: AccountMapper.prototype.mapFrom(data)
        }

        useAxios(props)
            .then( data => handleData(data.data))
            .catch( err => handleData({ error: true, message: err.message}))
            .finally(() => setLoading(false)); 
    }

    /**
     *  Función para manejar los datos de las peticiones.
     * 
     *  @param data 
     */
    const handleData = ( data: AccountDTO | ApiError ) => {

        console.log(data)

        // Si hay error
        if( data && "error" in data && data.error ) {
            setError(data);
        }

        // Si no hay error
        if( data && "iduser" in data ) {
            const accountInfo: Account = AccountMapper.prototype.mapTo(data);
            setData(accountInfo);
        }
    }


    return { data, error, loading, updateUser };

}