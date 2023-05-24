import { useState } from 'react';
import { Breadcrumb } from '../../../../../../components/Breadcrumb';
import { Tabs } from '../../../../../../components/Tabs';
import { Link } from 'react-router-dom';

export function Application() {
    const [tab, setTab] = useState<string>("dashboard");

    return (
        <>
            <div className="w-full flex flex-col">
                <div className="w-full">
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
                </div>
                <div className="bg-gray-200 dark:bg-slate-800 w-full h-full rounded-xl flex flex-col gap-3 max-[500px]:gap-2 p-4 max-[500px]:p-2 pt-3 overflow-y-hidden">
                    <div className="flex items-center justify-between pr-2 gap-2">
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
                    </div>
                    <div className="flex flex-wrap gap-4 h-full overflow-y-hidden bg-slate-700 rounded-xl p-4">
                        <div className="bg-red-500 w-64 h-36 rounded-xl cursor-pointer hover:bg-red-700"></div>
                        <div className="bg-green-500 w-64 h-36 rounded-xl cursor-pointer"></div>
                        <div className="bg-blue-500 w-64 h-36 rounded-xl cursor-pointer"></div>
                    </div>
                </div>
            </div >
        </>
    )
}