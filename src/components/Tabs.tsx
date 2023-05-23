// React
import React, { MouseEventHandler } from "react";
import { Tabs } from "../domain/UI/Tabs.interface";
import { Link } from "react-router-dom";

/**
 *  Componente Item para mostrar información de un proyecto, usuario, etc. y posibles botones para editar, borrar, etc.
 *  
 *  @param props Contiene las props que le pasa el elemento superior 
 *  @returns 
 */

function doAction(action: string, target: string) {
    console.log(action + " " + target);
}

export function Tabs(props: { tab: string, setTab: Function, icon?: string, title: string, links: Array<Tabs> }) {

    return (
        <div className="h-fit md:px-3 py-0 flex justify-between items-center rounded-xl">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 max-[500px]:gap-2 md:gap-7 h-full">
                {/* Header */}
                <div className="items-center gap-4 max-[500px]:gap-2 hidden md:flex">
                    <i className={props.icon + " text-black dark:text-white"}></i>
                    <p className="leading-none text-black dark:text-white text-base">{props.title}</p>
                </div>
                <div className="h-9 w-0.5 bg-white hidden md:block"></div>

                {/* Tabs */}
                <div className="flex gap-2">
                    { props.links.map((link) =>
                        <li key={link.url} className="list-none">
                            { props.tab == link.url ? (
                                    <div onClick={(event: React.MouseEvent<HTMLElement>) => { props.setTab(link.url) }}
                                        className="btn btn-primary flex justify-center items-center !text-black dark:!text-white !bg-white dark:!bg-slate-700 !px-3.5 md:!px-5 !py-3 !max-h-none border-none leading-none h-fit min-h-0">
                                        {link.name}
                                    </div>
                                ): (
                                    <div onClick={(event: React.MouseEvent<HTMLElement>) => { props.setTab(link.url) }}
                                        className="btn btn-primary flex justify-center items-center !text-black dark:!text-white !px-3.5 md:!px-5 !py-3 !max-h-none border-none leading-none h-fit min-h-0 !bg-transparent hover:!bg-gray-300 dark:hover:!bg-slate-600">
                                        {link.name}
                                    </div>
                                )
                            }
                        </li>
                    )}
                </div>
            </div>
        </div>
    )
}