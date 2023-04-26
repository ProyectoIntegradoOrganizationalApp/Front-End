// React
import React, { useState } from 'react';

// Imports para el Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AuthContext } from './context/AuthContext';

// Modelos
import { Route as IRoute } from './domain/Route.interface';
import { User } from './domain/User.interface';

// Vistas
import { Nav } from './adapters/components/Nav';
import { Home } from './adapters/pages/Home';
import Login from './adapters/pages/Login';
import { Register } from './adapters/pages/Register';
import { Error } from './adapters/pages/Error';
import { Profile } from './adapters/pages/Profile';
import { ProtectedRoute } from './adapters/components/ProtectedRoute';


/** Rutas de la aplicación */
const routes: IRoute[] = [
    {
        name: "Home", link: "/"
    },
    {
        name: "Profile", link: "/profile"
    },
]

/**
 *  Aplicación principal.
 *  Al nav se le pasa el Router provider ya que así es como funciona la librería de 
 *  DaisyUI, el drawer ( sidebar ) tiene el contenido de la web dentro.
 *  @returns 
 */
export function App() {
    const [user, setUserState] = useState<User | null>(null);

    const setUser = (params: any) => {
        console.log(params)
        setUserState(params);
    }

    return (
        <>
            <AuthContext.Provider value={{ user, setUser }}>
                <BrowserRouter basename='/'>
                    <Nav 
                        routes={routes}
                    />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/profile" 
                            element={
                                <ProtectedRoute user={user}>
                                    <Profile />
                                </ProtectedRoute>
                            } 
                        />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="*" element={<Error />} />
                    </Routes>
                </BrowserRouter>
            </AuthContext.Provider>
        </>
    )
}




