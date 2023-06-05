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
import { ProtectedRoute } from './components/ProtectedRoute';
import { Dashboard } from './pages/dashboard/Dashboard';
import { Project } from './pages/dashboard/pages/project/Project';
import { Store } from './pages/dashboard/pages/project/pages/apps/Store';
import { CookieModal } from './components/CookieModal';
import { Boards } from './pages/dashboard/pages/project/pages/apps/taskapp/Boards';
import Board from './pages/dashboard/pages/project/pages/apps/taskapp/board/Board';
import { DragDropContext } from 'react-beautiful-dnd';
import { useAuth } from './hooks/useAuth';
import { Account } from './pages/dashboard/pages/profile/account/Account';

/**
 *  Aplicación principal.
 *  Al nav se le pasa el Router provider ya que así es como funciona la librería de 
 *  DaisyUI, el drawer ( sidebar ) tiene el contenido de la web dentro.
 *  @returns 
 */

export function App() {
    const [contextUser, setUser] = useState<User | null>(null);
    const [modal, setModal] = useState<ModalInterface | null>(null);

    const [cookiesAccepted, setCookiesAccepted] = useState<string | null>(null);
    const [cookiesIsOpen, setCookiesIsOpen] = useState<boolean>(true);

    useEffect(() => {
        const cookiesAcceptedStatus = localStorage.getItem('cookiesAccepted');

        if (cookiesAcceptedStatus == 'true') {
            setCookiesAccepted('true');
            setCookiesIsOpen(false);
        } else if (cookiesAcceptedStatus == 'false') {
            setCookiesAccepted('false');
            setCookiesIsOpen(false);
        } else {
            setCookiesIsOpen(true);
        }

    }, [cookiesAccepted]);

    useEffect(() => {
        
    }, [modal?.isOpen])

    const closeModal = () => {
        setModal(null);
    }

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
            <AuthContext.Provider value={{ user: contextUser, setUser }}>
                <ModalContext.Provider value={{ modal, setModal }}>

                    {/* Modal de las coockies */}
                    {  cookiesAccepted == null && (
                        <CookieModal isOpen={cookiesIsOpen} />
                    )}

                    {/* Modal custom que sirve para multiples cosas */}
                    { modal && (
                        <CustomModal 
                            isOpen={modal?.isOpen ? true : false} 
                            closeModal={closeModal} 
                            atts={modal} 
                        />
                    )}
                    
                    <BrowserRouter basename='/'>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route element={<ProtectedRoute></ProtectedRoute>}>
                                <Route element={<Dashboard />}>
                                    <Route path="profile/dashboard" element={<Profile />} />
                                    <Route path="profile/achievements" element={<Achievements />} />
                                    <Route path="profile/account" element={<Account />} />
                                    <Route path="projects/dashboard" element={ <Projects /> }/>
                                    <Route path="project/:name" element={ <Project /> }/>
                                    <Route path="project/:name/store" element={ <Store project={''} /> } />
                                    <Route path="project/:project/app/taskman" element={ <Boards icon="fa-solid fa-table-columns" app="Taskman"/> }/>
                                    <Route path="project/:project/app/timeline" element={ <Boards icon="fa-solid fa-chart-gantt" app="Timeline"/> }/>
                                    <Route path="project/:project/app/:name/:board" element={ <DragDropContext onDragEnd={() => console.log("movido")}> <Board /></DragDropContext> }/>
                                    <Route path="friends/dashboard" element={ <Friends /> } />
                                    <Route path="friend/:name" element={ <Friend />} />
                                </Route>
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