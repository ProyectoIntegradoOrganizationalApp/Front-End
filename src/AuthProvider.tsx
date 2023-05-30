import React, { ReactNode } from "react";

import { AuthContext } from "./context/AuthContext";

import { useAuth } from "./hooks/useAuth";

import { User } from "./domain/user/User.interface";

/**
 *  Componente envoltorio y manejador de estado del contexto.
 *  Testeo de sintaxis nueva**
 */
const AuthProvider: React.FC<{children: ReactNode}> = ({children}) => {

    // Creamos las variable del Contexto
    const [contextUser, setUser] = React.useState<User | null>(null);

    const context = React.useContext(AuthContext);

    // Cargamos el contexto desde el local storage
    const { user } = useAuth();

    React.useEffect(() => {
        console.log(context)
    }, [contextUser?.id])

    return (
        <AuthContext.Provider value={{user: contextUser, setUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;