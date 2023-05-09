import { ReactNode, useEffect } from "react";

import { User } from "../../domain/User.interface";
import { useAuth } from "../../application/customHooks/useAuth";

interface Props {
    user: User | null,
    children: ReactNode
}

export function ProtectedRoute( props: { children: ReactNode }) {

    const { user } = useAuth();

    return (
        <>
            {props.children}
        </>
    );
}