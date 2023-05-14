import { Link, Navigate } from 'react-router-dom';
import { useUser } from "../../application/customHooks/useUser";
import { Sidebar } from "../components/dashboard/Sidebar";
import { Route } from '../../domain/Route.interface';
import { DashboardBox } from '../components/dashboard/DashboardBox';
import { Routes } from '../../application/customHooks/routes';
import { Tabs } from '../components/Tabs';
import { useState } from 'react';
import { Searcher } from '../components/Searcher';
import { DirectMessages } from '../components/friends/DirectMessages';
import { Item } from '../components/Item';

export function Friends() {

    const { user } = useUser();
    const [tab, setTab] = useState<string>("all");

    // if( !user ) {
    //     return <Navigate to="/login" />
    // }

    const routes = Routes;

    return (
        <>
            <Sidebar routes={routes} parent="friends">
                <DashboardBox>
                    <div className="bg-slate-800 w-full rounded-xl flex">
                        <div className="bg-slate-800 w-1/5 rounded-l-xl p-4 flex flex-col gap-10">
                            <DirectMessages />
                        </div>
                        <div className="bg-slate-700 w-4/5 rounded-r-xl flex flex-col">
                            <div className="bg-slate-800 w-full py-3 pr-5 flex justify-between items-center gap-2">
                                <Tabs tab={tab} setTab={setTab} icon="fa-solid fa-user-group" title="Friends" links={[
                                    {
                                        url: "all",
                                        name: "All"
                                    },
                                    {
                                        url: "online",
                                        name: "Online"
                                    },
                                    {
                                        url: "pending",
                                        name: "Pending"
                                    },
                                    {
                                        url: "blocked",
                                        name: "Blocked"
                                    }
                                ]} />
                                <div
                                    className="btn flex justify-center items-center !w-10 min-h-fit h-fit rounded-xl !aspect-square border-none bg-green-700 text-black dark:text-white hover:bg-green-700/50">
                                    <i className="fa-solid fa-plus"></i>
                                </div>
                            </div>
                            <div className="m-4 flex flex-col gap-4">
                                <Searcher bg="bg-slate-800" placeholder="Search friends..." />
                                <div className="flex flex-col gap-3">
                                    <Item title="Firebloh" description="sometimes world feels like on fire..." tools={[
                                        {
                                            action: "edit",
                                            icon: "fa-solid fa-message",
                                            color: "bg-slate-700",
                                            target: "message/idFriend"
                                        },
                                        {
                                            action: "remove",
                                            icon: "fa-solid fa-trash",
                                            color: "bg-red-700",
                                            target: "remove/idFriend"
                                        },
                                    ]} />
                                </div>
                            </div>
                        </div>
                    </div>
                </DashboardBox>
            </Sidebar>
        </>
    )
}