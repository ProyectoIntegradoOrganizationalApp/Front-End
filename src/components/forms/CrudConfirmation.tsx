import { useState } from "react";
import { useProjectsApi } from "../../adapters/api/useProjectsApi";

const CrudConfirmation: React.FC<{ action: string | undefined, target: string | undefined, submitText: string, close: () => void, submit: () => void }> = ({ action, target, submitText, close, submit }) => {

    /** 
     * Hook de la API de proyectos, le pasamos un false para que no realice la query.
     */
    const { createProject } = useProjectsApi(false);


    const [projectTitle, setProjectTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        createProject(projectTitle, description);
        close();
        submit();
    }

    return (
        <>
            {/* Titulo */}
            <div className="w-full flex flex-col w-5/5 bg-white dark:bg-slate-800">
                <div className="flex flex-col justify-center items-center gap-7">
                    <i className="fa-solid fa-circle-exclamation text-yellow-500 text-5xl mt-7"></i>
                    <hr className="border-t-2 border-gray-300 dark:border-white/20 w-full" />
                    <p className="leading-none text-xl mx-10 flex">Are You Sure You Want To {action == "remove" ? "Remove" : ""}&nbsp;'<b className="text-red-700 !overflow-ellipsis overflow-hidden whitespace-nowrap block max-w-[10rem]">{target}</b>'</p>
                </div>
            </div>

            {/* Form */}
            <div className="flex flex-col bg-white dark:bg-slate-800 p-7 gap-5">
                <form id="crudForm"
                    className="flex flex-col gap-6 w-full"
                    onSubmit={event => handleSubmit(event)}
                >
                    <div className="flex flex-wrap gap-1">
                        <button className={`w-full btn btn-primary ${action == "remove" ? "!bg-red-700 hover:!bg-red-800" : ""}`}>
                            {submitText}
                        </button>
                        <button className="w-full btn btn-primary !bg-gray-500 hover:!bg-gray-600">
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default CrudConfirmation;