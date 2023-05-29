import React, { useState } from 'react';
import Column from './Column';
import { Breadcrumb } from '../../../../../../../../components/Breadcrumb';
import { useNavigate } from 'react-router-dom';
import { useModal } from '../../../../../../../../hooks/useModal';
import { Tabs } from '../../../../../../../../components/Tabs';
import { StrictDroppable } from './StrictDroppable';

export function Board() {
    const [tab, setTab] = useState<string>("dashboard");
    const { openModal } = useModal();

    let navigate = useNavigate();

    const columnOrder = ['column-1', 'column-2', 'column-3']; // Orden de las columnas

    const columnsData: {
        [key: string]: {
            id: string;
            title: string;
            taskIds: string[];
            index: number
        };
    } = {
        'column-1': {
            id: 'column-1',
            title: 'To Do',
            taskIds: ['task-1', 'task-2', 'task-3'],
            index: 1
        },
        'column-2': {
            id: 'column-2',
            title: 'In Progress',
            taskIds: ['task-4', 'task-5'],
            index: 2
        },
        'column-3': {
            id: 'column-3',
            title: 'Done',
            taskIds: ['task-6'],
            index: 3
        },
    };

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
    };

    return (
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
                        icon: "fa-solid fa-chess-board",
                        name: "Taskman"
                    }
                ]} />
            </div>
            <div className="bg-gray-200 dark:bg-slate-800 w-full h-full rounded-xl flex flex-col gap-3 max-[500px]:gap-2 p-4 max-[500px]:p-2 pt-3 overflow-y-hidden">
                <div className="flex gap-3 ml-3 max-[500px]:my-2">
                    <div onClick={(e) => navigate(-1)} className="btn btn-primary flex justify-center items-center !text-black dark:!text-white !bg-white dark:!bg-slate-700 !px-5 !py-3 !max-h-none border-none leading-none h-fit min-h-0">Back</div>
                    <Tabs tab={tab} setTab={setTab} icon="fa-solid fa-chess-board" title="Taskman Cols" />
                </div>
                <StrictDroppable droppableId="1" type="COLUMN" direction="horizontal">
                    {(provided) => (
                        <div
                            className="flex-1 rounded-xl bg-gray-300 dark:bg-slate-700 flex p-4 max-[500px]:p-2"
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            {
                                columnOrder.map((columnId) => {
                                    const column = columnsData[columnId];
                                    const tasks = column.taskIds.map((taskId) => tasksData[taskId]);

                                    return (
                                        <Column
                                            key={column.id}
                                            column={column}
                                            tasks={tasks}
                                        />
                                    );
                                })
                            }
                        </div>
                    )}
                </StrictDroppable>
            </div>
        </div>
    );
};

export default Board;