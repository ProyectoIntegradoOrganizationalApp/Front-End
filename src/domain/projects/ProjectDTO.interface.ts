import { ProjectMemberDTO } from "./ProjectMemberDTO.interface";

/**
 * Interfaz que declara la estructura de un proyecto que nos viene del back-end
 */
export interface ProjectDTO {
    id: string,
    name: string,
    icon: string,
    description: string,
    members: Array<ProjectMemberDTO>
}