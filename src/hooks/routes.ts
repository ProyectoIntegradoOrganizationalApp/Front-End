import { useState } from "react";

import { Route } from "../domain/Route.interface";

const Route = () => {
    const [parent, setParent] = useState<string>();

    return { parent };
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
                url: "/projects"
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
                url: "",
                onclick: `() => openModal({
                    isOpen: true,
                    type: "searchuser",
                    submitText: "",
                    submitAction: () => { }
                }
                )`
            }
        ]
    }
]