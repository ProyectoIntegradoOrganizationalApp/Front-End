// Tipo de la prop children
import { ReactNode } from "react";

// Tipado de las rutas
import { Route } from "../../domain/Route.interface";

/**
 *  Componente de Navegador, usa un "Drawer" de DaisyUI en el que se introduce la información
 *  dentro del nav, le entra una prop "children" que es de tipo ReactNode, el cual trae el 
 *  contenido proveído por el Router.
 *  
 *  @param props Contiene las props que le pasa el elemento superior 
 *  @returns 
 */
export function Nav( props: { children: ReactNode, routes: Route[]}) {
    return (
        <>
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    <div className="w-full navbar bg-accent">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className="flex-1 px-2 mx-2 justify-end">
                            <ul className="menu menu-horizontal">
                                {props.routes.map( route => <li><a className="nav-item" href={route.link}>{route.name}</a></li>)}
                            </ul>
                        </div>
                        <div className="flex-none hidden lg:block">
                            <ul className="menu menu-horizontal">
                                <li><a>Navbar Item 1</a></li>
                                <li><a>Navbar Item 2</a></li>
                            </ul>
                        </div>
                    </div>
                    {props.children}
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100">
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>

                    </ul>

                </div>
            </div>
        </>
    )
}


