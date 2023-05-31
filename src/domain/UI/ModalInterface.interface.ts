import { InputModalInterface } from "./InputModalInterface";
import { SettingInterface } from "./SettingInterface.interface";
import { SideElementsModal } from "../SideElementsModal.interface";

/**
 * Interfaz que declara la estructura con la que nos llegan
 * los datos del back-end sobre los achievements
 */
export interface ModalInterface {
    isOpen: boolean | undefined,
    type: string,
    title?: string,
    action?: string,
    target?: string,
    sidebarElements?: SideElementsModal[],
    content: SettingInterface[] | InputModalInterface[],
    submitText: string,
    submitAction: () => void
}