// React
import React, { MouseEventHandler } from "react";
import { Tool } from "../domain/UI/Tool.interface";
import { Dropdown } from "./Dropdown";
import { RoleDropdown } from "./RoleDropdown";

/**
 *  Componente Item para mostrar información de un proyecto, usuario, etc. y posibles botones para editar, borrar, etc.
 *  
 *  @param props Contiene las props que le pasa el elemento superior 
 *  @returns 
 */

function doAction(action: string | undefined, target: string | undefined) {
    console.log(action + " " + target);
}

export function Item(props: { icon?: string, title: string, description: string, tools?: Array<Tool>, descriptionBottom?: boolean }) {
    return (
        <>
            <div className="bg-white dark:bg-slate-800 w-full h-fit px-4 py-3 flex max-[499px]:flex-wrap justify-between items-center rounded-xl gap-2.5">
                {/* Info */}
                {
                    props.descriptionBottom == true &&
                    <div className="flex items-center gap-4">
                        {/* Icon (si no hay icon, uno por defecto) */}
                        <div className="rounded-full bg-green-700 w-12 aspect-square"></div>
                        {/* Title */}
                        <div className="flex flex-col gap-2">
                            <p className="leading-none text-black dark:text-white text-base">{props.title}</p>
                            <p className="leading-none text-black dark:text-white/50 text-sm">{props.description}</p>
                        </div>
                    </div>
                } {
                    !props.descriptionBottom &&
                    <>
                        <div className="flex">
                            <div className="flex items-center gap-3 sm:gap-4">
                                {/* Icon (si no hay icon, uno por defecto) */}
                                <div className="rounded-full bg-green-700 w-12 aspect-square"></div>
                                {/* Title */}
                                <p className="leading-none text-black dark:text-white text-base">{props.title}</p>
                            </div>
                            <div className="items-center hidden min-[715px]:flex">
                                {/* Separator */}
                                <div className="w-0.5 bg-gray-300 dark:bg-slate-600 h-9 mx-7"></div>
                                {/* Description */}
                                <p className="leading-none text-black dark:text-white/50 text-base">{props.description}</p>
                            </div>
                        </div>
                    </>
                }
                {/* Tools */}
                <div className="flex items-center gap-2">
                    {
                        props.tools?.map((tool) => {
                            return tool.type == "button" ?
                                <div key={tool.target} onClick={(event: React.MouseEvent<HTMLElement>) => { doAction(tool.action, tool.target) }} className={`btn flex justify-center items-center !w-10 min-h-fit h-fit rounded-xl !aspect-square border-none ${tool.action == "view" ? "bg-blue-700 hover:bg-blue-800" : tool.action == "edit" ? "bg-green-700 hover:bg-green-800" : tool.action == "remove" ? "bg-red-700 hover:bg-red-800" : tool.action == "add" ? "bg-green-700 hover:bg-green-800": ""}`}>
                                    <i className={tool.icon + " text-white"}></i>
                                </div>
                                : tool.type == "dropdown" ?
                                    <div>
                                        {
                                            tool.dropdown?.type == "default" &&
                                            <Dropdown elements={[...tool.dropdown?.elements ? tool.dropdown.elements : []]} />
                                        } {
                                            tool.dropdown?.type == "role" &&
                                            <>
                                                {/* Si user es admin */}
                                                <RoleDropdown elements={[...tool.dropdown?.elements ? tool.dropdown.elements : []]} />
                                                {/* Si user no es admin */}
                                                {/* <p className="text-black dark:text-white leading-none">Admin</p> */}
                                            </>
                                        }
                                    </div>
                                    : ""
                        })
                    }
                </div>
            </div>
        </>
    )
}