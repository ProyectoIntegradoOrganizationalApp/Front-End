import { ReactNode } from "react";
import { Link } from "react-router-dom";

import { ProfileBadge } from "./ProfileBadge";
import { useAuth } from "../../application/customHooks/useAuth";

import logo from "../../assets/svg/logo.svg";
import { Route } from "../../domain/Route.interface";

export function Sidebar( props: { children: ReactNode, routes: Array<Route> } ) {

    const { user, logout } = useAuth();

    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                <label htmlFor="my-drawer-2" className="btn btn-primary w-12 absolute top-1/2 -left-5 rounded-full swap swap-rotate">
                    <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
                    <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
                </label>
                {props.children}
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-base-100 text-base-content flex flex-col justify-around">
                    <div className="headerSidebar">
                        <Link to="/" className="btn btn-ghost normal-case text-xl">
                            <img className="mr-3" src={logo}></img>
                            Teamer    
                        </Link>
                    </div>
                    
                    <div className="middleSidebar flex-1 mt-24">
                        <ul className="menu dropdown-content">
                            { props.routes && props.routes.map( link => 
                                <li key={link.name}>
                                    { link.children ? (
                                        <div className="dropdown dropdown-end">
                                            <label tabIndex={0}>{link.name}</label>
                                            <ul className="menu dropdown-content  p-2 shadow bg-base-100 rounded-box w-52 mt-4" tabIndex={0}>
                                                { link.children && link.children.map( child => 
                                                    <li key={link.name}>
                                                        <Link to={child.url}>{child.name}</Link>
                                                    </li>
                                                )}
                                            </ul>
                                        </div>
                                    ): (
                                        <Link to={link.url}>{link.name}</Link>
                                    )}
                                    
                                </li>
                            )}
                        </ul>

                    </div>
                    
                    <div className="flex-1 flex flex-col justify-end">
                        <div className="flex justify-around items-center">
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