import { useEffect } from 'react';

import { useUser } from './useUser';
import { useLocalStorage } from './useLocalStorage';

import { User } from '../../domain/User.interface';

export const useAuth = () => {
    const { user, addUser, removeUser } = useUser();
    const { getItem } = useLocalStorage();

    useEffect( () => {
        const user = getItem('user');

        if( user ) {
            addUser(JSON.parse(user));
        }
    }, [])

    const login = (user: User) => {
        if( user === undefined) return;
        
        addUser(user);
    }

    const logout = () => {
        removeUser();
    }

    return { user, login, logout};
}
