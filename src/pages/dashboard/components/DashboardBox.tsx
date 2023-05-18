import { ReactNode } from "react";

export const DashboardBox = ( props: { children: ReactNode } ) => {
    return (
        <div className="flex-1 flex gap-4 m-4 box-content">
            {props.children}
        </div>
    )
}