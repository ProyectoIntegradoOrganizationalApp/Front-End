import { Mapper } from "./Mapper";
import { User } from "../User.interface";
import { UserDTO } from "../DTO/UserDTO";
import { NotificationMapper } from "./NotificationMapper";

export class UserMapper extends Mapper<User, UserDTO> {

    mapFrom( data: User ): UserDTO {
        return {
            id: data.id,
            email: data.email,
            name: data.name,
            lastname: data.lastname,
            phone: data.phone,
            created_at: data.created_at,
            updated_at: data.updated_at,
            level: data.level,
            _token: data._token,
            notifications: NotificationMapper.prototype.mapArrayFrom(data.notifications)
        }
    }

    mapTo( data: UserDTO ): User {
        return {
            id: data.id,
            email: data.email,
            name: data.name,
            lastname: data.lastname,
            phone: data.phone,
            created_at: data.created_at,
            updated_at: data.updated_at,
            level: data.level,
            _token: data._token,
            notifications: NotificationMapper.prototype.mapArrayTo(data.notifications)          
        }
    }
}