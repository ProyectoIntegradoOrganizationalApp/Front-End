import { useState } from "react";

import axios from 'axios';

import { ApiError } from "../../domain/ApiError.interface";
import { Register } from "./Register.interface";
import { useErrorHandler } from "../customHooks/useErrorHandler";
import { UserDTO } from "../../domain/DTO/UserDTO";

/**
 *  Interfaz de props del formulario de la UI, tiene los campos opcionales
 *  para también controlar tanto el login como el register.
 */
interface FormProps {
    name?: string
    last_name?:string
    phone_number?: string
    email: string
    password: string
}

export const useUserApi = () => {

    const [data, setData] = useState<UserDTO>();
    const [error, setError] = useState<ApiError>();
    const [loading, setLoading] = useState<boolean>(false);

    const API = import.meta.env.VITE_API_URL;

    const { setInternalError } = useErrorHandler();

    const fetchUser = async ( props: FormProps ) => {
        setLoading(true);

        const body = JSON.stringify({email: props.email, password: props.password});

        axios.post<UserDTO | ApiError>(`${API}/login`, body, {
            headers: {
                "Content-Type": "application/json" 
            }
        }).then( data => {
            if( data.status == 200 ) {
                handleData(data.data);
            }

            setLoading(false);
        })

    }

    const registerUser = async ( props: FormProps ) => {
        setLoading(true);

        if ( !props.name || !props.last_name ) {
            return;
        }

        const body = JSON.stringify({email: props.email, phone: props.phone_number, first_name: props.name, last_name: props.last_name, password: props.password});

        axios.post<Register | ApiError>(`${API}/register`, body, {
            headers: {
                "Content-Type": "application/json"
            },
        }).then( data => {
            if( data.status == 200 ) {
                handleData(data.data, props);
            }

        })

        return () => {
            setLoading(false);
        }
    }

    const handleData = ( data: UserDTO | Register | ApiError, props?: FormProps ) => {
        
        // Limpiamos errores
        setError({error: false, message: ''});

        /**
         *  Register & Error
         */
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

        /**
         *  Login
         */
        if( data && "id" in data ) {
            setData(data);
        }
        

    }
    
    return { data, error, loading, fetchUser, registerUser };

}