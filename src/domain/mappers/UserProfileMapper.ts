import { Mapper } from "./Mapper";
import { UserProfile } from "../UserProfile.interface";
import { UserProfileDTO } from "../DTO/UserProfileDTO.interface";

export class UserProfileMapper extends Mapper<UserProfile, UserProfileDTO> {

    mapFrom( data: UserProfile ): UserProfile {
        return {
           id: data.id,
           name: data.name,
           email: data.email,
           level: data.level,
        }
    }

    mapTo( data: UserProfileDTO ): UserProfile {
        return {
            id: data.id,
            name: data.name,
            email: data.email,
            level: data.level,
        }
    }
}