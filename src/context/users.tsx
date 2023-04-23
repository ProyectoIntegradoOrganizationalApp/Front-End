import { createContext, ReactNode, useState } from "react";

const Context = createContext({});

interface Props {
    children: ReactNode
}

type User = {
    id: string,
    name: string,
    lastname: string,
    age: number
}

export type UserContextType = {
    UsersContext: Array<User>,
    setUsersContext: ( value: Array<User>) => void
}

export function UsersContextProvider( { children }: Props ) {
    const [UsersContext, setUsersContext] = useState<User[]>([]);
    return (
        <Context.Provider value={{UsersContext, setUsersContext}}>
            {children}
        </Context.Provider>
    )
}

export default Context;