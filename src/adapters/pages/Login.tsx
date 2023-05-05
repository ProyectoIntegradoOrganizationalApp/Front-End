import React, { useContext, useState } from "react";

import { Link, Navigate } from "react-router-dom";

import log from "../../assets/svg/login/login.svg";
import triangle from "../../assets/svg/login/triangle.svg";
import google from "../../assets/svg/login/google.svg";
import github from "../../assets/svg/login/github.svg";

import { useAuth } from "../../application/customHooks/useAuth";
import { AuthContext } from "../../context/AuthContext";
import { useApi } from "../../application/api/useApi";
import { User } from "../../domain/User.interface";
import { ErrorMsg } from "../components/ErrorMsg";

const Login = () => {
    // Contexto de la app
    const { user } = useContext(AuthContext);

    // Hook de la API ( aún no funciona )
    const { data, error, loading, fetchData } = useApi<User>();
    
    // Hook de la Autenticación
    const { login } = useAuth();

    // Datos del Formulario
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    /**
     * Event handler de login que usa el Hook useAuth que usa useUser para crear un usuario 
     * en el contexto.
     */
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

        console.log(undefined)

        if( !error?.error ) {
            login(data!);
        }
    };

    if( user ) {
        return <Navigate to="/profile" />
    }

    return (
        <>
            <div className="h-100-vh">
                <div className="flex items-center flex-col lg:flex-row h-full">
                    <div className="flex-auto h-full flex flex-col justify-center items-center gap-16 relative">
                        <img src={log} className="select-none"/>
                        <div className="login-message">
                            <h1 className="pb-5 font-extrabold">New Here?</h1>
                            <p className="pb-5 fs-m">Sign up and discover a great amount of new opportunities!</p>
                            <Link to="/register" className="btn btn-primary w-full">Sign Up</Link>
                        </div>
                        <img src={triangle} className="absolute top-0 -right-5 select-none"/>
                        <img src={triangle} className="absolute bottom-0 -right-5 rotate-180 select-none"/>
                    </div>
                    <div className="login-form flex-auto w-full h-full flex items-center">
                        <div className="flex flex-col justify-center items-center min-w-auto w-5/12 m-auto">
                            <input 
                                type="email" 
                                minLength={3} 
                                maxLength={80} 
                                placeholder="Enter email" 
                                value={email} 
                                onChange={event => {
                                    setEmail(event.target.value)
                                }}
                                className="input-light mb-6" required
                            />
                            <input 
                                type="password" 
                                minLength={2} 
                                placeholder="Enter password" 
                                className="input-light" 
                                value={password}
                                onChange={ event => {
                                    setPassword(event.target.value)
                                }} 
                                required
                            />
                            <p className="my-6 cursor-pointer select-none fs-m">Recovery password</p>
                            <button onClick={handleLogin} className="btn btn-primary w-full">Login</button>

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
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;