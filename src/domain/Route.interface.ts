export interface Route {
    name: string,
    url: string,
    children?: Array<Route>
}