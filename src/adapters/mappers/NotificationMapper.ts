// Mapper
import { Mapper } from "./Mapper";

// 
import { Notification } from "../../domain/Notification.interface";
import { NotificationDTO } from "../../domain/profile/NotificationDTO.interface";

export class NotificationMapper extends Mapper<Notification, NotificationDTO> {

    mapFrom( data: Notification ): NotificationDTO {
        return {
            id: data.id,
            title: data.title,
            content: data.content,
            state: data.state
        }
    }

    mapTo( data: NotificationDTO ): Notification {
        return {
            id: data.id,
            title: data.title,
            content: data.content,
            state: data.state  
        }
    }
}