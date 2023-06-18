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
import { Error } from './pages/Error';

// Componentes
import { ModalInterface } from './domain/UI/ModalInterface.interface';
import { ModalContext } from './domain/context/ModalContext';
import { CustomModal } from './components/modals/CustomModal';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Dashboard } from './pages/dashboard/Dashboard';
import { Project } from './pages/dashboard/pages/project/Project';
import { Store } from './pages/dashboard/pages/project/pages/apps/Store';
import { CookieModal } from './components/modals/CookieModal';
import { Boards } from './pages/dashboard/pages/project/pages/apps/taskapp/Boards';
import { Board } from './pages/dashboard/pages/project/pages/apps/taskapp/board/Board';
import { DragDropContext } from 'react-beautiful-dnd';
import { useAuth } from './hooks/useAuth';
import { Account } from './pages/dashboard/pages/profile/account/Account';
import { ProjectDashboard } from './pages/dashboard/pages/project/components/ProjectDashboard';
import { ProjectApps } from './pages/dashboard/pages/project/components/ProjectApps';
import { ProjectMembers } from './pages/dashboard/pages/project/components/ProjectMembers';
import ContainerSwitcher from './pages/signIn/ContainerSwitcher';
import { ThemeContext } from './domain/context/ThemeContext';

/**
 *  Aplicación principal.
 *  Al nav se le pasa el Router provider ya que así es como funciona la librería de 
 *  DaisyUI, el drawer ( sidebar ) tiene el contenido de la web dentro.
 *  @returns 
 */

export function App() {
    const currentTheme = localStorage.getItem('color-theme');
    const [darkMode, setDarkMode] = useState(currentTheme == "dark" ? true : false);
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

        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('color-theme', darkMode ? "dark" : "");
    }, [cookiesAccepted, darkMode]);

    const closeModal = () => {
        setModal(null);
    }

    return (
        <>
            <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
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
                        {cookiesAccepted == null && (
                            <CookieModal isOpen={cookiesIsOpen} />
                        )}

                        {/* Modal custom que sirve para multiples cosas */}
                        {modal && (
                            <CustomModal
                                isOpen={modal?.isOpen ? true : false}
                                closeModal={closeModal}
                                atts={modal}
                            />
                        )}

                    <BrowserRouter basename='/'>
                        <Routes>
                            <Route>
                                <Route path="/" element={<Home />} />
                                <Route path="/aboutus" element={<Home />} />
                            </Route>
                            <Route element={<ProtectedRoute></ProtectedRoute>}>
                                <Route element={<Dashboard />}>
                                    <Route path="profile/dashboard" element={<Profile />} />
                                    <Route path="profile/achievements" element={<Achievements />} />
                                    <Route path="profile/account" element={<Account />} />
                                    <Route path="projects/dashboard" element={<Projects />} />

                                    {/* Project */}
                                    <Route path="project/:projectId" element={<Project />}>
                                        {/* Dashboard */}
                                        <Route
                                            path="dashboard"
                                            element={<ProjectDashboard />}
                                        />
                                        {/* Apps */}
                                        <Route
                                            path="apps"
                                            element={<ProjectApps />}
                                        />
                                        {/* Members */}
                                        <Route
                                            path="members"
                                            element={<ProjectMembers />}
                                        />
                                    </Route>

                                    <Route path="project/:projectId/store" element={ <Store /> }/>
                                    <Route path="project/:projectId/app/taskman/:idApp" element={ <Boards app="Taskman"/> }/>
                                    <Route path="project/:projectId/app/timeline/:idApp" element={ <Boards app="Timeline"/> }/>
                                    <Route path="project/:projectId/app/:appName/:idApp/:idBoard" element={ <DragDropContext onDragEnd={() => console.log("movido")}> <Board /></DragDropContext> }/>
                                    <Route path="friends" element={ <Friends /> } />
                                    <Route path="friend/:friendName" element={ <Friend />} />
                                </Route>
                            </Route>
                                <Route path="/login" element={<ContainerSwitcher />} />
                                <Route path="/register" element={<ContainerSwitcher />} />
                                <Route path="*" element={<Error />} />
                            </Routes>
                        </BrowserRouter>
                    </ModalContext.Provider>
                </AuthContext.Provider>
            </ThemeContext.Provider>
        </>
    )
}