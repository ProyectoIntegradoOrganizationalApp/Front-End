// React
import React from "react";
import { Link } from "react-router-dom";
import { DescriptionTop } from "./list-items/DescriptionTop";

/**
 *  Componente de Log para mostrar información de cierto elemento
 *  
 *  @param props Contiene las props que le pasa el elemento superior 
 *  @returns 
 */

export function TaskLog(props: { task: string, title: string, user: string, date: Date }) {
    // CONSEGUIR POR PROP UNA TASK QUE CONTENGA EL ESTADO, EL NOMBRE, EL USUARIO QUE LA CREÓ Y LA FECHA DE CREACIÓN
    // (así podemos evitar los demás props)

    return (
        <>
            <td className="flex items-center gap-2.5 leading-none text-black dark:text-white text-base">
                {
                    props.task == "finished" &&
                    <div className="w-5 aspect-square rounded-full bg-green-600"></div>
                } {
                    props.task == "workingon" &&
                    <div className="w-5 aspect-square rounded-full bg-red-600"></div>
                }
                <p className="leading-none text-black dark:text-white text-base truncate">{props.title}</p>
            </td>
            <td>
                <p className="leading-none text-black dark:text-white text-base truncate">{props.user}</p>
            </td>
            <td>
                <p className="leading-none text-black dark:text-white text-base truncate">{props.date.toLocaleString()}</p>
            </td>
        </>
    )
}