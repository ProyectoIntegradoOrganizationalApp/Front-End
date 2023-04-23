// React
import React from 'react';

// Imports para el Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Modelo de las rutas
import { Route as IRoute } from './domain/Route.interface';

// Vistas
import { Nav } from './adapters/components/Nav';
import { Home } from './adapters/pages/Home';
import { Login } from './adapters/pages/Login';
import { Register } from './adapters/pages/Register';
import { Error } from './adapters/pages/Error';
import { Profile } from './adapters/pages/Profile';


/** Rutas de la aplicación */
const routes: IRoute[] = [
    {
        name: "Home", link: "/"
    },
    {
        name: "Profile", link: "/profile"
    },
]

import { UsersContextProvider } from './context/users';

/**
 *  Aplicación principal.
 *  Al nav se le pasa el Router provider ya que así es como funciona la librería de 
 *  DaisyUI, el drawer ( sidebar ) tiene el contenido de la web dentro.
 *  @returns 
 */
export function App() {
    return (
        <>
            <UsersContextProvider>
                <BrowserRouter basename='/'>
                    <Nav 
                        routes={routes}
                    />
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="*" element={<Error />} />
                    </Routes>
                </BrowserRouter>
            </UsersContextProvider>
        </>
    )
}




