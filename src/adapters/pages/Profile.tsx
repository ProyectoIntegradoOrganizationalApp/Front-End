import { Navigate } from 'react-router-dom';

import { useUser } from "../../application/customHooks/useUser";

import { Sidebar } from "../components/Sidebar";

import { Route } from '../../domain/Route.interface';

export function Profile() {

    const { user } = useUser();

    if( !user ) {
        return <Navigate to="/" />
    }

    const routes: Array<Route> = [
        {
            name: "Dashboard",
            url: "/dashboard",
            children: [
                {
                    name: "Your dashboard",
                    url: "/dashboard"
                }
            ]
        },
        {
            name: "My Achievements",
            url: "/achievements"
        }
    ]

    return (
        <>
            <Sidebar
                routes={routes}
            >
                <h1>Welcome <small>{user.full_name}</small></h1>
            </Sidebar>
        </>
    )
}