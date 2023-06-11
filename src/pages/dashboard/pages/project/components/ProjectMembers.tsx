import { useOutletContext } from "react-router";

import { MainItem } from "../../../../../components/list-items/MainItem";

import { Project } from "../../../../../domain/projects/Project.interface";

export const ProjectMembers: React.FC = () => {
    const project: Project = useOutletContext();

    return (
        <div className="flex flex-col gap-2 w-full h-full min-[500px]:rounded-xl">
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