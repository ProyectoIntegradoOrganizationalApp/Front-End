import { Mapper } from "../Mapper";
import { UserProject } from "../../../domain/user/UserProject.interface";
import { UserProjectDTO } from "../../../domain/user/UserProjectDTO.interface";

export class UserProjectMapper extends Mapper<UserProject, UserProjectDTO> {

    mapFrom( data: UserProject ): UserProjectDTO {
        return {
            id: data.id,
             name: data.name  
        }
    }

    mapTo( data: UserProjectDTO ): UserProject {
        return {
            id: data.id,
             name: data.name     
        }
    }
}