import { ProjectMember } from "./ProjectMember.interface";

export interface Project {
    id: string,
    name: string,
    description: string,
    members: Array<ProjectMember>
}