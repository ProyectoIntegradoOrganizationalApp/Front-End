import { Mapper } from "../Mapper";

import { UserAchievementInfo } from "../../../domain/achievement/UserAchievementInfo.interface";
import { UserAchievementInfoDTO } from "../../../domain/achievement/UserAchievementInfoDTO.interface";

export class UserAchievementInfoMapper extends Mapper<UserAchievementInfo, UserAchievementInfoDTO> {

    mapFrom( data: UserAchievementInfo ): UserAchievementInfoDTO {
        return {
            id: data.id,
            title: data.title,
            description: data.description,
            icon: data.icon,
            category: data.category,
            progress: data.progress,
            completed: data.completed,
            current_state: data.current_state,
            percentage: data.percentage
        }
    }

    mapTo( data: UserAchievementInfoDTO ): UserAchievementInfo {
        return {
            id: data.id,
            title: data.title,
            description: data.description,
            icon: data.icon,
            category: data.category,
            progress: data.progress,
            completed: data.completed,
            current_state: data.current_state,
            percentage: data.percentage
        }
    }
}