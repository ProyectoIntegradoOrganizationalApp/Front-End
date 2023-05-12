import { Mapper } from "./Mapper";
import { UserAchievement } from "../UserAchievement.interface";
import { UserAchievementDTO } from "../DTO/UserAchievementDTO.interface";


export class UserAchievementMapper extends Mapper<UserAchievement, UserAchievementDTO> {

    mapFrom( data: UserAchievement ): UserAchievementDTO {
        return {
            idachievement: data.idAchievement,
            iduser: data.idUser,
            progress: data.progress,
            completed: data.completed
        }
    }

    mapTo( data: UserAchievementDTO ): UserAchievement {
        return {
            idAchievement: data.idachievement,
            idUser: data.iduser,
            progress: data.progress,
            completed: data.completed
        }
    }
}