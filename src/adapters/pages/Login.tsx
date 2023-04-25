import React, { useContext } from "react";

import { Link } from "react-router-dom";

import log from "../../assets/svg/login/login.svg";
import triangle from "../../assets/svg/login/triangle.svg";
import google from "../../assets/svg/login/google.svg";
import github from "../../assets/svg/login/github.svg";

import { useAuth } from "../../application/customHooks/useAuth";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
    const { user } = useContext(AuthContext);
    
    const { login } = useAuth();
    
    const handleLogin = async () => {

        // const data = await fetch("http://localhost:8000/login")
        //     .then(data => data.json())
        //     .catch(err => console.error("xd"));

        login({
            id: 1,
            name: 'John Doe',
            token: 'lasdkjasdj'
        });
    };

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
                            <input type="email" minLength={3} maxLength={80} placeholder="Enter email" className="input-light mb-6" required/>
                            <input type="password" minLength={2} placeholder="Enter password" className="input-light" required/>
                            <p className="my-6 cursor-pointer select-none fs-m">Recovery password</p>
                            <button onClick={handleLogin} className="btn btn-primary w-full">Login</button>
                            <div className="my-6 flex w-full items-center gap-2">
                                <hr className="flex-1 border-black translate-y-0.5"/>
                                <p className="m-0">or</p>
                                <hr className="flex-1 border-black translate-y-0.5"/>
                            </div>
                            <div className="flex justify-between w-full gap-8">
                                <button className="btn btn-login-others bg-white flex-1"><img src={google}/></button>
                                <button className="btn btn-login-others btn-login-github flex-1"><img src={github}/></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;