// React
import React, { MouseEventHandler } from "react";

import { useNavigate } from "react-router-dom";

import { Dropdown } from "../Dropdown";
import { RoleDropdown } from "../RoleDropdown";

import { Tool } from "../../domain/UI/Tool.interface";
import { Project } from "../../domain/projects/Project.interface";
import { DescriptionBottom } from "./DescriptionBottom";
import { DescriptionTop } from "./DescriptionTop";

/**
 *  Componente Item para mostrar información de un proyecto, usuario, etc. y posibles botones para editar, borrar, etc.
 *  
 *  @param props Contiene las props que le pasa el elemento superior 
 *  @returns 
 */
export function Item( props: { project: Project, tools?: Array<Tool>, descriptionBottom?: boolean } ) {

    const navigate = useNavigate();

    const doAction = ( target: string | undefined ) => {
        if( target ) {
            navigate(target);
        }
    }

    console.log(props)

    return (
        <div className="bg-white dark:bg-slate-800 w-full h-fit px-4 py-3 flex max-[499px]:flex-wrap justify-between items-center rounded-xl gap-2.5">
            {/* Info */}
            { props.descriptionBottom == true ? 
                (
                    <DescriptionBottom
                        title={props.project.name}
                        description={props.project.description}
                        icon={props.project.icon}
                    />
                ): 
                (
                    <DescriptionTop
                        title={props.project.name}
                        description={props.project.description}
                        icon={props.project.icon} 
                    />
                )
            }
            {/* Tools */}
            <div className="flex items-center gap-2">
                { props.tools?.map((tool) => {
                    return tool.type == "button" ?
                        <div 
                            key={tool.target} 
                            onClick={
                                () => { 
                                    doAction(tool.target) 
                                }
                            } 
                            className={`btn flex justify-center items-center !w-10 min-h-fit h-fit rounded-xl !aspect-square border-none ${tool.action == "view" ? "bg-blue-700 hover:bg-blue-800" : tool.action == "edit" ? "bg-green-700 hover:bg-green-800" : tool.action == "remove" ? "bg-red-700 hover:bg-red-800" : tool.action == "add" ? "bg-green-700 hover:bg-green-800": ""}`}
                        >
                            <i className={tool?.icon + " text-white"}>

                            </i>
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
    )
}