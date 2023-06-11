import { Mapper } from "./Mapper";

import { Project } from "../../domain/projects/Project.interface";
import { ProjectDTO } from "../../domain/projects/ProjectDTO.interface";
import { ProjectMemberMapper } from "./ProjectMemberMapper";

export class ProjectMapper extends Mapper<Project, ProjectDTO> {

    mapFrom( data: Project ): ProjectDTO {
        return {
            idproject: data.idProject,
            name: data.name,
            icon: data.icon,
            description: data.description,
            members: ProjectMemberMapper.prototype.mapArrayFrom(data.members),
            updated_at: data.updated_at,
        }
    }

    mapTo( data: ProjectDTO ): Project {
        return {
            idProject: data.idproject,
            name: data.name,
            icon: data.icon,
            description: data.description,
            members: ProjectMemberMapper.prototype.mapArrayTo(data.members),
            updated_at: data.updated_at,
        }
    }
}