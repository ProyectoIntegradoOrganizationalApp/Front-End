import { NotificationDTO } from "./NotificationDTO.interface"

export interface UserDTO {
    id: string,
    email: string
    name: string,
    lastname: string,
    phone: string,
    created_at: Date,
    updated_at: Date,
    level: number,
    _token: string,
    notifications: Array<NotificationDTO>
}