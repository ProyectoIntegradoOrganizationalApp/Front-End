/**
 *  Interfaz de Usuario que define el usuario que nos viene del login.
 */
export interface User {
    id: string,
    email: string,
    full_name: string,
    _token: string,
}

