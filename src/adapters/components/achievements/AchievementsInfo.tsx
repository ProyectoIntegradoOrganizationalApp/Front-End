// React
import React from "react";

import { InfoTooltip } from "../InfoTooltip";
import { AchievementsLevel } from "./AchievementsLevel";
import { AchievementsList } from "./AchievementsList";

import { Profile } from "../../../domain/Profile.interface";

/**
 *  Componente de Achievement Info para ver el conjunto de Level y List de logros del usuario
 *  
 *  @param props Contiene las props que le pasa el elemento superior 
 *  @returns 
 */
export function AchievementsInfo( props: { data: Profile | undefined } ) {

    let rank: string = "Newbie";
    let level: number = 1;

    if ( props.data ) {
        level = props.data.user.level;
    }

    if( level > 1 && level < 10 ) {
        rank = "Newbie";
    }

    if( level > 10 && level < 20 ) {
        rank = "Crack";
    }


    return (
        <>
            <div className="bg-slate-800 w-1/4 rounded-xl relative flex flex-col items-center gap-12 p-8">
                <div className="absolute top-5 left-4">
                    <InfoTooltip title="Your last 6 achievements completing" position="right" />
                </div>
                <AchievementsLevel level={level} rank={rank}/>
                <AchievementsList
                    data={props.data}
                />
            </div>
        </>
    )
}