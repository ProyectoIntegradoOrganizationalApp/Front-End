import React, { useState } from 'react';
import Column from './Column';
import { Breadcrumb } from '../../../../../../../../components/Breadcrumb';
import { Link, useBeforeUnload, useLocation } from 'react-router-dom';
import { useModal } from '../../../../../../../../hooks/useModal';
import { useBoard } from '../../../../../../../../hooks/useBoard';
import { Tabs } from '../../../../../../../../components/Tabs';
import { StrictDroppable } from './StrictDroppable';
import { DragDropContext } from 'react-beautiful-dnd';

export function Board() {
    const [tab, setTab] = useState<string>("dashboard");
    const { openModal } = useModal();
    const { onDragEnd, columnOrder, columnsData } = useBoard();
    const { state } = useLocation();

    const tasksData: {
        [key: string]: {
            id: string;
            content: string;
        };
    } = {
        'task-1': {
            id: 'task-1',
            content: 'Task 1awwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwdawdwaaaaaaaaaaa',
        },
        'task-2': {
            id: 'task-2',
            content: 'Task 2',
        },
        'task-3': {
            id: 'task-3',
            content: 'Task 3',
        },
        'task-4': {
            id: 'task-4',
            content: 'Task 4',
        },
        'task-5': {
            id: 'task-5',
            content: 'Task 5',
        },
        'task-6': {
            id: 'task-6',
            content: 'Task 6',
        },
        'task-7': {
            id: 'task-7',
            content: ' faef aef ea fea fae fea fa',
        },
        'task-8': {
            id: 'task-8',
            content: 'Tseraraf',
        }
    };

    useBeforeUnload((e: BeforeUnloadEvent) => {
        e.preventDefault();

        // Maiki, aquí debes poner actualización de datos en la bbdd con el nuevo columnData y eso
    });

    return (
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
                            name: "ptoelquelolea",
                            link: "/project/ptoelquelolea"
                        },
                        {
                            icon: state.icon,
                            name: state.app,
                            link: "/project/ptoelquelolea/app/" + state.app.toLowerCase()
                        },
                        {
                            icon: "fa-solid fa-chess-board",
                            name: "front-End"
                        },
                    ]} />
                </div>
                <div className="bg-gray-200 dark:bg-slate-800 w-full h-full min-[500px]:rounded-xl flex flex-col gap-3 max-[500px]:gap-2 p-4 max-[500px]:p-2 pt-3 overflow-y-hidden">
                    <div className="bg-gray-200 dark:bg-slate-800 w-full px-3 min-[1085px]:rounded-tr-xl max-[500px]:px-3 flex justify-between items-center gap-2">
                        <div className="flex gap-3">
                            <Link to="/project/ptoelquelolea/app/taskman" className="btn btn-primary flex justify-center items-center !text-black dark:!text-white !bg-white dark:!bg-slate-700 !px-5 !py-3 !max-h-none border-none leading-none h-fit min-h-0">Boards</Link>
                            <Tabs tab={tab} setTab={setTab} icon="fa-solid fa-chart-simple" title="Cols" />
                        </div>
                        <i onClick={() =>
                            openModal({
                                isOpen: true,
                                type: "crudProject",
                                title: "Create Column",
                                content: [],
                                submitText: "Create Column",
                                submitAction: ""
                            })}
                            className="fa-solid fa-plus text-black hover:text-black/50 dark:text-white cursor-pointer dark:hover:text-white/50 transition-all"></i>
                    </div>
                    {
                        state.app == "Taskman" &&
                        <StrictDroppable droppableId="1" type="COLUMN" direction="horizontal">
                            {(provided) => (
                                <div id="scrollbarx"
                                    className="flex-1 rounded-xl bg-gray-300 dark:bg-slate-700 flex p-4 max-[500px]:p-2 overflow-x-auto"
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                >
                                    {
                                        columnOrder.map((columnId) => {
                                            // console.log(columnId)
                                            const column = columnsData[columnId];
                                            const tasks = column.taskIds.map((taskId) => tasksData[taskId]);

                                            return (
                                                <Column
                                                    key={column.id}
                                                    column={column}
                                                    tasks={tasks}
                                                    index={columnOrder.indexOf(columnId)}
                                                />
                                            );
                                        })
                                    }
                                </div>
                            )}
                        </StrictDroppable>
                    } {
                        state.app == "Timeline" &&
                        <div></div>
                    }
                </div>
            </div>
        </DragDropContext>
    );
};

export default Board;