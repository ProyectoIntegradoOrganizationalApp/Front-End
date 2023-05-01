import { createContext } from 'react';

import { EmptyUser, User } from '../domain/User.interface';

interface AuthContext {
    user: User,
    setUser: (user: User) => void
}

export const AuthContext = createContext<AuthContext>({
    user: EmptyUser,
    setUser: () => {}
});