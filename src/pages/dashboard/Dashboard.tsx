import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { useProfileApi } from "../../adapters/api/useProfileApi";

import { DashboardBox } from "./components/DashboardBox";
import { Sidebar } from "./components/Sidebar";
import { useAuth } from "../../hooks/useAuth";


/**
 * Componente global, actúa a modo de wrapper para la aplicación y le pasa los datos del 
 * usuario a los componentes hijos, ejecutando está query y comprobando errores.
 * @returns 
 */
export const Dashboard = () => {

    const { logout } = useAuth();

    const { error, loading } = useProfileApi();

    /**
     * Ciclo de vida para comprobar si el token está en condiciones
     */
    useEffect(() => {
        if (error?.error && error.message === 'The token provided is expired') {
            logout();
        }

    }, [error?.error]);

    if (location.pathname === '/') {
        return <Navigate to='/home' />
    }

    const data = {
        user: {
            id: "string",
            name: "string",
            email: "string",
            level: 2,
            photo: ""
        }
    }

    return (
        <Sidebar profile={data}>
            <DashboardBox>
                {data && (
                    <Outlet context={data} />
                )}
            </DashboardBox>
        </Sidebar>
    )
}