import { useState } from 'react';
import { Breadcrumb } from '../../../../../../../components/Breadcrumb';
import { Tabs } from '../../../../../../../components/Tabs';
import { Link } from 'react-router-dom';
import { useModal } from '../../../../../../../hooks/useModal';

export function Timeline() {
    const [tab, setTab] = useState<string>("dashboard");
    const { openModal } = useModal();

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
                            name: "ptoelquelolea",
                            link: "/project/ptoelquelolea"
                        },
                        {
                            icon: "fa-solid fa-chess-board",
                            name: "Timeline"
                        }
                    ]} />
                </div>
                <div className="bg-gray-200 dark:bg-slate-800 w-full h-full rounded-xl flex flex-col gap-3 max-[500px]:gap-2 p-4 max-[500px]:p-2 pt-3 overflow-y-hidden">
                    <Tabs tab={tab} setTab={setTab} icon="fa-solid fa-chess-board" title="Timeline" />
                    <div className="flex-1 bg-gray-300 dark:bg-slate-700 rounded-xl"></div>
                </div>
            </div >
        </>
    )
}