import { Mapper } from "./Mapper";
import { Friend } from "../../domain/Friend.interface";
import { FriendDTO } from "../../domain/profile/FriendDTO.interface";

export class FriendMapper extends Mapper<Friend, FriendDTO> {

    mapFrom( data: Friend ): FriendDTO {
        return {
            id: data.id,
            pic: data.pic,
            full_name: data.full_name,
            description: data.description
        }
    }

    mapTo( data: FriendDTO ): Friend {
        return {
            id: data.id,
            pic: data.pic,
            full_name: data.full_name,
            description: data.description
        }
    }
}