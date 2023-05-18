import { useState } from "react";

import axios from 'axios';

import { ApiError } from "../../domain/ApiError.interface";
import { Register } from "./Register.interface";
import { useErrorHandler } from "../../hooks/useErrorHandler";
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
}

export const useUserApi = () => {

    const [data, setData] = useState<UserDTO>();
    const [error, setError] = useState<ApiError>();
    const [loading, setLoading] = useState<boolean>(false);

    const API = import.meta.env.VITE_API_URL;

    const fetchUser = ( props: FormProps ) => {
        setLoading(true);

        const body = JSON.stringify({email: props.email, password: props.password});

        axios.post<UserDTO | ApiError>(`${API}/login`, body, {
            headers: {
                "Content-Type": "application/json" 
            }
        }).then( data => {
            handleData(data.data);
            setLoading(false);
        });

        return () => {
            setLoading(false);
        }

    }

    const registerUser = ( props: FormProps ) => {
        setLoading(true);

        if ( !props.name || !props.last_name || !props.confirmPass || !props.phone_number || !props.prefix ) {
            return;
        }

        let phone = props.prefix + props.phone_number;
        
        const body = JSON.stringify({email: props.email, phone: phone, first_name: props.name, last_name: props.last_name, password: props.password, confirmpass: props.confirmPass});

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

    const handleData = ( data: UserDTO | Register | ApiError, props?: FormProps ) => {

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