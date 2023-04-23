// Imports para el Router
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Modelo de las rutas
import { Route } from './domain/Route.interface';

// Vistas
import { Nav } from './adapters/components/Nav';
import { Home } from './adapters/pages/Home';
import { Dashboard } from './adapters/pages/Dashboard';
import { Login } from './adapters/pages/Login';
import { Register } from './adapters/pages/Register';
import { Error } from './adapters/pages/Error';

/** Rutas de la aplicación */
const routes: Route[] = [
    {
        name: "Home", link: "/"
    },
    {
        name: "Dashboard", link: "/dashboard"
    },
    {
        name: "Login", link: "/login"
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
    },
    // Autenticación
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    },
    // Error
    {
        path: "*",
        element: <Error />
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
            <Nav routes={routes}>
                <RouterProvider router={router} />
            </Nav>
        </>
    )
}