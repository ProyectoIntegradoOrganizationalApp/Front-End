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
import { AlertContext } from './context/AlertContext';
import { AlertInterface } from './domain/AlertInterface.interface';
import { useLocalStorage } from './application/customHooks/useLocalStorage';
import { Alert } from './adapters/components/Alert';

/**
 *  Aplicación principal.
 *  Al nav se le pasa el Router provider ya que así es como funciona la librería de 
 *  DaisyUI, el drawer ( sidebar ) tiene el contenido de la web dentro.
 *  @returns 
 */

export function App() {
    const [user, setUser] = useState<User | null>(null);
    const [alerts, setAlerts] = useState<AlertInterface[]>([]);

    const { getItem } = useLocalStorage();
    let alertss: AlertInterface[] = [];

    useEffect(() => {
        const getItems = getItem("alerts");
        if (getItems) {
            alertss = JSON.parse(getItems);
        }
    }, [alerts]);

    return (
        <>
            {
                alertss.map((element, index) => {
                    console.log(element)
                    return <Alert key={index} state={element.atts.state} title={element.atts.title} description={element.atts.description}/>
                })
            }
            <AlertContext.Provider value={{ alerts, setAlerts }}>
                <AuthContext.Provider value={{ user, setUser }}>
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
                </AuthContext.Provider>
            </AlertContext.Provider>
        </>
    )
}




