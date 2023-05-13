import { Mapper } from "./Mapper";
import { UserProject } from "../UserProject.interface";
import { UserProjectDTO } from "../DTO/UserProjectDTO.interface";

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