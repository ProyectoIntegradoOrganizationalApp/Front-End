import { AsideSignIn } from "../components/AsideSignIn";
import { FormSignIn } from "../components/FormSignIn";

export function Register() {

    const loginInfo = {
        route: "/login",
        message: "login"
    }

    return (
        <>
            <div className="h-100-vh flex items-center flex-col lg:flex-row h-full">
                <FormSignIn 
                    type={"register"}
                />
                <AsideSignIn 
                    title={"Have An Account?"}
                    message={"If you already have an account, just sign in. We've missed you!"}
                    link={loginInfo}
                />
            </div>
        </>
    )
}