/**
 * Interfaz que declara la estructura con la que nos llegan
 * los datos del back-end sobre los achievements
 */
export interface InputModalInterface {
    discriminator: "crud",
    tag: string,
    type?: string,
    name: string,
    placeholder: string
    min?: number,
    max?: number,
    required?: boolean,
    width: string
}