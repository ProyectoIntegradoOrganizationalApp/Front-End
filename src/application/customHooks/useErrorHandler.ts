import { useEffect, useState } from "react";

import { useAuth } from "./useAuth";

import { ApiError } from "../../domain/ApiError.interface";


export const useErrorHandler = () => {

    const { logout } = useAuth();
    const [internalError, setInternalError] = useState<ApiError>();
    
    useEffect(() => {

        if( internalError?.error ) {

            switch(internalError.message){
                case "The token provided is expired": logout()
            }
        }

        return () => {
            setInternalError(undefined);
        }

    })

    return { setInternalError };
}