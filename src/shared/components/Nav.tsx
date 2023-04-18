import React, { useState } from 'react';

// Assets
import logo from "../../assets/svg/logo.svg";

import { Link } from 'react-router-dom';
import { Route } from '../interfaces/Route.interfaces';

export default function Nav({ home, dashboard, aboutus }: { home: Route, dashboard: Route, aboutus: Route }) {
    
    return (
        <div className="navbar bg-slate-600 text-white pr-16 pl-14">
            {/* Logo */}
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl" href="/home">
                    <img className="pr-3" src={logo} />
                    <h1 className="font-3xl">Teamer</h1>
                </a>
            </div>

            {/* Menu */}
            <div className="links flex gap-5 pr-5">
                <a href={home.link} className={window.location.pathname === home.link ? 'nav-active' : ''}> {home.name} </a>&nbsp;
                <a href={dashboard.link} className={window.location.pathname === dashboard.link ? 'nav-active' : ''}> {dashboard.name} </a>&nbsp;
                <a href={aboutus.link} className={window.location.pathname === aboutus.link ? 'nav-active' : ''}> {aboutus.name} </a>&nbsp;
            </div>

            {/* Profile */}
            <div className="flex-none">

                {/* DropDown */}
                <div className="dropdown dropdown-end">

                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full bg-black">

                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}