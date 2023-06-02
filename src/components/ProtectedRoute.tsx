import React from "react";

import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { Loading } from "./Loading";

/**
 *  Componente que actúa a modo de wrapper para las rutas, que comprueba
 *  el usuario y en caso de no haberlo redirige.
 *  @returns 
 */
export const ProtectedRoute: React.FC<{}> = () => {

    // Recogemos el usuario del LocalStorage
    const { user } = useAuth();

    // Variable para controlar si se ha cargado el usuario
    const [loaded, setLoaded] = React.useState<boolean>(false);

    /**
     *  Efecto para cargar el usuario y darle tiempo para pensar porque
     *  react es un mono con pandereta.
     */
    React.useEffect(() => {
        // Si hay usuario, pasamos
        if( user ) {
            setLoaded(true);
        }

        // Si en dos segundos no ha cargado, pasamos
        setTimeout(() => {
            setLoaded(true);
        }, 2000);
    }, [user])

    // Si ha cargado y el usuario 
    if( loaded && user == null ) {
        return <Navigate to="/login" />;
    }

    if( loaded ) {
        return <Outlet />;
    }

    return <Loading state={true}/>;
}