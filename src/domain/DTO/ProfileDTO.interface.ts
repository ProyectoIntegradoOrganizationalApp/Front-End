import { NotificationDTO } from './NotificationDTO.interface';
import { UserAchievementDTO } from './UserAchievementDTO.interface';
import { UserActivityDTO } from './UserActivityDTO.interface';
import { UserProfileDTO } from './UserProfileDTO.interface';
import { UserProjectDTO } from './UserProjectDTO.interface';

export interface ProfileDTO {
    user: UserProfileDTO,
    achievements: Array<UserAchievementDTO>
    projects: Array<UserProjectDTO>,
    activity: Array<UserActivityDTO>
}