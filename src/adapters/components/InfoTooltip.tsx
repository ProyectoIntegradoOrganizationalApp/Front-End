// React
import React from "react";

/**
 *  Componente de Actividad del usuario para ver cuando ha hecho commits
 *  
 *  @param props Contiene las props que le pasa el elemento superior 
 *  @returns 
 */
export function InfoTooltip(props: { title: string }) {
    return (
        <>
            <div className="tooltip" data-tip={props.title}>
                <i className="fa-sharp fa-solid fa-circle-info text-white"></i>
            </div>
        </>
    )
}