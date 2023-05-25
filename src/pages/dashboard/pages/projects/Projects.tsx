// React / Router
import { useState } from 'react';
import { Link, useNavigate, useOutletContext } from 'react-router-dom';

import { Item } from '../../../../components/Item';
import { Searcher } from '../../../../components/Searcher';

import { InfoTooltip } from '../../../../components/InfoTooltip';
import { Share } from '../../../../components/Share';
import { Profile } from '../../../../domain/profile/Profile.interface';
import { useProjectsApi } from '../../../../adapters/api/useProjectsApi';
import { Dropdown } from '../../../../components/Dropdown';

/**
 * Componente Projects, representa la ruta /projects/{id_user} y nos muestra
 * los proyectos de los que forma parte el usuario.
 * @returns 
 */
export function Projects() {

    // Datos del usuario provenientes del componente padre
    const userData: Profile = useOutletContext();

    /**
     *  Hook de la API de proyectos, le pasamos true para que haga la query al inicializar.
     */
    const { data, error, loading } = useProjectsApi(true);

    // Estado para manejar las tabs
    const [selectedElement, selectElement] = useState<string>("none");
    const [selectedOrder, selectOrder] = useState<string>("Order By");

    let navigate = useNavigate();

    const openProject = (link: string) => {
        navigate("/project/" + link);
    }

    return (
        <>
            <div className={`h-full ${selectedElement != "none" ? "max-[839.50px]:h-fit max-[839.50px]:min-h-full" : ""} flex-1 bg-gray-200 dark:bg-slate-800 w-full rounded-xl flex flex-wrap-reverse gap-6 p-4 max-[500px]:p-2 max-[500px]:rounded-none`}>
                <div className={`max-[839.50px]:h-auto h-full flex-[4] bg-gray-300 dark:bg-slate-700 rounded-xl flex flex-col gap-4 max-[500px]:gap-2 max-[500px]:p-2 p-4 w-9/12 ${selectedElement == "none" ? "!w-full" : ""}`}>
                    <div className="flex flex-wrap-reverse items-center gap-2">
                        <div className="flex-1">
                            <Searcher bg="bg-white dark:bg-slate-800" placeholder="Search a project..." />
                        </div>
                        <div className="max-[499px]:flex-1">
                            <Dropdown
                                selectedElement={selectedOrder}
                                selectElement={selectOrder}
                                elements={[
                                    {
                                        action: "fe",
                                        name: "All"
                                    },
                                    {
                                        action: "fe",
                                        name: "My Projects"
                                    }
                                ]}
                            />
                        </div>
                    </div>
                    <div id="scrollbar" className="flex-1 selectElement max-[500px]:gap-2">
                        <div className={selectedElement == "ptoelquelolea" ? "selectedElement" : undefined} onClick={(event: React.MouseEvent<HTMLElement>) => { selectElement("ptoelquelolea") }} onDoubleClick={(event: React.MouseEvent<HTMLElement>) => { openProject("ptoelquelolea") }}>
                            <Item title="ptoelquelolea" description="nada más que comentar" tools={[
                                {
                                    type: "button",
                                    action: "edit",
                                    icon: "fa-solid fa-pen-to-square",
                                    target: "edit/idProyect"
                                },
                                {
                                    type: "button",
                                    action: "remove",
                                    icon: "fa-solid fa-trash",
                                    target: "remove/idProyect"
                                }
                            ]} />
                        </div>
                        <div className={selectedElement == "ptoelquelolea" ? "selectedElement" : undefined} onClick={(event: React.MouseEvent<HTMLElement>) => { selectElement("ptoelquelolea") }} onDoubleClick={(event: React.MouseEvent<HTMLElement>) => { openProject("ptoelquelolea") }}>
                            <Item title="ptoelquelolea" description="nada más que comentar" tools={[
                                {
                                    type: "button",
                                    action: "edit",
                                    icon: "fa-solid fa-pen-to-square",
                                    target: "edit/idProyect"
                                },
                                {
                                    type: "button",
                                    action: "remove",
                                    icon: "fa-solid fa-trash",
                                    target: "remove/idProyect"
                                }
                            ]} />
                        </div>
                        {userData?.projects && (
                            userData?.projects.map(project => {
                                return (
                                    <div className={selectedElement == project.name ? "selectedElement" : ""} 
                                        onClick={(event: React.MouseEvent<HTMLElement>) => 
                                            { selectElement("ptoelquelolea") }
                                        } 
                                        onDoubleClick={(event: React.MouseEvent<HTMLElement>) => 
                                            { openProject("ptoelquelolea") }
                                        }
                                    >
                                        <Item title="ptoelquelolea" description="nada más que comentar" tools={[
                                            {
                                                type: "button",
                                                action: "edit",
                                                icon: "fa-solid fa-pen-to-square",
                                                target: "edit/idProyect"
                                            },
                                            {
                                                type: "button",
                                                action: "remove",
                                                icon: "fa-solid fa-trash",
                                                target: "remove/idProyect"
                                            }
                                        ]} />
                                    </div>
                                )
                            })

                        )}

                    </div>
                </div>
                { selectedElement != "none" &&
                    <div className="bg-white dark:bg-slate-700 flex-1 min-w-fit w-3/12 rounded-xl p-8 flex flex-col justify-between relative">
                        <div className="absolute top-5 right-4">
                            <Share link="url_proyecto_invitación" />
                        </div>
                        <div className="flex flex-col items-center gap-8">
                            {/* Icon (comprobar si tiene icono, si no tiene, dejar el div de abajo) */}
                            { 2 == 2 ? (
                                <div className="bg-gray-200 dark:bg-slate-800 w-32 aspect-square rounded-full flex justify-center items-center">
                                    <i className="fa-solid fa-diagram-project text-black dark:text-white text-3xl"></i>
                                </div>
                            ) :(
                                <div className="bg-green-700 w-32 aspect-square rounded-full"></div>
                            )}
                            {/* Info */}
                            <div className="flex flex-col items-center gap-4">
                                <p className="text-black dark:text-white text-3xl leading-none">{selectedElement}</p>
                                <p className="text-black dark:text-white/50 text-center leading-none">nada más que comentar</p>
                            </div>
                            {/* Members */}
                            <div className="flex flex-col w-full gap-1">
                                <div className="bg-gray-200 dark:bg-slate-800 w-full flex flex-col items-center gap-3 p-4 pt-5 rounded-t-xl">
                                    {/* Get Admin icon */}
                                    <InfoTooltip title="Firebloh" target={
                                        <div className="bg-blue-500 w-10 aspect-square rounded-full relative">
                                            <i className="fa-solid fa-crown absolute -top-2 -right-1.5 text-xl text-yellow-500 rotate-35"></i>
                                        </div>
                                    } />
                                    <p className="text-black dark:text-white leading-none">Members</p>
                                </div>
                                <div className="bg-gray-200 dark:bg-slate-800 w-full flex flex-wrap justify-center items-center p-4 gap-2 rounded-b-xl">
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
                        <div className="w-full flex flex-wrap gap-3 mt-8">
                            <Link to="/project/ptoelquelolea" className="flex-auto btn btn-primary !bg-green-700 hover:!bg-green-800 !px-2">Open Project</Link>
                            <button className="w-fit btn btn-primary !bg-red-700 hover:!bg-red-800 aspect-square !px-0"><i className="fa-solid fa-right-from-bracket"></i></button>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}