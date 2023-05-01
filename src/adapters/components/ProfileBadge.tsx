import { NavLink } from "react-router-dom"

import foto from "../../assets/foto.png";
import { User } from "../../domain/User.interface";

export const ProfileBadge = ( props: { user: User, logout: () => void, position: string } ) => {

    return (
        <div className={props.position}>
            <button className="btn flex gap-6 justify-around">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img src={foto} />
                    </div>
                </label>
                <span>Mike</span>
            </button>
            
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                    <NavLink to="/profile" className="justify-between">
                        Profile
                        <span className="badge">New</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/settings">
                        Settings
                    </NavLink>
                </li>
                <li>
                    <button onClick={props.logout}>Logout</button>
                </li>
            </ul>
            
        </div>
    )
}