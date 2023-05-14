// React
import React, { useEffect, useState } from 'react';

// Imports para el Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

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
import { ProtectedRoute } from './adapters/components/ProtectedRoute';
import { Achievements } from './adapters/pages/Achievements';
import { Friends } from './adapters/pages/Friends';
import { Friend } from './adapters/pages/Friend';

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

                        {/* DASHBOARD */}
                        <Route path="/profile" 
                            element={
                                <ProtectedRoute>
                                    <Profile />
                                </ProtectedRoute>
                            } 
                        />
                        <Route path="/achievements" 
                            element={
                                <ProtectedRoute>
                                    <Achievements />
                                </ProtectedRoute>
                            } 
                        />

                        {/* PROJECTS */}
                        <Route path="/projects" 
                            element={
                                <ProtectedRoute>
                                    <Projects />
                                </ProtectedRoute>
                            } 
                        />
                        <Route path="/project/:project" 
                            element={
                                <ProtectedRoute>
                                    <Projects />
                                </ProtectedRoute>
                            } 
                        />

                        {/* FRIENDS */}
                        <Route path="/friends" 
                            element={
                                <ProtectedRoute>
                                    <Friends />
                                </ProtectedRoute>
                            } 
                        />
                        <Route path="/friend/:name" 
                            element={
                                <ProtectedRoute>
                                    <Friend />
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




