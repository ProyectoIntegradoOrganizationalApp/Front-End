// React
import React from "react";

/**
 *  Componente de Estadísticas del usuario (número de tareas realizadas semanalmente o diariamente)
 *  
 *  @param props Contiene las props que le pasa el elemento superior 
 *  @returns 
 */
export function Statistics(props: { title: string, amount: number }) {
    return (
        <>
            <div className="statisticss bg-gray-200 dark:bg-slate-800 w-full h-fit flex justify-between items-center rounded-xl p-5 gap-7 flex-wrap">
                <div className="flex flex-wrap gap-4 items-center">
                    <i className="fa-sharp fa-solid fa-code bg-slate-700 py-4 px-3.5 rounded-full text-white"></i>
                    <p className="text-base text-black dark:text-white">{props.title}</p>
                </div>
                <p className="text-3xl leading-none"><b>{props.amount}</b></p>
            </div>
        </>
    )
}