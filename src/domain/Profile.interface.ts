import { UserAchievement } from "./UserAchievement.interface";
import { Notification } from "./Notification.interface";
import { UserProject } from "./UserProject.interface";
import { Friend } from "./Friend.interface";
/**
 * Interfaz que declara la estructura de los datos que nos 
 * van a llegar tras la petición al back-end del perfil del 
 * usuario.
 */
export interface Profile {
    achievements: Array<UserAchievement>
    projects: Array<UserProject>,
    notifications: Array<Notification>,
    friends: Array<Friend>
}