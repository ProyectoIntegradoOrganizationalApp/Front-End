import { ReactNode } from "react";

export const DashboardBox = ( props: { children: ReactNode } ) => {
    return (
        <div className="flex-1 flex gap-4 m-4 max-[1085px]:m-0 box-content min-h-[95%]">
            {props.children}
        </div>
    )
}