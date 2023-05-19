import { DropdownInterface } from "./DropdownInterface.interface"

/**
 *  Interfaz de Tool
 */
export interface Tool {
    type: string,
    dropdown?: DropdownInterface
    action?: string,
    icon?: string,
    color?: string,
    target?: string
}