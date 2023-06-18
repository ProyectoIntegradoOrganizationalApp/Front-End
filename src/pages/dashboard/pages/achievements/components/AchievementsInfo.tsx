// React
import React from "react";

import { InfoTooltip } from "../../../../../components/InfoTooltip";
import { AchievementsLevel } from "./AchievementsLevel";
import { AchievementsList } from "./AchievementsList";

import { Profile } from "../../../../../domain/profile/Profile.interface";

/**
 *  Componente de Achievement Info para ver el conjunto de Level y List de logros del usuario
 *  
 *  @param props Contiene las props que le pasa el elemento superior 
 *  @returns 
 */
export const AchievementsInfo: React.FC<{data: Profile}> = ({ data }) => {

    let rank: string = "Newbie";
    let level: number = data.user.level;
    
    switch( true ) {
        case (level > 1 && level < 10): {
            rank = "newbie"
        }
        case (level > 10 && level < 20): {
            rank = "crack"
        }
    }

    return (
        <div className="bg-gray-200 dark:bg-[#202124] min-[1085px]:rounded-xl relative flex-1 flex flex-col items-center gap-12 p-4 pt-8 min-w-fit">
            <div className="absolute top-5 left-4">
                <InfoTooltip title="This are the achievements you made progress in" position="right" />
            </div>
            <AchievementsLevel level={level} rank={rank}/>
            <AchievementsList
                data={data}
            />
        </div>
    )
}