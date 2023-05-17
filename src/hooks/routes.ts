import { useState } from "react";

import { Route } from "../domain/Route.interface"

const Route = () => {

    const [parent, setParent] = useState<string>();

    return {parent};
}

export const Routes: Array<Route> = [
    {
        icon: "fa-solid fa-house",
        name: "Profile",
        url: "/profile/dashboard",
        children: [
            {
                name: "Dashboard",
                url: "/profile/dashboard"
            },
            {
                name: "Achievements",
                url: "/profile/achievements"
            }
        ]
    },
    {
        icon: "fa-solid fa-diagram-project",
        name: "Projects",
        url: "/projects/dashboard",
        children: [
            {
                name: "Projects",
                url: "/projects/dashboard"
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
        url: "/friends/dashboard",
        children: [
            {
                name: "Your Friends",
                url: "/friends/dashboard"
            },
            {
                name: "Add Friend",
                url: "/users"
            },
            {
                name: "Friends Settings",
                url: "/friends/settings"
            }
        ]
    }
]