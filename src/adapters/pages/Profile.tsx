import { Sidebar } from "../components/Sidebar";
import { useAuth } from "../../application/customHooks/useAuth";
import { Navigate } from "react-router-dom";

export function Profile() {

    const { user } = useAuth();

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