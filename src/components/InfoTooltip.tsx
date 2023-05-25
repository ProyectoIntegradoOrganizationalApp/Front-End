// React
import React, { ReactNode } from "react";

/**
 *  Componente de Tooltip para dar información de una determinada sección
 *  
 *  @param props Contiene las props que le pasa el elemento superior 
 *  @returns 
 */
export function InfoTooltip(props: { title: string, target?: ReactNode, position?: string }) {
    return (
        <>
            {
                props.target &&
                <div className={"tooltip tooltip-" + props.position} data-tip={props.title}>
                    {props.target}
                </div>
            } {
                !props.target &&
                <div className={"tooltip tooltip-" + props.position} data-tip={props.title}>
                    <i className="fa-sharp fa-solid fa-circle-info text-black dark:text-white"></i>
                </div>
            }
        </>
    )
}