/**
 *  Interfaz de Usuario
 */
export interface User {
    id: number,
    email: string,
    full_name: string,
    token: string,
}

export const EmptyUser: User = Object.freeze({
    id: 0,
    email: '',
    full_name: '',
    token: '',
});