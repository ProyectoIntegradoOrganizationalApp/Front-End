import { Notifications } from "../../domain/notification/Notifications.interface";
import { NotificationsDTO } from "../../domain/notification/NotificationsDTO.interface";
import { Mapper } from "./Mapper";
import { NotificationMapper } from "./NotificationMapper";

export class NotificationsMapper extends Mapper<Notifications, NotificationsDTO> {

    mapFrom( data: Notifications ): NotificationsDTO {
        return {
            friends: NotificationMapper.prototype.mapArrayFrom(data.friends),
            projects: NotificationMapper.prototype.mapArrayFrom(data.projects)
        }
    }

    mapTo( data: NotificationsDTO ): Notifications {
        return {
            friends: NotificationMapper.prototype.mapArrayTo(data.friends),
            projects: NotificationMapper.prototype.mapArrayTo(data.projects)
        }
    }
}