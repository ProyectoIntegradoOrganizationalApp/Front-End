import { Navigate } from 'react-router-dom';
import { useUser } from "../../application/customHooks/useUser";
import { Sidebar } from "../components/dashboard/Sidebar";
import { Route } from '../../domain/Route.interface';
import { DashboardBox } from '../components/dashboard/DashboardBox';
import { Routes } from '../../application/customHooks/routes';

export function Projects() {

    const { user } = useUser();

    // if( !user ) {
    //     return <Navigate to="/login" />
    // }

    const routes = Routes;

    return (
        <>
            <Sidebar parent="projects">
                <DashboardBox>
                    <div className="bg-slate-800 w-1/4 rounded-xl"></div>
                    <div className="bg-slate-800 w-3/4 rounded-xl"></div>
                </DashboardBox>
            </Sidebar>
        </>
    )
}