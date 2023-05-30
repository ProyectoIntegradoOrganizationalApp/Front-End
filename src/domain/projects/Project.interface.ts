import { ProjectMember } from "./ProjectMember.interface";

/**
 * Interfaz que declara la estructura de un proyecto, esta es la estructura
 * que usaremos en nuestro programa y utilizaremos mappers para mapear una 
 * estructura a otra para hacerlo lo más reutilizable.
 */
export interface Project {
    idProject: string,
    idUser: string,
    name: string,
    icon: string,
    description: string,
    members: Array<ProjectMember>,
    created_at: string,
    updated_at: string,
    owner: boolean
}