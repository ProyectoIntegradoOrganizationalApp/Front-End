export interface Route {
    icon?: string,
    name: string,
    url: string,
    children?: Array<Route>,
    onclick?: string
}