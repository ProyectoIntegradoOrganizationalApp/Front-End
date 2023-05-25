import { Mapper } from "./Mapper";
import { Friend } from "../../domain/friend/Friend.interface";
import { FriendDTO } from "../../domain/friend/FriendDTO.interface";

export class FriendMapper extends Mapper<Friend, FriendDTO> {

    mapFrom( data: Friend ): FriendDTO {
        return {
            idFriend: data.id,
            photo: data.photo,
            name: data.name,
        }
    }

    mapTo( data: FriendDTO ): Friend {
        return {
            id: data.idFriend,
            photo: data.photo,
            name: data.name,
        }
    }
}