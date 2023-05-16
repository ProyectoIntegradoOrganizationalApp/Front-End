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
import { Friends } from './adapters/pages/Friends';
import { Friend } from './adapters/pages/Friend';

// Componentes
import { ProtectedRoute } from './adapters/components/ProtectedRoute';
import { Dashboard } from './adapters/pages/Dashboard';
import { useLocalStorage } from './application/customHooks/useLocalStorage';
import { ToastContainer } from 'react-toastify';
import { ModalInterface } from './domain/ModalInterface.interface';
import { ModalContext } from './context/ModalContext';
import { CustomModal } from './adapters/components/modal/CustomModal';
import { useModal } from './application/customHooks/useModal';

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
                    <CustomModal isOpen={modal?.isOpen ? true : false} closeModal={() => { setModal(null) }} atts={modal}/>
                    <BrowserRouter basename='/'>
                        <Routes>

                            <Route path="/" element={<Home />} />

                            <Route path="profile" element={<ProtectedRoute user={user}><Dashboard /></ProtectedRoute>}>
                                <Route path=""
                                    element={
                                        <Profile />
                                    }
                                />

                                <Route path="achievements"
                                    element={
                                        <Achievements />
                                    }
                                />
                            </Route>


                            <Route path="/projects"
                                element={
                                    <ProtectedRoute user={user}>
                                        <Projects />
                                    </ProtectedRoute>
                                }
                            />
                            <Route path="/project/:project"
                                element={
                                    <ProtectedRoute user={user}>
                                        <Projects />
                                    </ProtectedRoute>
                                }
                            />

                            {/* FRIENDS */}
                            <Route path="/friends"
                                element={
                                    <ProtectedRoute user={user}>
                                        <Friends />
                                    </ProtectedRoute>
                                }
                            />
                            <Route path="/friend/:name"
                                element={
                                    <ProtectedRoute user={user}>
                                        <Friend />
                                    </ProtectedRoute>
                                }
                            />

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