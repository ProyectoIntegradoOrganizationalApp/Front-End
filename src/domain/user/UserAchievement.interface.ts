/**
 * Interfaz que define la estructura de la información que nos
 * llega del back-end sobre los logros del usuario.
 */
export interface UserAchievement {
    id: string,
    title: string,
    description: string,
    icon: string,
    progress: number,
    completed: boolean
}