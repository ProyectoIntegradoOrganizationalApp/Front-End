import { Sidebar } from "../components/Sidebar";
import { useAuth } from "../../application/customHooks/useAuth";

import { redirect } from "react-router-dom";

export function Profile() {

    const { user } = useAuth();


    // TODO => arreglar esto para que espere a que cargue los datos antes de 
    // comprobar los datos para que no de null
    // if( user.token === '') {
    //     return redirect('/')
    // }

    return (
        <>
            <Sidebar>
                <h1>Welcome <small>{user.full_name}</small></h1>
            </Sidebar>
        </>
    )
}