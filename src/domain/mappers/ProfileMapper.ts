import { Mapper } from "./Mapper";

import { Profile } from "../Profile.interface";
import { ProfileDTO } from "../DTO/ProfileDTO.interface";

import { UserAchievementMapper } from "./UserAchievementMapper";
import { UserProjectMapper } from "./UserProjectMapper";
import { NotificationMapper } from "./NotificationMapper";
import { UserProfileMapper } from "./UserProfileMapper";
import { UserActivityMapper } from "./UserActivityMapper";

export class ProfileMapper extends Mapper<Profile, ProfileDTO> {

    mapFrom( data: Profile ): ProfileDTO {
        return {
            user: UserProfileMapper.prototype.mapFrom(data.user),
            achievements: UserAchievementMapper.prototype.mapArrayFrom(data.achievements),
            projects: UserProjectMapper.prototype.mapArrayFrom(data.projects),
            notifications: NotificationMapper.prototype.mapArrayFrom(data.notifications),
            activity: UserActivityMapper.prototype.mapArrayFrom(data.activity)
        }
    }

    mapTo( data: ProfileDTO ): Profile {
        return {
            user: UserProfileMapper.prototype.mapTo(data.user),
            achievements: UserAchievementMapper.prototype.mapArrayTo(data.achievements),
            projects: UserProjectMapper.prototype.mapArrayTo(data.projects),
            notifications: NotificationMapper.prototype.mapArrayTo(data.notifications),
            activity: UserActivityMapper.prototype.mapArrayTo(data.activity)
        }
    }
}