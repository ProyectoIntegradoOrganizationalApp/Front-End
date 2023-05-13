import { useState } from "react"

import { ApiError } from "../../domain/ApiError.interface";
import { Login } from "./Login.interface";
import { Register } from "./Register.interface";
import { useErrorHandler } from "../customHooks/useErrorHandler";

/**
 * Interfaz de respues del JSON que nos viene de la base de datos
 */
type UserApiResponse = {
    data?: Login | Register | undefined
    error?: ApiError | undefined
}

/**
 *  Interfaz de props del formulario de la UI, tiene los campos opcionales
 *  para también controlar tanto el login como el register.
 */
interface FormProps {
    name?: string
    last_name?:string
    email: string
    password: string
}

export const useUserApi = () => {

    const [data, setData] = useState<Login | Register>();
    const [error, setError] = useState<ApiError>();
    const [loading, setLoading] = useState<boolean>(false);

    const API = import.meta.env.VITE_API_URL;

    const { setInternalError } = useErrorHandler();

    const fetchUser = async ( props: FormProps ) => {
        setLoading(true);

        const body = JSON.stringify({email: props.email, password: props.password});

        const response = await fetch(`${API}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json" 
            },
            body: body
        });

        const data: UserApiResponse = await response.json();
            
        handleData(data);

        setLoading(false);
    }

    const registerUser = async ( props: FormProps ) => {
        setLoading(true);

        if ( !props.name || !props.last_name ) {
            return;
        }

        const body = JSON.stringify({email: props.email, first_name: props.name, last_name: props.last_name, password: props.password});

        const response = await fetch(`${API}/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: body
        });

        const data: UserApiResponse = await response.json();

        handleData(data);

        setLoading(false);
    }

    const handleData = ( data: any ) => {

        console.log(data)

         /**
         *  Hay Error
         */
        if( data && data.error ) {
            setError({ error: data.error, message: data.message });
            setInternalError(data);
        }

        /**
         *  Login
         */
        if( data && "_token" in data ) {
            setData(data);
            setError({ error: false, message: '' });
        }

        /**
         *  Register
         */
        if( data && !data.error ) {
            setError({ error: false, message: '' }); 
        }

    }
    
    return { data, error, loading, fetchUser, registerUser };

}