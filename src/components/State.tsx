// React
import React, { MouseEventHandler } from "react";

/**
 *  Componente State que muestra el estado de un componente (para notificaciones, usuarios...)
 *  
 *  @param props Contiene las props que le pasa el elemento superior 
 *  @returns 
 */

export function State(props: { color: string }) {
    return (
        <>
            <div className={"w-5 dark:border-slate-800 border-4 aspect-square rounded-full cursor-default " + props.color}></div>
        </>
    )
}