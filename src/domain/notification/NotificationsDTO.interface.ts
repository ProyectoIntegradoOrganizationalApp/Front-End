import { NotificationDTO } from "./NotificationDTO.interface";

export interface NotificationsDTO {
    friends: Array<NotificationDTO>,
    projects: Array<NotificationDTO>
}