import { ProjectMemberDTO } from "./ProjectMemberDTO.interface";

export interface ProjectDTO {
    id: string,
    name: string,
    description: string,
    members: Array<ProjectMemberDTO>
}