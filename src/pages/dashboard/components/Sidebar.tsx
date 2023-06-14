import { ReactNode } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import { ProfileBadge } from "./ProfileBadge";
import logo from "../../../assets/svg/logo.svg";

import { Routes } from "../../../hooks/routes";
import { useAuth } from '../../../hooks/useAuth';
import { Profile } from "../../../domain/profile/Profile.interface";
import { useModal } from "../../../hooks/useModal";


export function Sidebar( props: { children: ReactNode, profile: Profile | undefined } ) {
    const { openModal } = useModal();
    const { logout } = useAuth();

    const location = useLocation();

    const btnStyles = `text-sm p-0 w-fit focus:bg-transparent hover:text-black dark:hover:bg-transparent dark:hover:text-white`;

    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col dark:bg-[#414149] !h-full max-[1086px]:p-0" id="scrollbar">
                <label htmlFor="my-drawer-2" className="btn btn-primary w-0 !pl-4 !pr-4 !h-32 absolute top-[40%] -left-5 rounded-full swap swap-rotate z-40 !rounded-r-xl !bg-gray-400 dark:!bg-black">
                </label>
                {props.children}
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu w-52 bg-gray-300 dark:bg-[#202124] text-base-content flex flex-col justify-around">
                    <div className="headerSidebar">
                        <Link to="/" className="flex btn btn-ghost normal-case text-xl h-fit py-3 w-fit mx-auto hover:bg-transparent text-black dark:text-white">
                            <img className="mr-3" src={logo} />
                            Teamer
                        </Link>
                    </div>

                    <div className="middleSidebar flex-1 mt-8">
                        <ul className="menu dropdown-content">
                            {Routes && Routes.map(link =>
                                <li key={link.name}>
                                    <div className="p-0 w-full block cursor-pointer active:bg-transparent transition-none">
                                        {link.children ? (
                                            <div className={`dropdown dropdown-end flex flex-col items-start p-0 gap-0 ${location.pathname.includes(link.name.toLowerCase()) ? "bg-white dark:bg-[#28292d] cursor-auto" : "cursor-pointer hover:bg-gray-200 dark:hover:bg-[#28292d]/60"}`}>

                                                <NavLink to={link.url} className="flex items-center gap-4 p-3.5 pl-[1.7rem] w-full outline-none transition-none">
                                                    <i className={link.icon + ` ${location.pathname.includes(link.name.toLowerCase()) ? "text-black dark:!text-white" : "text-black dark:text-white"}`}></i>
                                                    <p className={`text-base ${location.pathname.includes(link.name.toLowerCase()) ? "text-black dark:!text-white" : "text-black dark:text-white"}`}>{link.name}</p>
                                                </NavLink>
                                                {location.pathname.includes(link.name.toLowerCase()) && (
                                                    <>
                                                        <hr className="w-full border-gray-300 bg-gray-300 dark:border-[#202124] border-[1.5px] dark:bg-[#202124]" />
                                                        <ul className="menu shadow hover:bg-transparent w-full py-3 px-[1.7rem] flex flex-col gap-[0.3rem]" tabIndex={0}>
                                                            {link.children && link.children.map(child =>
                                                                <li key={child.name}>
                                                                    {
                                                                        child.url != "" &&
                                                                        <NavLink to={child.url} className={({ isActive, isPending }) => isActive ? `text-black dark:text-white hover:bg-transparent ${btnStyles}` : `text-slate-400 dark:text-white/50 ${btnStyles}`}>{child.name}</NavLink>
                                                                    } {
                                                                        child.url == "" && child.onclick &&
                                                                        <p onClick={
                                                                            eval(child.onclick)
                                                                        } className={`text-slate-400 dark:text-white/50 ${btnStyles}`}>{child.name}</p>
                                                                    } {
                                                                        child.url == "" && !child.onclick &&
                                                                        <p className={`text-slate-400 dark:text-white/50 ${btnStyles}`}>{child.name}</p>
                                                                    }
                                                                </li>
                                                            )}
                                                        </ul>
                                                    </>
                                                )

                                                }
                                            </div>
                                        ) : (
                                            <div className="flex items-center gap-4">
                                                <i className={link.icon}></i>
                                                <NavLink to={link.url} className="text-base">{link.name}</NavLink>
                                            </div>
                                        )}
                                    </div>
                                </li>
                            )}
                        </ul>

                    </div>

                    <div className="flex-1 flex flex-col justify-end">
                        <div className="w-full flex justify-between items-center px-6 pb-5">
                            <ProfileBadge
                                profile={props.profile}
                                logout={logout}
                            />
                        </div>
                    </div>
                </ul>
            </div>
        </div>
    )
}