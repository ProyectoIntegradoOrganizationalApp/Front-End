
// Links para el router
import { Link } from "react-router-dom";

// Tipado de las rutas
import { useAuth } from '../../../hooks/useAuth';

import logo from "../../../assets/svg/logo.svg";
import { ProfileBadge } from "../../dashboard/components/ProfileBadge";

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
        <div className="navbar !min-h-[unset] !py-0 px-16 max-[768px]:px-5 bg-transparent">

            <div className="navbar-start">
                <Link to="/" className="btn btn-ghost normal-case text-xl p-0 hover:bg-transparent !1min-h-[unset] !h-fit">
                    <img className="mr-3" src={logo}></img>
                    Teamer
                </Link>
            </div>

            <div className="navbar-center flex gap-3">
                {user && (
                    <Link to="/profile/dashboard">
                        <button className="btn btn-primary !px-7 min-h-fit h-fit py-3">
                            Profile
                        </button>
                    </Link>
                )}
                <Link to="/" className={`nav-item ${location.pathname == "/" ? "nav-active" : ""}`}>
                    Home
                </Link>
                {user && (
                    <Link to="/profile/dashboard" className="nav-item">
                        Profile
                    </Link>
                )} {!user &&
                    <Link to="/login" className="nav-item">
                        Profile
                    </Link>
                }
            </div>

            <div className="navbar-end">

                {user && (
                    <ProfileBadge
                        user={user}
                        logout={logout}
                    />
                )}

                {!user && (
                    <Link to="/login">
                        <button className="btn btn-primary !px-7 min-h-fit h-fit py-3">
                            Log In
                        </button>
                    </Link>
                )}

            </div>
        </div>
    )
}