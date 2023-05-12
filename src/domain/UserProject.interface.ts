/**
 * Interfaz que declara la estructura de la información que 
 * nos viene del back-end sobre los proyectos de un usuario
 * esta información está MINIFICADA y es solo para mostrar en
 * la vista projects.
 */

export interface UserProject {
    id: string,
    userId: string,
    name: string
}