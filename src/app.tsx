// React
import React, { useEffect, useState } from 'react';

// Imports para el Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Contextos
import { AuthContext } from './domain/context/AuthContext';

// Modelos
import { User } from './domain/user/User.interface';

// Vistas
import { Home } from './pages/home/Home';

import { Profile } from './pages/dashboard/pages/profile/Profile';
import { Projects } from './pages/dashboard/pages/projects/Projects';

import { Achievements } from './pages/dashboard/pages/achievements/Achievements';

import { Friends } from './pages/dashboard/pages/friends/Friends';
import { Friend } from './pages/dashboard/pages/friends/pages/friend/Friend';

import Login from './pages/signIn/Login';
import Register from './pages/signIn/Register';

import { Error } from './pages/Error';

// Componentes
import { ProtectedRoute } from './components/ProtectedRoute';
import { Dashboard } from './pages/dashboard/Dashboard';

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

                        <Route path="dashboard" element={<ProtectedRoute user={user}><Dashboard /></ProtectedRoute>}>
                            <Route path="profile" 
                                element={
                                    <Profile />
                                }
                            />

                            <Route path="achievements" 
                                element={
                                    <Achievements />
                                } 
                            />

                            <Route path="projects" 
                                element={
                                    <ProtectedRoute user={user}>
                                        <Projects />
                                    </ProtectedRoute>
                                } 
                            />

                            <Route path="project/:project" 
                                element={
                                    <ProtectedRoute user={user}>
                                        <Projects />
                                    </ProtectedRoute>
                                } 
                            />

                            <Route path="friends" 
                                element={
                                    <ProtectedRoute user={user}>
                                        <Friends />
                                    </ProtectedRoute>
                                } 
                            />

                            <Route path="friend/:name" 
                                element={
                                    <ProtectedRoute user={user}>
                                        <Friend />
                                    </ProtectedRoute>
                                } 
                            />

                        </Route>
                        
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="*" element={<Error />} />
                    </Routes>
                </BrowserRouter>
            </AuthContext.Provider>
        </>
    )
}




