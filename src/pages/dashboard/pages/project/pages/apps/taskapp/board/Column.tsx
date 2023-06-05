import React, { ChangeEvent, useState } from 'react';
import Task from './Task';
import { StrictDroppable } from './StrictDroppable';
import { Draggable } from 'react-beautiful-dnd';
import { useModal } from '../../../../../../../../hooks/useModal';

interface ColumnProps {
    column: {
        id: string;
        title: string;
        taskIds: string[];
    };
    tasks: {
        id: string;
        content: string;
    }[];
    index: number
}

export function Column(props: ColumnProps) {
    const { tasks, index } = props;
    const [column, setColumn] = useState(props.column)
    const [toInput, setToInput] = useState(false);
    const [inputValue, setInputValue] = useState(props.column.title);
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
            setInputValue(props.column.title);
            setToInput(false);
            button.classList.add('fa-edit');
            button.classList.remove('fa-xmark', 'scale-125');
        }
    }

    return (
        <Draggable draggableId={column.id} index={index}>
            {(provided) => (
                <div
                    className="bg-gray-200 dark:bg-slate-900 pt-3 rounded-xl min-w-[320px] w-[320px] mr-4 !cursor-grab"
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef} id={column.id}
                >
                    <div className="flex justify-between items-center pb-3 mx-4">
                        {!toInput ? (
                            <h2 className="text-black dark:text-white font-bold select-none">{inputValue}</h2>
                        ) : (
                            <input value={inputValue} onChange={handleChange} onKeyDown={handleKeyDown} minLength={1} maxLength={22} className="input input-bordered border-none text-black max dark:text-white bg-gray-300 dark:bg-slate-700 p-2 h-6" onClick={() => setToInput(true)} type="text" />
                        )}

                        <div className="flex items-center gap-2">
                            <i className="fa-solid fa-trash cursor-pointer text-red-700 hover:text-red-800" onClick={() =>
                                openModal({
                                    isOpen: true,
                                    type: "confirmation",
                                    action: "remove",
                                    target: props.column.title,
                                    submitText: "Remove Column",
                                    submitAction: () => { }
                                })}></i>
                            <i id="editButton" className="fa-solid fa-edit cursor-pointer text-green-700 hover:text-green-800" onClick={changeIcon}></i>
                        </div>
                    </div>
                    <StrictDroppable droppableId={column.id}>
                        {(provided) => (
                            <div id="scrollbar"
                                className="bg-gray-100 dark:bg-slate-800 p-4 rounded-b-xl h-[calc(100%-35px)] overflow-x-hidden"
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                            >
                                <div onClick={() =>
                                    openModal({
                                        isOpen: true,
                                        type: "crudProject",
                                        title: "Create Task",
                                        content: [],
                                        submitText: "Create Task",
                                        submitAction: () => { }
                                    })} className="bg-gray-300 dark:bg-black/30 hover:bg-gray-400/80 dark:hover:bg-black/50 transition-all cursor-pointer text-black dark:text-white p-3 rounded-lg mb-2.5 select-none break-all w-full leading-[1.2rem] flex gap-2 justify-center items-center">
                                    <b><p className="leading-none">New Task</p></b><i className="fa-solid fa-plus"></i>
                                </div>
                                {tasks.map((task, index) => {
                                    if (task) {
                                        return (
                                            <Task key={task.id} task={task} index={index} />
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
    );
};

export default Column;