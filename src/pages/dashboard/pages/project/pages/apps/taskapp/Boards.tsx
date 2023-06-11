import React, { useState } from 'react';

import { Link, useParams } from 'react-router-dom';

import { Breadcrumb } from '../../../../../../../components/Breadcrumb';
import { Tabs } from '../../../../../../../components/Tabs';

import { useModal } from '../../../../../../../hooks/useModal';
import { useProjectApi } from '../../../../../../../adapters/api/useProjectApi';
import useTaskApp from '../../../../../../../adapters/api/useTaskAppApi';

export function Boards(props: { icon: string, app: string }) {

    const [tab, setTab] = useState<string>("dashboard");
    const { openModal } = useModal();

    // const { data, error, loading, fetchProject } = useProjectApi();
    const { data, error, loading, getProyectInfo, refreshData } = useTaskApp();

    let { name } = useParams();
    React.useEffect(() => {
        if (name) {
            getProyectInfo(name);
        }
    }, [name]);

    const handleCreateBoard = () => {
        if ( name ) {
            refreshData(name);
        }
    }

    return (
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
                        icon: props.icon,
                        name: props.app
                    }
                ]} />
            </div>
            <div className="bg-gray-200 dark:bg-[#202124] w-full h-full min-[500px]:rounded-xl flex flex-col gap-3 max-[500px]:gap-2 p-4 max-[500px]:p-2 pt-3 overflow-y-hidden">
                <Tabs tab={tab} setTab={setTab} icon="fa-solid fa-chess-board" title="Boards" />
                <ul id="scrollbar" className="flex min-[839.50px]:flex-wrap max-[839.50px]:flex-col justify-start content-start gap-4 h-full overflow-y-hidden bg-white dark:bg-[#28292d] rounded-xl p-4 max-[500px]:p-2 select-none">
                    {/* Foreach (Board) */}
                    
                    { data && (
                        data.boards.map( (board, index) => {
                            return (
                                <li 
                                    key={index}
                                    className={`bg-[url(https://trello-backgrounds.s3.amazonaws.com/SharedBackground/639x960/8bcdfaee9ea0002ce6163822d51db7bd/photo-1679464349885-f6603194a0bf.jpg)] bg-cover bg-no-repeat bg-center box-border board rounded-xl min-[839.50px]:flex-1 basis-[33%] min-w-fit min-[839.50px]:max-w-sm h-1/4 cursor-pointer`}
                                    >
                                    <Link 
                                        state={{icon: props.icon, app: props.app}} to='./front-end' className="w-full h-full relative">
                                        <div className="bg-black/30 w-full h-full rounded-xl transition-all"></div>
                                        <p className="absolute top-3 left-3 text-white"><b className="text-white">front-End</b></p>
                                    </Link>
                                </li>
                            )
                        })
                    )}
                    <li 
                                    className={`bg-[url(https://trello-backgrounds.s3.amazonaws.com/SharedBackground/639x960/8bcdfaee9ea0002ce6163822d51db7bd/photo-1679464349885-f6603194a0bf.jpg)] bg-cover bg-no-repeat bg-center box-border board rounded-xl min-[839.50px]:flex-1 basis-[33%] min-w-fit min-[839.50px]:max-w-sm h-1/4 cursor-pointer`}
                                    >
                                    <Link 
                                        state={{icon: props.icon, app: props.app}} to='./front-end' className="w-full h-full relative">
                                        <div className="bg-black/30 w-full h-full rounded-xl transition-all"></div>
                                        <p className="absolute top-3 left-3 text-white"><b className="text-white">front-End</b></p>
                                    </Link>
                                </li>
                    {/* EndForeach */}
                    <li className="newBoard rounded-xl min-w-fit h-1/4 cursor-pointer relative">
                        <section
                            onClick={() =>
                                openModal({
                                    isOpen: true,
                                    type: "crudBoard",
                                    title: "Create Board",
                                    content: [],
                                    submitText: "Create Board",
                                    submitAction: handleCreateBoard
                                })
                            }
                            className="w-full h-full flex justify-center items-center"
                        >
                            <div className="bg-gray-300 dark:bg-black/30 w-full h-full rounded-xl transition-all absolute -z-0"></div>
                            <p className="px-4 top-3 left-3 text-white z-10">
                                <b className="flex flex-col items-center gap-1.5">
                                    <i className="fa-solid fa-plus"></i>New Board
                                </b>
                            </p>
                        </section>
                    </li>
                </ul>
            </div>
        </div >
    )
}