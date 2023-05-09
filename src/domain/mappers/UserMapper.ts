import { Mapper } from "./Mapper";
import { User } from "../User.interface";
import { UserDTO } from "../DTO/UserDTO";

export class UserMapper extends Mapper<User, UserDTO> {

    mapFrom( user: User ): UserDTO {
        return {
            id: user.id,
            email: user.email,
            full_name: user.full_name,
            _token: user._token,   
        }
    }

    mapTo( user: UserDTO ): User {
        return {
            id: user.id,
            email: user.email,
            full_name: user.full_name,
            _token: user._token,            
        }
    }
}