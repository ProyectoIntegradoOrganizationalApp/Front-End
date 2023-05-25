import { Mapper } from "./Mapper";

import { Project } from "../../domain/projects/Project.interface";
import { ProjectDTO } from "../../domain/projects/ProjectDTO.interface";
import { ProjectMemberMapper } from "./ProjectMemberMapper";

export class ProjectMapper extends Mapper<Project, ProjectDTO> {

    mapFrom( data: Project ): ProjectDTO {
        return {
            id: data.id,
            name: data.name,
            description: data.description,
            members: ProjectMemberMapper.prototype.mapArrayTo(data.members)
        }
    }

    mapTo( data: ProjectDTO ): Project {
        return {
            id: data.id,
            name: data.name,
            description: data.description,
            members: ProjectMemberMapper.prototype.mapArrayFrom(data.members)
        }
    }
}