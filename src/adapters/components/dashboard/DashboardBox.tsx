import { ReactNode } from "react";

export const DashboardBox = ( props: { children: ReactNode } ) => {
    return (
        <div className="h-full flex gap-6 m-6 box-content">
            {props.children}
        </div>
    )
}