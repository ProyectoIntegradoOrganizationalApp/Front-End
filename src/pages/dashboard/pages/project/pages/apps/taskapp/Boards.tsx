import React, { useState } from 'react';

import { Link, useParams } from 'react-router-dom';

import { Breadcrumb } from '../../../../../../../components/Breadcrumb';
import { Tabs } from '../../../../../../../components/Tabs';

import { useModal } from '../../../../../../../hooks/useModal';
import { useTaskApp } from '../../../../../../../adapters/api/useTaskAppApi';
import { BoardsElement } from './BoardsElement';

export const Boards: React.FC<{ app: string }> = ({ app }) => {
    const [tab, setTab] = useState<string>("dashboard");
    const { openModal } = useModal();

    const { data, error, loading, getProyectInfo, refreshData, createBoard } = useTaskApp();

    let { idapp, name } = useParams();
    console.log(useParams())
    React.useEffect(() => {
        document.title = 'Boards - ' + name + ' | Teamer 2023';

        if (idapp) {
            getProyectInfo(idapp);
        }
    }, [idapp]);

    const handleCreateBoard = (valor1?: string, valor2?: string, valor3?: string) => {
        if (valor1 && valor2 && valor3 && idapp) {
            createBoard(valor1, valor2, valor3, idapp);
            refreshData(idapp);
        }
    }

    return (
        <div className="w-full flex flex-col">
            <div className="w-full">
                <Breadcrumb breadcrumbs={[
                    {
                        icon: "fa-solid fa-diagram-project",
                        name: "Projects",
                        link: "/projects"
                    },
                    {
                        icon: "fa-solid fa-list-check",
                        name: name ? name : "",
                        link: "/projects/p/" + name
                    },
                    {
                        icon: app == "Taskman" ? "fa-solid fa-note-sticky" : "fa-solid fa-chart-gantt",
                        name: app ? app : ""
                    }
                ]} />
            </div>
            <div className="bg-gray-200 dark:bg-[#202124] w-full h-full min-[500px]:rounded-xl flex flex-col gap-3 max-[500px]:gap-2 p-4 max-[500px]:p-2 pt-3 overflow-y-hidden">
                <Tabs tab={tab} setTab={setTab} icon="fa-solid fa-chess-board" title="Boards" />
                <ul id="scrollbar" className="flex min-[839.50px]:flex-wrap max-[839.50px]:flex-col justify-start content-start gap-4 h-full overflow-y-hidden bg-white dark:bg-[#28292d] rounded-xl p-4 max-[500px]:p-2 select-none">
                    {data && data.boards && (
                        data.boards.map((board, index) => {
                            return <BoardsElement board={board} index={index}/>
                        })
                    )}
                    
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