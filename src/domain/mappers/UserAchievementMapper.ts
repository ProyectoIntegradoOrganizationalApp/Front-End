import { Mapper } from "./Mapper";
import { UserAchievement } from "../UserAchievement.interface";
import { UserAchievementDTO } from "../DTO/UserAchievementDTO.interface";


export class UserAchievementMapper extends Mapper<UserAchievement, UserAchievementDTO> {

    mapFrom( data: UserAchievement ): UserAchievementDTO {
        return {
            id: data.id,
            title: data.title,
            description: data.description,
            icon: data.icon,
            progress: data.progress,
            completed: data.completed
        }
    }

    mapTo( data: UserAchievementDTO ): UserAchievement {
        return {
            id: data.id,
            title: data.title,
            description: data.description,
            icon: data.icon,
            progress: data.progress,
            completed: data.completed
        }
    }
}