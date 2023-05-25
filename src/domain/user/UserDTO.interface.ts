import { FriendDTO } from "../friend/FriendDTO.interface";
import { NotificationsDTO } from "../notification/NotificationsDTO.interface";

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
    notifications: NotificationsDTO,
    friends: Array<FriendDTO>
}