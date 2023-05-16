import { Mapper } from "./Mapper";

import { Profile } from "../../domain/profile/Profile.interface";
import { ProfileDTO } from "../../domain/profile/ProfileDTO.interface";

import { UserAchievementMapper } from "./UserAchievementMapper";
import { UserProjectMapper } from "./UserProjectMapper";
import { UserProfileMapper } from "./UserProfileMapper";
import { UserActivityMapper } from "./UserActivityMapper";

export class ProfileMapper extends Mapper<Profile, ProfileDTO> {

    mapFrom( data: Profile ): ProfileDTO {
        return {
            user: UserProfileMapper.prototype.mapFrom(data.user),
            achievements: UserAchievementMapper.prototype.mapArrayFrom(data.achievements),
            projects: UserProjectMapper.prototype.mapArrayFrom(data.projects),
            activity: UserActivityMapper.prototype.mapArrayFrom(data.activity)
        }
    }

    mapTo( data: ProfileDTO ): Profile {
        return {
            user: UserProfileMapper.prototype.mapTo(data.user),
            achievements: UserAchievementMapper.prototype.mapArrayTo(data.achievements),
            projects: UserProjectMapper.prototype.mapArrayTo(data.projects),
            activity: UserActivityMapper.prototype.mapArrayTo(data.activity)
        }
    }
}