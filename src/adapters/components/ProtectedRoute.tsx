import { ReactNode } from "react";

import { Navigate } from "react-router-dom";

import { User } from "../../domain/User.interface";

interface Props {
    user: User | null,
    children: ReactNode
}

export function ProtectedRoute({ user, children }: Props): JSX.Element  {

    if( !user ) {
        return <Navigate to="/" replace />
    }

    return (
        <>
            {children}
        </>
    );
}