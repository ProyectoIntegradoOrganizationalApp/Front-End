/**
 * Interfaz que declara la estructura con la que nos llegan
 * los datos del back-end sobre los achievements
 */
export interface SettingInterface {
    discriminator: "settings",
    icon: string,
    name: string
}