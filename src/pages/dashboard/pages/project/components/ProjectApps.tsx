import { useEffect, useState } from "react";

import { useNavigate, useOutletContext, useParams } from "react-router-dom"

import { MainItem } from "../../../../../components/list-items/MainItem"

import { Project } from "../../../../../domain/projects/Project.interface";
import { useAppApi } from "../../../../../adapters/api/useAppApi";
import RemoveButton from "../../../../../components/buttons/RemoveButton";

export const ProjectApps: React.FC = () => {
    
    const project: Project = useOutletContext();

    const { data, error, loading, fetchApps } = useAppApi();

    let { name } = useParams();
    useEffect(() => {
        if (name) {
            fetchApps(name);
        }
    }, []);

    let navigate = useNavigate();

    const openApp = ( idapp: string, tasktype: string ) => {
        let tipo = tasktype === "kanban" ? 'taskman' : "timeline";

        navigate(`/project/${name}/app/${tipo}/${idapp}`);
    }

    const removeApp = () => {
        console.log("no puedes hacer eso jaja xdxd")
    }

    return (
        <div className="flex flex-wrap bg-gray-300 dark:bg-slate-700 flex-[4] p-4 max-[500px]:p-2 gap-2 h-full min-[500px]:rounded-xl content-start overflow-y-auto">
            {/* Foreach (Apps) */}
            { data && data.length > 0 && data.map(( app, index) => {
                return (
                    <div 
                        key={index}
                        className="selectElement max-[1024px]:!min-w-full lg:!min-w-[32.5%] lg:max-w-[33%] flex-1 cursor-pointer" 
                        onClick={() => openApp(app.idapp, app.tasktype)}
                    >
                        <div>
                            <MainItem 
                                item={{
                                    name: app.name,
                                    description: app.description,
                                    icon: "fawd"
                                }}
                                descriptionBottom={true}
                            >
                                <RemoveButton 
                                    cb={removeApp}
                                />
                            </MainItem>
                        </div>
                    </div>
                )
            })}
            {/* EndForeach */}
        </div>
    )
}