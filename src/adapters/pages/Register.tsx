import { AsideSignIn } from "../components/AsideSignIn";
import { FormSignIn } from "../components/FormSignIn";

const Register = () => {

    const loginInfo = {
        route: "/login",
        message: "login"
    }

    return (
        <>
            <main className="min-h-screen flex items-center gap-16 flex-col lg:flex-row lg:mx-4">
                <FormSignIn 
                    type={"register"}
                />
                <AsideSignIn 
                    title={"Have An Account?"}
                    message={"If you already have an account, just sign in. We've missed you!"}
                    link={loginInfo}
                />
            </main>
        </>
    )
}

export default Register;