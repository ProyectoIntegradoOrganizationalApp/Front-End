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
            <div className="statisticss flex-1 bg-gray-200 dark:bg-[#202124] w-full h-fit flex justify-between items-center min-[1085px]:rounded-xl p-5 gap-7 flex-wrap">
                <div className="flex flex-wrap gap-4 items-center">
                    <i className="fa-sharp fa-solid fa-code bg-gray-300 dark:bg-[#28292d] py-4 px-3.5 rounded-full text-black dark:text-white"></i>
                    <p className="text-base text-black dark:text-white">{props.title}</p>
                </div>
                <p className="text-3xl leading-none"><b>{props.amount}</b></p>
            </div>
        </>
    )
}