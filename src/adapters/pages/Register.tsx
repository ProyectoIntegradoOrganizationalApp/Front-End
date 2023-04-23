import login from "../../assets/svg/login/login.svg";
import triangle from "../../assets/svg/login/triangle.svg";
import google from "../../assets/svg/login/google.svg";
import github from "../../assets/svg/login/github.svg";

export function Register() {
    return (
        <>
            <div className="h-100-vh">
                <div className="flex items-center flex-col lg:flex-row h-full">
                    <div className="login-form flex-auto w-80 h-full flex items-center mx-auto">
                        <div className="flex flex-col justify-center items-center min-w-auto w-5/12 m-auto">
                            <input type="email" minLength={3} maxLength={80} placeholder="Enter email" className="input-light mb-6" required/>
                            <input type="password" minLength={2} placeholder="Enter password" className="input-light mb-6" required/>
                            <input type="password" minLength={2} placeholder="Repeat password" className="input-light mb-6" required/>
                            <button type="submit" className="btn btn-primary w-full">Sign Up</button>
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
                    <div className="flex-auto w-0 bg-slate-200 h-full flex flex-col justify-center items-center gap-16 relative">
                        <img src={login} className="select-none"/>
                        <div className="login-message">
                            <h1 className="pb-5 font-extrabold">Have An Account?</h1>
                            <p className="pb-5 fs-m">If you already have an account, just sign in. We've missed you!</p>
                            <a href="/login" className="btn btn-primary w-full">Log In</a>
                        </div>
                        <img src={triangle} className="absolute top-0 -left-5 select-none"/>
                        <img src={triangle} className="absolute bottom-0 -left-5 rotate-180 select-none"/>
                    </div>
                </div>
            </div>
        </>
    )
}