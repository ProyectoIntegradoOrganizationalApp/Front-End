import { Mapper } from "./Mapper";
import { Achievement } from "../../domain/achievement/Achievement.interface";
import { AchievementDTO } from "../../domain/achievement/AchievementDTO.interface";

export class AchievementMapper extends Mapper<Achievement, AchievementDTO> {

    mapFrom( data: Achievement ): AchievementDTO {
        return {
            id: data.id,
            title: data.title,
            description: data.description,
            icon: data.icon
        }
    }

    mapTo( data: AchievementDTO ): Achievement {
        return {
            id: data.id,
            title: data.title,
            description: data.description,
            icon: data.icon            
        }
    }
}