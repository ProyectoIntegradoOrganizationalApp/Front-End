import { Mapper } from "./Mapper";

import { ProjectMember } from "../../domain/projects/ProjectMember.interface";
import { ProjectMemberDTO } from "../../domain/projects/ProjectMemberDTO.interface";

export class ProjectMemberMapper extends Mapper<ProjectMember, ProjectMemberDTO> {

    mapFrom( data: ProjectMember ): ProjectMemberDTO {
        return {
            name: data.name,
            photo: data.photo,
            role: data.idRole,
            id: data.id,
            idrole: data.idRole
        }
    }

    mapTo( data: ProjectMemberDTO ): ProjectMember {
        return {
            name: data.name,
            photo: data.photo,
            role: data.role,
            id: data.id,
            idRole: data.idrole
        }
    }
}