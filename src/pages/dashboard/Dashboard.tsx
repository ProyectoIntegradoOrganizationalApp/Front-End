import { Navigate, Outlet, useLocation } from "react-router-dom";

import { useProfileApi } from "../../adapters/api/useProfileApi";

import { DashboardBox } from "./components/DashboardBox";
import { Sidebar } from "./components/Sidebar";

export const Dashboard = () => {

    const {data, error, loading} = useProfileApi();
    const location = useLocation();

    if( location.pathname === '/') {
        return <Navigate to='/home' />
    }

    return (
        <Sidebar>
            <DashboardBox>
                <Outlet context={data} />
            </DashboardBox>
        </Sidebar>
    )
}