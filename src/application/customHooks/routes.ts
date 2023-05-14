import { Route } from '../../domain/Route.interface';

export const Routes: Array<Route> = [
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
                url: "/settings/projects"
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
                name: "Settings",
                url: "/settings/friends"
            }
        ]
    }
]