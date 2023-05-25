import { ReactNode, useEffect } from "react";

import { User } from "../domain/user/User.interface";
import { Navigate } from "react-router-dom";

interface Props {
    user: User | null,
    children: ReactNode
}

export function ProtectedRoute( props: Props ) {

    return (
        <>
            { props.user ? 
                (props.children): 
                (<Navigate to='/login' />)
            }
            {/* { props.children } */}
        </>
    )
}