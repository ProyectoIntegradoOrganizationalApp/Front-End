// React
import React from "react";

/**
 *  Componente de Achievement Level para ver el nivel y rango del usuario
 *  
 *  @param props Contiene las props que le pasa el elemento superior 
 *  @returns 
 */
export function AchievementsLevel(props: {level: number, rank: string}) {
    return (
        <>
            {/* Según el rank, el color será verde, rojo, etc. (podemos hacer que vaya subiendo de color en plan agua para ver el progreso en sí) */}
            <div className="flex flex-col items-center dark:bg-slate-800 w-40 aspect-square relative">
                <div className="achievementsLevel border-green-400/70 bg-gray-200 dark:bg-inherit relative z-10">
                    <p className="text-base dark:text-white leading-none">LEVEL</p>
                    <p className="text-5xl text-white leading-none"><b>{props.level}</b></p>
                </div>
                <div className="h-12 w-28 bg-green-400/70 rounded-b-2xl flex justify-center items-center absolute -bottom-2 z-0"></div>
                <p className="text-base text-white leading-none relative z-10 bottom-1"><b>{props.rank}</b></p>
            </div>
        </>
    )
}