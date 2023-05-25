import { Mapper } from "./Mapper";

import { ProjectMember } from "../../domain/projects/ProjectMember.interface";
import { ProjectMemberDTO } from "../../domain/projects/ProjectMemberDTO.interface";

export class ProjectMemberMapper extends Mapper<ProjectMember, ProjectMemberDTO> {

    mapFrom( data: ProjectMember ): ProjectMemberDTO {
        return {
            name: data.name,
            photo: data.photo
        }
    }

    mapTo( data: ProjectMemberDTO ): ProjectMember {
        return {
            name: data.name,
            photo: data.photo
        }
    }
}