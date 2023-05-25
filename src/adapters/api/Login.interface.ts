import { Notification } from "../../domain/notification/Notification.interface"

/**
 *  Interfaz con los datos que nos llegan desde el login.
 */
export interface Login {
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