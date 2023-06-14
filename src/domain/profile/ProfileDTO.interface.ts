import { NotificationDTO } from '../notification/NotificationDTO.interface';
import { ProjectDTO } from '../projects/ProjectDTO.interface';
import { UserAchievementDTO } from '../user/UserAchievementDTO.interface';
import { UserActivityDTO } from '../user/UserActivityDTO.interface';
import { UserProfileDTO } from '../user/UserProfileDTO.interface';

export interface ProfileDTO {
    user: UserProfileDTO,
    achievements: Array<UserAchievementDTO>
    projects: Array<ProjectDTO>,
    activity: Array<UserActivityDTO>
}