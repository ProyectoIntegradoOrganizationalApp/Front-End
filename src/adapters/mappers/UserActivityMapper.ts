import { Mapper } from "./Mapper";
import { UserActivity } from "../../domain/user/UserActivity.interface";
import { UserActivityDTO } from "../../domain/user/UserActivityDTO.interface";

export class UserActivityMapper extends Mapper<UserActivity, UserActivityDTO> {

    mapFrom( data: UserActivity ): UserActivityDTO {
        return {
           idproject: data.idProject,
           date: data.date,
           commits: data.commits
        }
    }

    mapTo( data: UserActivityDTO ): UserActivity {
        return {
            idProject: data.idproject,
            date: data.date,
            commits: data.commits
        }
    }
}