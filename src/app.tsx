import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Route } from './domain/Route.interfaces';
import { Home } from './adapters/pages/Home';
import { Dashboard } from './adapters/pages/Dashboard';
import { Nav } from './adapters/components/Nav';

const routes: Route[] = [
    { name: "Home", link: "/" },
    { name: "Dashboard", link: "/dashboard" }
]

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