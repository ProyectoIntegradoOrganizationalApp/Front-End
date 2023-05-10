import { Navigate } from 'react-router-dom';
import { useUser } from "../../application/customHooks/useUser";
import { Sidebar } from "../components/Sidebar";
import { Route } from '../../domain/Route.interface';

export function Profile() {

    const { user } = useUser();

    // if( !user ) {
    //     return <Navigate to="/" />
    // }

    const routes: Array<Route> = [
        {
            icon: "fa-solid fa-house",
            name: "Dashboard",
            url: "/profile",
            children: [
                {
                    name: "Profile",
                    url: "/profile"
                },
                {
                    name: "My Achievements",
                    url: "/achievements"
                }
            ]
        },
        {
            icon: "fa-solid fa-diagram-project",
            name: "Projects",
            url: "/projects",
            children: [
                {
                    name: "Projects",
                    url: "/projects"
                },
                {
                    name: "Settings",
                    url: "/projects/settings"
                }
            ]
        },
        {
            icon: "fa-solid fa-user-group",
            name: "Friends",
            url: "/friends",
            children: [
                {
                    name: "Friends",
                    url: "/friends"
                },
                {
                    name: "Add Friend",
                    url: "/users"
                },
                {
                    name: "Settings",
                    url: "/friends/settings"
                }
            ]
        }
    ]

    return (
        <>
            <Sidebar routes={routes}>
                {/* <h1>Welcome <small>{user.full_name}</small></h1> */}
                <div className="h-full flex gap-6 m-6 box-content">
                    <div className="bg-slate-800 w-1/4 rounded-xl"></div>
                    <div className="bg-slate-800 w-3/4 rounded-xl"></div>
                </div>
            </Sidebar>
        </>
    )
}