// React
import React from "react";
import { InfoTooltip } from "../InfoTooltip";
import { AchievementsLevel } from "./AchievementsLevel";
import { AchievementsList } from "./AchievementsList";

/**
 *  Componente de Achievement Info para ver el conjunto de Level y List de logros del usuario
 *  
 *  @param props Contiene las props que le pasa el elemento superior 
 *  @returns 
 */
export function AchievementsInfo(props: {level: number, rank: string}) {
    return (
        <>
            <div className="bg-slate-800 w-1/4 rounded-xl relative flex flex-col items-center gap-12 p-8">
                <div className="absolute top-5 left-4">
                    <InfoTooltip title="Your last 6 achievements completing" position="right" />
                </div>
                <AchievementsLevel level={props.level} rank={props.rank}/>
                <AchievementsList />
            </div>
        </>
    )
}