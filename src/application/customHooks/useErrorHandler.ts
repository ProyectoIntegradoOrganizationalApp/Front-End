import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "./useAuth";

import { ApiError } from "../../domain/ApiError.interface";


export const useErrorHandler = () => {

    const { logout } = useAuth();
    const [internalError, setInternalError] = useState<ApiError | null>();

    const location = useNavigate();
    
    useEffect(() => {

        if( internalError?.error ) {
            
            switch(internalError.message){
                case "The token provided is expired": logout()
            }

        }
        
    }, [])

    return { setInternalError };
}