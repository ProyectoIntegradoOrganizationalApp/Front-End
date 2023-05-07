// React
import React from "react";

// Links para el router
import { Link, NavLink } from "react-router-dom";

// Tipado de las rutas
import { useAuth } from "../../application/customHooks/useAuth";

import logo from "../../assets/svg/logo.svg";
import { ProfileBadge } from "./ProfileBadge";

/**
 *  Componente de Navegador, usa un "Drawer" de DaisyUI en el que se introduce la información
 *  dentro del nav, le entra una prop "children" que es de tipo ReactNode, el cual trae el 
 *  contenido proveído por el Router.
 *  
 *  @param props Contiene las props que le pasa el elemento superior 
 *  @returns 
 */
export function Nav() {

    const { user, logout } = useAuth();

    return (
        <>
            
            <div className="navbar">

                <div className="navbar-start">
                    <Link to="/" className="btn btn-ghost normal-case text-xl">
                        <img className="mr-3" src={logo}></img>
                        Teamer    
                    </Link>
                </div>
                
                <div className="navbar-end">
                    <button className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                            <span className="badge badge-xs badge-primary indicator-item"></span>
                        </div>
                    </button>

                    { user && (
                        <ProfileBadge
                            user={user}
                            logout={logout}
                            position={"dropdown dropdown-end"}
                        />
                    )}

                    { !user && (
                        
                        <Link to="/login">
                            <button className="btn btn-primary">Login</button>
                        </Link>
                    )} 

                </div>
            </div>

        </>
    )
}



