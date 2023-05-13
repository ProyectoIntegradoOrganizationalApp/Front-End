import { UserAchievement } from "./UserAchievement.interface";
import { Notification } from "./Notification.interface";
import { UserProject } from "./UserProject.interface";
import { UserActivity } from "./UserActivity.interface";
import { UserProfile } from "./UserProfile.interface";

/**
 * Interfaz que declara la estructura de los datos que nos 
 * van a llegar tras la petición al back-end del perfil del 
 * usuario.
 */
export interface Profile {
    user: UserProfile
    achievements: Array<UserAchievement>
    projects: Array<UserProject>,
    activity: Array<UserActivity>
}