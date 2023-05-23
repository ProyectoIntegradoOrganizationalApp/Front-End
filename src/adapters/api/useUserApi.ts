import { useState } from "react";

import axios from 'axios';

import { ApiError } from "../../domain/ApiError.interface";
import { Register } from "./Register.interface";
import { UserDTO } from "../../domain/user/UserDTO";

/**
 *  Interfaz de props del formulario de la UI, tiene los campos opcionales
 *  para también controlar tanto el login como el register.
 */
interface FormProps {
    name?: string
    last_name?: string
    prefix?: string
    phone_number?: string
    email: string
    password: string
    confirmPass?: string
    photo?: string
}

export const useUserApi = () => {

    /**
     * Estados que se exportan del hook
     */
    const [data, setData] = useState<UserDTO>();
    const [error, setError] = useState<ApiError>();
    const [loading, setLoading] = useState<boolean>(false);

    const API = import.meta.env.VITE_API_URL;

    /**
     * Función de login, genera un ApiError en caso de fallar y 
     * un UserDTO si sale bien, UserDTO son los datos que se 
     * persisten en el contexto de la APP.
     * @param props 
     */
    const fetchUser = ( props: FormProps ): void => {
        setLoading(true);

        const body = JSON.stringify({email: props.email, password: props.password});

        axios.post<UserDTO | ApiError>(`${API}/login`, body, {
            headers: {
                "Content-Type": "application/json" 
            }
        }).then( data => {
            handleData(data.data);
            setLoading(false);
        }).catch( err => {
            const error: ApiError = { error: true, message: err};
            handleData(error);
        })

    }

    /**
     * Función de registro.
     * @param props 
     * @returns 
     */
    const registerUser = ( props: FormProps ): void => {
        setLoading(true);

        if ( !props.name || !props.last_name || !props.confirmPass || !props.phone_number || !props.prefix || !props.photo ) {
            return;
        }

        let phone = props.prefix + props.phone_number;
        
        const body = JSON.stringify({email: props.email, phone: phone, first_name: props.name, last_name: props.last_name, password: props.password, confirmpass: props.confirmPass, photo: props.photo});

        axios.post<Register | ApiError>(`${API}/register`, body, {
            headers: {
                "Content-Type": "application/json"
            },
        }).then( data => {   
            handleData(data.data, props);  
        }).catch(err => {
            const error: ApiError = { error: true, message: err };
            handleData(error);
        })
    }

    /**
     * Función que procesa la respuesta del servidor generada por 
     * las funciones anteriores, se encarga de manejar errores y 
     * alterar el estado dependiendo de las respuestas.
     * 
     * @param data Datos generados por la respuestas
     * @param props Datos que le llega a la función tras registrar
     * para logear al usuario automáticamente.
     */
    const handleData = ( data: UserDTO | Register | ApiError, props?: FormProps ): void => {

        // Limpiamos errores
        setError({error: false, message: ''});

        // Register & error
        if( data && "error" in data ) {
            // Error
            if( data.error ) {
                setError(data);
            }

            // Register
            if( !data.error ) {
                fetchUser({email: props!.email, password: props!.password});
            }
        }

        // Login
        if( data && "id" in data ) {
            setData(data);
        }
        
        setLoading(false);
    }
    
    return { data, error, loading, fetchUser, registerUser };

}