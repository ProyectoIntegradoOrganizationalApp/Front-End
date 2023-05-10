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
            
            <div className="navbar px-12 bg-slate-800 dark:bg-transparent">

                <div className="navbar-start">
                    <Link to="/" className="btn btn-ghost normal-case text-xl p-0 hover:bg-transparent text-white">
                        <img className="mr-3" src={logo}></img>
                        Teamer    
                    </Link>
                </div>
                
                <div className="navbar-end">

                    { user && (
                        <ProfileBadge
                            user={user}
                            logout={logout}
                            position={"dropdown dropdown-end"}
                        />
                    )}

                    { !user && (
                        
                        <Link to="/login">
                            <button className="btn btn-primary !px-7 min-h-fit h-fit py-3">Log In</button>
                        </Link>
                    )} 

                </div>
            </div>

        </>
    )
}



