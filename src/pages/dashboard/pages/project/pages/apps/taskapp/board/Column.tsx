import React, { ChangeEvent, useState } from 'react';

import { StrictDroppable } from './StrictDroppable';
import { Draggable } from 'react-beautiful-dnd';

import { useModal } from '../../../../../../../../hooks/useModal';
import { Task } from './Task';

import { Column as IColumn, Task as ITask } from '../../../../../../../../adapters/api/useTaskAppApi';

interface ColumnProps {
    column: any,
    index: number,
    deleteColumn: any,
    createTask: ( title: string, description: string, column: IColumn ) => void,
    deleteTask: any
}

export const Column: React.FC<ColumnProps> = ({ column, index, createTask, deleteColumn, deleteTask }) => {

    const [toInput, setToInput] = useState(false);
    const [inputValue, setInputValue] = useState(column?.title);

    const { openModal } = useModal();

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            document.getElementById('editButton')?.classList.add('fa-edit');
            document.getElementById('editButton')?.classList.remove('fa-xmark', 'scale-125');
            setInputValue(event.currentTarget.value);
            setToInput(false);
        }
    };

    const changeIcon = (e: React.MouseEvent<HTMLButtonElement>) => {
        const button = e.target as HTMLButtonElement;
        if (!toInput) {
            setToInput(true);
            button.classList.remove('fa-edit');
            button.classList.add('fa-xmark', 'scale-125');
        } else {
            setInputValue(column.title);
            setToInput(false);
            button.classList.add('fa-edit');
            button.classList.remove('fa-xmark', 'scale-125');
        }
    }

    return (
        <>
            { column && (
                <Draggable draggableId={column.id} index={index}>
                    {(provided) => (
                        <div
                            className="bg-gray-200 dark:bg-[#141416] pt-3 rounded-xl min-w-[320px] w-[320px] mr-4 !cursor-grab"
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef} id={column.id}
                        >
                            <div className="flex justify-between items-center pb-3 mx-4">
                                {!toInput ? (
                                    <h2 className="text-black dark:text-white font-bold select-none">{inputValue}</h2>
                                ) : (
                                    <input value={inputValue} onChange={handleChange} onKeyDown={handleKeyDown} minLength={1} maxLength={22} className="input input-bordered border-none text-black max dark:text-white bg-gray-300 dark:bg-[#28292d] p-2 h-6" onClick={() => setToInput(true)} type="text" />
                                )}

                                <div className="flex items-center gap-2">
                                    <i className="fa-solid fa-trash cursor-pointer text-red-700 hover:text-red-800" onClick={() =>
                                        openModal({
                                            isOpen: true,
                                            type: "confirmation",
                                            action: "remove",
                                            target: column.title,
                                            submitText: "Remove Column",
                                            submitAction: () => {
                                                deleteColumn(column)
                                            }
                                        })}></i>
                                    <i id="editButton" className="fa-solid fa-edit cursor-pointer text-green-700 hover:text-green-800" onClick={changeIcon}></i>
                                </div>
                            </div>
                            <StrictDroppable droppableId={column.id}>
                                {(provided) => (
                                    <div id="scrollbar"
                                        className="bg-gray-100 dark:bg-[#202124] p-4 rounded-b-xl h-[calc(100%-35px)] overflow-x-hidden"
                                        ref={provided.innerRef}
                                        {...provided.droppableProps}
                                    >
                                        <div onClick={() =>
                                            openModal({
                                                isOpen: true,
                                                type: "crudTask",
                                                title: "Create Task",
                                                content: [],
                                                submitText: "Create Task",
                                                submitAction: ( title, description ) => {
                                                    if( title && description ) {
                                                        createTask(title, description, column)
                                                    }
                                                }
                                            })} className="bg-gray-300 dark:bg-black/30 hover:bg-gray-400/80 dark:hover:bg-black/50 transition-all cursor-pointer text-black dark:text-white p-3 rounded-lg mb-2.5 select-none break-all w-full leading-[1.2rem] flex gap-2 justify-center items-center">
                                            <b><p className="leading-none">New Task</p></b><i className="fa-solid fa-plus"></i>
                                        </div>
                                        { column.tasks.map((task: any, index: number) => {
                                            if (task) {
                                                return (
                                                    <Task 
                                                        key={task.id} 
                                                        task={task} 
                                                        index={index}
                                                        delete={deleteTask}
                                                    />
                                                )
                                            }
                                        })}
                                        {provided.placeholder}
                                    </div>
                                )}
                            </StrictDroppable>
                        </div>
                    )}
                </Draggable>
            )}
        </>
    );
};

export default Column;