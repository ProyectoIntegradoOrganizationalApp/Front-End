import React, { ChangeEvent, useEffect, useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { useModal } from '../../../../../../../../hooks/useModal';

interface TaskProps {
    task: {
        id: string;
        content: string;
    };
    index: number;
}

export function Task(props: TaskProps) {
    const { task, index } = props;
    const [toInput, setToInput] = useState(false);
    const [inputValue, setInputValue] = useState(task.content);
    const [icon, setIcon] = useState('fa-edit');
    const { openModal } = useModal();

    const handleInput = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const textarea = event.target;
        textarea.style.height = '';
        textarea.style.height = `${textarea.scrollHeight}px`;
        setInputValue(event.target.value);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === "Enter") {
            setIcon('fa-edit');
            setInputValue(event.currentTarget.value);
            setToInput(false);
        }
    };

    const changeIcon = (e: React.MouseEvent<HTMLButtonElement>) => {
        setToInput(true);
        if (!toInput) {
            setIcon('fa-xmark scale-125');
        } else {
            setInputValue(task.content);
            setToInput(false);
            setIcon('fa-edit');
        }
    }

    useEffect(() => {
        if (toInput) {
            const textarea = document.getElementById('textareaTask');
            if (textarea) {
                textarea.style.height = '';
                textarea.style.height = `${textarea.scrollHeight}px`;
            }
        }
    }, [toInput]);

    return (
        <Draggable draggableId={task.id} index={index}>
            {(provided) => (
                <div
                    className="bg-[#fef375] text-black p-2 rounded-lg mb-2.5 select-none break-all w-full leading-[1.2rem] !cursor-grab flex justify-between items-start gap-4 task"
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef} id={task.id}
                >
                    {!toInput ? (
                        inputValue
                    ) : (
                        <textarea id="textareaTask" value={inputValue} onChange={handleInput} onKeyDown={handleKeyDown} minLength={1} className="input input-bordered border-none w-[80%] text-black bg-transparent p-0 h-5 leading-[1.2rem] resize-none overflow-y-hidden" onClick={() => setToInput(true)}></textarea>
                    )}
                    <div className="items-center gap-2 hidden mt-0.5">
                        <i onClick={() => openModal({
                            isOpen: true,
                            type: "confirmation",
                            action: "remove",
                            target: task.content,
                            submitText: "Remove Task",
                            submitAction: ""
                        })} className="fa-solid fa-trash cursor-pointer text-red-700 hover:text-red-800"></i>
                        <i id="editButton" className={`fa-solid ${icon} cursor-pointer text-green-700 hover:text-green-800`} onClick={changeIcon}></i>
                    </div>
                </div>
            )}
        </Draggable>
    );
};

export default Task;