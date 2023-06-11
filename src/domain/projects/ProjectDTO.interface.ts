import { ProjectMemberDTO } from "./ProjectMemberDTO.interface";

/**
 * Interfaz que declara la estructura de un proyecto que nos viene del back-end
 */
export interface ProjectDTO {
    idproject: string,
    iduser: string,
    name: string,
    icon: string,
    description: string,
    members: Array<ProjectMemberDTO>,
    created_at: string,
    updated_at: string,
    owner: boolean
}