// React
import React from "react";

import { InfoTooltip } from "../../../../../components/InfoTooltip";
import { AchievementsLevel } from "./AchievementsLevel";
import { AchievementsList } from "./AchievementsList";

import { Profile } from "../../../../../domain/profile/Profile.interface";
import { useAchievementsApi } from "../../../../../adapters/api/useAchievementsApi";

/**
 *  Componente de Achievement Info para ver el conjunto de Level y List de logros del usuario
 *  
 *  @param props Contiene las props que le pasa el elemento superior 
 *  @returns 
 */
export function AchievementsInfo( props: { data: Profile | undefined } ) {

    const { data, error, loading } = useAchievementsApi();

    let rank: string = "Newbie";
    let level: number = 1;

    if ( props.data ) {
        level = props.data.user.level;
    }

    switch( true ) {
        case (level > 1 && level < 10): {
            rank = "newbie"
        }
        case (level > 10 && level < 20): {
            rank = "crack"
        }
    }

    return (
        <>
            <div className="bg-gray-200 dark:bg-slate-800 min-[1085px]:rounded-xl relative flex-1 flex flex-col items-center gap-12 py-8 px-4 min-w-[25%]">
                <div className="absolute top-5 left-4">
                    <InfoTooltip title="Your last 6 achievements completing" position="right" />
                </div>
                <AchievementsLevel level={level} rank={rank}/>
                <AchievementsList
                    data={props.data}
                />
            </div>
            <AchievementsLevel 
                level={level} 
                rank={rank}
            />
            <AchievementsList
                data={props.data}
            />
        </>
    )
}