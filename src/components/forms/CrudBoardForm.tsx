
import { useState } from "react";

import { useParams } from "react-router-dom";

import { useTaskApp } from '../../adapters/api/useTaskAppApi';

interface ProjectFormProps {
    title: string | undefined,
    submitText: string,
    close: () => void,
    submit: (value1?: string, value2?:string) => void
}

const CrudBoardForm: React.FC<ProjectFormProps> = ({ title, submitText, close, submit }) => {

    const [projectTitle, setProjectTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");

    const handleSubmit = ( event: React.FormEvent ) => {
        event.preventDefault();

        submit(projectTitle, description);
        close();
    }

    return (
        <>
            {/* Titulo */}
            <div className="w-full flex flex-col w-5/5 bg-white dark:bg-[#202124] p-7 border-b-2 border-gray-300 dark:border-white/20">
                <div className="flex gap-4">
                    <p className="leading-none text-2xl">{title}</p>
                </div>
            </div>

            {/* Form */}
            <div className="flex flex-col bg-transparent p-7 gap-5">
                <form id="crudForm" 
                    className="flex flex-col gap-6 w-full"
                    onSubmit={event => handleSubmit(event)}
                >
                    <input 
                        type="text"
                        name="Project Name" 
                        placeholder="Insert your board name"
                        minLength={3}
                        maxLength={20} 
                        className={`flex-1 input input-bordered border-none bg-gray-200 dark:bg-[#28292d] p-4`} 
                        required={true}
                        value={projectTitle}
                        onChange={ event => {
                            setProjectTitle(event.target.value);
                        }}
                    />
                    <textarea 
                        name="Project Description"
                        placeholder="Insert Your board Description"
                        minLength={10} 
                        maxLength={50}
                        className={`flex-1 input input-bordered max-h-28 min-h-28 resize-none border-none bg-gray-200 dark:bg-[#28292d]`} 
                        required={true}
                        value={description}
                        onChange={ event => {
                            setDescription(event.target.value);
                        }}
                    />
                    <button className="btn btn-primary w-fit !bg-green-700 hover:!bg-green-800">
                        {submitText}
                    </button>                                    
                </form>
            </div>  
        </>
    )
}

export default CrudBoardForm;