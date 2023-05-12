// React
import React, { MouseEventHandler } from "react";
import { Tool } from "../../domain/Tool.interface";

/**
 *  Componente Item para mostrar información de un proyecto, usuario, etc. y posibles botones para editar, borrar, etc.
 *  
 *  @param props Contiene las props que le pasa el elemento superior 
 *  @returns 
 */

function doAction(action: string, target: string) {
    console.log(action + " " + target);
}

export function Item(props: { icon?: string, title: string, description: string, tools: Array<Tool> }) {
    return (
        <>
            <div className="bg-slate-800 w-full h-fit px-4 py-3 flex justify-between items-center rounded-xl">
                {/* Info */}
                <div className="flex items-center gap-7 h-full">
                    <div className="flex items-center gap-4">
                        {/* Icon (si no hay icon, uno por defecto) */}
                        <div className="rounded-full bg-green-700 w-12 aspect-square"></div>
                        {/* Title */}
                        <p className="leading-none text-white text-base">{props.title}</p>
                    </div>
                    {/* Separator */}
                    <div className="h-9 w-0.5 bg-slate-600"></div>
                    {/* Description */}
                    <p className="leading-none text-white/50 text-base">{props.description}</p>
                </div>
                {/* Tools */}
                <div className="flex gap-2">
                    {
                        props.tools.map((tool) => 
                            <div onClick={(event: React.MouseEvent<HTMLElement>) => { doAction(tool.action, tool.target)}} 
                            className={"btn flex justify-center items-center !w-10 min-h-fit h-fit rounded-xl !aspect-square border-none " + tool.color + " hover:!" + tool.color + "/50"}><i className={tool.icon + " text-white"}></i></div>
                        )
                    }
                </div>
            </div>
        </>
    )
}