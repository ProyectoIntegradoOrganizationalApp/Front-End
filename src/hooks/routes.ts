import { Route } from "../domain/Route.interface"

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
        url: "/dashboard/projects",
        children: [
            {
                name: "Your Projects",
                url: "/dashboard/projects"
            },
            {
                name: "Project Settings",
                url: "/dashboard/projects/settings"
            }
        ]
    },
    {
        icon: "fa-solid fa-user-group",
        name: "Friends",
        url: "/dashboard/friends",
        children: [
            {
                name: "Your Friends",
                url: "/dashboard/friends"
            },
            {
                name: "Add Friend",
                url: "/dashboard/users"
            },
            {
                name: "Friends Settings",
                url: "/dashboard/friends/settings"
            }
        ]
    }
]