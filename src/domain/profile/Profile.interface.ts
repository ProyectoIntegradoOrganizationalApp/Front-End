import { UserAchievement } from "../user/UserAchievement.interface";
import { UserProject } from "../user/UserProject.interface";
import { UserActivity } from "../user/UserActivity.interface";
import { UserProfile } from "../user/UserProfile.interface";

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