import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

interface TaskProps {
    task: {
        id: string;
        content: string;
    };
    index: number;
}

export function Task(props: TaskProps) {
    const { task, index } = props;
    
    return (
        <Draggable draggableId={task.id} index={index}>
            {(provided) => (
                <div
                    className="bg-white text-black p-2 rounded-lg mb-2 select-none break-all w-full leading-[1.2rem]"
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef} id={task.id}
                >
                    {task.content}
                </div>
            )}
        </Draggable>
    );
};

export default Task;