import { Link, Navigate } from 'react-router-dom';
import { useUser } from "../../application/customHooks/useUser";
import { Sidebar } from "../components/dashboard/Sidebar";
import { Route } from '../../domain/Route.interface';
import { DashboardBox } from '../components/dashboard/DashboardBox';
import { Routes } from '../../application/customHooks/routes';
import { Item } from '../components/Item';
import { Searcher } from '../components/Searcher';
import { useState } from 'react';
import { InfoTooltip } from '../components/InfoTooltip';
import { Share } from '../components/Share';

export function Projects() {
    const { user } = useUser();
    const [selectedProject, selectProject] = useState<string>("none");

    // if( !user ) {
    //     return <Navigate to="/login" />
    // }

    const routes = Routes;

    return (
        <>
            <Sidebar parent="projects">
                <DashboardBox>
                    <div className="bg-slate-800 w-full rounded-xl flex gap-6 p-4">
                        <div className="bg-slate-700 w-9/12 rounded-xl flex flex-col gap-4 p-4">
                            <div id="scrollbar" className="flex flex-col gap-4">
                                <Searcher bg="bg-slate-800" placeholder="Search a project..." />
                                <div className="selectProject">
                                    {/* Foreach (cambiar 'ptoelquelolea' por el nombre que llega por el bucle) */}
                                    {
                                        selectedProject == "ptoelquelolea" &&
                                        <div className="selectedProject" onClick={(event: React.MouseEvent<HTMLElement>) => { selectProject("ptoelquelolea") }}>
                                            <Item title="ptoelquelolea" description="nada más que comentar" tools={[
                                                {
                                                    action: "edit",
                                                    icon: "fa-solid fa-pen-to-square",
                                                    color: "bg-green-700",
                                                    target: "edit/idProyect"
                                                },
                                                {
                                                    action: "remove",
                                                    icon: "fa-solid fa-trash",
                                                    color: "bg-red-700",
                                                    target: "remove/idProyect"
                                                }
                                            ]} />
                                        </div>
                                    } {
                                        selectedProject != "ptoelquelolea" &&
                                        <div onClick={(event: React.MouseEvent<HTMLElement>) => { selectProject("ptoelquelolea") }}>
                                            <Item title="ptoelquelolea" description="nada más que comentar" tools={[
                                                {
                                                    action: "edit",
                                                    icon: "fa-solid fa-pen-to-square",
                                                    color: "bg-green-700",
                                                    target: "edit/idProyect"
                                                },
                                                {
                                                    action: "remove",
                                                    icon: "fa-solid fa-trash",
                                                    color: "bg-red-700",
                                                    target: "remove/idProyect"
                                                }
                                            ]} />
                                        </div>
                                    }
                                    {/* EndForeach */}
                                </div>
                            </div>
                        </div>
                        <div className="bg-slate-700 w-3/12 rounded-xl p-8 flex flex-col justify-between relative">
                            {
                                selectedProject == "none" &&
                                <div className="text-white">Select a project</div>
                            } {
                                selectedProject != "none" &&
                                <>
                                    <div className="absolute top-5 right-4">
                                        <Share link="url_proyecto_invitación"/>
                                    </div>
                                    <div className="flex flex-col items-center gap-8">
                                        {/* Icon (comprobar si tiene icono, si no tiene, dejar el div de abajo) */}
                                        {
                                            2 == 2 &&
                                            <>
                                                <div className="bg-slate-800 w-32 aspect-square rounded-full flex justify-center items-center">
                                                    <i className="fa-solid fa-diagram-project text-white text-3xl"></i>
                                                </div>
                                            </>
                                        } {
                                            2 != 2 &&
                                            <div className="bg-green-700 w-32 aspect-square rounded-full"></div>
                                        }
                                        {/* Info */}
                                        <div className="flex flex-col items-center gap-4">
                                            <p className="text-black dark:text-white text-3xl leading-none">ptoelquelolea</p>
                                            <p className="text-black dark:text-white/50 text-center leading-none">nada más que comentar</p>
                                        </div>
                                        {/* Members */}
                                        <div className="flex flex-col w-full gap-1">
                                            <div className="bg-slate-800 w-full flex flex-col items-center gap-3 p-4 pt-5 rounded-t-xl">
                                                {/* Get Admin icon */}
                                                <InfoTooltip title="Firebloh" target={
                                                    <div className="bg-blue-500 w-10 aspect-square rounded-full relative">
                                                        <i className="fa-solid fa-crown absolute -top-2 -right-1.5 text-xl text-yellow-500 rotate-35"></i>
                                                    </div>
                                                } />
                                                <p className="text-black dark:text-white leading-none">Members</p>
                                            </div>
                                            <div className="bg-slate-800 w-full flex flex-wrap justify-center items-center p-4 gap-2 rounded-b-xl">
                                                <InfoTooltip title="sparejo1311" target={
                                                    <div className="bg-red-700 w-7 aspect-square rounded-full"></div>
                                                } />
                                                <InfoTooltip title="maiki69" target={
                                                    <div className="bg-yellow-700 w-7 aspect-square rounded-full"></div>
                                                } />
                                                <InfoTooltip title="iker_mobile" target={
                                                    <div className="bg-blue-700 w-7 aspect-square rounded-full"></div>
                                                } />
                                                <InfoTooltip title="christian_lokillo" target={
                                                    <div className="bg-green-700 w-7 aspect-square rounded-full"></div>
                                                } />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full flex flex-wrap gap-3">
                                        <Link to="/project/ptoelquelolea" className="flex-auto btn btn-primary !bg-green-700 hover:!bg-green-800 !px-2">Open Project</Link>
                                        <button className="w-fit btn btn-primary !bg-red-700 hover:!bg-red-800 aspect-square !px-0"><i className="fa-solid fa-right-from-bracket"></i></button>
                                    </div>
                                </>
                            }
                        </div>
                    </div>
                </DashboardBox>
            </Sidebar>
        </>
    )
}