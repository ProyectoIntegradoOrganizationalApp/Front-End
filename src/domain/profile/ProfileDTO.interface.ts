import { NotificationDTO } from './NotificationDTO.interface';
import { UserAchievementDTO } from '../user/UserAchievementDTO.interface';
import { UserActivityDTO } from '../user/UserActivityDTO.interface';
import { UserProfileDTO } from '../user/UserProfileDTO.interface';
import { UserProjectDTO } from '../user/UserProjectDTO.interface';

export interface ProfileDTO {
    user: UserProfileDTO,
    achievements: Array<UserAchievementDTO>
    projects: Array<UserProjectDTO>,
    activity: Array<UserActivityDTO>
}