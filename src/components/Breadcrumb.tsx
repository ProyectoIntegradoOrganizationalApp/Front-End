// React
import React from "react";
import { BreadcrumbInterface } from "../domain/UI/BreadcrumbInterface.interface";
import { Link } from "react-router-dom";

/**
 *  Componente de Breadcrumb para mostrar enlaces padres y guiarse por la página (sobre todo en Projects)
 *  
 *  @param props Contiene las props que le pasa el elemento superior 
 *  @returns 
 */

export function Breadcrumb(props: { breadcrumbs: BreadcrumbInterface[] }) {
    return (
        <>
            <div className="text-sm breadcrumbs max-[1085px]:mt-4 max-[1085px]:ml-5 !w-fit">
                <ul className="flex flex-wrap gap-2.5">
                    {
                        props.breadcrumbs.map((breadcrumb, index) => {
                            return (
                                <li key={index}>
                                    {
                                        index != props.breadcrumbs.length - 1 &&
                                        <Link to={breadcrumb.link ? breadcrumb.link : ""} className="flex gap-2">
                                            <i className={breadcrumb.icon}></i>
                                            <p>{breadcrumb.name}</p>
                                        </Link>
                                    } {
                                        index == props.breadcrumbs.length - 1 &&
                                        <>
                                            <div className="flex items-center gap-2 text-slate-400 dark:text-white/50">
                                                <i className={breadcrumb.icon}></i>
                                                <p>{breadcrumb.name}</p>
                                            </div>
                                        </>
                                    }
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}