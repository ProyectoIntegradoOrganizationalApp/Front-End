import { Mapper } from "./Mapper";
import { Notification } from "../Notification.interface";
import { NotificationDTO } from "../DTO/NotificationDTO.interface";

export class NotificationMapper extends Mapper<Notification, NotificationDTO> {

    mapFrom( data: Notification ): NotificationDTO {
        return {
            id: data.id,
            iduser: data.userId,
            title: data.title,
            content: data.content,
            state: data.state
        }
    }

    mapTo( data: NotificationDTO ): Notification {
        return {
            id: data.id,
            userId: data.iduser,
            title: data.title,
            content: data.content,
            state: data.state  
        }
    }
}