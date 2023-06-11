// Components
import { FormSignIn } from "./components/FormSignIn";

const Login = () => {
    return (
        <>
            <div className="flex flex-col min-w-[550px] max-[768px]:min-w-full">
                <FormSignIn
                    type={"log in"}
                />
            </div>
        </>
    );
};

export default Login;