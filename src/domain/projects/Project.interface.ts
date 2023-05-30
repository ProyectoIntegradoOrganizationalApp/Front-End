import { ProjectMember } from "./ProjectMember.interface";

/**
 * Interfaz que declara la estructura de un proyecto, esta es la estructura
 * que usaremos en nuestro programa y utilizaremos mappers para mapear una 
 * estructura a otra para hacerlo lo más reutilizable.
 */
export interface Project {
    id: string,
    name: string,
    description: string,
    icon: string,
    members: Array<ProjectMember>
}