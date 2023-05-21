import { useState } from 'react';
import { Breadcrumb } from '../../../../../components/Breadcrumb';
import { Item } from '../../../../../components/Item';
import { Dropdown } from '../../../../../components/Dropdown';
import { Link, useNavigate } from 'react-router-dom';

export function Store(props: { project: string }) {
    const [selectedElement, selectElement] = useState<string>("Order By");
    const [selectedApp, selectApp] = useState<string>("none");

    let navigate = useNavigate();

    return (
        <>
            <div className="w-full flex flex-col h-full">
                <div className="w-full">
                    <Breadcrumb breadcrumbs={[
                        {
                            icon: "fa-solid fa-diagram-project",
                            name: "Projects",
                            link: "/projects/dashboard"
                        },
                        {
                            icon: "fa-solid fa-list-check",
                            name: "ptoelquelolea",
                            link: "/project/ptoelquelolea"
                        },
                        {
                            icon: "fa-solid fa-bag-shopping",
                            name: "Store"
                        }
                    ]} />
                </div>
                <div className="flex-1 bg-slate-800 w-full h-fit rounded-xl flex flex-col gap-3 p-4 pt-3">
                    <div className="flex items-center justify-between pr-2">
                        <div className="bg-slate-800 h-fit px-3 py-0 flex justify-between items-center rounded-xl">
                            <div className="flex items-center gap-6 h-full">
                                <div onClick={(e) => navigate(-1)} className="btn btn-primary flex justify-center items-center !px-5 !py-3 !max-h-none border-none leading-none h-fit min-h-0">Back</div>
                                {/* Header */}
                                <div className="flex items-center gap-4">
                                    <i className="fa-solid fa-bag-shopping text-white"></i>
                                    <p className="leading-none text-white text-base">Store</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <Dropdown
                                selectedElement={selectedElement}
                                selectElement={selectElement}
                                elements={[
                                    {
                                        action: "fe",
                                        name: "Recently"
                                    },
                                    {
                                        action: "fe",
                                        name: "Older"
                                    },
                                    {
                                        action: "fe",
                                        name: "Alphabetical"
                                    },
                                    {
                                        action: "fe",
                                        name: "Installed"
                                    }
                                ]}
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap h-full gap-6">
                        <div className={`flex flex-wrap bg-slate-700 flex-[4] p-4 gap-2 h-auto rounded-xl content-start min-w-fit ${selectedElement == "none" ? "!w-full" : "w-9/12 order-2 lg:order-none"}`}>
                            {/* Foreach (Store Apps) */}
                            <div className="selectElement !min-w-none w-full lg:!min-w-[max(30%,300px)] xl:max-w-[33%] lg:flex-1 cursor-pointer" onClick={(event: React.MouseEvent<HTMLElement>) => { selectApp("Taskman") }}>
                                <div className={selectedApp == "Taskman" ? "selectedElement" : undefined}>
                                    <Item title="Taskman" description="Work Management" tools={[
                                        {
                                            type: "button",
                                            action: "add",
                                            icon: "fa-solid fa-plus",
                                            color: "bg-green-700",
                                            target: "add/app"
                                        }
                                    ]} descriptionBottom={true} />
                                </div>
                            </div>
                            <div className="selectElement !min-w-none w-full lg:!min-w-[max(30%,300px)] xl:max-w-[33%] lg:flex-1 cursor-pointer" onClick={(event: React.MouseEvent<HTMLElement>) => { selectApp("Taskman") }}>
                                <div className={selectedApp == "Taskman" ? "selectedElement" : undefined}>
                                    <Item title="Taskman" description="Work Management" tools={[
                                        {
                                            type: "button",
                                            action: "add",
                                            icon: "fa-solid fa-trash",
                                            color: "bg-red-700",
                                            target: "add/app"
                                        }
                                    ]} descriptionBottom={true} />
                                </div>
                            </div>
                            <div className="selectElement !min-w-none w-full lg:!min-w-[max(30%,300px)] xl:max-w-[33%] lg:flex-1 cursor-pointer" onClick={(event: React.MouseEvent<HTMLElement>) => { selectApp("Taskman") }}>
                                <div className={selectedApp == "Taskman" ? "selectedElement" : undefined}>
                                    <Item title="Taskman" description="Work Management" tools={[
                                        {
                                            type: "button",
                                            action: "add",
                                            icon: "fa-solid fa-plus",
                                            color: "bg-green-700",
                                            target: "add/app"
                                        }
                                    ]} descriptionBottom={true} />
                                </div>
                            </div>
                            <div className="selectElement !min-w-none w-full lg:!min-w-[max(30%,300px)] xl:max-w-[33%] lg:flex-1 cursor-pointer" onClick={(event: React.MouseEvent<HTMLElement>) => { selectApp("Taskman") }}>
                                <div className={selectedApp == "Taskman" ? "selectedElement" : undefined}>
                                    <Item title="Taskman" description="Work Management" tools={[
                                        {
                                            type: "button",
                                            action: "add",
                                            icon: "fa-solid fa-plus",
                                            color: "bg-green-700",
                                            target: "add/app"
                                        }
                                    ]} descriptionBottom={true} />
                                </div>
                            </div>
                            {/* EndForeach */}
                        </div>
                        {/* Sideinfo */}
                        {
                            selectedApp != "none" &&
                            <div className="bg-slate-700 flex-1 min-w-fit w-3/12 rounded-xl p-8 flex flex-col justify-between relative">
                                <div className="flex flex-col items-center gap-8">
                                    {/* Icon (comprobar si tiene icono, si no tiene, dejar el div de abajo) */}
                                    {
                                        2 == 2 &&
                                        <>
                                            <div className="bg-slate-800 w-32 aspect-square rounded-full flex justify-center items-center">
                                                <i className="fa-solid fa-bag-shopping text-white text-3xl"></i>
                                            </div>
                                        </>
                                    } {
                                        2 != 2 &&
                                        <div className="bg-green-700 w-32 aspect-square rounded-full"></div>
                                    }
                                    {/* Info */}
                                    <div className="flex flex-col items-center gap-4">
                                        <p className="text-black dark:text-white text-3xl leading-none">{selectedApp}</p>
                                        <p className="text-black dark:text-white/50 text-center leading-none">Taskman ofrece un manejo de tareas</p>
                                    </div>
                                </div>
                                <div className="w-full flex mt-8">
                                    <div className="flex-auto btn btn-primary !bg-green-700 hover:!bg-green-800 !px-2">Install App</div>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}