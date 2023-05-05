// React
import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";

// Contexto
import { AuthContext } from "../../context/AuthContext";

// Hooks propios
import { useApi } from "../../application/api/useApi";
import { useAuth } from "../../application/customHooks/useAuth";

// Mensaje de error
import { ErrorMsg } from "./ErrorMsg";


// Interfaces
import { User } from "../../domain/User.interface";


// Fotos o SVGs
import google from "../../assets/svg/login/google.svg";
import github from "../../assets/svg/login/github.svg";


/**
 * Componente reutilizable de formulario de login/register, le entra una prop,
 * que es o "login" o "register", y conforme a esto se realiza lo lógia del 
 * componente, realizando las comprobaciones necesarias, y mostrando los errores
 * proveído tanto por la IU como por la API.
 * @param props 
 * @returns 
 */
export const FormSignIn = ( props: { type: "login" | "register" }) => {
    
    // Contexto de la app
    const { user } = useContext(AuthContext);

    // Redirect si el usuario ya está logueado
    if( user ) {
        return <Navigate to="/profile" />
    }
    
    // Hook de la Autenticación
    const { login } = useAuth();

    // Datos del Formulario
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [valid, setValid] = useState<boolean>(false);
    const [input, setInput] = useState<string>('input-light mt-6');

    /**
     * Event handler de login que usa el Hook useAuth que usa useUser para crear un usuario 
     * en el contexto.
    */
    const { data, error, loading, fetchData } = useApi<User>();
    const handleLogin = async () => {
        await fetchData("http://localhost:8000/login", { 
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: {
                email: email,
                password: password,
            }
        });

        if( !error?.error ) {
            login(data!);
        }
    };

    const handleRegister = async () => {

    }

    const validate = (valor: string) => {
        if( valor != password ) {
            setValid(false);
            setInput('input input-bordered input-error w-full max-w-xs mt-6');
            
        } else {
            setValid(true);
            setInput('input-light mt-6');
        }
    }

    const sendForm = (event: any) => {
        event.preventDefault();
        // El form no se debería de enviar
        if( props.type === "register" && valid ) {
            handleRegister();
        } else if( props.type === "login" && email.length > 10 && password.length > 5 ) {
            handleLogin();
        }
    }

    return (
        <>
            <article className="login-form flex-auto w-full h-full flex items-center">
                <div className="flex flex-col justify-center items-center min-w-auto w-5/12 m-auto">
                    <form>
                        <input 
                            type="email" 
                            minLength={10} 
                            maxLength={80} 
                            placeholder="Enter email" 
                            value={email} 
                            onChange={event => {
                                setEmail(event.target.value)
                            }}
                            className="input-light mb-6"
                            required
                        />
                        <input 
                            type="password" 
                            minLength={5} 
                            placeholder="Enter password" 
                            className="input-light" 
                            value={password}
                            onChange={ event => {
                                setPassword(event.target.value)
                            }} 
                            required
                        />
                        { props.type === "register" && (
                            <input
                                type="password" 
                                minLength={2} 
                                placeholder="Confirm password" 
                                className={input}
                                onChange={ event => {
                                    validate(event.target.value)
                                }} 
                                required
                            />
                        )}

                        <p className="my-6 cursor-pointer select-none fs-m">Recovery password</p>
                        <button type="submit" onClick={sendForm} className="btn btn-primary w-full">{props.type}</button>
                    </form>
                    
                    

                    <div className="flex flex-col w-full border-opacity-50">
                        <div className="divider">OR</div>
                    </div>

                    <div className="flex justify-between w-full gap-8">
                        <button className="btn btn-login-others bg-white flex-1"><img src={google}/></button>
                        <button className="btn btn-login-others btn-login-github flex-1"><img src={github}/></button>
                    </div>

                    { error?.error == true && (
                        <ErrorMsg 
                            message={error.message}
                        />
                    )}

                </div>
            </article>
        </>
    ) 
}