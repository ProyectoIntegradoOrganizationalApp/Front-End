// React
import React, { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';

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
import { ModalInterface } from './domain/UI/ModalInterface.interface';
import { ModalContext } from './domain/context/ModalContext';
import { CustomModal } from './components/CustomModal';
import { useModal } from './hooks/useModal';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Dashboard } from './pages/dashboard/Dashboard';
import { Project } from './pages/dashboard/pages/project/Project';
import { Store } from './pages/dashboard/pages/project/components/Store';

/**
 *  Aplicación principal.
 *  Al nav se le pasa el Router provider ya que así es como funciona la librería de 
 *  DaisyUI, el drawer ( sidebar ) tiene el contenido de la web dentro.
 *  @returns 
 */

export function App() {
    const [user, setUser] = useState<User | null>(null);
    const [modal, setModal] = useState<ModalInterface | null>(null);
    const { closeModal } = useModal();

    return (
        <>
            <ToastContainer
                position="bottom-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <AuthContext.Provider value={{ user, setUser }}>
                <ModalContext.Provider value={{ modal, setModal }}>
                    <CustomModal isOpen={modal?.isOpen ? true : false} closeModal={() => { setModal(null) }} atts={modal} />
                    <BrowserRouter basename='/'>
                        <Routes>

                            <Route path="/home" element={<Home />} />

                            <Route path="/" element={<ProtectedRoute user={user}><Dashboard /></ProtectedRoute>}>

                                <Route path="profile/dashboard"
                                    element={
                                        <Profile />
                                    }
                                />

                                <Route path="profile/achievements"
                                    element={
                                        <Achievements />
                                    }
                                />

                                <Route path="projects/dashboard"
                                    element={
                                        <Projects />
                                    }
                                />

                                <Route path="project/:name"
                                    element={
                                        <Project />
                                    }
                                />

                                <Route path="project/:name/store"
                                    element={
                                        <Store />
                                    }
                                />

                                <Route path="friends/dashboard"
                                    element={
                                        <Friends />
                                    }
                                />
                                <Route path="friend/:name"
                                    element={
                                        <Friend />
                                    }
                                />

                            </Route>

                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                            <Route path="*" element={<Error />} />
                        </Routes>
                    </BrowserRouter>
                </ModalContext.Provider>
            </AuthContext.Provider>
        </>
    )
}