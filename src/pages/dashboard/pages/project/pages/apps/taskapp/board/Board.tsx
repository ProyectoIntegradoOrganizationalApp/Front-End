// React
import React, { useEffect, useState } from 'react';
import { Link, useBeforeUnload, useParams } from 'react-router-dom';

// Droppables
import Column from './Column';
import { StrictDroppable } from './StrictDroppable';
import { DragDropContext } from 'react-beautiful-dnd';
import { Gantt, Task, EventOption, StylingOption, ViewMode, DisplayOption } from 'gantt-task-react';
import "gantt-task-react/dist/index.css";
import CustomGantt from './Gantt/CustomGantt';

import { toast } from 'react-toastify';

// Hooks de peticiones
import { Column as IColumn, Task as ITask, useTaskAppApi } from '../../../../../../../../adapters/api/useTaskAppApi';
import { useProjectApi } from '../../../../../../../../adapters/api/useProjectApi';

// Componentes / config
import { useModal } from '../../../../../../../../hooks/useModal';
import { useBoard } from '../../../../../../../../hooks/useBoard';
import { Tabs } from '../../../../../../../../components/Tabs';
import { Breadcrumb } from '../../../../../../../../components/Breadcrumb';

export const Board: React.FC = () => {

    // Peticiones
    const { data, error, loading, getBoardInfo, ColumnCrud, TaskCrud } = useTaskAppApi();
    const { data: ProjectData, fetchProject } = useProjectApi();

    // Tabs
    const [tab, setTab] = useState<string>("todo");

    // Modal
    const { openModal } = useModal();

    // Variable reactiva para configuración de la APP
    const [application, setApplication] = useState<string>('');
    const [projectName, setProjectName] = useState<string>('');
    const [boardName, setBoardName] = useState<string>('');

    // Recoger el tipo de aplicación de los parámetros ( Taskman / Timeline )
    const { appName, idApp, projectId, idBoard } = useParams();

    // Efecto para recoger los parámetros de las url porque por algún motivo es asíncroon
    useEffect(() => {
        if( appName && projectId && idApp && idBoard ) {
            setApplication(appName);
            fetchProject(projectId);

            getBoardInfo(idApp, idBoard);
        }
    }, [appName]);

    // Efecto para recoger los datos del proyecto
    useEffect(() => {
        if( ProjectData?.name ) {
            setProjectName(ProjectData.name);
        }
    }, [ProjectData?.name]);

    // Para el manejo de errores/mensajes
    useEffect(() => {

        // Si hay error
        if( error && error.error ) {
            toast.error(error.message);
        }

        // Si no lo hay y hay info
        if( error && !error.error ) {
            toast.success(error.message);
        }

    }, [error?.error]);

    const editTask = ( task: ITask ) => {
        if( idBoard && idApp ) {
            TaskCrud().editTask(idApp, idBoard, task);
        }
    }

    const editColumn = ( column: IColumn ) => {
        if( idBoard && idApp ) {
            ColumnCrud().editColumn(idApp, idBoard, column);
        }
    }
    
    // Hook de utilidad para la app
    const { onDragEnd, columnOrder, columnsData } = useBoard({ data, editColumn, editTask });

    useBeforeUnload((e: BeforeUnloadEvent) => {
        e.preventDefault();

        // Maiki, aquí debes poner actualización de datos en la bbdd con el nuevo columnData y eso
    });

    return (
        <>
            <DragDropContext onDragEnd={onDragEnd}>
                <div className="w-full flex flex-col">
                    <div className="w-full">
                        <Breadcrumb breadcrumbs={[
                            {
                                icon: "fa-solid fa-diagram-project",
                                name: "Projects",
                                link: "/projects/dashboard"
                            },
                            {
                                icon: "fa-solid fa-list-check",
                                name: `${projectName}`,
                                link: `/project/${projectId}`
                            },
                            {
                                icon: "fa-solid fa-chess-board",
                                name: `${appName}`
                            },
                            {
                                icon: "fa-solid fa-chess-board",
                                name: `${boardName}`
                            }
                        ]} />
                    </div>
                    <div className="bg-gray-200 dark:bg-[#202124] w-full h-full min-[500px]:rounded-xl flex flex-col gap-3 max-[500px]:gap-2 p-4 max-[500px]:p-2 pt-3 overflow-y-hidden">
                        <div className="w-full px-3 min-[1085px]:rounded-tr-xl max-[500px]:px-3 flex justify-between items-center gap-2">
                            <div className="flex gap-3">
                                <Link to="/project/ptoelquelolea/app/taskman" className="btn btn-primary flex justify-center items-center !text-black dark:!text-white !bg-white dark:!bg-slate-700 !px-5 !py-3 !max-h-none border-none leading-none h-fit min-h-0">Boards</Link>
                                { application === "taskman" &&
                                    <Tabs tab={tab} setTab={setTab} icon="fa-solid fa-chart-simple" title="Cols" />
                                } { application === "Timeline" &&
                                    <Tabs tab={tab} setTab={setTab} icon="fa-solid fa-chart-simple" title="Cols"
                                        links={[ { name: "To Do" }, { name: "In Progress" }, { name: "Done" }, { name: "sergioesBobo" } ]}
                                    />
                                }
                            </div>
                            <i onClick={() =>
                                openModal({
                                    isOpen: true,
                                    type: "crudColumn",
                                    title: "Create Column",
                                    content: [],
                                    submitText: "Create Column",
                                    submitAction: ( title, description ) => {
                                        if( idApp && idBoard && title && description ) {
                                            ColumnCrud().createColumn( idBoard, idApp, title, description );
                                        }
                                    }
                                })}
                                className="fa-solid fa-plus text-black hover:text-black/50 dark:text-white cursor-pointer dark:hover:text-white/50 transition-all"></i>
                        </div>
                        { application == "taskman" && data &&
                            <StrictDroppable droppableId="1" type="COLUMN" direction="horizontal">
                                {(provided) => (
                                    <div id="scrollbarx"
                                        className="flex-1 rounded-xl bg-gray-300 dark:bg-[#28292d] flex p-4 max-[500px]:p-2 overflow-x-auto"
                                        ref={provided.innerRef}
                                        {...provided.droppableProps}
                                    >
                                        { columnsData && columnsData.columns && columnsData.columns.map(( column ) => {
                                            
                                            let index = columnOrder.indexOf(column.id);

                                                return (
                                                    <Column
                                                        key={column.id}
                                                        column={column}
                                                        index={index}
                                                        createTask={( title: string, description: string, column: IColumn ) => {
                                                            if( idApp && idBoard ) {
                                                                TaskCrud().createTask( idApp, idBoard, column.id, title, description );
                                                            }
                                                            
                                                        }}
                                                        deleteTask={( task: ITask ) => {
                                                            if( idApp && idBoard) {
                                                                TaskCrud().removeTask( idApp, idBoard, task );
                                                            }
                                                        }}
                                                        deleteColumn={( column: IColumn ) => {
                                                            if( idApp && idBoard ) {
                                                                ColumnCrud().removeColumn( idApp, idBoard, column);
                                                            }
                                                        }}
                                                    />
                                                );
                                            })
                                        }
                                    </div>
                                )}
                            </StrictDroppable>
                        } { application == "Timeline" &&
                            <>
                                <CustomGantt column={tab} />
                            </>
                        }
                    </div>
                </div>
            </DragDropContext>
        </>
    );
};

export default Board;