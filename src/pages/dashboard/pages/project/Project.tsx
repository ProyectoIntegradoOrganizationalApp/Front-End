import { useState } from 'react';
import { Breadcrumb } from '../../../../components/Breadcrumb';
import { Tabs } from '../../../../components/Tabs';
import { Item } from '../../../../components/Item';
import { Link } from 'react-router-dom';

export function Project() {
    const [tab, setTab] = useState<string>("dashboard");

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
                        name: "ptoelquelolea"
                    }
                ]} />
                <div className="bg-slate-800 w-full h-full rounded-xl flex flex-col gap-3 p-4 pt-3">
                    <div className="flex items-center justify-between pr-2">
                        <Tabs tab={tab} setTab={setTab} icon="fa-solid fa-list-check" title="ptoelquelolea" links={[
                            {
                                url: "dashboard",
                                name: "Dashboard"
                            },
                            {
                                url: "apps",
                                name: "Apps"
                            },
                            {
                                url: "members",
                                name: "Members"
                            }
                        ]} />
                        <div className="flex gap-2">
                            {
                                tab == "apps" &&
                                <Link to="/project/ptoelquelolea/store">
                                    <div
                                        className="btn flex justify-center items-center !w-10 min-h-fit h-fit rounded-xl !aspect-square border-none bg-blue-700 dark:text-white hover:bg-blue-700/50">
                                        <i className="fa-solid fa-bag-shopping"></i>
                                    </div>
                                </Link>
                            }

                        </div>
                    </div>
                    {
                        tab == "dashboard" &&
                        <></>
                    } {
                        tab == "apps" &&
                        <div className="gridApps bg-slate-700 p-4 gap-2 h-full rounded-xl content-start">
                            {/* Foreach (Apps) */}
                            <div>
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
                            {/* EndForeach */}
                        </div>
                    } {
                        tab == "members" &&
                        <div className="bg-slate-700 p-4 gap-2 h-full rounded-xl content-start">
                            {/* Foreach (Apps) */}
                            <Item title="Firebloh" description="sometimes world feels like on fire" tools={[
                                {
                                    type: "dropdown",
                                    dropdown: {
                                        type: "role",
                                        elements: [
                                            {
                                                action: "",
                                                name: "Admin"
                                            },
                                            {
                                                action: "",
                                                name: "Editor"
                                            },
                                            {
                                                action: "",
                                                name: "Reader"
                                            }
                                        ]
                                    }
                                },
                                {
                                    type: "button",
                                    action: "message",
                                    icon: "fa-solid fa-message",
                                    color: "bg-slate-700",
                                    target: "message/idFriend"
                                },
                                {
                                    type: "button",
                                    action: "remove",
                                    icon: "fa-solid fa-trash",
                                    color: "bg-red-700",
                                    target: "remove/idFriend"
                                }
                            ]} />
                            {/* EndForeach */}
                        </div>
                    }
                </div>
            </div >
        </>
    )
}