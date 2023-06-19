
// Links para el router
import { Link, useNavigate } from "react-router-dom";

// Tipado de las rutas
import { useAuth } from '../../../hooks/useAuth';

import logo from "../../../assets/svg/logo.svg";

import { useProfileApi } from "../../../adapters/api/useProfileApi";


/**
 *  Componente de Navegador, usa un "Drawer" de DaisyUI en el que se introduce la información
 *  dentro del nav, le entra una prop "children" que es de tipo ReactNode, el cual trae el 
 *  contenido proveído por el Router.
 *  
 *  @param props Contiene las props que le pasa el elemento superior 
 *  @returns 
 */
export function Nav() {

    const { logout } = useAuth();

    const { data: user, error, loading } = useProfileApi();

    const navigate = useNavigate();

    return (
        <div className="navbar !min-h-[unset] !py-0 px-16 max-[768px]:px-5 bg-transparent">

            <div className="navbar-start">
                <Link to="/" className="btn btn-ghost normal-case text-xl p-0 hover:bg-transparent !1min-h-[unset] !h-fit">
                    <img className="mr-3" src={logo}></img>
                    Teamer
                </Link>
            </div>

            <div className="navbar-center flex gap-3">
                <Link to="/" className={`nav-item ${location.pathname == "/" ? "nav-active" : ""}`}>
                    Home
                </Link>
                {user && (
                    <Link to="/profile/dashboard" className="nav-item">
                        Profile
                    </Link>
                )} 
            </div>

            <div className="navbar-end flex justify-end items-end">

                {!user ? (
                    <Link to="/login">
                        <button className="btn btn-primary !px-7 min-h-fit h-fit py-3">
                            Log In
                        </button>
                    </Link>
                ): (
                    <button
                        onClick={() => {
                            logout();
                            navigate(0);
                        }}
                        className="btn btn-primary !px-7 min-h-fit h-fit py-3"
                    >
                        Log out
                    </button>
                )}

            </div>
        </div>
    )
}