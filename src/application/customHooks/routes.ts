import { Route } from '../../domain/Route.interface';

export const Routes: Array<Route> = [
    {
        icon: "fa-solid fa-house",
        name: "Dashboard",
        url: "/dashboard",
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
                name: "Your Projects",
                url: "/projects"
            },
            {
                name: "Project Settings",
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
                name: "Your Friends",
                url: "/friends"
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