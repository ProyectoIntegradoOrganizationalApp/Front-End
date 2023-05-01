import { ReactNode } from "react";
import { ProfileBadge } from "./ProfileBadge";
import { useAuth } from "../../application/customHooks/useAuth";
import { Link } from "react-router-dom";
import logo from "../../assets/svg/logo.svg";

export function Sidebar( props: { children: ReactNode } ) {

    const { user, logout } = useAuth();

    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                <label htmlFor="my-drawer-2" className="btn btn-primary w-12 absolute top-1/2 -left-5 rounded-full">
                    <label className="btn btn-circle swap swap-rotate">
                        <input type="checkbox" />
                        <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
                        <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
                    </label>
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
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>
                    </div>
                    
                    <div className="flex-1 flex flex-col justify-end">
                        <ProfileBadge 
                            user={user}
                            logout={logout}
                            position={"dropdown dropdown-top"}
                        />
                    </div>
                </ul>
            </div>
        </div>
    )
}