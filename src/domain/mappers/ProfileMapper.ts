import { Mapper } from "./Mapper";

import { Profile } from "../Profile.interface";
import { ProfileDTO } from "../DTO/ProfileDTO.interface";

import { UserAchievementMapper } from "./UserAchievementMapper";
import { UserProjectMapper } from "./UserProjectMapper";
import { NotificationMapper } from "./NotificationMapper";
import { FriendMapper } from "./FriendMapper";

export class ProfileMapper extends Mapper<Profile, ProfileDTO> {

    mapFrom( data: Profile ): ProfileDTO {
        return {
            achievements: UserAchievementMapper.prototype.mapArrayFrom(data.achievements),
            projects: UserProjectMapper.prototype.mapArrayFrom(data.projects),
            notifications: NotificationMapper.prototype.mapArrayFrom(data.notifications),
            friends: FriendMapper.prototype.mapArrayFrom(data.friends)
        }
    }

    mapTo( data: ProfileDTO ): Profile {
        return {
            achievements: UserAchievementMapper.prototype.mapArrayTo(data.achievements),
            projects: UserProjectMapper.prototype.mapArrayTo(data.projects),
            notifications: NotificationMapper.prototype.mapArrayTo(data.notifications),
            friends: FriendMapper.prototype.mapArrayTo(data.friends)
        }
    }
}