// Components
import { FormSignIn } from "./components/FormSignIn";

const Register = () => {
    return (
        <>
            <div className="flex flex-col min-w-[550px] max-[768px]:min-w-full">
                <FormSignIn
                    type={"sign up"}
                />
            </div>
        </>
    )
}

export default Register;