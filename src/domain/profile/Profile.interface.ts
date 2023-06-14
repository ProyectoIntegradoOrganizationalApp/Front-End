import { UserAchievement } from "../user/UserAchievement.interface";
import { UserActivity } from "../user/UserActivity.interface";
import { UserProfile } from "../user/UserProfile.interface";
import { Project } from "../projects/Project.interface";

/**
 * Interfaz que declara la estructura de los datos que nos 
 * van a llegar tras la petición al back-end del perfil del 
 * usuario.
 */
export interface Profile {
    user: UserProfile
    achievements: Array<UserAchievement>
    projects: Array<Project>,
    activity: Array<UserActivity>
}