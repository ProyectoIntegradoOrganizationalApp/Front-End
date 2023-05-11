import { Nav } from '../components/Nav';
import { AsideSignIn } from "../components/auth/AsideSignIn";
import { FormSignIn } from "../components/auth/FormSignIn";

const Login = () => {
    
    const registerInfo = {
        route: "/register",
        message: "sign up"
    }

    return (
        <>
            <Nav />
            <main className="w-4/5 my-10 mx-auto flex items-center gap-24 flex-col lg:flex-row">
                <AsideSignIn 
                    title={"New Here?"}
                    message={"Sign up and discover a great amount of new opportunities!"}
                    link={registerInfo}
                />
                <FormSignIn
                    type={"log in"}
                />
            </main>
        </>
    );
};

export default Login;