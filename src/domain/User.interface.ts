import { Notification } from "./Notification.interface"

/**
 *  Interfaz de Usuario que define el usuario que nos viene del login.
 */
export interface User {
    id: string,
    email: string
    name: string,
    lastname: string,
    phone: string,
    created_at: Date,
    updated_at: Date,
    level: number,
    _token: string,
    notifications: Array<Notification>
}