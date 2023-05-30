import React, { useState } from 'react';
import Task from './Task';
import { StrictDroppable } from './StrictDroppable';
import { Draggable } from 'react-beautiful-dnd';

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
    console.log(column.id + ": " + index)
    const moveIndex = (list: string[], from: number, to: number) => {
        list.splice(to, 0, list.splice(from, 1)[0]);
    }

    return (
        <Draggable draggableId={column.id} index={index}>
            {(provided) => (
                <div
                    className="bg-gray-200 dark:bg-slate-900 pt-3 rounded-xl min-w-[320px] w-[320px] mr-4"
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef} id={column.id}
                >
                    <h2 className="text-black dark:text-white font-bold ml-4 select-none pb-3">{props.column.title}</h2>
                    <StrictDroppable droppableId={column.id}>
                        {(provided) => (
                            <div id="scrollbar"
                                className="bg-gray-100 dark:bg-slate-800 p-4 rounded-b-xl h-[calc(100%-35px)] overflow-x-hidden"
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                            >
                                {tasks.map((task, index) => {
                                    if (task) {
                                        return (
                                            <Task key={task.id} task={task} index={index} />
                                        )
                                    }
                                })}
                                <div className="bg-white text-center cursor-pointer text-black p-2 rounded-lg mb-2 select-none break-all w-full leading-[1.2rem]">
                                    New Task <i className="fa-solid fa-plus"></i>
                                </div>
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