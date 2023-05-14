// React
import React, { MouseEventHandler } from "react";
import { Tabs } from "../../domain/Tabs.interface";
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
        <div className="bg-slate-800 h-fit px-4 py-0 flex justify-between items-center rounded-xl">
            <div className="flex items-center gap-7 h-full">
                {/* Header */}
                <div className="flex items-center gap-4">
                    <i className={props.icon + " text-white"}></i>
                    <p className="leading-none text-white text-base">{props.title}</p>
                </div>
                <div className="h-9 w-0.5 bg-slate-600"></div>

                {/* Tabs */}
                <div className="flex gap-2">
                    { props.links.map((link) =>
                            
                        <li key={link.url} className="list-none">
                            { props.tab == link.url ? (
                                    <div onClick={(event: React.MouseEvent<HTMLElement>) => { props.setTab(link.url) }}
                                        className="btn btn-primary flex justify-center items-center !px-5 !py-1 !max-h-none !h-fit border-none">
                                        {link.name}
                                    </div>
                                ): (
                                    <div onClick={(event: React.MouseEvent<HTMLElement>) => { props.setTab(link.url) }}
                                        className="btn btn-primary flex justify-center items-center !px-5 !py-1 !max-h-none !h-fit border-none !bg-transparent hover:!bg-slate-600">
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