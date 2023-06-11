import { Mapper } from "./Mapper";

import { Profile } from "../../domain/profile/Profile.interface";
import { ProfileDTO } from "../../domain/profile/ProfileDTO.interface";

import { UserAchievementMapper } from "./User/UserAchievementMapper";
import { UserProfileMapper } from "./User/UserProfileMapper";
import { UserActivityMapper } from "./User/UserActivityMapper";
import { ProjectMapper } from "./ProjectMapper";

export class ProfileMapper extends Mapper<Profile, ProfileDTO> {

    mapFrom( data: Profile ): ProfileDTO {
        return {
            user: UserProfileMapper.prototype.mapFrom(data.user),
            achievements: UserAchievementMapper.prototype.mapArrayFrom(data.achievements),
            projects: ProjectMapper.prototype.mapArrayFrom(data.projects),
            activity: UserActivityMapper.prototype.mapArrayFrom(data.activity),
        }
    }

    mapTo( data: ProfileDTO ): Profile {
        return {
            user: UserProfileMapper.prototype.mapTo(data.user),
            achievements: UserAchievementMapper.prototype.mapArrayTo(data.achievements),
            projects: ProjectMapper.prototype.mapArrayTo(data.projects),
            activity: UserActivityMapper.prototype.mapArrayTo(data.activity)
        }
    }
}