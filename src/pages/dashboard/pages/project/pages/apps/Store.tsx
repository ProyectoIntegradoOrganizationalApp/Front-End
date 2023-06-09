import { useState } from 'react';
import { Breadcrumb } from '../../../../../../components/Breadcrumb';
import { MainItem } from '../../../../../../components/list-items/MainItem';
import { Dropdown } from '../../../../../../components/Dropdown';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import ShowButton from '../../../../../../components/buttons/ShowButton';

export function Store() {
    const [selectedElement, selectElement] = useState<string>("Order By");
    const [selectedApp, selectApp] = useState<string>("none");

    const idProject = useParams().name;

    const app = {
        name: "Taskman",
        description: "Kanban Board",
        icon: ""
    }

    return (
        <div className="w-full flex flex-col h-full">
            <div className="w-full">
                <Breadcrumb breadcrumbs={[
                    {
                        icon: "fa-solid fa-diagram-project",
                        name: "Projects",
                        link: "/projects"
                    },
                    {
                        icon: "fa-solid fa-list-check",
                        name: idProject ? idProject : "",
                        link: "/projects/p/" + idProject
                    },
                    {
                        icon: "fa-solid fa-bag-shopping",
                        name: "Store"
                    }
                ]} />
            </div>

            <div className="flex-1 bg-gray-200 dark:bg-[#202124] w-full h-fit rounded-xl flex flex-col gap-3 max-[500px]:gap-2 p-4 max-[500px]:p-2 pt-3">
                <div className="flex items-center justify-between pr-2">
                    <div className="h-fit px-3 py-0 flex justify-between items-center rounded-xl max-[500px]:my-2">
                        <div className="flex items-center gap-6 h-full">
                            <NavLink to={`/projects/p/${idProject}/apps`} className="btn btn-primary flex justify-center items-center !px-5 !py-3 !max-h-none border-none leading-none h-fit min-h-0">
                                Apps
                            </NavLink>
                            {/* Header */}
                            <div className="flex items-center gap-4">
                                <i className="fa-solid fa-bag-shopping text-black dark:text-white"></i>
                                <p className="leading-none text-black dark:text-white text-base">Store</p>
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
                    <div className={`flex flex-wrap bg-gray-300 dark:bg-[#28292d] flex-[4] p-4 gap-2 h-auto rounded-xl content-start ${selectedElement == "none" ? "!w-full" : "w-9/12 order-2 lg:order-none"}`}>
                        {/* Foreach (Store Apps) */}
                        <div className="selectElement !min-w-none w-full lg:!min-w-[max(30%,300px)] xl:max-w-[33%] lg:flex-1 cursor-pointer" onClick={(event: React.MouseEvent<HTMLElement>) => { selectApp("Taskman") }}>
                            <div className={selectedApp == "Taskman" ? "selectedElement" : undefined}>
                                <MainItem
                                    item={app}
                                    descriptionBottom={false}
                                >
                                    <ShowButton 
                                        cb={() => {
                                            
                                        }}
                                    />
                                </MainItem>
                            </div>
                        </div>
                        {/* EndForeach */}
                    </div>
                    {/* Sideinfo */}
                    { selectedApp != "none" &&
                        <div className="bg-white dark:bg-[#28292d] flex-1 min-w-fit w-3/12 rounded-xl p-8 flex flex-col justify-between relative">
                            <div className="flex flex-col items-center gap-8">
                                {/* Icon (comprobar si tiene icono, si no tiene, dejar el div de abajo) */}
                                {
                                    2 == 2 &&
                                    <>
                                        <div className="bg-gray-200 dark:bg-[#202124] w-32 aspect-square rounded-full flex justify-center items-center">
                                            <i className="fa-solid fa-bag-shopping text-black dark:text-white text-3xl"></i>
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
    )
}