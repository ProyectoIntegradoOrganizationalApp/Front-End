// Mapper
import { Mapper } from "./Mapper";

// Interfaces
import { Notification } from "../../domain/notification/Notification.interface";
import { NotificationDTO } from "../../domain/notification/NotificationDTO.interface";

export class NotificationMapper extends Mapper<Notification, NotificationDTO> {

    mapFrom( data: Notification ): NotificationDTO {
        return {
            idguest: data.idGuest,
            iduser: data.idUser,
            title: data.title,
            message: data.message
        }
    }

    mapTo( data: NotificationDTO ): Notification {
        return {
            idGuest: data.idguest,
            idUser: data.iduser,
            title: data.title,
            message: data.message 
        }
    }
}