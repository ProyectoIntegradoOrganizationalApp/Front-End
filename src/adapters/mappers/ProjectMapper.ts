import { Mapper } from "./Mapper";

import { Project } from "../../domain/projects/Project.interface";
import { ProjectDTO } from "../../domain/projects/ProjectDTO.interface";
import { ProjectMemberMapper } from "./ProjectMemberMapper";

export class ProjectMapper extends Mapper<Project, ProjectDTO> {

    mapFrom( data: Project ): ProjectDTO {
        return {
            idproject: data.idProject,
            iduser: data.idUser,
            name: data.name,
            icon: data.icon,
            description: data.description,
            members: ProjectMemberMapper.prototype.mapArrayFrom(data.members),
            created_at: data.created_at,
            updated_at: data.updated_at,
            owner: data.owner
        }
    }

    mapTo( data: ProjectDTO ): Project {
        return {
            idProject: data.idproject,
            idUser: data.iduser,
            name: data.name,
            icon: data.icon,
            description: data.description,
            members: ProjectMemberMapper.prototype.mapArrayTo(data.members),
            created_at: data.created_at,
            updated_at: data.updated_at,
            owner: data.owner
        }
    }
}