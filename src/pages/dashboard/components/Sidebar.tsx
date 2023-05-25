import { ReactNode } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import { ProfileBadge } from "./ProfileBadge";
import logo from "../../../assets/svg/logo.svg";

import { Routes } from "../../../hooks/routes";
import { useAuth } from '../../../hooks/useAuth';

export function Sidebar( props: { children: ReactNode } ) {

    const { user, logout } = useAuth();

    const location = useLocation();

    const btnStyles = `text-sm p-0 w-fit focus:bg-transparent hover:text-black dark:hover:bg-transparent dark:hover:text-white`;

    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col dark:bg-slate-600 !h-full" id="scrollbar">
                <label htmlFor="my-drawer-2" className="btn btn-primary w-0 !pl-4 !pr-4 !h-32 absolute top-[40%] -left-5 rounded-full swap swap-rotate z-40 !rounded-r-xl !bg-gray-400 dark:!bg-black">
                </label>
                {props.children}
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu w-52 bg-gray-300 dark:bg-slate-800 text-base-content flex flex-col justify-around">
                    <div className="headerSidebar">
                        <Link to="/" className="flex btn btn-ghost normal-case text-xl h-fit py-3 w-fit mx-auto hover:bg-transparent text-black dark:text-white">
                            <img className="mr-3" src={logo}/>
                            Teamer
                        </Link>
                    </div>

                    <div className="middleSidebar flex-1 mt-8">
                        <ul className="menu dropdown-content">
                            { Routes && Routes.map(link =>
                                <li key={link.name}>
                                    <div className="p-0 w-full block cursor-pointer active:bg-transparent">
                                        { link.children ? (
                                            <div className={`dropdown dropdown-end flex flex-col items-start p-0 gap-0 ${location.pathname.includes(link.name.toLowerCase()) ? "bg-white dark:bg-slate-700 cursor-auto" : "cursor-pointer"}`}>
                                                
                                                <NavLink to={link.url} className={`flex items-center gap-4 p-3.5 pl-[1.7rem] w-full outline-none ${!location.pathname.includes(link.name.toLowerCase()) ? "hover:bg-gray-200 dark:hover:bg-slate-800/30" : ""}`}>
                                                    <i className={link.icon + ` ${location.pathname.includes(link.name.toLowerCase()) ? "text-black dark:!text-white" : "text-slate-500 dark:text-slate-400"}`}></i>
                                                    <p className={`text-base ${location.pathname.includes(link.name.toLowerCase()) ? "text-black dark:!text-white" : "text-slate-500 dark:text-slate-400"}`}>{link.name}</p>
                                                </NavLink>
                                                { location.pathname.includes(link.name.toLowerCase()) && (
                                                    <>
                                                        <hr className="w-full border-gray-300 bg-gray-300 dark:border-slate-600 border-[1.5px] dark:bg-slate-600"/>
                                                        <ul className="menu shadow hover:bg-transparent w-full py-3 px-[1.7rem] flex flex-col gap-[0.3rem]" tabIndex={0}>
                                                            { link.children && link.children.map( child => 
                                                                <li key={child.name}>
                                                                    <NavLink to={child.url} className={({isActive, isPending}) => isActive ? `text-black dark:text-white hover:bg-transparent ${btnStyles}` : `text-slate-400 dark:text-white/50 ${btnStyles}`}>{child.name}</NavLink>
                                                                </li>
                                                            )}
                                                        </ul>
                                                    </>
                                                )
                                                    
                                                }
                                            </div>
                                        ): (
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
                        <div className="flex justify-between items-center px-6 py-3">
                            <ProfileBadge
                                user={user}
                                logout={logout}
                                position={"dropdown dropdown-top"}
                            />
                            <button className="btn ">
                                <div className="indicator">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                                    <span className="badge badge-xs badge-primary indicator-item"></span>
                                </div>
                            </button>
                        </div>
                    </div>
                </ul>
            </div>
        </div>
    )
}