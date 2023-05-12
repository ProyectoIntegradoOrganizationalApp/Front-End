/**
 * Interfaz que declara la estructura con la que nos llegan
 * los datos del back-end sobre los achievements
 */
export interface Achievement {
    id: string,
    title: string,
    description: string,
    icon: string,
}