/**
 *  Interfaz con los datos que nos llegan desde el login.
 */
export interface Login {
    id: string,
    full_name: string,
    _token: string,
    email: string
}