import { Mapper } from "../Mapper";
import { User } from "../../../domain/user/User.interface";
import { UserDTO } from "../../../domain/user/UserDTO.interface";
import { NotificationsMapper } from "../NotificationsMapper";
import { FriendMapper } from "../FriendMapper";

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
        }
    }
}