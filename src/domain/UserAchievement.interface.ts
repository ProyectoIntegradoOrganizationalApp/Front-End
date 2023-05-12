/**
 * Interfaz que define la estructura de la información que nos
 * llega del back-end sobre los logros del usuario.
 */
export interface UserAchievement {
    idAchievement: string,
    idUser: string,
    progress: number,
    completed: boolean
}