import { NavLink } from "react-router-dom"

import foto from "../../../assets/foto.png";
import { User } from "../../../domain/user/User.interface";

interface ProfileBadgeProps {
    user: User | null,
    logout: () => void,
}

export const ProfileBadge: React.FC<ProfileBadgeProps> = ({ user, logout }) => {

    return (
        <div className={'dropdown dropdown-end h-fit w-full hover:bg-grey items-end'}>
            <button className="btn !p-0 !bg-transparent border-none flex flex-nowrap justify-end items-center gap-2.5 normal-case !w-full !h-[unset] !min-h-[unset]">
                <img src={foto} className="!w-9 !aspect-square !h-[unset] !min-h-[unset]"/>
                <p className="leading-none text-base text-black dark:text-white">{user?.name}</p>
            </button>
            
            <ul tabIndex={0} className="menu menu-compact dropdown-content mb-4 p-2 shadow bg-gray-200 dark:bg-slate-900 w-full !z-[99999999999999] text-black dark:text-white gap-2">
                <li>
                    <NavLink to="/profile/account" className={`justify-between !rounded-none px-2.5 py-2 text-black dark:text-white ${location.pathname != "/profile/account" ? "hover:bg-gray-300 dark:hover:bg-slate-800 active:!bg-slate-800" : "bg-white dark:bg-slate-800"}`}>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <button onClick={logout} className="flex justify-between !rounded-none px-2.5 py-2 text-black dark:text-white hover:bg-transparent dark:hover:bg-transparent active:bg-white">Logout <i className="fa-solid fa-right-from-bracket"></i></button>
                </li>
            </ul>
        </div>
    )
}