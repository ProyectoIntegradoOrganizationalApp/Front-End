// React
import React from "react";
import { InfoTooltip } from "../InfoTooltip";

/**
 *  Componente de Actividad del usuario para ver cuando ha hecho commits
 *  
 *  @param props Contiene las props que le pasa el elemento superior 
 *  @returns 
 */
export function Activity(props: { title: string, activity: object }) {
    return (
        <>
            <div className="bg-slate-700 w-full h-full flex flex-col rounded-xl">
                <div className="relative border-b-4 border-slate-600 py-4">
                    <div className="absolute top-3 left-4">
                        <InfoTooltip title="Commits done per day" position="left"/>
                    </div>
                    <p className="w-full flex justify-center text-white leading-none text-base">{props.title}</p>
                </div>
                <div className="charttt"></div>
            </div>
        </>
    )
}