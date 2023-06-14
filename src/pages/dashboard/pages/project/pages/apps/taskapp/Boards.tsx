import React, { useState } from 'react';

import { Link, useParams } from 'react-router-dom';

import { Breadcrumb } from '../../../../../../../components/Breadcrumb';
import { Tabs } from '../../../../../../../components/Tabs';

import { useModal } from '../../../../../../../hooks/useModal';
import { useTaskAppApi } from '../../../../../../../adapters/api/useTaskAppApi';
import { useProjectApi } from '../../../../../../../adapters/api/useProjectApi';

export const Boards: React.FC<{ app: string }> = ({ app }) => {

    // Tabs
    const [tab, setTab] = useState<string>("dashboard");

    // Modal
    const { openModal } = useModal();

    // Hooks de peticiones
    const { data, error, loading, getAppInfo, BoardCrud } = useTaskAppApi();
    const { data: ProjectData, fetchProject } = useProjectApi();
    
    // Variables Reactivas
    const [projectName, setProjectName] = useState<string>('');

    // Recogida de parámetros de la URL y su Efecto
    let { idApp, projectId } = useParams();
    React.useEffect(() => {
        console.log(idApp, projectId)
        if ( idApp && projectId ) {
            getAppInfo(idApp);
            fetchProject(projectId);
        }
    }, [idApp]);

    // Efecto para cambiar el nombre del proyecto
    React.useEffect(() => {
        if( ProjectData ) {
            console.log(ProjectData)
            setProjectName(ProjectData.name);
        }
        
    }, [ProjectData?.name])

    // Función de creación de tabla
    const handleCreateBoard = ( title?: string, description?: string ) => {
        if( title && description && idApp && projectId ) {
            BoardCrud().createBoard("",title, description, projectId, idApp);
        }
    }

    return (
        <div className="w-full flex flex-col">
            <div className="w-full">
                <Breadcrumb breadcrumbs={[
                    {
                        icon: "fa-solid fa-diagram-project",
                        name: "Projects",
                        link: "/projects"
                    },
                    {
                        icon: "fa-solid fa-list-check",
                        name: `${projectName}`,
                        link: `/project/${projectId}`
                    },
                    {
                        icon: app == "Taskman" ? "fa-solid fa-note-sticky" : "fa-solid fa-chart-gantt",
                        name: app ? app : ""
                    }
                ]} />
            </div>
            <div className="bg-gray-200 dark:bg-[#202124] w-full h-full min-[500px]:rounded-xl flex flex-col gap-3 max-[500px]:gap-2 p-4 max-[500px]:p-2 pt-3 overflow-y-hidden">
                <Tabs tab={tab} setTab={setTab} icon="fa-solid fa-chess-board" title="Boards" />
                <ul id="scrollbar" className="flex min-[839.50px]:flex-wrap max-[839.50px]:flex-col justify-start content-start gap-4 h-full overflow-y-hidden bg-white dark:bg-[#28292d] rounded-xl p-4 max-[500px]:p-2 select-none">
                    {/* Foreach (Board) */}
                    
                    { data && data.boards && Array.isArray(data.boards) && (
                        data.boards.map(( board, index ) => {
                            return (
                                <li 
                                    key={index}
                                    className={`bg-[url(${board?.photo})] bg-cover bg-no-repeat bg-center box-border board rounded-xl min-[839.50px]:flex-1 basis-[33%] min-w-fit min-[839.50px]:max-w-sm h-1/4 cursor-pointer`}
                                    >
                                    <Link 
                                        to={`${board.id}`} 
                                        className="w-full h-full relative"
                                    >
                                        <div className="bg-black/30 w-full h-full rounded-xl transition-all"></div>
                                        <p className="absolute top-3 left-3 text-white"><b className="text-white">{board?.title}</b></p>
                                    </Link>
                                </li>
                            )
                        })
                    )}
                    
                    {/* EndForeach */}
                    <li className="newBoard rounded-xl min-w-fit h-1/4 cursor-pointer relative">
                        <section
                            onClick={() =>
                                openModal({
                                    isOpen: true,
                                    type: "crudBoard",
                                    title: "Create Board",
                                    content: [],
                                    submitText: "Create Board",
                                    submitAction: handleCreateBoard
                                })
                            }
                            className="w-full h-full flex justify-center items-center"
                        >
                            <div className="bg-gray-300 dark:bg-black/30 w-full h-full rounded-xl transition-all absolute -z-0"></div>
                            <p className="px-4 top-3 left-3 text-white z-10">
                                <b className="flex flex-col items-center gap-1.5">
                                    <i className="fa-solid fa-plus"></i>New Board
                                </b>
                            </p>
                        </section>
                    </li>
                </ul>
            </div>
        </div >
    )
}