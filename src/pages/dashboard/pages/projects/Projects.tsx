// React / Router
import { useState, useEffect } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';

import { Item } from '../../../../components/Item';
import { Searcher } from '../../../../components/Searcher';

import { Profile } from '../../../../domain/profile/Profile.interface';
import { useProjectsApi } from '../../../../adapters/api/useProjectsApi';
import { Dropdown } from '../../../../components/Dropdown';
import { SelectedElement } from './components/SelectedElement';
import { Project } from '../../../../domain/projects/Project.interface';
import { useAuth } from '../../../../hooks/useAuth';

/**
 * Componente Projects, representa la ruta /projects/{id_user} y nos muestra
 * los proyectos de los que forma parte el usuario.
 * @returns 
 */
export function Projects() {

    // Datos del usuario provenientes del componente padre
    const userData: Profile = useOutletContext();

    /**
     *  Hook de la API de proyectos, le pasamos true para que haga la query al inicializar.
     */
    const { data, error, loading } = useProjectsApi(true);

    const { logout } = useAuth();

    // Estado para manejar las tabs
    const [selectedElement, setSelectedElement] = useState<Project>();
    const [selectedOrder, setSelectedOrder] = useState<string>("Order By");

    useEffect(() => {
        if( error?.error ) {
            logout();
        }
    }, [error?.error])

    const handleSelection = ( project: Project ) => {
        if( selectedElement && selectedElement.id === project.id ) {
            setSelectedElement(undefined);
        }

        if( selectedElement && selectedElement.id != project.id ) {
            setSelectedElement(project);
        }

        if( !selectedElement ) {
            setSelectedElement(project);
        }
    }

    let navigate = useNavigate();

    const openProject = (link: string) => {
        navigate("/project/" + link);
    }

    return (
        <>
            <div className={`h-full ${selectedElement == null ? "max-[839.50px]:h-fit max-[839.50px]:min-h-full" : ""} flex-1 bg-gray-200 dark:bg-slate-800 w-full rounded-xl flex flex-wrap-reverse gap-6 p-4 max-[500px]:p-2 max-[500px]:rounded-none`}>
                <div className={`max-[839.50px]:h-auto h-full flex-[4] bg-gray-300 dark:bg-slate-700 rounded-xl flex flex-col gap-4 max-[500px]:gap-2 max-[500px]:p-2 p-4 w-9/12 ${selectedElement == null ? "!w-full" : ""}`}>
                    <div className="flex flex-wrap-reverse items-center gap-2">
                        <div className="flex-1">
                            <Searcher 
                                bg="bg-white dark:bg-slate-800" 
                                placeholder="Search a project..." 
                            />
                        </div>
                        <div className="max-[499px]:flex-1">
                            <Dropdown
                                selectedElement={selectedOrder}
                                selectElement={setSelectedElement}
                                elements={[
                                    {
                                        action: "fe",
                                        name: "All"
                                    },
                                    {
                                        action: "fe",
                                        name: "My Projects"
                                    }
                                ]}
                            />
                        </div>
                    </div>

                    <div id="scrollbar" className="flex-1 selectElement max-[500px]:gap-2">

                        { data && (
                            data.map( project => {
                                return (
                                    <div 
                                        key={project.id} 
                                        className={selectedElement?.id == project.id ? "selectedElement" : ""} 
                                        onClick={() => {
                                            handleSelection(project);
                                        }} 
                                        onDoubleClick={() => openProject(project.id)}
                                    >
                                        <Item
                                            project={project}
                                            tools={[
                                                {
                                                    type: "button",
                                                    action: "edit",
                                                    icon: "fa-solid fa-pen-to-square",
                                                    target: "edit/idProyect"
                                                },
                                                {
                                                    type: "button",
                                                    action: "remove",
                                                    icon: "fa-solid fa-trash",
                                                    target: "remove/idProyect"
                                                }
                                            ]} 
                                        />
                                    </div>
                                )
                            })

                        )}

                    </div>
                </div>
                { selectedElement && (
                    <SelectedElement
                        selection={selectedElement}
                    />
                )}
                
                
            </div>
        </>
    )
}