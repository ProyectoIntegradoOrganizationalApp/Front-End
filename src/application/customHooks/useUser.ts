import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useLocalStorage } from './useLocalStorage';

import { EmptyUser, User } from '../../domain/User.interface';

export const useUser = () => {
    const { user, setUser } = useContext(AuthContext);
    const { setItem } = useLocalStorage();

    const addUser = (user: User) => {
        setUser(user);
        setItem('user', JSON.stringify(user));
    }

    const removeUser = () => {
        setUser(EmptyUser);
        setItem('user', '');
    }

    return { user, addUser, removeUser };
}
