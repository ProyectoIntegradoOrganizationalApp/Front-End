import { Mapper } from "./Mapper";
import { User } from "../User.interface";
import { UserDTO } from "../DTO/UserDTO";

export class UserMapper extends Mapper<User, UserDTO> {

    mapFrom( data: User ): UserDTO {
        return {
            id: data.id,
            email: data.email,
            full_name: data.full_name,
            _token: data._token,   
        }
    }

    mapTo( data: UserDTO ): User {
        return {
            id: data.id,
            email: data.email,
            full_name: data.full_name,
            _token: data._token,            
        }
    }
}