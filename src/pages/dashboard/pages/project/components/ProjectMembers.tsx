import { useOutletContext } from "react-router";

import { MainItem } from "../../../../../components/list-items/MainItem";

import { Project } from "../../../../../domain/projects/Project.interface";

export const ProjectMembers: React.FC = () => {
    const project: Project = useOutletContext();

    return (
        <div className="bg-gray-300 dark:bg-slate-700 p-4 max-[500px]:p-2 flex flex-col gap-2 w-full h-full min-[500px]:rounded-xl">
            { project && project.members.map(( elem ) => {
                return (
                    <MainItem 
                        key={elem.id}
                        item={{name: elem.name, description: elem.role, icon: elem.photo}}
                        descriptionBottom={true}
                    >
                        {/* Añadir botones de eleminar y editar permisos */}

                    </MainItem>
                )
            })}
        </div>
    )
}