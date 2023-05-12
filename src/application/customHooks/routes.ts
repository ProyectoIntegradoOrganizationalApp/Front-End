import { Route } from '../../domain/Route.interface';

export const Routes: Array<Route> = [
    {
        icon: "fa-solid fa-house",
        name: "Dashboard",
        url: "/dashboard/profile",
        children: [
            {
                name: "Profile",
                url: "/dashboard/profile"
            },
            {
                name: "My Achievements",
                url: "/dashboard/achievements"
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