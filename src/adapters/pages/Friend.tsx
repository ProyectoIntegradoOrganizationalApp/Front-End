import { Link, Navigate, useParams } from 'react-router-dom';
import { useUser } from "../../application/customHooks/useUser";
import { Sidebar } from "../components/dashboard/Sidebar";
import { Route } from '../../domain/Route.interface';
import { DashboardBox } from '../components/dashboard/DashboardBox';
import { Routes } from '../../application/customHooks/routes';
import { Tabs } from '../components/Tabs';
import { useState } from 'react';
import { Searcher } from '../components/Searcher';
import { DirectMessages } from '../components/friends/DirectMessages';
import { Chat } from '../components/friends/Chat';

export function Friend() {

    const { user } = useUser();
    const [tab, setTab] = useState<string>("all");

    // if( !user ) {
    //     return <Navigate to="/login" />
    // }

    const routes = Routes;

    const friend = useParams();

    return (
        <>
            <Sidebar routes={routes} parent="friends">
                <DashboardBox>
                    <div className="bg-slate-800 w-full rounded-xl flex">
                        <div className="bg-slate-800 w-1/5 rounded-l-xl p-4 flex flex-col gap-10">
                            <DirectMessages selected={friend.name} />
                        </div>
                        <div className="bg-slate-700 w-4/5 rounded-r-xl p-4">
                            <Chat friend={friend.name} />
                        </div>
                    </div>
                </DashboardBox>
            </Sidebar>
        </>
    )
}