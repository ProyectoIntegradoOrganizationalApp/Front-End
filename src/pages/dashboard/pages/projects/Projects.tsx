// React / Router
import { useState, useEffect } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';

// Hooks
import { useAuth } from '../../../../hooks/useAuth';
import { useProjectsApi } from '../../../../adapters/api/useProjectsApi';

// Componentes
import { MainItem } from '../../../../components/list-items/MainItem';
import { Searcher } from '../../../../components/Searcher';
import { Profile } from '../../../../domain/profile/Profile.interface';
import { Dropdown } from '../../../../components/Dropdown';
import { ProjectSelection } from './components/ProjectSelection';
import { Project } from '../../../../domain/projects/Project.interface';

// Botones
import AddButton from '../../../../components/buttons/AddButton';
import { useModal } from '../../../../hooks/useModal';

/**
 * Componente Projects, representa la ruta /projects/{id_user} y nos muestra
 * los proyectos de los que forma parte el usuario.
 * @returns 
 */
export function Projects() {
    const { openModal } = useModal();

    // Datos del usuario provenientes del componente padre
    const userData: Profile = useOutletContext();

    /**
     *  Hook de la API de proyectos, le pasamos true para que haga la query al inicializar.
     */
    const { data, error, loading, refreshData } = useProjectsApi(true);

    const { logout } = useAuth();

    // Estado para manejar las tabs
    const [selectedElement, setSelectedElement] = useState<Project>();
    const [selectedOrder, setSelectedOrder] = useState<string>("Order By");

    useEffect(() => {
        document.title = 'Projects | Teamer 2023';
    }, [])

    useEffect(() => {
        if (error?.error) {
            logout();
        }
    }, [error?.error])

    const handleSelection = (project: Project) => {
        if (selectedElement && selectedElement.idProject === project.idProject) {
            setSelectedElement(undefined);
        }

        if (selectedElement && selectedElement.idProject != project.idProject) {
            setSelectedElement(project);
        }

        if (!selectedElement) {
            setSelectedElement(project);
        }
    }

    let navigate = useNavigate();

    const openProject = (link: string) => {
        navigate("/projects/p/" + link + "/dashboard");
    }

    /**
     *  Función que refresca los datos para que se recargue la IU
     *  y así poder ver los cambios.
     */
    const handleCreateProject = () => {
        refreshData();
    }

    return (
        <div className={`h-full ${selectedElement == null ? "max-[839.50px]:h-fit max-[839.50px]:min-h-full" : ""} flex-1 bg-gray-200 dark:bg-[#202124] w-full rounded-xl flex flex-wrap-reverse gap-6 p-4 max-[500px]:p-2 max-[500px]:rounded-none`}>
            <div className={`relative max-[839.50px]:h-auto h-full flex-[4] bg-gray-300 dark:bg-[#28292d] rounded-xl flex flex-col gap-4 max-[500px]:gap-2 max-[500px]:p-2 p-4 w-9/12 ${selectedElement == null ? "!w-full" : ""}`}>
                <div className="flex flex-wrap-reverse items-center gap-2">
                    <div className="flex-1">
                        <Searcher
                            bg="bg-white dark:bg-[#202124]"
                            placeholder="Search project..."
                            cb={() => {}}
                        />
                    </div>
                    <div className="max-[499px]:flex-1">
                        <Dropdown
                            selectedElement={selectedOrder}
                            selectElement={setSelectedOrder}
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
                            otherbg
                        />
                    </div>
                </div>

                <div id="scrollbar" className="flex-1 selectElement max-[500px]:gap-2">

                    {data && Array.isArray(data) && (
                        data.map(project => {
                            return (
                                <div
                                    key={project.idProject}
                                    className={selectedElement?.idProject == project.idProject ? "selectedElement" : ""}
                                    onClick={() => {
                                        handleSelection(project);
                                    }}
                                    onDoubleClick={() => openProject(project.idProject)}
                                >
                                    <MainItem
                                        item={{ name: project.name, description: project.description, icon: project.icon }}
                                    >
                                    </MainItem>
                                </div>
                            )
                        })

                    )}

                </div>

                <div onClick={() => openModal({
                    isOpen: true,
                    type: "crudProject",
                    title: "Create Project",
                    content: [],
                    submitText: "Create Project",
                    submitAction: handleCreateProject
                }
                )} className="absolute bottom-3.5 right-3.5 z-20 bg-gray-200 dark:bg-[#202124] btn flex justify-center items-center !w-10 min-h-fit h-fit rounded-xl !aspect-square border-none text-black dark:text-white hover:bg-gray-300 dark:hover:bg-[#151618]">
                    <i className="fa-solid fa-plus"></i>
                </div>
            </div>
            { selectedElement && (
                <ProjectSelection
                    selection={selectedElement}
                />
            )}
        </div>
    )
}