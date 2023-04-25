import { Sidebar } from "../components/Sidebar";

import { useContext } from "react";

export function Profile() {

    function xd(){

    }

    return (
        <>
            <Sidebar>
                <h1>Dashboard</h1>
                <button className="btn" onClick={xd}>Add User</button>
            </Sidebar>
        </>
    )
}