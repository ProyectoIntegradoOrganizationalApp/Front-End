import { Outlet } from "react-router-dom"

import { useProfileApi } from "../../application/api/useProfileApi"

import { DashboardBox } from "../components/dashboard/DashboardBox"
import { Sidebar } from "../components/dashboard/Sidebar"

export const Dashboard = () => {

    const {data, error, loading} = useProfileApi();

    return (
        <Sidebar parent="dashboard">
            <DashboardBox>
                <Outlet context={data} />
            </DashboardBox>
        </Sidebar>
    )
}