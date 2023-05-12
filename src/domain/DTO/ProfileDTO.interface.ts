import { FriendDTO } from './FriendDTO.interface';
import { NotificationDTO } from './NotificationDTO.interface';
import { UserAchievementDTO } from './UserAchievementDTO.interface';
import { UserProjectDTO } from './UserProjectDTO.interface';

export interface ProfileDTO {
    achievements: Array<UserAchievementDTO>
    projects: Array<UserProjectDTO>,
    notifications: Array<NotificationDTO>,
    friends: Array<FriendDTO>
}