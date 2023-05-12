/**
 * Interfaz  que declara la estructura con la que nos vienen los datos 
 * del back-end de friends, esta estructura está MINIFICADA por lo que
 * tendrá menos atributos para su uso en la vista projects y
 * profile.
 */
export interface Friend {
    id: string,
    pic: string,
    full_name: string,
    description: string
}