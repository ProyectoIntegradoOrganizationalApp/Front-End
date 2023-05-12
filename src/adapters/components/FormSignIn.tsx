// React
import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

// Contexto
import { AuthContext } from "../../context/AuthContext";

// Hooks propios
import { useUserApi } from "../../application/api/useUserApi";
import { useAuth } from "../../application/customHooks/useAuth";

// Mensaje de error
import { ErrorMsg } from "./ErrorMsg";

// Fotos o SVGs
import google from "../../assets/svg/login/google.svg";
import github from "../../assets/svg/login/github.svg";
import { Loading } from "./Loading";
import { UserMapper } from "../../domain/mappers/UserMapper";


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
    const [name, setName] = useState<string>('');
    const [last_name, setLastName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [valid, setValid] = useState<boolean>(false);
    const [input, setInput] = useState<string>('input-light mt-6');

    /**
     * Event handler de login que usa el Hook useAuth que usa useUser para crear un usuario 
     * en el contexto.
    */
    const { data, error, loading, fetchUser, registerUser } = useUserApi();

    /**
     * Ciclo de vida, solo ejecuta este useEffect cuando la data halla cambiado, lo que 
     * significaría que el usuario está logueado por lo que procede a hacer las comprobaciones
     * necesarias y loguea al usuario haciendo uso del hook de login.
     */
    useEffect(() => {
        if( !error?.error && data && "_token" in data && !user ) {
            const UserDTO = UserMapper.prototype.mapFrom(data);            
            
            login(UserDTO);
        }

        if( !error?.error && data && "_token" ! in data && !user) {
            handleLogin();
        }
    }, [data?.id]);

    /**
     * Función que maneja el login del usuario, ejecuta la función fetchUser del Hook de la API
     */
    const handleLogin = async () => {
        await fetchUser({email, password});
    };

    /**
     * Función que maneja el registro de usuarios, y que si no recoje errores, ejecuta el login con los datos del usuario de manera automática.
     */
    const handleRegister = async () => {
        await registerUser({name, last_name, email, password});
    }

    /**
     * Valida las contraseñas para comprobar que son iguales.
     * @param valor 
     */
    const validate = (valor: string) => {
        if( valor != password ) {
            setValid(false);
            setInput('input input-bordered input-error w-full max-w-xs mt-6');
            
        } else {
            setValid(true);
            setInput('input-light mt-6');
        }
    }

    /**
     * Se encarga de enviar el formulario.
     * @param event 
     */
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
            <article className="flex-1 flex items-center justify-center">
                <Loading
                    state={loading}
                />
                <div className="flex flex-col justify-center items-center">
                    <form>
                        {props.type === "register" && (
                            <>
                                <input 
                                    type="text" 
                                    minLength={10} 
                                    maxLength={80} 
                                    placeholder="Enter First Name" 
                                    value={name} 
                                    onChange={event => {
                                        setName(event.target.value)
                                    }}
                                    className="input-light mb-6"
                                    required
                                />
                                <input 
                                    type="text" 
                                    minLength={10} 
                                    maxLength={80} 
                                    placeholder="Enter Last Name" 
                                    value={last_name} 
                                    onChange={event => {
                                        setLastName(event.target.value)
                                    }}
                                    className="input-light mb-6"
                                    required
                                />
                            </>
                        )}
                        
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