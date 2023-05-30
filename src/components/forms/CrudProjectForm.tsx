import { useState } from "react";
import { useProjectsApi } from "../../adapters/api/useProjectsApi";

const CrudProjectForm: React.FC<{title: string | undefined, submitText: string, close: () => void, submit: () => void}> = ({ title, submitText, close, submit }) => {

    /** 
     * Hook de la API de proyectos, le pasamos un false para que no realice la query.
     */
    const { createProject } = useProjectsApi(false);


    const [projectTitle, setProjectTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");

    const handleSubmit = ( event: React.FormEvent ) => {
        event.preventDefault();
        createProject(projectTitle, description);
        close();
        submit();
    }

    return (
        <>
            {/* Titulo */}
            <div className="w-full flex flex-col w-5/5 bg-white dark:bg-slate-800 p-7 border-b-2 border-gray-300 dark:border-white/20">
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
                        placeholder="Insert your project name"
                        minLength={3}
                        maxLength={20} 
                        className={`flex-1 input input-bordered bg-slate-700 p-4`} 
                        required={true}
                        value={projectTitle}
                        onChange={ event => {
                            setProjectTitle(event.target.value);
                        }}
                    />
                    <textarea 
                        name="Project Description"
                        placeholder="Insert Your Project Description"
                        minLength={10} 
                        maxLength={50}
                        className={`flex-1 input input-bordered max-h-28 min-h-28 resize-none bg-slate-700`} 
                        required={true}
                        value={description}
                        onChange={ event => {
                            setDescription(event.target.value);
                        }}
                    />
                    <button className="btn btn-primary w-fit !bg-green-700 hover:!bg-green-700/50">
                        {submitText}
                    </button>                                    
                </form>
            </div>  
        </>
    )
}

export default CrudProjectForm;