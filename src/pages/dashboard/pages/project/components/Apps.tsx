import { useNavigate } from "react-router-dom"
import { Item } from "../../../../../components/Item"
import { useState } from "react";

export function Apps(props: { project: string }) {
    const [selectedElement, selectElement] = useState<string>("none");

    let navigate = useNavigate();
    const openApp = (project: string, link: string) => {
        navigate("/project/" + project + "/app/" + link);
    }
    
    return (
        <>
            <div className="flex flex-wrap bg-gray-300 dark:bg-slate-700 flex-[4] p-4 gap-2 h-full rounded-xl content-start">
                {/* Foreach (Apps) */}
                <div className="selectElement !min-w-fit lg:max-w-[33%] flex-1 cursor-pointer" onDoubleClick={(event: React.MouseEvent<HTMLElement>) => { openApp("ptoelquelolea", "Taskman") }}>
                    <div className={selectedElement == "Taskman" ? "selectedElement" : undefined}>
                        <Item title="Taskman" description="Work Management" tools={[
                            {
                                type: "button",
                                action: "remove",
                                icon: "fa-solid fa-trash",
                                target: "remove/app"
                            }
                        ]} descriptionBottom={true} />
                    </div>
                </div>
                <div className="selectElement !min-w-fit lg:max-w-[33%] flex-1 cursor-pointer" onDoubleClick={(event: React.MouseEvent<HTMLElement>) => { openApp("ptoelquelolea", "Taskman") }}>
                    <div className={selectedElement == "Taskman" ? "selectedElement" : undefined}>
                        <Item title="Taskman" description="Work Management" tools={[
                            {
                                type: "button",
                                action: "remove",
                                icon: "fa-solid fa-trash",
                                target: "remove/app"
                            }
                        ]} descriptionBottom={true} />
                    </div>
                </div>
                <div className="selectElement !min-w-fit lg:max-w-[33%] flex-1 cursor-pointer" onDoubleClick={(event: React.MouseEvent<HTMLElement>) => { openApp("ptoelquelolea", "Taskman") }}>
                    <div className={selectedElement == "Taskman" ? "selectedElement" : undefined}>
                        <Item title="Taskman" description="Work Management" tools={[
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