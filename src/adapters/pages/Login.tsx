import { AsideSignIn } from "../components/AsideSignIn";
import { FormSignIn } from "../components/FormSignIn";

const Login = () => {
    
    const registerInfo = {
        route: "/register",
        message: "sign up"
    }

    return (
        <>
            <main className="h-100-vh flex items-center flex-col lg:flex-row lg:mx-4">
                <AsideSignIn 
                    title={"New Here?"}
                    message={"Sign up and discover a great amount of new opportunities!"}
                    link={registerInfo}
                />
                <FormSignIn
                    type={"login"}
                />
            </main>
        </>
    );
};

export default Login;