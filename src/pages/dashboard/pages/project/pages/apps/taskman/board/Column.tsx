import React from 'react';
import Task from './Task';
import { StrictDroppable } from './StrictDroppable';
import { Draggable } from 'react-beautiful-dnd';

interface ColumnProps {
    column: {
        id: string;
        title: string;
        taskIds: string[];
        index: number;
    };
    tasks: {
        id: string;
        content: string;
    }[];
}

export function Column(props: ColumnProps) {
    const { column, tasks } = props;

    return (
        <Draggable draggableId={column.id} index={column.index}>
            {(provided) => (
                <div
                    className="bg-gray-300 dark:bg-slate-800 pt-4 rounded-xl min-w-[320px] w-[320px] mr-4"
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef} id={column.id}
                >
                    <h2 className="text-black dark:text-white font-bold ml-4 select-none">{props.column.title}</h2>
                    <StrictDroppable droppableId={column.id}>
                        {(provided) => (
                            <div
                                className="bg-gray-300 dark:bg-slate-800 p-4 rounded-xl h-fit"
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                            >
                                {tasks.map((task, index) => (
                                    <Task key={task.id} task={task} index={index} />
                                ))}
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