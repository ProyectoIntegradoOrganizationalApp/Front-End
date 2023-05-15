export interface AlertInterface {
    id: string,
    atts: AlertComponent
}
export interface AlertComponent {
    state: string, 
    title: string, 
    description?: string
}