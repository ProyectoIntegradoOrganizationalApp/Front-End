import { Mapper } from "./Mapper";
import { User } from "../User.interface";
import { UserDTO } from "../DTO/UserDTO";

export class UserMapper extends Mapper<User, UserDTO> {

    mapFrom( user: User ): UserDTO {
        return {
            email: user.email,
            token: user.token
        }
    }

    mapTo( user: UserDTO ): User {
        return {
            id: 0,
            email: user.email,
            full_name: '',
            token: user.token,            
        }
    }
}