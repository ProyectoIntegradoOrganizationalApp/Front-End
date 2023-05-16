/**
 * Interfaz que declara la estructura con la que nos llegan
 * los datos del back-end sobre los achievements
 */
export interface InputModalInterface {
    discriminator: "crud",
    type: string,
    name: string,
    placeholder: string
}