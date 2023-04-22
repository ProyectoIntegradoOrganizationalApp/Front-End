// Imports para el Router
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Modelo de las rutas
import { Route } from './domain/Route.interfaces';

// Vistas
import { Home } from './adapters/pages/Home';
import { Dashboard } from './adapters/pages/Dashboard';
import { Nav } from './adapters/components/Nav';

/** Rutas de la aplicación */
const routes: Route[] = [
    {
        name: "Home", link: "/"
    },
    {
        name: "Dashboard", link: "/dashboard"
    }
]

/**
 *  Router de la aplicación
 */
const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/dashboard",
        element: <Dashboard />
    }
])

/**
 *  Aplicación principal.
 *  Al nav se le pasa el Router provider ya que así es como funciona la librería de 
 *  DaisyUI, el drawer ( sidebar ) tiene el contenido de la web dentro.
 *  @returns 
 */
export function App() {
    return (
        <>
            <Nav
                routes={routes}
            >
                <RouterProvider router={router} />
            </Nav>
        </>
    )
}