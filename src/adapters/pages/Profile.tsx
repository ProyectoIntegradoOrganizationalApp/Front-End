import { Sidebar } from "../components/Sidebar";
import { useAuth } from "../../application/customHooks/useAuth";

export function Profile() {

    const { user } = useAuth();

    return (
        <>
            <Sidebar>
                <h1>Welcome <small>{user?.name}</small></h1>
                
            </Sidebar>
        </>
    )
}