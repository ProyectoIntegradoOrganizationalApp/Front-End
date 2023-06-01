// React
import { useState } from 'react';
import { MyAccount } from './account/MyAccount';
import { Security } from './account/Security';
import { Preferences } from './account/Preferences';
import { Notifications } from './account/Notifications';

/**
 * Componente Account, que representa la ruta /account en la cual podremos
 * ver y configurar nuestra cuenta
 * @returns React.FC
 */
export function Account() {
    const [tab, setTab] = useState<string>("account");

    return (
        <div className="w-full flex flex-wrap gap-4 max-[500px]:gap-2">
            <div className="bg-gray-200 dark:bg-slate-800 min-[1085px]:rounded-xl relative flex-1 flex flex-col items-center gap-8 py-8 min-w-[260px]">
                <div className="flex flex-col items-center gap-5 px-4">
                    <div className="bg-green-600 w-28 aspect-square rounded-full"></div>
                    <p className="text-xl leading-none text-black dark:text-white">Firebloh</p>
                </div>
                <ul className="w-full flex flex-col justify-around select-none">
                    <li onClick={() => setTab("account")} className={`cursor-pointer flex gap-4 items-center p-3.5 px-[1.7rem] ${tab == "account" ? "bg-white dark:bg-slate-700 text-black dark:text-white" : "hover:bg-gray-300 dark:hover:bg-slate-700/30 text-slate-500 dark:text-slate-400"}`}><i className="fa-solid fa-house"></i>My Account</li>
                    <li onClick={() => setTab("security")} className={`cursor-pointer flex gap-4 items-center p-3.5 px-[1.7rem] ${tab == "security" ? "bg-white dark:bg-slate-700 text-black dark:text-white" : "hover:bg-gray-300 dark:hover:bg-slate-700/30 text-slate-500 dark:text-slate-400"}`}><i className="fa-solid fa-key"></i>Security</li>
                    <li onClick={() => setTab("preferences")} className={`cursor-pointer flex gap-4 items-center p-3.5 px-[1.7rem] ${tab == "preferences" ? "bg-white dark:bg-slate-700 text-black dark:text-white" : "hover:bg-gray-300 dark:hover:bg-slate-700/30 text-slate-500 dark:text-slate-400"}`}><i className="fa-solid fa-cog"></i>Preferences</li>
                    <li onClick={() => setTab("notifications")} className={`cursor-pointer flex gap-4 items-center p-3.5 px-[1.7rem] ${tab == "notifications" ? "bg-white dark:bg-slate-700 text-black dark:text-white" : "hover:bg-gray-300 dark:hover:bg-slate-700/30 text-slate-500 dark:text-slate-400"}`}><i className="fa-solid fa-envelope"></i>Notifications</li>
                </ul>
            </div>
            <div className="bg-gray-200 dark:bg-slate-800 flex-[4] h-full min-[500px]:rounded-xl flex flex-col w-full p-8">
                <p className="capitalize text-2xl text-black dark:text-white leading-none max-[811px]:hidden">{tab} Settings</p>
                {
                    tab == "account" &&
                    <MyAccount/>
                } {
                    tab == "security" &&
                    <Security/>
                } {
                    tab == "preferences" &&
                    <Preferences/>
                } {
                    tab == "notifications" &&
                    <Notifications/>
                }
            </div>
        </div>
    )
}