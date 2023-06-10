import { useEffect, useState } from "react";

import { useNavigate, useOutletContext } from "react-router-dom"

import { MainItem } from "../../../../../components/list-items/MainItem"

import { Project } from "../../../../../domain/projects/Project.interface";

export const ProjectApps: React.FC = () => {
    
    const project: Project = useOutletContext();

    let navigate = useNavigate();
    const openApp = (project: string, link: string) => {
        navigate("/project/" + project + "/app/" + link);
    }

    console.log(project)

    return (
        <div className="flex flex-wrap bg-gray-300 dark:bg-slate-700 flex-[4] p-4 max-[500px]:p-2 gap-2 h-full min-[500px]:rounded-xl content-start overflow-y-auto">
            {/* Foreach (Apps) */}
            <div 
                className="selectElement max-[1024px]:!min-w-full lg:!min-w-[32.5%] lg:max-w-[33%] flex-1 cursor-pointer" 
                onClick={() => openApp(project.idProject, "taskman")}
            >
                <div>
                    <MainItem 
                        item={{
                            name: "Taskman",
                            description: "Work Management",
                            icon: "fawd"
                        }}
                        descriptionBottom={true}
                    >
                        <div className="btn btn-primary !bg-red-700 hover:!bg-red-800 flex justify-center items-center !rounded-xl !px-[1.1rem]">
                            <i className="fa-solid fa-trash"></i>
                        </div>
                    </MainItem>
                </div>
            </div>
            <div 
                className="selectElement max-[1024px]:!min-w-full lg:!min-w-[32.5%] lg:max-w-[33%] flex-1 cursor-pointer" 
                onClick={() => openApp(project?.idProject, "timeline") }>
                <div>
                    <MainItem 
                        item={{
                            name: "Timeline",
                            description: "Work Management",
                            icon: "fawd"
                        }}
                        descriptionBottom={true}
                    >
                            <div className="btn btn-primary !bg-red-700 hover:!bg-red-800 flex justify-center items-center !rounded-xl !px-[1.1rem]">
                                <i className="fa-solid fa-trash"></i>
                            </div>
                    </MainItem>
                </div>
            </div>
            {/* EndForeach */}
        </div>
    )
}