import { useState } from 'react';
import { Breadcrumb } from '../../../../../../components/Breadcrumb';
import { Tabs } from '../../../../../../components/Tabs';
import { Link } from 'react-router-dom';
import { useModal } from '../../../../../../hooks/useModal';

export function Taskman() {
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
                            name: "Taskman"
                        }
                    ]} />
                </div>
                <div className="bg-gray-200 dark:bg-slate-800 w-full h-full rounded-xl flex flex-col gap-3 max-[500px]:gap-2 p-4 max-[500px]:p-2 pt-3 overflow-y-hidden">
                    <Tabs tab={tab} setTab={setTab} icon="fa-solid fa-chess-board" title="Taskman Boards" />
                    <ul id="scrollbar" className="flex min-[839.50px]:flex-wrap max-[839.50px]:flex-col justify-start content-start gap-4 h-full overflow-y-hidden bg-white dark:bg-slate-700 rounded-xl p-4 max-[500px]:p-2 select-none">
                        {/* Foreach (Board) */}
                        <li className={`bg-[url(https://trello-backgrounds.s3.amazonaws.com/SharedBackground/639x960/8bcdfaee9ea0002ce6163822d51db7bd/photo-1679464349885-f6603194a0bf.jpg)] bg-cover bg-no-repeat bg-center box-border rounded-xl min-[839.50px]:flex-1 basis-[33%] min-w-fit min-[839.50px]:max-w-sm h-1/4 cursor-pointer hover:[&_div]:bg-black/50`}>
                            <Link to="./front-End" className="w-full h-full relative">
                                <div className="bg-black/30 w-full h-full rounded-xl transition-all"></div>
                                <p className="absolute top-3 left-3 text-white"><b className="text-white">front-End</b></p>
                            </Link>
                        </li>
                        {/* EndForeach */}
                        <li className={`rounded-xl min-w-fit h-1/4 cursor-pointer hover:[&_div]:bg-gray-400 dark:hover:[&_div]:bg-black/50`}>
                            <section onClick={() => openModal({
                                isOpen: true,
                                type: "crudProject",
                                title: "Create Board",
                                content: [],
                                submitText: "Create Board",
                                submitAction: ""
                            })} className="w-full h-full relative flex justify-center items-center">
                                <div className="bg-gray-300 dark:bg-black/30 w-full h-full rounded-xl transition-all absolute -z-0"></div>
                                <p className="px-4 top-3 left-3 text-white z-10"><b className="flex flex-col items-center gap-1.5"><i className="fa-solid fa-plus"></i>New Board</b></p>
                            </section>
                        </li>
                    </ul>
                </div>
            </div >
        </>
    )
}