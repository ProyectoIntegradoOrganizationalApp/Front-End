import { ReactNode } from "react";

export const DashboardBox = ( props: { children: ReactNode } ) => {
    return (
        <div className="h-full flex gap-4 m-4 box-content">
            {props.children}
        </div>
    )
}