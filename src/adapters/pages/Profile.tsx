import { useUser } from "../../application/customHooks/useUser";
import { Sidebar } from "../components/Sidebar";
import { Navigate } from "react-router-dom";

export function Profile() {

    const { user } = useUser();

    if( !user ) {
        return <Navigate to="/" />
    }

    return (
        <>
            <Sidebar>
                <h1>Welcome <small>{user.full_name}</small></h1>
            </Sidebar>
        </>
    )
}