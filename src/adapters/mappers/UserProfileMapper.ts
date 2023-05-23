import { Mapper } from "./Mapper";
import { UserProfile } from "../../domain/user/UserProfile.interface";
import { UserProfileDTO } from "../../domain/user/UserProfileDTO.interface";

export class UserProfileMapper extends Mapper<UserProfile, UserProfileDTO> {

    mapFrom( data: UserProfile ): UserProfile {
        return {
           id: data.id,
           name: data.name,
           email: data.email,
           level: data.level,
           photo: data.photo
        }
    }

    mapTo( data: UserProfileDTO ): UserProfile {
        return {
            id: data.id,
            name: data.name,
            email: data.email,
            level: data.level,
            photo: data.photo
        }
    }
}