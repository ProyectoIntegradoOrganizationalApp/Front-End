import { useNavigate } from "react-router-dom"
import { MainItem } from "../../../../../components/list-items/MainItem"
import { useState } from "react";

export function Apps(props: { project: string }) {
    const [selectedElement, selectElement] = useState<string>("none");

    let navigate = useNavigate();
    const openApp = (project: string, link: string) => {
        navigate("/project/" + project + "/app/" + link);
    }
    
    return (
        <>
            <div className="flex flex-wrap bg-gray-300 dark:bg-slate-700 flex-[4] p-4 max-[500px]:p-2 gap-2 h-full rounded-xl content-start overflow-y-auto">
                {/* Foreach (Apps) */}
                <div className="selectElement max-[1024px]:!min-w-full lg:!min-w-[32.5%] lg:max-w-[33%] flex-1 cursor-pointer" onClick={(event: React.MouseEvent<HTMLElement>) => { openApp("ptoelquelolea", "taskman") }}>
                    <div className={selectedElement == "Taskman" ? "selectedElement" : undefined}>
                        <MainItem title="Taskman" description="Work Management" tools={[
                            {
                                type: "button",
                                action: "remove",
                                icon: "fa-solid fa-trash",
                                target: "remove/app"
                            }
                        ]} descriptionBottom={true} />
                    </div>
                </div>
                <div className="selectElement max-[1024px]:!min-w-full lg:!min-w-[32.5%] lg:max-w-[33%] flex-1 cursor-pointer" onClick={(event: React.MouseEvent<HTMLElement>) => { openApp("ptoelquelolea", "taskman") }}>
                    <div className={selectedElement == "Taskman" ? "selectedElement" : undefined}>
                        <MainItem title="Taskman" description="Work Management" tools={[
                            {
                                type: "button",
                                action: "remove",
                                icon: "fa-solid fa-trash",
                                target: "remove/app"
                            }
                        ]} descriptionBottom={true} />
                    </div>
                </div>
                {/* EndForeach */}
            </div>
        </>
    )
}