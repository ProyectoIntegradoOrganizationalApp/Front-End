import { Navigate } from 'react-router-dom';
import { useUser } from "../../application/customHooks/useUser";
import { Sidebar } from "../components/dashboard/Sidebar";
import { Route } from '../../domain/Route.interface';
import { DashboardBox } from '../components/dashboard/DashboardBox';
import { Routes } from '../../application/customHooks/routes';
import { AchievementsInfo } from '../components/achievements/AchievementsInfo';
import { AchievementItem } from '../components/achievements/AchievementItem';

export function Achievements() {

    const { user } = useUser();

    // if( !user ) {
    //     return <Navigate to="/login" />
    // }

    const routes = Routes;

    return (
        <>
            <Sidebar routes={routes} parent="dashboard">
                <DashboardBox>
                    <AchievementsInfo level={100} rank="Noobie" />
                    <div className="bg-slate-800 w-3/4 rounded-xl p-4 flex flex-col">
                        <div className="w-full h-10">

                        </div>
                        <div className="bg-slate-700 w-full h-full rounded-xl p-4">
                            <AchievementItem icon="idkm" title="First Steps" description="Finish 5 tasks" percentage={{
                                type: "progress",
                                number: 40
                            }} />
                        </div>
                    </div>
                </DashboardBox>
            </Sidebar>
        </>
    )
}