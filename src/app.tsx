// React
import React, { useEffect, useState } from 'react';

// Imports para el Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Contextos
import { AuthContext } from './context/AuthContext';

// Modelos
import { User } from './domain/User.interface';

// Vistas
import { Home } from './adapters/pages/Home';
import Login from './adapters/pages/Login';
import Register from './adapters/pages/Register';
import { Error } from './adapters/pages/Error';
import { Profile } from './adapters/pages/Profile';
import { Projects } from './adapters/pages/Projects';
import { Achievements } from './adapters/pages/Achievements';

// Componentes
import { ProtectedRoute } from './adapters/components/ProtectedRoute';

/**
 *  Aplicación principal.
 *  Al nav se le pasa el Router provider ya que así es como funciona la librería de 
 *  DaisyUI, el drawer ( sidebar ) tiene el contenido de la web dentro.
 *  @returns 
 */
export function App() {
    const [user, setUser] = useState<User | null>(null);
    
    return (
        <>
            <AuthContext.Provider value={{ user, setUser }}>
                <BrowserRouter basename='/'>
                    <Routes>
                        <Route path="/" element={<Home />} />
                            <Route path="/dashboard/profile" 
                                element={
                                    <ProtectedRoute>
                                        <Profile />
                                    </ProtectedRoute>
                                } 
                            />
                        
                        <Route path="/dashboard/achievements" 
                            element={
                                <ProtectedRoute>
                                    <Achievements />
                                </ProtectedRoute>
                            } 
                        />
                        <Route path="/projects" 
                            element={
                                <ProtectedRoute>
                                    <Projects />
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




