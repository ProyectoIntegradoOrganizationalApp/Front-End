import { Navigate } from 'react-router-dom';
import { useUser } from "../../application/customHooks/useUser";
import { Sidebar } from "../components/dashboard/Sidebar";
import { Route } from '../../domain/Route.interface';
import { DashboardBox } from '../components/dashboard/DashboardBox';
import { Routes } from '../../application/customHooks/routes';
import { AchievementsInfo } from '../components/achievements/AchievementsInfo';
import { AchievementItem } from '../components/achievements/AchievementItem';
import { Tabs } from '../components/Tabs';
import { useState } from 'react';
import { Dropdown } from '../components/Dropdown';

export function Achievements() {
    const { user } = useUser();
    const [tab, setTab] = useState<string>("all");
    const [selectedElement, selectElement] = useState<string>("Order By");

    // if( !user ) {
    //     return <Navigate to="/login" />
    // }

    const routes = Routes;

    return (
        <>
            <Sidebar routes={routes} parent="dashboard">
                <DashboardBox>
                    <AchievementsInfo level={100} rank="Noobie" />
                    <div className="bg-slate-800 w-3/4 rounded-xl p-4 pt-0 flex flex-col">
                        <div className="py-3 flex justify-between items-center">
                            <Tabs tab={tab} setTab={setTab} icon="fa-solid fa-medal" title="Achievements" links={[
                                {
                                    url: "all",
                                    name: "All"
                                },
                                {
                                    url: "projects",
                                    name: "Projects"
                                },
                                {
                                    url: "friends",
                                    name: "Friends"
                                }
                            ]} />
                            <Dropdown selectedElement={selectedElement} selectElement={selectElement} elements={[
                                {
                                    action: "fe",
                                    name: "Older"
                                },
                                {
                                    action: "fe",
                                    name: "Recently"
                                },
                                {
                                    action: "fe",
                                    name: "Alphabetical"
                                },
                                {
                                    action: "fe",
                                    name: "Difficulty"
                                }
                            ]} />
                        </div>
                        <div className="bg-slate-700 w-full h-full rounded-xl p-4">
                            {/* Foreach */}
                            <AchievementItem tab={tab} orderBy={selectedElement} icon="idkm" title="First Steps" description="Finish 5 tasks" percentage={{
                                type: "progress",
                                number: 40
                            }} />
                            {/* EndForeach */}
                        </div>
                    </div>
                </DashboardBox>
            </Sidebar>
        </>
    )
}