// React
import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

// Contexto
import { AuthContext } from "../../../domain/context/AuthContext";

// Hooks propios
import { useUserApi } from "../../../adapters/api/useUserApi";
import { useAuth } from "../../../hooks/useAuth";

// Mensaje de error
import { toast } from "react-toastify";

// Fotos o SVGs
import google from "../../../assets/svg/login/google.svg";
import github from "../../../assets/svg/login/github.png";

// Componentes
import { User } from "../../../domain/user/User.interface";
import { Loading } from "../../../components/Loading";
import { UserMapper } from "../../../adapters/mappers/User/UserMapper";
import { Form } from "./Form";

/**
 * Componente reutilizable de formulario de login/register, le entra una prop,
 * que es o "login" o "register", y conforme a esto se realiza lo lógia del 
 * componente, realizando las comprobaciones necesarias, y mostrando los errores
 * proveído tanto por la IU como por la API.
 * @param props 
 * @returns 
 */

export const FormSignIn = (props: { type: "log in" | "sign up" }) => {

    // Contexto de la app
    const { user } = useContext(AuthContext);

    // Redirect si el usuario ya está logueado
    if (user) {
        return <Navigate to="/profile/dashboard" />
    }

    // Hook de la Autenticación
    const { login } = useAuth();

    /**
     * Event handler de login que usa el Hook useAuth que usa useUser para crear un usuario 
     * en el contexto.
    */
    const { data, error, loading, registerUser, fetchUser } = useUserApi();

    /**
     * Ciclo de vida que detecta cambios en el modelo para realizar acciones.
     */
    useEffect(() => {
        if (!error?.error && data && "_token" in data && !user) {
            const user: User = UserMapper.prototype.mapTo(data);
            login(user);
        }
    }, [data?.id])

    /**
     * Ciclo de vida para manejo de errors y mostrar "toasts"
     */
    useEffect(() => {
        // Comprobamos si hay errores y sacamos mensajito si los hay
        if (error && error.message != '') {
            toast.error(error.message);
        }
    }, [error?.message]);

    return (
        <>
            <article className="!w-full flex-1 flex items-center justify-center">
                <Loading
                    state={loading}
                />
                <div className="w-full flex flex-col justify-center items-center">
                    <Form
                        type={props.type}
                        registerUser={registerUser}
                        fetchUser={fetchUser}
                    />
                    <div className="flex flex-col w-full border-opacity-50">
                        <div className="divider text-base">or</div>
                    </div>
                    <div className="flex justify-between w-full gap-8">
                        <button className="btn border-none shadow-lg bg-white hover:bg-white flex-1 rounded-none"><img src={google} className="w-5" /></button>
                        <button className="btn border-none shadow-lg bg-[#161b22] hover:bg-[#161b22] flex-1 rounded-none"><img src={github} className="w-5" /></button>
                    </div>
                </div>
            </article>
        </>
    )
}