// React
import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

// Contexto
import { AuthContext } from "../../../domain/context/AuthContext";

// Hooks propios
import { useUserApi } from "../../../adapters/api/useUserApi";
import { useAuth } from "../../../hooks/useAuth";

// Mensaje de error
import { ErrorMsg } from "../../../components/ErrorMsg"; 

// Fotos o SVGs
import google from "../../../assets/svg/login/google.svg";
import github from "../../../assets/svg/login/github.png";

// Componentes
import { User } from "../../../domain/user/User.interface";
import { Loading } from "../../../components/Loading";
import { UserMapper } from "../../../adapters/mappers/UserMapper";

/**
 * Componente reutilizable de formulario de login/register, le entra una prop,
 * que es o "login" o "register", y conforme a esto se realiza lo lógia del 
 * componente, realizando las comprobaciones necesarias, y mostrando los errores
 * proveído tanto por la IU como por la API.
 * @param props 
 * @returns 
 */
export const FormSignIn = ( props: { type: "log in" | "sign up" }) => {

    // Contexto de la app
    const { user } = useContext(AuthContext);

    // Redirect si el usuario ya está logueado
    if( user ) {
        return <Navigate to="/dashboard/profile" />
    }
    
    // Hook de la Autenticación
    const { login } = useAuth();

    // Datos del Formulario
    const [email, setEmail] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [last_name, setLastName] = useState<string>('');
    const [phone_number, setPhoneNumber] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [valid, setValid] = useState<boolean>(false);
    const [input, setInput] = useState<string>('input input-light mt-6 input-bordered w-full mt-6');

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
            const user: User = UserMapper.prototype.mapTo(data);            
            login(user);
        }
    }, [data?.id])
    

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
        await registerUser({name, last_name, phone_number, email, password});
    }

    /**
     * Valida las contraseñas para comprobar que son iguales.
     * @param valor 
     */
    const validate = (valor: string) => {
        if( valor != password ) {
            setValid(false);
            setInput('input input-bordered input-error w-full mt-6');
            
        } else {
            setValid(true);
            setInput('input input-light mt-6 input-bordered w-full mt-6');
        }
    }

    /**
     * Se encarga de enviar el formulario.
     * 
     * Le entra o un evento de submit o any, porque no he sido capaz de asigarle tipo
     * al butón de submit sin perder la funcionalidad de preventDefault().
     * @param event 
     */
    const sendForm = ( event: SubmitEvent | any ) => {
        event.preventDefault();
        // El form no se debería de enviar
        if( props.type === "sign up" && valid ) {
            handleRegister();
        } else if( props.type === "log in" && email.length > 10 && password.length > 5 ) {
            handleLogin();
        }
    }

    return (
        <>
            <article className="!w-full flex-1 flex items-center justify-center">
                <Loading
                    state={loading}
                />
                <div className="w-full flex flex-col justify-center items-center">
                    <form className="w-full flex flex-col">
                        {props.type === "sign up" && (
                            <>
                                <input 
                                    type="text" 
                                    minLength={10} 
                                    maxLength={80} 
                                    placeholder="Enter first name" 
                                    value={name} 
                                    onChange={event => {
                                        setName(event.target.value)
                                    }}
                                    className="input input-bordered w-full mt-6"
                                    required
                                />
                                <input 
                                    type="text" 
                                    minLength={10} 
                                    maxLength={80} 
                                    placeholder="Enter last name" 
                                    value={last_name} 
                                    onChange={event => {
                                        setLastName(event.target.value)
                                    }}
                                    className="input input-bordered w-full mt-6"
                                    required
                                />
                                <input 
                                    type="phone" 
                                    minLength={9} 
                                    maxLength={9} 
                                    placeholder="Enter your Phone Number" 
                                    value={phone_number} 
                                    onChange={event => {
                                        setPhoneNumber(event.target.value)
                                    }}
                                    className="input input-bordered w-full mt-6"
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
                            className="input input-bordered w-full mt-6"
                            required
                        />
                        <input 
                            type="password" 
                            minLength={4} 
                            placeholder="Enter password" 
                            className="input input-bordered w-full mt-6" 
                            value={password}
                            onChange={ event => {
                                setPassword(event.target.value)
                            }} 
                            required
                        />
                        { props.type === "sign up" && (
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

                        <p className="mt-6 cursor-pointer select-none mx-auto text-base w-fit">Recovery password</p>
                        <button type="submit" onClick={sendForm} className="mt-6 btn btn-primary w-full">{props.type}</button>
                    </form>

                    <div className="flex flex-col w-full border-opacity-50">
                        <div className="divider text-base">or</div>
                    </div>

                    <div className="flex justify-between w-full gap-8">
                        <button className="btn bg-white hover:bg-gray-300 flex-1 rounded-none"><img src={google} className="w-5"/></button>
                        <button className="btn flex-1 rounded-none"><img src={github} className="w-5"/></button>
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