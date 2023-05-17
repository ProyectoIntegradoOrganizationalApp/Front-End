import { useState } from 'react';
import { Breadcrumb } from '../../../../components/Breadcrumb';
import { Tabs } from '../../../../components/Tabs';
import { Item } from '../../../../components/Item';
import { Link } from 'react-router-dom';
import { Dropdown } from '../../../../components/Dropdown';

export function Store() {
    const [selectedElement, selectElement] = useState<string>("Order By");

    return (
        <>
            <div className="w-full flex flex-col">
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
                <div className="bg-slate-800 w-full h-full rounded-xl flex flex-col gap-3 p-4">
                    <div className="flex items-center justify-between pr-2">
                        <div className="bg-slate-800 h-fit px-3 py-0 flex justify-between items-center rounded-xl">
                            <div className="flex items-center gap-7 h-full">
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
                                    }
                                ]}
                            />
                        </div>
                    </div>
                    <div className="bg-slate-700 p-4 grid grid-cols-3 gap-2 h-full rounded-xl content-start">
                        {/* Foreach (Apps) */}
                        <div >
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
                        {/* EndForeach */}
                    </div>
                </div>
            </div >
        </>
    )
}