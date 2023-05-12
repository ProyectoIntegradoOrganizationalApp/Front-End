// React
import React from "react";

/**
 *  Componente de Tooltip para dar información de una determinada sección
 *  
 *  @param props Contiene las props que le pasa el elemento superior 
 *  @returns 
 */
export function InfoTooltip(props: { title: string, position?: string }) {
    return (
        <>
            <div className={"tooltip tooltip-" + props.position} data-tip={props.title}>
                <i className="fa-sharp fa-solid fa-circle-info text-white"></i>
            </div>
        </>
    )
}