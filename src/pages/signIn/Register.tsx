import { Nav } from "../home/components/Nav";
import { AsideSignIn } from "./components/AsideSignIn";
import { FormSignIn } from "./components/FormSignIn";

const Register = () => {

    const loginInfo = {
        route: "/login",
        message: "log in"
    }

    return (
        <>
            <Nav />
            <main className="w-4/5 mx-auto min-h-[calc(100vh-64px)] flex items-center gap-24 flex-col lg:flex-row">
                <FormSignIn 
                    type={"sign up"}
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