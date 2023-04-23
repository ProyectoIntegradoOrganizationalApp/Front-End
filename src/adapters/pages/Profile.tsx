import { Sidebar } from "../components/Sidebar";

import { useContext } from "react";

import UserContext, { UserContextType } from '../../context/users'

export function Profile() {

    const { UsersContext, setUsersContext } = useContext(UserContext) as UserContextType;

    const addUser = () => {

        const newUser = {
            id: crypto.randomUUID(),
            name: "Sebastian",
            lastname: "Ramirez",
            age: 30
        };

        setUsersContext([...UsersContext, newUser]);
    };

    

    return (
        <>
            <Sidebar>
                <h1>Dashboard</h1>
                <button className="btn" onClick={addUser}>Add User</button>
            </Sidebar>
        </>
    )
}